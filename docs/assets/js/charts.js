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

// Charts Library from echarts.apache.org

// COVID-19 world cases chart

  // based on prepared DOM, initialize echarts instance
  var myChart = echarts.init(document.getElementById('total-world-cases-chart'));

  // specify chart configuration item and data
  var option = {
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
      series: [{
          name: 'COVID-19 Cases',
          type: 'bar',
          data: [500, 560, 600, 555, 1200, 1256]
      }]
  };

  // use configuration item and data specified to show chart
  myChart.setOption(option);

// COVID-19 world deaths chart

   var myChart = echarts.init(document.getElementById('total-world-deaths-chart'));

   var option = {
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
       series: [{
           name: 'COVID-19 Deaths',
           type: 'bar',
           data: [500, 560, 600, 555, 1200, 1256]
       }]
   };
 
   myChart.setOption(option);

// COVID-19 world recovered chart

  var myChart = echarts.init(document.getElementById('total-world-recovered-chart'));

  var option = {
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
      series: [{
          name: 'COVID-19 Recovered',
          type: 'bar',
          data: [500, 560, 600, 555, 1200, 1256]
      }]
  };

  myChart.setOption(option);