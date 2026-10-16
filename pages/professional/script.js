// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  random_li = document.getElementById('random-li');
  random_li_normal_text = true;

  random_li.addEventListener('click', () => {
    // Change the default text size class to "big-text"
    if (random_li_normal_text) {
      random_li.classList.remove('nav-text-base');
      random_li.classList.add('big-text');
    } else {
      random_li.classList.remove('big-text');
      random_li.classList.add('nav-text-base');
    }
    random_li_normal_text = !random_li_normal_text;
  });
});