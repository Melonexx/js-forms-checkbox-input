console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

hideTosError();

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked) {
    // Wenn ja, verstecke die Fehlermeldung
    hideTosError();

    // eslint-disable-next-line no-alert
    alert("Form submitted"); // total optional, absolut nicht notwendig, kann man auch einfach weglassen
  } else {
    // Wenn nicht, zeige die Fehlermeldung an
    showTosError();
  }
});
// --^-- write your code here --^--
