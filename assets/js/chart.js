Apex.grid = {
  padding: {
    right: 0,
    left: 0,
  },
};

Apex.dataLabels = {
  enabled: false,
};

// var randomizeArray = function (arg) {
//   var array = arg.slice();
//   var currentIndex = array.length,
//     temporaryValue, randomIndex;

//   while (0 !== currentIndex) {

//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

// // data for the sparklines that appear below header area
// var sparklineData = [
//   47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61,
//   27, 54, 43, 19, 46, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46,
// ];

/* ================================================*/
// the default colorPalette for this dashboard
var colorPalette = ["#118DFF", "#D9D9D9", "#E044A7", "#FF4560", "#775DD0"];

var optionsBarOne = {
  series: [
    {
      name: "This Month",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Last Month",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ],
  chart: {
    type: "bar",
    height: 150,
    zoom: false,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "45%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  fill: {
    opacity: 1,
  },
  colors: ["#2E93fA", "#B8CCE4"],
};

var chart = new ApexCharts(document.querySelector("#bar-one"), optionsBarOne);
chart.render();

/* ================================================*/
/* Inventory timeline */
var optionsInventoryBrush = {
  series: [
    {
      name: "Desktops",
      data: [35000, 41000, 12000, 32000, 6000, 18000, 28000, 14800],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  grid: {
    row: {
      colors: ["transparent"],
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: [
      "Dec20",
      "Dec22",
      "Dec24",
      "Dec26",
      "Dec28",
      "Dec30",
      "Jan2",
      "Jan4",
    ],
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        var val = Math.abs(value);
        if (val >= 1000) {
          val = (val / 1000).toFixed(0) + " K";
        }
        return val;
      },
    },
  },
};

var brush = new ApexCharts(
  document.querySelector("#brush"),
  optionsInventoryBrush
);
brush.render();

/* ================================================*/
/* Shipments this month */
var optionsShipmentsBrush = {
  series: [
    {
      name: "Desktops",
      data: [35000, 41000, 12000, 32000, 6000, 18000, 28000, 14800],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  grid: {
    row: {
      colors: ["transparent"],
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: [
      "Dec20",
      "Dec22",
      "Dec24",
      "Dec26",
      "Dec28",
      "Dec30",
      "Jan2",
      "Jan4",
    ],
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        var val = Math.abs(value);
        if (val >= 1000) {
          val = (val / 1000).toFixed(0) + " K";
        }
        return val;
      },
    },
  },
};

var chart = new ApexCharts(
  document.querySelector("#brush-two"),
  optionsShipmentsBrush
);
chart.render();

/* ================================================*/
/* Current liftable inventory by tank */
var optionsLiftableBar = {
  chart: {
    type: "bar",
    height: 350,
    width: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
    },
  },
  colors: colorPalette,
  series: [
    {
      name: "Current Inventory",
      data: [15000, 25000, 18000, 18000, 25000, 32000],
    },
    {
      name: "Capacity",
      data: [12000, 12000, 12000, 12000, 12000, 12000],
    },
  ],
  labels: [
    "BWO-Tank-13",
    "BWO-Tank-18",
    "BWO-Tank-11",
    "BWO-Tank-12",
    "BWO-Tank-10",
    "BWO-Tank-14",
  ],
  xaxis: {
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      formatter: function (value) {
        var val = Math.abs(value);
        if (val >= 1000) {
          val = (val / 1000).toFixed(0) + " K";
        }
        return val;
      },
    },
  },
};

var chartBar = new ApexCharts(
  document.querySelector("#bar"),
  optionsLiftableBar
);
chartBar.render();

/* ================================================*/
/* Shipments this month by tank */
var optionsShipmentsTankBar = {
  chart: {
    type: "bar",
    height: 350,
    width: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
    },
  },
  colors: ["#0D6ABF"],
  series: [
    {
      name: "Clothing",
      data: [35000, 25000, 15000, 10000, 5000, 2000],
    },
  ],
  labels: [60, 50, 40, 30, 20, 10],
  xaxis: {
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    title: {
      text: "Tank",
      style: {
        fontSize: "14px",
      },
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      formatter: function (value) {
        var val = Math.abs(value);
        if (val >= 1000) {
          val = (val / 1000).toFixed(0) + " K";
        }
        return val;
      },
      style: {
        colors: "#78909c",
      },
    },
    title: {
      text: "sss",
      style: {
        fontSize: "14px",
      },
    },
  },
};

var chartBar = new ApexCharts(
  document.querySelector("#bar-two"),
  optionsShipmentsTankBar
);
chartBar.render();

/* ================================================*/
/* Shipments this month by product */
var optionsProductBar = {
  chart: {
    type: "bar",
    height: 350,
    width: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
      distributed: true,
    },
  },
  colors: ["#0D6ABF", "#12239E", "#E044A7"],
  legend: {
    show: false,
  },
  series: [
    {
      name: "Clothing",
      data: [50000, 20000, 10000],
    },
  ],
  labels: ["FHR 87Nl", "FHR DSL", "FHR 91NL"],
  xaxis: {
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    title: {
      text: "Product",
      style: {
        fontSize: "14px",
      },
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      formatter: function (value) {
        var val = Math.abs(value);
        if (val >= 1000) {
          val = (val / 1000).toFixed(0) + " K";
        }
        return val;
      },
      style: {
        colors: "#78909c",
      },
    },
    title: {
      text: "BBLS",
      style: {
        fontSize: "14px",
      },
    },
  },
};

