// Datepicker with select a date range, resource from jQuery UI version 1.12

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
        }),
      to = $( "#to" ).datepicker({
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

  var optionWorldCases = {
      baseOption: {
        title: {
            text: 'COVID-19 World Cases'
        },
        tooltip: {},
        legend: {
            data:['Cases by day']
        },
        xAxis: {
            data: ["05/07/2020","06/07/2020","07/07/2020","08/07/2020","09/07/2020","10/07/2020"]
        },
        yAxis: {},
        grid: {
          left: "15%",
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
            data: [500, 560, 600, 555, 1200, 1256]
        }],
      },
  };

  chartWorldCases.setOption(optionWorldCases);

// COVID-19 world deaths chart
 
   var chartDeaths = echarts.init(document.getElementById('total-world-deaths-chart'));

   var optionDeaths = {
       title: {
           text: 'COVID-19 World Deaths'
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
        left: "15%",
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
           data: [500, 560, 600, 555, 1200, 1256]
       }]
   };
 
   chartDeaths.setOption(optionDeaths);

// COVID-19 world recovered chart

  var chartRecovered = echarts.init(document.getElementById('total-world-recovered-chart'));

  var optionRecovered = {
      title: {
          text: 'COVID-19 World Recovered'
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
        left: "15%",
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
          data: [500, 560, 600, 555, 1200, 1256]
      }]
  };

  chartRecovered.setOption(optionRecovered);