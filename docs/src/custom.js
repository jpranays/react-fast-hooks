// static/custom.js
if (typeof window !== 'undefined') {
  // Set dark mode if it's not already set
  if (!localStorage.getItem('theme')) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}
