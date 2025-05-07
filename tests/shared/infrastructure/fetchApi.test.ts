import { server } from '@Mocks/server';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import { fetchApi, FetchApiError } from '@Front/shared/infrastructure/fetchApi';
import { METHODS, MIME_TYPES, HEADERS } from '@Front/shared/infrastructure/constant';

describe('fetchApi', () => {
  const fetchMock = vi.fn();
  window.fetch = fetchMock;

  beforeAll(() => {
    server.close();
  });

  it('should return JSON data on success', async () => {
    const mockResponse = { message: 'Success' };
    fetchMock.mockResolvedValueOnce({
      ok: true,
      text: () => Promise.resolve(JSON.stringify(mockResponse)),
      headers: new Headers({ [HEADERS.contentType]: MIME_TYPES.json }),
    });

    const result = await fetchApi<{ message: string }>({
      path: '/api/test',
      method: METHODS.get,
    });

    expect(result).toStrictEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith('/api/test', {
      method: METHODS.get,
      headers: new Headers(),
    });
  });

  it('should throw an error on HTTP failure', async () => {
    const mockError = 'Not Found';
    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 404,
      text: () => Promise.resolve(mockError),
      headers: new Headers({ [HEADERS.contentType]: MIME_TYPES.text }),
    });

    await expect(fetchApi({ path: '/api/error', method: METHODS.get })).rejects.toThrowError(FetchApiError);

    expect(fetch).toHaveBeenCalledWith('/api/error', {
      method: METHODS.get,
      headers: new Headers(),
    });
  });

  it('should handle non-JSON responses', async () => {
    const mockResponse = 'Plain text response';
    fetchMock.mockResolvedValueOnce({
      ok: true,
      text: () => Promise.resolve(mockResponse),
      headers: new Headers({ [HEADERS.contentType]: MIME_TYPES.text }),
    });

    const result = await fetchApi<string>({
      path: '/api/text',
      method: METHODS.get,
    });

    expect(result).toBe(mockResponse);
    expect(fetch).toHaveBeenCalledWith('/api/text', {
      method: METHODS.get,
      headers: new Headers(),
    });
  });

  it('should add Content-Type header for POST requests with data', async () => {
    const mockResponse = { message: 'Created' };
    fetchMock.mockResolvedValueOnce({
      ok: true,
      text: () => Promise.resolve(JSON.stringify(mockResponse)),
      headers: new Headers({ [HEADERS.contentType]: MIME_TYPES.json }),
    });

    const postData = { name: 'Test' };
    const result = await fetchApi<{ message: string }>({
      path: '/api/create',
      method: METHODS.post,
      data: postData,
    });

    expect(result).toStrictEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith('/api/create', {
      method: METHODS.post,
      body: JSON.stringify(postData),
      headers: expect.any(Headers),
    });

    const calledHeaders = fetchMock.mock.calls[0][1]?.headers as Headers;
    expect(calledHeaders.get(HEADERS.contentType)).toBe(MIME_TYPES.json);
  });
});
