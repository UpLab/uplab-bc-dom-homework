import docReady from './utils/docReady';
import MiniReactDOM from './utils/MiniReactDOM';
import App from './src/App';

docReady(() => {
  // DOM is loaded and ready for manipulation here
  const root = document.getElementById('root');
  MiniReactDOM.render(App(), root);
});
