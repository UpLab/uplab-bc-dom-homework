/* eslint-disable class-methods-use-this */
class MiniReact {
  transformKey(key) {
    const renameMap = {
      classname: 'class',
      htmlfor: 'for',
    };
    return renameMap[String(key).toLowerCase()] || key;
  }

  createElement(tag, attributes, ...children) {
    const element = document.createElement(tag);

    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(this.transformKey(key), value);
      });
    }

    element.append(...children);

    return element;
  }
}

export default new MiniReact();