var chartBar = new ApexCharts(
  document.querySelector("#bar-three"),
  optionsProductBar
);
chartBar.render();

/* ================================================*/
/* Shipments this month by Customer */
var optionsCustomerBar = {
  chart: {
    type: "bar",
    height: 350,
    width: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
      distributed: true,
    },
  },
  colors: [
    "#0D6ABF",
    "#0D6ABF",
    "#A8337D",
    "#0D6ABF",
    "#0D6ABF",
    "#0D6ABF",
    "#C7B8E7",
    "#0D6ABF",
    "#9BCEFD",
    "#0A0B58",
    "#0D6ABF",
  ],
  legend: {
    show: false,
  },
  series: [
    {
      name: "Clothing",
      data: [
        25000, 52000, 30000, 25000, 11000, 12000, 10000, 6000, 4000, 2000, 1000,
      ],
    },
  ],
  labels: [
    "SERV Energy, LLC",
    "Robco Fuels, LLC",
    "Oleumv LLC",
    "Xemoil LLC",
    "Hev Logistics, LLC",
    "TCI Control USA, LLC",
    "Musket Corporation",
    "Grupo Petroeamps",
    "Willy's fuels",
    "Key Performance Petroluem",
    "Tartan Oil LLC",
    // style: {
    //   colors: "#78909c",
    // },
  ],
  xaxis: {
    labels: {
      show: true,
      style: {
        fontSize: "10px",
        // width: '20px',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      formatter: function (value) {
        var val = Math.abs(value);
        if (val >= 1000) {
          val = (val / 1000).toFixed(0) + " K";
        }
        return val;
      },
      style: {
        colors: "#78909c",
      },
    },
    title: {
      text: "BBLS",
      style: {
        fontSize: "14px",
      },
    },
  },
};

var chartBar = new ApexCharts(
  document.querySelector("#bar-four"),
  optionsCustomerBar
);
chartBar.render();

/* ================================================*/
/* ================================================*/
// Carrier Page Chart //KBIp
/* ================================================*/
/* ================================================*/

/* ================================================*/
// Shipments by Carrier

var optionsDistributed = {
  chart: {
    type: "bar",
    height: 380,
    width: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
    },
  },
  colors: ["#0D6ABF"],
  series: [
    {
      name: "Clothing",
      data: [25, 52, 30, 25, 11, 12],
    },
  ],
  labels: [1, 2, 3, 4, 5, 6],
  xaxis: {
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#78909c",
      },
    },
  },
  title: {
    text: "Shipments by Carrier",
    align: "left",
    style: {
      fontSize: "18px",
    },
  },
};

var chartBar = new ApexCharts(
  document.querySelector("#distributed"),
  optionsDistributed
);
chartBar.render();

/* ================================================*/
// Trailer Check-ins by Hour

var optionsLine = {
  series: [
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  colors: ["#0D6ABF"],
  dataLabels: {
    enabled: false,
  },
  title: {
    text: "Trailer Check-ins by Hour",
    align: "left",
    style: {
      fontSize: "18px",
    },
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["transparent"],
      opacity: 0.5,
    },
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    title: {
      text: "Month",
    },
  },
};

var chartBar = new ApexCharts(document.querySelector("#line-two"), optionsLine);
chartBar.render();

/* ================================================*/
// Did Not Load by Reason

