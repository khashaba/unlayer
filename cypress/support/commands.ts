/// <reference types="cypress" />
import "cypress-iframe";
import "cypress-real-events";

Cypress.Commands.add(
  "realDragAndDrop",
  (
    draggableSelector: string,
    targetSelector: string,
    x: number = 0,
    y: number = 0
  ) => {
    // Perform the drag-and-drop actions
    cy.get(draggableSelector)
      .realMouseDown({ button: "left", position: "center" })
      .realMouseMove(x, y, { position: "center" })
      .wait(200);

    cy.get(targetSelector)
      .realMouseMove(0, 0, { position: "center" })
      .realMouseUp();
  }
);
Cypress.Commands.add(
  "dragAndDropInIframe",
  (draggableSelector, targetSelector) => {
    cy.iframe()
      .find(draggableSelector)
      .then(($draggable) => {
        const draggable = $draggable[0];

        cy.iframe()
          .find(targetSelector)
          .then(($target) => {
            const target = $target[0];
            // Function to create a custom event
            function createEvent(type: string, dataTransfer: DataTransfer) {
              const event = new Event(type, {
                bubbles: true,
                cancelable: true,
              });
              Object.defineProperty(event, "dataTransfer", {
                value: dataTransfer,
              });
              return event;
            }
            // Create a DataTransfer object
            const dataTransfer = new DataTransfer();

            // Dispatch dragstart event
            const dragStartEvent = createEvent("dragstart", dataTransfer);
            draggable.dispatchEvent(dragStartEvent);

            // Dispatch dragover event
            const dragOverEvent = createEvent("dragover", dataTransfer);
            target.dispatchEvent(dragOverEvent);

            // Dispatch the drop event
            const dropEvent = createEvent("drop", dataTransfer);
            target.dispatchEvent(dropEvent);

            // Dispatch dragend event
            const dragEndEvent = createEvent("dragend", dataTransfer);
            draggable.dispatchEvent(dragEndEvent);
          });
      });
  }
);
