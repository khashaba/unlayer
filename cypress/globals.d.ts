///<reference types="cypress-iframe" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom command to mimic the user in real as they drag and drop an element.
     * @param draggableSelector - Selector for the draggable element.
     * @param targetSelector - Selector for the target element.
     * @param {number} [x=0] - The horizontal offset relative to the center of the target element. Default is 0.
     * @param {number} [y=0] - The vertical offset relative to the center of the target element. Default is 0.
     */
    realDragAndDrop(
      draggableSelector: string,
      targetSelector: string,
      x?: number,
      y?: number
    ): Chainable<Element>;
    /**
     * Custom command to drag and drop an element within an iframe.
     * @param draggableSelector - Selector for the draggable element.
     * @param targetSelector - Selector for the target element.
     */
    dragAndDropInIframe(
      draggableSelector: string,
      targetSelector: string
    ): Chainable<Element>;
  }
}
