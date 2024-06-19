export function startWhenDefined(variableOrElement, action, interval = 1000) {
  // Function to check if the global variable or HTML element is defined
  function checkExistence() {
    let element = null;

    if (typeof variableOrElement === 'string') {
      // Check if it's a global variable
      element = window[variableOrElement];
      if (typeof element !== 'undefined') {
        clearInterval(checkInterval); // Stop the check
        action(element);
      } else {
        // Check if it's an HTML element selector
        element = document.querySelector(variableOrElement);
        if (element) {
          clearInterval(checkInterval); // Stop the check
          action(element);
        } else {
          console.log(`Waiting for ${variableOrElement} to be defined...`);
        }
      }
    } else {
      console.error(
        'The parameter must be a string representing a global variable or an HTML element selector.'
      );
    }
  }

  // Set the interval to check every 'interval' ms
  const checkInterval = setInterval(checkExistence, interval);
}

// Example usage for a global variable: ==================================
// startWhenDefined('krpano', function(krpano) {
//   const app = new App(krpano);
//   // app.init(); // The init() method is now called in the App constructor

//   // Save app in a global variable
//   window.threejsm = app;
//   console.log("execute threejsm project, app:  ", { appwindow: window.threejsm });
// }, 1000);

// Example usage for an HTML element: ======================================
// startWhenDefined('#myElement', function(element) {
//   // Perform some action with the HTML element
//   element.style.backgroundColor = 'yellow';
//   console.log('Element found and modified:', element);
// }, 1000);