var optionsLoadBar = {
  chart: {
    type: "bar",
    height: 380,
    width: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
    },
  },
  colors: ["#0D6ABF"],
  series: [
    {
      name: "Clothing",
      data: [80, 52, 30],
    },
  ],
  labels: [1, 2, 3],
  xaxis: {
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#78909c",
      },
      formatter: function (value) {
        var val = Math.abs(value);
        if (val >= 1) {
          val = (val / 1).toFixed(0) + " %";
        }
        return val;
      },
    },
  },
  title: {
    text: "Did Not Load by Reason",
    align: "left",
    style: {
      fontSize: "18px",
    },
  },
};

var chartBar = new ApexCharts(
  document.querySelector("#load-bar"),
  optionsLoadBar
);
chartBar.render();

/* ================================================*/
// // Rejections by Reason

var optionsRejections = {
  chart: {
    type: "bar",
    height: 380,
    width: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
    },
  },
  colors: ["#0D6ABF"],
  series: [
    {
      name: "Rejections by Reason",
      data: [80, 52, 40, 30, 20, 12, 8, 2],
    },
  ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  xaxis: {
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#78909c",
      },
    },
  },
  title: {
    text: "Rejections by Reason",
    align: "left",
    style: {
      fontSize: "18px",
    },
  },
};

var chartBar = new ApexCharts(
  document.querySelector("#rejections-bar"),
  optionsRejections
);
chartBar.render();

/* ================================================*/
// // Rejection Rate by Carrier

var optionsRejectionsRate = {
  chart: {
    type: "bar",
    height: 380,
    width: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
    },
  },
  colors: ["#0D6ABF"],
  series: [
    {
      name: "Rejection Rate by Carrier",
      data: [25, 52, 30],
    },
  ],
  labels: [1, 2, 3],
  xaxis: {
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#78909c",
      },
      formatter: function (value) {
        var val = Math.abs(value);
        if (val >= 1) {
          val = (val / 1).toFixed(0) + " %";
        }
        return val;
      },
    },
  },
  title: {
    text: "Rejection Rate by Carrier",
    align: "left",
    style: {
      fontSize: "18px",
    },
  },
};

var chartBar = new ApexCharts(
  document.querySelector("#rejection-rate-bar"),
  optionsRejectionsRate
);
chartBar.render();

/* ================================================*/
/* ================================================*/
// Carrier Page Chart //Trailers
/* ================================================*/
/* ================================================*/

/* ================================================
 */ // Trailer Capacity by Carrier

var optionsTrailerBar = {
  chart: {
    type: "bar",
    height: 350,
    width: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
    },
  },
  colors: ["#0D6ABF"],
  series: [
    {
      name: "Trailer Capacity by Carrier",
      data: [12, 10, 6, 4, 2, 1],
    },
  ],
  labels: [1, 2, 3, 4, 5, 6],
  xaxis: {
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: [
      "Luxemborg",
      "Trareysa",
      "STN",
      "Coastal",
      "Marvic",
      "San Maria",
    ],
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#78909c",
      },
    },
  },
  title: {
    text: "Trailer Capacity by Carrier",
    align: "left",
    style: {
      fontSize: "18px",
    },
  },
};

var chartBar = new ApexCharts(
  document.querySelector("#trailer-bar-four"),
  optionsTrailerBar
);
chartBar.render();

/* ================================================*/
/* ================================================*/
// Carrier Page Chart //Trailers Popup//
/* ================================================*/
/* ================================================*/

/* ================================================
 */ // Rejection History

