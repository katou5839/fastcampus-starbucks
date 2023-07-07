const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//Header Input Focus
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

//search focused Event Add
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

//search focused Event Remove
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  //현재 년도