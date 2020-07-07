// Datepicker with select a date range, resource from jQuery UI version 1.12

// Globally Report Datepicker

let filteredWorldData;
let dateArray;
let totalCasesArray;
let totalDeathsArray;
let totalRecoveredArray;

$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
          filteredWorldData = filterJSONbyDate(total_world_report, getDate( this ), $("#to").datepicker("getDate"));
          dateArray = getArrayFromJSONbyKey(filteredWorldData, "last_update", true);
          totalCasesArray = getArrayFromJSONbyKey(filteredWorldData, "total_cases")
          totalDeathsArray = getArrayFromJSONbyKey(filteredWorldData, "total_deaths");
          totalRecoveredArray = getArrayFromJSONbyKey(filteredWorldData, "total_recovered");
          chartWorldCases.setOption(optionWorldCases(dateArray.reverse(), totalCasesArray.reverse()));
          chartDeaths.setOption(optionDeaths(dateArray.reverse(), totalDeathsArray.reverse())); 
          chartRecovered.setOption(optionRecovered(dateArray.reverse(), totalRecoveredArray.reverse()));
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
        filteredWorldData = filterJSONbyDate(total_world_report, $("#from").datepicker("getDate"), getDate( this ));
        dateArray = getArrayFromJSONbyKey(filteredWorldData, "last_update", true);
        totalCasesArray = getArrayFromJSONbyKey(filteredWorldData, "total_cases");
        totalDeathsArray = getArrayFromJSONbyKey(filteredWorldData, "total_deaths");
        totalRecoveredArray = getArrayFromJSONbyKey(filteredWorldData, "total_recovered");
        document.getElementById("total-world-cases").innerHTML = numberWithCommas(totalCasesArray[0]);
        chartWorldCases.setOption(optionWorldCases(dateArray.reverse(), totalCasesArray.reverse())); 
        document.getElementById("total-world-deaths").innerHTML = numberWithCommas(totalDeathsArray[0]);
        chartDeaths.setOption(optionDeaths(dateArray.reverse(), totalDeathsArray.reverse())); 
        document.getElementById("total-world-recovered").innerHTML = numberWithCommas(totalRecoveredArray[0]); 
        chartRecovered.setOption(optionRecovered(dateArray.reverse(), totalRecoveredArray.reverse()));     
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );

  
  // Report by Country Datepicker

  $( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from1" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to1" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );

// Charts Library from https://echarts.apache.org/

// COVID-19 world cases chart

  var chartWorldCases = echarts.init(document.getElementById('total-world-cases-chart'));

  function optionWorldCases(dates, cases){
      return {
      baseOption: {
        title: {
            text: 'COVID-19 World Cases'
        },
        tooltip: {},
        legend: {
            data:['Cases by day']
        },
        xAxis: {
            data: dates

        },
        yAxis: {},
        grid: {
          left: "19.5%",
          height: "auto",
          width: "auto"
        },
        series: [{
            name: 'COVID-19 Cases',
            type: 'bar',
            itemStyle: {
              color: '#062f58'
          },
        emphasis: {
            itemStyle: {
              color: '#da530b',
            }
        },
            data: cases
        }],
      },
  };
}

// COVID-19 world deaths chart
 
   var chartDeaths = echarts.init(document.getElementById('total-world-deaths-chart'));

   function optionDeaths (dates, deaths) {
     return {
       title: {
           text: 'COVID-19 World Deaths'
       },
       tooltip: {},
       legend: {
           data:['Deaths by day']
       },
       xAxis: {
           data: dates
       },
       yAxis: {},
       grid: {
        left: "19.5%",
        height: "auto",
        width: "auto"
      },
       series: [{
           name: 'COVID-19 Deaths',
           type: 'bar',
           itemStyle: {
            color: '#062f58'
        },
        emphasis: {
          itemStyle: {
            color: '#da530b',
          }
        },
           data: deaths
       }]
    }
   };
 

// COVID-19 world recovered chart

  var chartRecovered = echarts.init(document.getElementById('total-world-recovered-chart'));

  function optionRecovered (dates, recovered) {
    return {
      title: {
          text: 'COVID-19 World Recovered'
      },
      tooltip: {},
      legend: {
          data:['Recovered by day']
      },
      xAxis: {
          data: dates
      },
      yAxis: {},
      grid: {
        left: "19.5%",
        height: "auto",
        width: "auto"
      },
      series: [{
          name: 'COVID-19 Recovered',
          type: 'bar',
          itemStyle: {
            color: '#062f58'
        },
        emphasis: {
            itemStyle: {
              color: '#da530b',
            }
        },
          data: recovered
      }]
    }
  };

// COVID-19 Country Cases chart

var chartCountryCases = echarts.init(document.getElementById('total-cases-country-chart'));

var optionCountryCases = {
    title: {
      text: 'Country Cases'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Current Cases', 'Projected Cases']
    },
    grid: {
      left: "19.5%",
      height: "auto",
      width: "auto"
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ["05/07/2020","06/07/2020","07/07/2020","08/07/2020","09/07/2020","10/07/2020"]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Current Cases',
        type: 'line',
        data: [500, 560, 600, 555, 1200, 1256]
      },
      {
        name: 'Projected Cases',
        type: 'line',
        data: [1256, 2200, 3500, 5000, 6000]
      },
    ]
};

chartCountryCases.setOption(optionCountryCases);


// COVID-19 Country deaths chart
 
var chartCountryDeaths = echarts.init(document.getElementById('total-country-deaths-chart'));

var optionCountryDeaths = {
      title: {
          text: 'Country Deaths'
      },
      tooltip: {},
      legend: {
          data:['Deaths by day']
      },
      xAxis: {
          data: ["05/07/2020","06/07/2020","07/07/2020","08/07/2020","09/07/2020","10/07/2020"]
      },
      yAxis: {},
      grid: {
        left: "19.5%",
        height: "auto",
        width: "auto"
      },
      series: [{
          name: 'COVID-19 Country Deaths',
          type: 'bar',
          itemStyle: {
            color: '#062f58'
        },
        emphasis: {
            itemStyle: {
              color: '#da530b',
            }
        },
          data: [500, 560, 600, 555, 1200, 1256]
      }]
};

chartCountryDeaths.setOption(optionCountryDeaths);

// COVID-19 Country Recovered chart
 
var chartCountryRecovered = echarts.init(document.getElementById('total-country-recovered-chart'));

var optionCountryRecovered = {
      title: {
          text: 'Country Recovered'
      },
      tooltip: {},
      legend: {
          data:['Recovered by day']
      },
      xAxis: {
          data: ["05/07/2020","06/07/2020","07/07/2020","08/07/2020","09/07/2020","10/07/2020"]
      },
      yAxis: {},
      grid: {
        left: "19.5%",
        height: "auto",
        width: "auto"
      },
      series: [{
          name: 'Country Recovered',
          type: 'bar',
          itemStyle: {
            color: '#062f58'
        },
        emphasis: {
            itemStyle: {
              color: '#da530b',
            }
        },
          data: [500, 560, 600, 555, 1200, 1256]
      }]
};

chartCountryRecovered.setOption(optionCountryRecovered);