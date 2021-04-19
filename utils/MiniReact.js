/* eslint-disable class-methods-use-this */
class MiniReact {
  getEventNameByKey(key) {
    const eventMap = {
      onsubmit: 'submit',
    };

    return eventMap[String(key).toLowerCase()];
  }

  transformKey(key) {
    const renameMap = {
      classname: 'class',
      htmlfor: 'for',
    };
    return renameMap[String(key).toLowerCase()] || key;
  }

  createElement(tag, attributes, ...children) {
    if (typeof tag === 'function') {
      return tag({ ...attributes, children });
    }
    const element = document.createElement(tag);

    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        if (typeof value === 'function') {
          const eventName = this.getEventNameByKey(key);
          if (!eventName) throw new Error(`Unknown event for key "${key}"`);
          element.addEventListener(eventName, value);
        } else {
          element.setAttribute(this.transformKey(key), value);
        }
      });
    }

    element.append(...children);

    return element;
  }
}

export default new MiniReact();