var optionsPopBar = {
  chart: {
    type: "bar",
    height: 350,
    width: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "60%",
    },
  },
  colors: ["#FF0000"],
  series: [
    {
      name: "Rejection History",
      data: [5, 0, 16, 2, 0, 0, 4, 10, 8, 5, 2, 0],
    },
  ],
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  xaxis: {
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#78909c",
      },
    },
  },
  grid: {
    row: {
      colors: ["transparent"],
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
};

var chartBar = new ApexCharts(
  document.querySelector("#popup-bar"),
  optionsPopBar
);
chartBar.render();

/* ================================================*/
/* ================================================*/
// Carrier Page Chart // Error Logs//
/* ================================================*/
/* ================================================*/

/* ================================================
 */ // Error Logs

var optionsErrorBar = {
  series: [
    {
      name: "Net Profit",
      data: [
        1, 0, 7, 2, 0, 0, 0, 6, 12, 8, 4, 2, 0, 6, 25, 0, 0, 0, 41, 0, 7, 0, 0,
        0, 6, 0, 1,
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "1/1",
      "1/2",
      "1/3",
      "1/4",
      "1/5",
      "1/6",
      "1/7",
      "1/8",
      "1/9",
      "1/10",
      "1/11",
      "1/12",
      "1/15",
      "1/14",
      "1/16",
      "1/17",
      "1/18",
      "1/19",
      "1/20",
      "1/21",
      "1/22",
      "1/23",
      "1/24",
      "1/24",
      "1/25",
      "21/6",
      "1/27",
    ],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
    colors: ["#ff0000"],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
  grid: {
    row: {
      colors: ["transparent"],
      opacity: 0.5,
    },
    column: {
      colors: ["transparent"],
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
};

var chart = new ApexCharts(
  document.querySelector("#error-bar"),
  optionsErrorBar
);
chart.render();

/* ================================================*/
/* ================================================*/
// Order Status Page Dropdown Chart
/* ================================================*/
/* ================================================*/

/* ================================================
 */ // Order status overview

var optionsStatusBar = {
  chart: {
    type: "bar",
    height: 350,
    width: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "40%",
      distributed: true,
    },
  },
  colors: [
    "#128DFE",
    "#128DFE",
    "#128DFE",
    "#128DFE",
    "#007251",
    "#007251",
    "#007251",
  ],
  legend: {
    show: false,
  },
  series: [
    {
      name: "Clothing",
      data: [3, 2, 0, 2, 4, 4, 2],
    },
  ],
  labels: [
    "Scheduled",
    "Checked-in",
    "Driver notified for dispatch",
    "Driver dispatched",
    "Get-in",
    "Loding",
    "Closed",
  ],
  xaxis: {
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    // dataLabels: true,
  },
  dataLabels: {
    enabled: true,
  },
};

var chart = new ApexCharts(document.querySelector("#st-bar"), optionsStatusBar);
chart.render();

/* ================================================*/
/* ================================================*/
/* ========================Forecast Page========================*/
/* ================================================*/
/* ================================================*/
/* ================================================
 */ // Inventory Forecast

// var optionsForecast = {
//   series: [{
//       name: "Today’s Sales",
//       data: [
//         null,
//         null,
//         null,
//         null,
//         null,
//         null,
//         200000,
//         null,
//         null,
//         null,
//         null,
//         null,
//       ],
//     },
//     {
//       name: "Sales",
//       data: [
//         450000,
//         820000,
//         380000,
//         240000,
//         530000,
//         260000,
//         210000,
//         200000,
//         600000,
//         800000,
//         150000,
//         100000,
//       ],
//     },
//     {
//       name: "Incoming",
//       data: [
//         null,
//         null,
//         null,
//         null,
//         null,
//         null,
//         250000,
//         370000,
//         360000,
//         510000,
//         600000,
//         450000,
//       ],
//     },
//     {
//       name: "Projected",
//       data: [
//         null,
//         null,
//         null,
//         null,
//         null,
//         null,
//         200000,
//         310000,
//         460000,
//         580000,
//         620000,
//         450000,
//       ],
//     },
//   ],
//   chart: {
//     height: 420,
//     type: "line",
//     zoom: {
//       enabled: false,
//     },
//     toolbar: {
//       show: true,
//       tools: {
//         download: false
//       }
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     width: [2, 2, 2],
//     curve: "straight",
//   },
//   legend: {
//     tooltipHoverFormatter: function (val, opts) {
//       return (
//         val +
//         " - " +
//         opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
//         ""
//       );
//     },
//   },
//   markers: {
//     size: 0,
//     hover: {
//       sizeOffset: 6,
//     },
//   },
//   xaxis: {
//     range: 10,
//     categories: [
//       "07/07",
//       "07/08",
//       "07/15",
//       "07/22",
//       "07/29",
//       "07/30",
//       "Today",
//       "08/01",
//       "08/02",
//       "08/03",
//       "08/04",
//       "08/05",
//       "08/06",
//       "08/06",
//       "08/06",
//     ],
//   },
//   tooltip: {
//     y: [{
//         title: {
//           formatter: function (val) {
//             return val + " (mins)";
//           },
//         },
//       },
//       {
//         title: {
//           formatter: function (val) {
//             return val + " per session";
//           },
//         },
//       },
//       {
//         title: {
//           formatter: function (val) {
//             return val;
//           },
//         },
//       },
//     ],
//   },
//   grid: {
//     borderColor: "#f1f1f1",
//   },
//   yaxis: {
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//     labels: {
//       style: {
//         colors: "#78909c",
//       },
//       formatter: function (value) {
//         var val = Math.abs(value);
//         if (val >= 1000) {
//           val = (val / 1000).toFixed(0) + " K";
//         }
//         return val;
//       },
//     },
//   },
//   legend: {
//     position: 'top',
//     horizontalAlign: 'left',
//     offsetY: 5,

//   },
//   colors: [
//     "#19B674",
//     "#0078D4",
//     "#72B1E1",
//     "#B8E0FF",
//   ],
// };

// var chart = new ApexCharts(
//   document.querySelector("#Forecast"),
//   optionsForecast
// );
// chart.render();

var optionsForecast = {
  series: [
    {
      name: "Today’s Sales",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        200000,
        null,
        null,
        null,
        null,
        null,
      ],
    },
    {
      name: "Sales",
      data: [
        450000, 820000, 380000, 240000, 530000, 260000, 210000, 200000, 600000,
        800000, 150000, 100000,
      ],
    },
    {
      name: "Incoming",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        250000,
        370000,
        360000,
        510000,
        600000,
        450000,
      ],
    },
    {
      name: "Projected",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        200000,
        310000,
        460000,
        580000,
        620000,
        450000,
      ],
    },
  ],
  chart: {
    height: 420,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: true,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [2, 2, 2],
    curve: "straight",
  },
  legend: {
    tooltipHoverFormatter: function (val, opts) {
      return (
        val +
        " - " +
        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
        ""
      );
    },
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6,
    },
  },
  xaxis: {
    range: 10,
    categories: [
      "07/07",
      "07/08",
      "07/15",
      "07/22",
      "07/29",
      "07/30",
      "Today",
      "08/01",
      "08/02",
      "08/03",
      "08/04",
      "08/05",
      "08/06",
      "08/06",
      "08/06",
    ],
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val) {
            return val + " (mins)";
          },
        },
      },
      {
        title: {
          formatter: function (val) {
            return val + " per session";
          },
        },
      },
      {
        title: {
          formatter: function (val) {
            return val;
          },
        },
      },
    ],
  },
  grid: {
    borderColor: "#f1f1f1",
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#78909c",
      },
      formatter: function (value) {
        var val = Math.abs(value);
        if (val >= 1000) {
          val = (val / 1000).toFixed(0) + " K";
        }
        return val;
      },
    },
  },
  annotations: {
    points: [{
      x: 'Today’s Sales',
      seriesIndex: 6,
      label: {
        borderColor: '#775DD0',
        offsetY: 0,
        style: {
          color: '#fff',
          background: '#775DD0',
        },
        text: 'Bananas are good',
      }
    }]
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    offsetY: 5,
  },
  colors: ["#19B674", "#0078D4", "#72B1E1", "#B8E0FF"],
};

