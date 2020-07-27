// Global variables

// Global variables used in Globally Report Section
let filteredWorldData;
let dateArray;
let totalCasesArray;
let totalDeathsArray;
let totalRecoveredArray;
// Global variables used in Report by Country Section
let countryDateArray;
let countryCasesArray;
let countryDeathsArray;
let countryRecoveredArray;
let countryDateProjectedCases;
let countryProjectedCases;
// Global variables used in Comparison by Country Section
let dataFirstCountry;
let dataSecondCountry;
let firstCountryCasesArray;
let firstCountryDeathsArray;
let firstCountryRecoveredArray;
let secondCountryCasesArray;
let secondCountryDeathsArray;
let secondCountryRecoveredArray;
let firstCountryName;
let secondCountryName;

// Datepicker with select a date range, resource from jQuery UI version 1.12

// Globally Report Datepicker ////////////////////////////////////////////////////////////////////////////////

$(function () {
  var dateFormat = "yy/mm/dd",
    from = $("#from")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
      })
      .on("change", function () {
        to.datepicker("option", "minDate", $("#from").datepicker("getDate"));
        // Global variables defined
        filteredWorldData = filterJSONbyDate(
          total_world_report,
          $("#from").datepicker("getDate"),
          $("#to").datepicker("getDate")
        );
        dateArray = getArrayFromJSONbyKey(
          filteredWorldData,
          "last_update",
          true
        );
        totalCasesArray = getArrayFromJSONbyKey(
          filteredWorldData,
          "total_cases"
        );
        totalDeathsArray = getArrayFromJSONbyKey(
          filteredWorldData,
          "total_deaths"
        );
        totalRecoveredArray = getArrayFromJSONbyKey(
          filteredWorldData,
          "total_recovered"
        );
        // Render charts
        chartWorldCases.setOption(
          optionWorldCases(dateArray.reverse(), totalCasesArray.reverse())
        );
        chartDeaths.setOption(
          optionDeaths(dateArray, totalDeathsArray.reverse())
        );
        chartRecovered.setOption(
          optionRecovered(dateArray, totalRecoveredArray.reverse())
        );
      }),
    to = $("#to")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
      })
      .on("change", function () {
        from.datepicker("option", "maxDate", $("#to").datepicker("getDate"));
        // Global variables defined
        filteredWorldData = filterJSONbyDate(
          total_world_report,
          $("#from").datepicker("getDate"),
          $("#to").datepicker("getDate")
        );
        dateArray = getArrayFromJSONbyKey(
          filteredWorldData,
          "last_update",
          true
        );
        totalCasesArray = getArrayFromJSONbyKey(
          filteredWorldData,
          "total_cases"
        );
        totalDeathsArray = getArrayFromJSONbyKey(
          filteredWorldData,
          "total_deaths"
        );
        totalRecoveredArray = getArrayFromJSONbyKey(
          filteredWorldData,
          "total_recovered"
        );
        // Render charts
        document.getElementById(
          "total-world-cases"
        ).innerHTML = numberWithCommas(totalCasesArray[0]); // Shows the total cases into analytics.html
        chartWorldCases.setOption(
          optionWorldCases(dateArray.reverse(), totalCasesArray.reverse())
        );
        document.getElementById(
          "total-world-deaths"
        ).innerHTML = numberWithCommas(totalDeathsArray[0]); // Shows the total deaths into analytics.html
        chartDeaths.setOption(
          optionDeaths(dateArray, totalDeathsArray.reverse())
        );
        document.getElementById(
          "total-world-recovered"
        ).innerHTML = numberWithCommas(totalRecoveredArray[0]); // Shows the total recovered into analytics.html
        chartRecovered.setOption(
          optionRecovered(dateArray, totalRecoveredArray.reverse())
        );
      });
});

// Report by Country Datepicker ////////////////////////////////////////////////////////////////////////////////

$(function () {
  var dateFormat = "mm/dd/yy",
    from = $("#from1")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: "yy-mm-dd",
      })
      .on("change", function () {
        getCountryDatabyDate(); // Function defined into controller.js
        to.datepicker("option", "minDate", getDate(this));
      }),
    to = $("#to1")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: "yy-mm-dd",
      })
      .on("change", function () {
        getCountryDatabyDate(); // Function defined into controller.js
        from.datepicker("option", "maxDate", getDate(this));
      });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }

    return date;
  }
});

// Comparison by Country Datepicker ////////////////////////////////////////////////////////////////////////////////

$(function () {
  var dateFormat = "mm/dd/yy",
    from = $("#from2")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: "yy-mm-dd",
      })
      .on("change", function () {
        renderComparisonByCountriesChart(); // Function defined into controller.js
        to.datepicker("option", "minDate", getDate(this));
      }),
    to = $("#to2")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: "yy-mm-dd",
      })
      .on("change", function () {
        renderComparisonByCountriesChart(); // Function defined into controller.js
        from.datepicker("option", "maxDate", getDate(this));
      });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }

    return date;
  }
});

// ECharts Library from https://echarts.apache.org/

