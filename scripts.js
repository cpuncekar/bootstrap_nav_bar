// Custom JavaScript code
document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('mouseenter', function () {
    this.querySelector('.dropdown-menu').classList.add('show');
  });

  dropdown.addEventListener('mouseleave', function () {
    this.querySelector('.dropdown-menu').classList.remove('show');
  });
});
