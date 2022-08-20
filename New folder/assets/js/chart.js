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
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   while (0 !== currentIndex) {

//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

// data for the sparklines that appear below header area
var sparklineData = [
  47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61,
  27, 54, 43, 19, 46,
];

// the default colorPalette for this dashboard
var colorPalette = ["#00D8B6", "#008FFB", "#FEB019", "#FF4560", "#775DD0"];

var optionsBarOne = {
  series: [{
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
};

var brushChart = new ApexCharts(
  document.querySelector("#bar-one"),
  optionsBarOne
);
brushChart.render();

/* Inventory timeline */
var optionsBrush = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  }, ],
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
  title: {
    text: "Product Trends by Month",
    align: "left",
    style: {
      fontSize: "18px",
    },
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};

var brush = new ApexCharts(document.querySelector("#brush"), optionsBrush);
brush.render();

/* Shipments this month */
var optionsBrush = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  }, ],
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
  title: {
    text: "Shipments this month",
    align: "left",
    style: {
      fontSize: "18px",
    },
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};

var brush = new ApexCharts(document.querySelector("#brush-two"), optionsBrush);
brush.render();

/* Current liftable inventory by tank */
var optionsBar = {
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
  series: [{
      name: "Current Inventory",
      data: [42, 52, 16, 55, 59, 51],
    },
    {
      name: "Capacity",
      data: [6, 12, 4, 7, 5, 3],
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
      style: {
        colors: "#78909c",
      },
    },
  },
  title: {
    text: "Inventory timeline",
    align: "left",
    style: {
      fontSize: "18px",
    },
  },
};

var chartBar = new ApexCharts(document.querySelector("#bar"), optionsBar);
chartBar.render();

/* Current inventory product mix */
var optionDonut = {
  chart: {
    type: "donut",
    width: "100%",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
      donut: {
        size: "75%",
      },
      offsetY: 20,
    },
    stroke: {
      colors: undefined,
    },
  },
  colors: colorPalette,
  title: {
    text: "Current inventory product mix",
    style: {
      fontSize: "18px",
    },
  },
  series: [55, 30, 10],
  labels: ["Regular Gas 16.53K", "Premium Gas 16.53K", "ULSD 4.4K"],
  legend: {
    position: "bottom",
    offsetY: 0,
  },
};

var donut = new ApexCharts(document.querySelector("#donut"), optionDonut);
donut.render();

/* Shipments this month by tank */
var optionsBar = {
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
  series: [{
    name: "Clothing",
    data: [42, 52, 16, 55, 59, 51],
  }, ],
  labels: [10, 11, 12, 13, 14, 15],
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
  title: {
    text: "Shipments this month by tank",
    align: "left",
    style: {
      fontSize: "18px",
    },
  },
};

var chartBar = new ApexCharts(document.querySelector("#bar-two"), optionsBar);
chartBar.render();

/* Shipments this month by product */
var optionsBar = {
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
  series: [{
    name: "Clothing",
    data: [42, 52, 16],
  }, ],
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
  title: {
    text: "Shipments this month by tank",
    align: "left",
    style: {
      fontSize: "18px",
    },
  },
};

var chartBar = new ApexCharts(document.querySelector("#bar-three"), optionsBar);
chartBar.render();

/* Shipments this month by product */
var optionsBar = {
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
  series: [{
    name: "Clothing",
    data: [25, 52, 30, 25, 11, 12, 10, 6, 4, 2, 1],
  }, ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
    title: {
      text: "BBLS",
      style: {
        fontSize: "14px",
      },
    },
  },
  title: {
    text: "Shipments this month by tank",
    align: "left",
    style: {
      fontSize: "18px",
    },
  },
};

var chartBar = new ApexCharts(document.querySelector("#bar-four"), optionsBar);
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
  colors: colorPalette,
  series: [{
    name: "Clothing",
    data: [25, 52, 30, 25, 11, 12],
  }, ],
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
    text: "Shipments this month by tank",
    align: "left",
    style: {
      fontSize: "18px",
    },
  },
};

var chartBar = new ApexCharts(document.querySelector("#distributed"), optionsDistributed);
chartBar.render();



/* ================================================*/
// Trailer Check-ins by Hour


var optionsLine = {
  series: [{
    name: "Low - 2013",
    data: [12, 11, 14, 18, 17, 13, 13]
  }],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Trailer Check-ins by Hour',
    align: 'left',
    style: {
      fontSize: "18px",
    },
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
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
  colors: colorPalette,
  series: [{
    name: "Clothing",
    data: [25, 52, 30],
  }, ],
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

var chartBar = new ApexCharts(document.querySelector("#load-bar"), optionsLoadBar);
chartBar.render();

/* ================================================*/
// // Did Not Load by Reason

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
  colors: colorPalette,
  series: [{
    name: "Rejections by Reason",
    data: [80, 52, 40, 30, 20, 12, 8, 2],
  }, ],
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

var chartBar = new ApexCharts(document.querySelector("#rejections-bar"), optionsRejections);
chartBar.render();

/* ================================================*/
// // Did Not Load by Reason

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
  colors: colorPalette,
  series: [{
    name: "Rejection Rate by Carrier",
    data: [25, 52, 30],
  }, ],
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

var chartBar = new ApexCharts(document.querySelector("#rejection-rate-bar"), optionsRejectionsRate);
chartBar.render();


/* ================================================*/
/* ================================================*/
// Carrier Page Chart //Trailers
/* ================================================*/
/* ================================================*/

/* ================================================
*/// Trailer Capacity by Carrier

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
  colors: colorPalette,
  series: [{
    name: "Trailer Capacity by Carrier",
    data: [12, 10, 6, 4, 2, 1],
  }, ],
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
    categories: ['Luxemborg', 'Trareysa', 'STN', 'Coastal', 'Marvic', 'San Maria'],
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

var chartBar = new ApexCharts(document.querySelector("#trailer-bar-four"), optionsTrailerBar);
chartBar.render();