// Globally Report charts ////////////////////////////////////////////////////////////////////////////////

// COVID-19 world cases chart

var chartWorldCases = echarts.init(
  document.getElementById("total-world-cases-chart")
); // Initiate ECharts
// Chart configuration
function optionWorldCases(dates, cases) {
  return {
    baseOption: {
      title: {
        text: "COVID-19 World Cases",
      },
      tooltip: {},
      legend: {
        data: ["Cases by day"],
      },
      xAxis: {
        data: dates, // Display the dates into the X axis
      },
      yAxis: {},
      grid: {
        left: "19.5%",
        height: "auto",
        width: "auto",
      },
      series: [
        {
          name: "COVID-19 Cases",
          type: "bar",
          itemStyle: {
            color: "#062f58",
          },
          emphasis: {
            itemStyle: {
              color: "#da530b",
            },
          },
          data: cases, // Display the total number of COVID-19s cases on the Y axis.
        },
      ],
    },
  };
}

// COVID-19 world deaths chart

var chartDeaths = echarts.init(
  document.getElementById("total-world-deaths-chart")
); // Initiate ECharts
// Chart configuration
function optionDeaths(dates, deaths) {
  return {
    title: {
      text: "COVID-19 World Deaths",
    },
    tooltip: {},
    legend: {
      data: ["Deaths by day"],
    },
    xAxis: {
      data: dates, // Display the dates into the X axis
    },
    yAxis: {},
    grid: {
      left: "19.5%",
      height: "auto",
      width: "auto",
    },
    series: [
      {
        name: "COVID-19 Deaths",
        type: "bar",
        itemStyle: {
          color: "#062f58",
        },
        emphasis: {
          itemStyle: {
            color: "#da530b",
          },
        },
        data: deaths, // Display the total number of COVID-19s deaths on the Y axis.
      },
    ],
  };
}

// COVID-19 world recovered chart

var chartRecovered = echarts.init(
  document.getElementById("total-world-recovered-chart")
); // Initiate ECharts
// Chart configuration
function optionRecovered(dates, recovered) {
  return {
    title: {
      text: "COVID-19 World Recovered",
    },
    tooltip: {},
    legend: {
      data: ["Recovered by day"],
    },
    xAxis: {
      data: dates, // Display the dates into the X axis
    },
    yAxis: {},
    grid: {
      left: "19.5%",
      height: "auto",
      width: "auto",
    },
    series: [
      {
        name: "COVID-19 Recovered",
        type: "bar",
        itemStyle: {
          color: "#062f58",
        },
        emphasis: {
          itemStyle: {
            color: "#da530b",
          },
        },
        data: recovered, // Display the total number of COVID-19s recovered on the Y axis.
      },
    ],
  };
}

// Report by country charts ////////////////////////////////////////////////////////////////////////////////

// COVID-19 Country Cases chart

var chartCountryCases = echarts.init(
  document.getElementById("total-cases-country-chart")
); // Initiate ECharts
// Chart configuration
function optionCountryCases(
  countryDates,
  countryCases,
  projectedDates,
  projectedCases
) {
  return {
    title: {
      text: "Cases",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Current", "Projected"],
    },
    grid: {
      left: "19.5%",
      right: "12%"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: countryDates.concat(projectedDates), // Display the dates into the X axis
    },
    yAxis: {
      type: "value",
    },
    series: [
      // Display the data into the Y axis.
      {
        name: "Current",
        type: "line",
        data: countryCases, // Display the current cases on the Y axis
      },
      {
        name: "Projected",
        type: "line",
        data: projectedCases, // Display the projected cases on the Y axis when the checkbox is activated.
      },
    ],
  };
}

// COVID-19 Country deaths chart

var chartCountryDeaths = echarts.init(
  document.getElementById("total-country-deaths-chart")
); // Initiate ECharts
// Chart configuration
function optionCountryDeaths(countryDates, countryDeaths) {
  return {
    title: {
      text: "Deaths",
    },
    tooltip: {},
    legend: {
      data: ["Deaths by day"],
    },
    xAxis: {
      data: countryDates, // Display the dates into the X axis
    },
    yAxis: {},
    grid: {
      left: "19.5%",
      height: "auto",
      width: "auto",
    },
    series: [
      {
        name: "COVID-19 Country Deaths",
        type: "bar",
        itemStyle: {
          color: "#062f58",
        },
        emphasis: {
          itemStyle: {
            color: "#da530b",
          },
        },
        data: countryDeaths, // Display the total number of COVID-19s deaths on the Y axis.
      },
    ],
  };
}

// COVID-19 Country Recovered chart

var chartCountryRecovered = echarts.init(
  document.getElementById("total-country-recovered-chart")
); // Initiate ECharts
// Chart configuration
function optionCountryRecovered(countryDates, countryRecovered) {
  return {
    title: {
      text: "Recovered",
    },
    tooltip: {},
    legend: {
      data: ["Recovered by day"],
    },
    xAxis: {
      data: countryDates, // Display the dates into the X axis
    },
    yAxis: {},
    grid: {
      left: "19.5%",
      height: "auto",
      width: "auto",
    },
    series: [
      {
        name: "Country Recovered",
        type: "bar",
        itemStyle: {
          color: "#062f58",
        },
        emphasis: {
          itemStyle: {
            color: "#da530b",
          },
        },
        data: countryRecovered, // Display the total number of COVID-19s recovered on the Y axis.
      },
    ],
  };
}

