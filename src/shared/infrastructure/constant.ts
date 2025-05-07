export const METHODS = Object.freeze({
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  patch: 'PATCH',
  delete: 'DELETE',
});

export type MethodType = (typeof METHODS)[keyof typeof METHODS];

export const HEADERS = Object.freeze({
  contentType: 'content-type',
});

export type HeaderType = (typeof HEADERS)[keyof typeof HEADERS];

export const MIME_TYPES = Object.freeze({
  json: 'application/json',
  text: 'plain/text',
});

export type MimeType = (typeof MIME_TYPES)[keyof typeof MIME_TYPES];
