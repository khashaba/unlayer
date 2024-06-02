import { interceptConsoleLog } from "../utils/helpers";

describe("Email Editor Task", () => {
  let consoleMessages = [];

  before(() => {
    // Intercept console log calls to be used for exportHTMl
    interceptConsoleLog("exportHtml", consoleMessages);
    cy.visit("");
  });

  it("Should load the website and have the correct title", () => {
    cy.title().should("eq", "React Email Editor Playground");
  });

  it("Should load the editor frame", () => {
    cy.frameLoaded({ url: "https://editor.unlayer.com/1.9.2/editor.html" });
  });

  it("Should drag a text block to the editor", () => {
    // Alias the text element and click on it
    cy.iframe()
      .find('[data-tool-type="text"]')
      .should("be.visible")
      .click()
      .as("textElement");

    // Alias the target element
    cy.iframe().find('[data-name="Drag it here"]').eq(0).as("targetElement");

    cy.realDragAndDrop("@textElement", "@targetElement");

    // Assert the presence of the new text block
    cy.iframe().contains("This is a new Text block. Change the text.");
  });

  it("Should change text align to center", () => {
    // Assert the presence of the new text block and click to edit
    cy.iframe()
      .contains("This is a new Text block. Change the text.")
      .parent()
      .click({ force: true });

    // Assert the presence of the text content menu
    cy.iframe().find('[data-key="title"]').contains("Content");

    // Change the text alignment to center
    cy.iframe().contains("Text Align").should("be.visible");
    cy.iframe().find(".segmented-control button").eq(1).click();
  });

  // Test case to capture and verify console output
  it("Should capture and verify console output", () => {
    cy.contains("Export HTML").click();

    // Assert that the expected console messages were output
    cy.then(() => {
      expect(consoleMessages[0][1]).to.include(
        "This is a new Text block. Change the text."
      );
    });
  });
});