// Comparison by country charts ////////////////////////////////////////////////////////////////////////////////

//COVID-19 comparison cases

var chartComparisonCases = echarts.init(
  document.getElementById("comparison-by-country-cases-chart")
); // Initiate ECharts
// Chart configuration
function optionComparisonCases(
  countriesDates,
  country1Cases,
  country2Cases,
  country1,
  country2
) {
  return {
    title: {
      text: "Cases",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Cases by day"],
    },
    grid: {
      left: "3%",
      right: "12%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: countriesDates, // Display the dates into the X axis
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      // Display the data into the Y axis.
      {
        name: country1, // Display to the first country name selected from the country drop-down list.
        type: "line",
        stack: "total",
        areaStyle: {},
        data: country1Cases, // Display the total number of COVID-19s cases for the first country selected from the country drop-down list.
      },
      {
        name: country2, // Display to the second country name selected from the country drop-down list.
        type: "line",
        stack: "total",
        areaStyle: {},
        data: country2Cases, // Display the total number of COVID-19s cases for the second country selected from the country drop-down list.
      },
    ],
  };
}

//COVID-19 comparison deaths

var chartComparisonDeaths = echarts.init(
  document.getElementById("comparison-by-country-deaths-chart")
); // Initiate ECharts
// Chart configuration
function optionComparisonDeaths(
  countriesDates,
  country1Deaths,
  country2Deaths,
  country1,
  country2
) {
  return {
    title: {
      text: "Deaths",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Deaths by day"],
    },
    grid: {
      left: "3%",
      right: "12%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: countriesDates, // Display the dates into the X axis
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      // Display the data into the Y axis.
      {
        name: country1, // Display to the first country name selected from the country drop-down list.
        type: "line",
        stack: "total",
        areaStyle: {},
        data: country1Deaths, // Display the total number of COVID-19s deaths for the first country selected from the country drop-down list.
      },
      {
        name: country2, // Display to the second country name selected from the country drop-down list.
        type: "line",
        stack: "total",
        areaStyle: {},
        data: country2Deaths, // Display the total number of COVID-19s deaths for the second country selected from the country drop-down list.
      },
    ],
  };
}

//COVID-19 comparison recovered

var chartComparisonRecovered = echarts.init(
  document.getElementById("comparison-by-country-recovered-chart")
); // Initiate ECharts
// Chart configuration
function optionComparisonRecovered(
  countriesDates,
  country1Recovered,
  country2Recovered,
  country1,
  country2
) {
  return {
    title: {
      text: "Recovered",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Recovered by day"],
    },
    grid: {
      left: "3%",
      right: "12%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: countriesDates, // Display the dates into the X axis
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      // Display the data into the Y axis.
      {
        name: country1, // Display to the first country name selected from the country drop-down list.
        type: "line",
        stack: "total",
        areaStyle: {},
        data: country1Recovered, // Display the total number of COVID-19s recovered for the first country selected from the country drop-down list.
      },
      {
        name: country2, // Display to the second country name selected from the country drop-down list.
        type: "line",
        stack: "total",
        areaStyle: {},
        data: country2Recovered, // Display the total number of COVID-19s recovered for the second country selected from the country drop-down list.
      },
    ],
  };
}

// To resize the charts and add responsiveness
// Solution from StackOverflow

$(window).on('resize', function(){
  if(chartWorldCases != null && chartWorldCases != undefined){
    chartWorldCases.resize();
  }
});

$(window).on('resize', function(){
  if(chartDeaths != null && chartDeaths != undefined){
    chartDeaths.resize();
  }
});

$(window).on('resize', function(){
  if(chartRecovered != null && chartRecovered != undefined){
    chartRecovered.resize();
  }
});

$(window).on('resize', function(){
  if(chartCountryCases != null && chartCountryCases != undefined){
    chartCountryCases.resize();
  }
});

$(window).on('resize', function(){
  if(chartCountryDeaths != null && chartCountryDeaths != undefined){
    chartCountryDeaths.resize();
  }
});

$(window).on('resize', function(){
  if(chartCountryRecovered != null && chartCountryRecovered != undefined){
    chartCountryRecovered.resize();
  }
});

$(window).on('resize', function(){
  if(chartComparisonCases != null && chartComparisonCases != undefined){
    chartComparisonCases.resize();
  }
});

$(window).on('resize', function(){
  if(chartComparisonDeaths != null && chartComparisonDeaths != undefined){
    chartComparisonDeaths.resize();
  }
});

$(window).on('resize', function(){
  if(chartComparisonRecovered != null && chartComparisonRecovered != undefined){
    chartComparisonRecovered.resize();
  }
});