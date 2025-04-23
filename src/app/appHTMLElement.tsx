import { App } from '@Front/app/App';
import { createRoot, type Root } from 'react-dom/client';

// eslint-disable-next-line import/no-default-export
export default class AppHTMLElement extends HTMLElement {
  private readonly root: Root;

  constructor() {
    super();

    this.root = createRoot(this);
  }

  connectedCallback() {
    this.root.render(<App basename={this.getAttribute('basename') ?? ''} />);
  }

  disconnectedCallback() {
    queueMicrotask(() => this.root.unmount());
  }
}
