// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('home-btn').addEventListener('click', () => {
    console.log('Home button clicked');
  })
  console.log('DOM loaded and ready');

});

// Basic boilerplate for a webpage script
(function () {
  'use strict';

  // Example: expose a global namespace if needed
  // window.MyApp = window.MyApp || {};
})();
