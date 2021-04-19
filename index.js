import docReady from './utils/docReady';
import MiniReactDOM from './utils/MiniReactDOM';
// eslint-disable-next-line import/no-cycle
import App from './src/App';

export default function renderApp() {
  const root = document.getElementById('root');
  while (root.firstChild) {
    root.firstChild.remove();
  }
  MiniReactDOM.render(App(), root);
}

docReady(() => {
  // DOM is loaded and ready for manipulation here
  renderApp();
});
