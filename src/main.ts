const enableMock = async () => {
  if (import.meta.env.FRONT_MOCK_ENABLE === 'true') {
    const { worker } = await import('@Mocks/browser');

    return worker.start({
      onUnhandledRequest: 'warn',
    });
  }

  return Promise.resolve();
};

enableMock().then(() => {
  import('@Front/app/appHTMLElement').then(({ default: AppHTMLElement }) => {
    customElements.define('react-app', AppHTMLElement);
  });
});
