

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.documentElement.setAttribute('data-theme', "light");
  } else {
    document.documentElement.setAttribute('data-theme', "darktheme");
  }
});