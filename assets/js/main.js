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

// 303313268

try{
  $(document).ready(function(){
    $('#trailer-dropdown-icon').click(function(){
          $('#trailer-dropdown-icon').toggleClass('click');
          $('#trailer-data').slideToggle(500);
      });
  });
}catch(e){
console.log('err');
}

// zb
  function hideBtnFunction() {
    var x = document.querySelector('.track-order-tk-con');
    var y = document.querySelector('.track-order-tk-con-ontab');
    x.style.display = "none";
    y.style.display = "block";
  }
  function hideBtnFunction2() {
    var x = document.querySelector('.track-order-tk-con2');
    var y = document.querySelector('.track-order-tk-con-ontab2');
    x.style.display = "none";
    y.style.display = "block";

  }

  // checkbox
  function custromCheckFunction() {
    var element = document.getElementById("custrom-check-box");
    element.classList.toggle("custrom-check-box");
  }

  // mod-link-id

try{
  var modLinkId=document.querySelector("#mod-link-id");
  var modLinkId2=document.querySelector("#mod-link-id2");
  var statusModRight=document.querySelector(".status-mod-right");
  modLinkId.addEventListener("click",(e)=>{
    console.log('dsfsfs');
    statusModRight.style.display = "none";
  })
  modLinkId2.addEventListener("click",(e)=>{
    console.log('dsfsfs');
    statusModRight.style.display="block"
  })
}catch(e){
  console.log('err');
}


try{
  document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })

}catch(e){}