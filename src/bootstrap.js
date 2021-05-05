try {
  window.$ = window.jQuery = require("jquery");
  window.Popper = require("popper.js");
  require("bootstrap");
} catch (error) {
  console.log(error);
}
