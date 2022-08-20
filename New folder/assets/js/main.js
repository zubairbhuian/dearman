// const $drowdownArrow = document.querySelector('.fa-angle-down');
// const $checkbox = document.getElementById('openDropdown');
// const $dropdownMenu = document.querySelector('.dropdown-menu');

// $checkbox.addEventListener('change', () => {
//   $drowdownArrow.classList.toggle('rotate-dropdown-arrow');
// });

// $dropdownMenu.addEventListener('click', (e) => {
//   $checkbox.checked = false;
//   // setting checked to false won't trigger 'change'
//   // event, manually dispatch an event to rotate
//   // dropdown arrow icon
//   $checkbox.dispatchEvent(new Event('change'));
// });


$(document).ready(function(){
    $('#trailer-dropdown-icon').click(function(){
          $('#trailer-dropdown-icon').toggleClass('click');
          $('#trailer-data').slideToggle(500);
      });
  });