/* eslint-disable class-methods-use-this */
class MiniReactDOM {
  render(element, targetElement) {
    targetElement.append(element);
  }
}

export default new MiniReactDOM();
