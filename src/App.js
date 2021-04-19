import MiniReact from '../utils/MiniReact';

export default function App() {
  return MiniReact.createElement(
    'div',
    { className: 'container' },
    MiniReact.createElement(
      'main',
      {
        className: 'row justify-content-center',
      },
      MiniReact.createElement(
        'div',
        { className: 'col-md-7 col-lg-5 py-5' },
        MiniReact.createElement('h1', { className: 'text-center' }, 'Login'),
      ),
    ),
  );
}

/*
    <div class="container">
        <main class="row justify-content-center">
          <div class="col-md-7 col-lg-5 py-5">
            <h2 class="text-center">Login</h2>
            */
