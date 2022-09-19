function showNavRight() {
  var subMenu = document.querySelector(".cus-nav-right-side");
  subMenu.classList.toggle("show-menu");
};

try{
  document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })

} catch (e) { };


$(document).ready(function(){
  $(".con-open-show-btn").click(function(){
    $(this).parent().hide();
    $(this).parent().next().addClass('show-menu');
  });
});

/* =======================Lightpick=========================*/
try {
  var picker = new Lightpick({
    field: document.getElementById("datepicker"),
    singleDate: false,
    numberOfMonths: 2,
    onSelect: function (start, end) {
      var str = "";
      str += start ? start.format("Do MMMM YYYY") + " to " : "";
      str += end ? end.format("Do MMMM YYYY") : "...";
      document.getElementById("datepicker").innerHTML = str;
    },
  });
} catch (e) {}

// // /* ================================================*/
// // /* Error Monitoring */

// Highcharts.chart("monitoring-bar", {
//   chart: {
//     type: "spline",
//     plotBackgroundColor: null,
//     plotBorderWidth: null,
//     plotShadow: false,
//     scrollablePlotArea: {
//       minWidth: 600,
//       scrollPositionX: 1,
//     },
//   },
//   title: {
//     text: null,
//     align: "left",
//   },
//   xAxis: {
//     type: "datetime",
//     title: {
//       text: null,
//     },
//   },
//   yAxis: {
//     minorGridLineWidth: 1,
//     gridLineWidth: 1,
//     alternateGridColor: null,
//   },
//   colors: ["#128DFE", "#FF0000"],
//   plotOptions: {
//     spline: {
//       lineWidth: 4,
//       states: {
//         hover: {
//           lineWidth: 5,
//         },
//       },
//       marker: {
//         enabled: false,
//       },
//       pointInterval: 3600000, // one hour
//       pointStart: Date.UTC(2018, 1, 13, 0, 0, 0),
//     },
//   },
//   series: [
//     {
//       name: "",
//       data: [3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0],
//     },
//     {
//       name: "",
//       data: [0, 0, 0, 0, 0, 0, 0, 0],
//     },
//   ],
//   navigation: {
//     menuItemStyle: {
//       fontSize: "10px",
//     },
//   },
//   credits: {
//     enabled: false,
//   },
//   yAxis: {
//     title: {
//       text: null,
//     },
//   },
//   exporting: {
//     buttons: {
//       contextButton: {
//         enabled: false,
//       },
//     },
//   },
// });

// zb
function hideBtnFunction() {
  var x = document.querySelector(".track-order-tk-con");
  var y = document.querySelector(".track-order-tk-con-ontab");
  x.style.display = "none";
  y.style.display = "block";
}

function hideBtnFunction2() {
  var x = document.querySelector(".track-order-tk-con2");
  var y = document.querySelector(".track-order-tk-con-ontab2");
  x.style.display = "none";
  y.style.display = "block";
}

// checkbox
function custromCheckFunction() {
  var element = document.getElementById("custrom-check-box");
  element.classList.toggle("custrom-check-box");
}

// mod-link-id

try {
  var modLinkId = document.querySelector("#mod-link-id");
  var modLinkId2 = document.querySelector("#mod-link-id2");
  var statusModRight = document.querySelector(".status-mod-right");
  modLinkId.addEventListener("click", (e) => {
    console.log("dsfsfs");
    statusModRight.style.display = "none";
  });
  modLinkId2.addEventListener("click", (e) => {
    console.log("dsfsfs");
    statusModRight.style.display = "block";
  });
} catch (e) {
}
