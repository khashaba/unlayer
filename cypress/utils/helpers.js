/**
 * Intercepts console log messages and stores specific messages based on a filter.
 * 
 * @param {string} messageFilter - The message filter to identify specific console log messages.
 * @param {Array} store - The array to store the filtered console log messages.
 */
export const interceptConsoleLog = (messageFilter, store) => {
    cy.on("window:before:load", (win) => {
      // Save the original console log function
      const originalConsoleLog = win.console.log;
  
      // Override console log
      win.console.log = function (...args) {
        if (args[0] === messageFilter) store.push(args);
        // Call the original console log function
        originalConsoleLog.apply(win.console, args);
      };
    });
  };