var chart = new ApexCharts(
  document.querySelector("#Forecast"),
  optionsForecast
);
chart.render();

// /* ================================================*/
// /* ================================================*/
// /* ========================Highcharts========================*/
// /* ================================================*/
// /* ================================================*/

// /* ================================================*/
// /* Current inventory product mix */

// Highcharts.chart("product-mix", {
//   chart: {
//     plotBackgroundColor: null,
//     plotBorderWidth: null,
//     plotShadow: false,
//     type: "pie",
//   },
//   title: {
//     text: null,
//   },
//   legend: {
//     enabled: false,
//   },
//   tooltip: {
//     pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
//   },
//   series: [
//     {
//       name: "Composition",
//       colorByPoint: true,
//       innerSize: "70%",
//       data: [
//         {
//           name: "Regular Gas 42.04K",
//           color: "#0D6ABF",
//           y: 78,
//         },
//         {
//           name: "Premium Gas 16.53K",
//           color: "#12239E",
//           y: 40,
//         },
//         {
//           name: "ULSD 4.4K",
//           color: "#E044A7",
//           y: 20,
//         },
//       ],
//     },
//   ],
//   exporting: {
//     buttons: {
//       contextButton: {
//         enabled: false,
//       },
//     },
//   },
//   credits: {
//     enabled: false,
//   },
//   yAxis: {
//     gridLineColor: "transparent",
//   },
// });
