/* eslint-disable class-methods-use-this */
class MiniReact {
  createElement(tag, attributes, ...children) {
    const element = document.createElement(tag);

    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        if (key.toLowerCase() === 'classname') {
          element.setAttribute('class', value);
          return;
        }
        element.setAttribute(key, value);
      });
    }

    element.append(...children);

    return element;
  }
}

export default new MiniReact();
