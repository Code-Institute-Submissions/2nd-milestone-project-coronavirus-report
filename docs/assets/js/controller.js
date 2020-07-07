let total_world_report;
let data_by_country;

$( document ).ready(function() {
    $("#country").countrySelect({
        defaultCountry: "ie",
        preferredCountries: ['ie', 'gb', 'us','ru'],
        responsiveDropdown: true
    });
    response = $.get("https://covid19-api.org/api/timeline", function(data, status){
         total_world_report = data;
         return data;
      });

    //   console.log(response);
    //   console.log(total_world_report);
});

function getCountryDatabyDate(){

    country_code = $("#country_code").val();
    from = $("#from1").val();
    to = $("#to1").val();

    var params = { countryCode: country_code, startDate: from, endDate: to };
    var str = jQuery.param( params );

    response = $.get("http://api.coronatracker.com/v3/analytics/trend/country?" + str, function(data, status){
        data_by_country = data;
     });
}


function filterJSONbyDate(data, startDate, endDate) {
    var filteredData = data.filter(a => {
      var date = new Date(a.last_update);
      return (date >= startDate && date <= endDate);
    });
    return filteredData;
}

function getArrayFromJSONbyKey(data, key, splitdate) {
    let temArray = [];
    data.filter(function (a) {
        var selection = a[key] || {};
        // extract all date strings
        // filteredArray = Object.keys(selection);
        if (splitdate) selection = selection.split("T")[0]
        temArray.push(selection);
    })
    return temArray;
}

// function from StackOverflow

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
