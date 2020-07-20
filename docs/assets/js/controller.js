let total_world_report;
let projected_cases_data;

$( document ).ready(function() {
    // Country Dropdown from Country Select JS Library

    // Country Dropdown for Report by Country

    $("#country").countrySelect({
        defaultCountry: "ie",
        preferredCountries: ['ie', 'gb', 'us','ru'],
        responsiveDropdown: true
    });

    // Country Dropdown for Comparison by Country

    $("#country1").countrySelect({
        defaultCountry: "ie",
        preferredCountries: ['ie','us','ru'],
        responsiveDropdown: true
    });

    $("#country2").countrySelect({
        defaultCountry: "us",
        preferredCountries: ['ie','us','ru'],
        responsiveDropdown: true
    });
    
    response = $.get("https://covid19-api.org/api/timeline", function(data, status){
         total_world_report = data;
         return data;
      }).done(function() {
        $('#from').datepicker();
        $('#from').datepicker('setDate', '-7');
        $('#to').datepicker();
        $('#to').datepicker('setDate', 'today');
        filteredWorldData = filterJSONbyDate(total_world_report, $("#from").datepicker("getDate"), $("#to").datepicker("getDate"));
        dateArray = getArrayFromJSONbyKey(filteredWorldData, "last_update", true);
        totalCasesArray = getArrayFromJSONbyKey(filteredWorldData, "total_cases");
        totalDeathsArray = getArrayFromJSONbyKey(filteredWorldData, "total_deaths");
        totalRecoveredArray = getArrayFromJSONbyKey(filteredWorldData, "total_recovered");
        document.getElementById("total-world-cases").innerHTML = numberWithCommas(totalCasesArray[0]);
        chartWorldCases.setOption(optionWorldCases(dateArray.reverse(), totalCasesArray.reverse())); 
        document.getElementById("total-world-deaths").innerHTML = numberWithCommas(totalDeathsArray[0]);
        chartDeaths.setOption(optionDeaths(dateArray, totalDeathsArray.reverse())); 
        document.getElementById("total-world-recovered").innerHTML = numberWithCommas(totalRecoveredArray[0]); 
        chartRecovered.setOption(optionRecovered(dateArray, totalRecoveredArray.reverse()));
      });


    // Report by country
    $('#from1').datepicker();
    $('#from1').datepicker('setDate', '-7');
    $('#to1').datepicker();
    $('#to1').datepicker('setDate', 'today');
    getCountryDatabyDate();

    // Comparison by countries
    $('#from2').datepicker();
    $('#from2').datepicker('setDate', '-7');
    $('#to2').datepicker();
    $('#to2').datepicker('setDate', 'today');
    renderComparisonByCountriesChart()

});

function GetFormattedDate(date) {
    var dateTime = new Date(date);
    var month = (dateTime.getMonth() + 1 < 10) ? '0' + (dateTime.getMonth() + 1) : dateTime.getMonth() + 1;
    var day = (dateTime.getDate() + 1 < 10) ? '0' + (dateTime.getDate() + 1) : dateTime.getDate() + 1;
    var year = dateTime.getFullYear();
    return year + "-" + month + "-" + day;
}

function getCountryDatabyDate(){

    country_code = $("#country_code").val();
    from = GetFormattedDate($("#from1").val());
    to = GetFormattedDate($("#to1").val());

    var params = { countryCode: country_code, startDate: from, endDate: to };
    var str = jQuery.param( params );

    response = $.get("https://api.coronatracker.com/v3/analytics/trend/country?" + str, function(data, status){
        
     }).done(function(data) {
        typeof(data) == "string"? data = JSON.parse(data): console.log("No need to convert into JSON")
     
        countryDateArray = getArrayFromJSONbyKey(data, "last_updated", true);
        countryCasesArray = getArrayFromJSONbyKey(data, "total_confirmed");
        countryDeathsArray = getArrayFromJSONbyKey(data, "total_deaths");
        countryRecoveredArray = getArrayFromJSONbyKey(data, "total_recovered");
        chartCountryCases.setOption(optionCountryCases (countryDateArray, countryCasesArray));
        document.getElementById("total-country-cases").innerHTML = numberWithCommas(countryCasesArray.reverse()[0]);
        chartCountryDeaths.setOption(optionCountryDeaths (countryDateArray, countryDeathsArray));
        document.getElementById("total-country-deaths").innerHTML = numberWithCommas(countryDeathsArray.reverse()[0]);
        chartCountryRecovered.setOption(optionCountryRecovered(countryDateArray, countryRecoveredArray));
        document.getElementById("total-country-recovered").innerHTML = numberWithCommas(countryRecoveredArray.reverse()[0]);
     });
}

function renderComparisonByCountriesChart(){

    country_code1 = $("#country1_code").val();
    country_code2 = $("#country2_code").val();
    from = GetFormattedDate($("#from2").val());
    to = GetFormattedDate($("#to2").val());

    var params = { countryCode: country_code1, startDate: from, endDate: to };
    var payloadFirstCountry = jQuery.param( params );
    params = { countryCode: country_code2, startDate: from, endDate: to };
    var payloadSecondCountry = jQuery.param( params );

    response = $.get("https://api.coronatracker.com/v3/analytics/trend/country?" + payloadFirstCountry, function(data, status){
        dataFirstCountry = data;
     }).done(function(data) {
        dataFirstCountry = data;
        $.get("https://api.coronatracker.com/v3/analytics/trend/country?" + payloadSecondCountry, function(data) {
            dataSecondCountry = data;
        }).done(function(data) {
            dataSecondCountry = data;
            typeof(dataFirstCountry) == "string"? dataFirstCountry = JSON.parse(dataFirstCountry): console.log("No need to convert into JSON")
            typeof(dataSecondCountry) == "string"? dataSecondCountry = JSON.parse(dataSecondCountry): console.log("No need to convert into JSON")
            countryDateArray = getArrayFromJSONbyKey(dataFirstCountry, "last_updated", true);
            // First country
            firstCountryCasesArray = getArrayFromJSONbyKey(dataFirstCountry, "total_confirmed");
            firstCountryDeathsArray = getArrayFromJSONbyKey(dataFirstCountry, "total_deaths");
            firstCountryRecoveredArray = getArrayFromJSONbyKey(dataFirstCountry, "total_recovered");
            firstCountryName = getArrayFromJSONbyKey(dataFirstCountry, "country");
            document.getElementById("country1-cases").innerHTML = firstCountryName[0];
            document.getElementById("country1-deaths").innerHTML = firstCountryName[0];
            document.getElementById("country1-recovered").innerHTML = firstCountryName[0];
            // Second Country
            secondCountryCasesArray = getArrayFromJSONbyKey(dataSecondCountry, "total_confirmed");
            secondCountryDeathsArray = getArrayFromJSONbyKey(dataSecondCountry, "total_deaths");
            secondCountryRecoveredArray = getArrayFromJSONbyKey(dataSecondCountry, "total_recovered");
            secondCountryName = getArrayFromJSONbyKey(dataSecondCountry, "country");
            document.getElementById("country2-cases").innerHTML = secondCountryName[0];
            document.getElementById("country2-deaths").innerHTML = secondCountryName[0];
            document.getElementById("country2-recovered").innerHTML = secondCountryName[0];
           
            // Render charts
            chartComparisonCases.setOption(optionComparisonCases (countryDateArray, firstCountryCasesArray, secondCountryCasesArray, firstCountryName[0], secondCountryName[0]));
            chartComparisonDeaths.setOption(optionComparisonDeaths (countryDateArray, firstCountryDeathsArray, secondCountryDeathsArray, firstCountryName[0], secondCountryName[0]));
            chartComparisonRecovered.setOption(optionComparisonRecovered (countryDateArray, firstCountryRecoveredArray, secondCountryRecoveredArray, firstCountryName[0], secondCountryName[0]));
        })
     });
}

document.getElementById("projected-cases").addEventListener("click", projectedCasesCheckBox);

function getProjectedCases (){

    country_code = $("#country_code").val();

    response = $.get("https://covid19-api.org/api/prediction/" + country_code, function(data, status){
        console.log(data);
        projected_cases_data = data;
     }).done(function() {
        countryDateProjectedCases = getArrayFromJSONbyKey(projected_cases_data, "date");
        countryProjectedCases = getArrayFromJSONbyKey(projected_cases_data, "cases");
        let tempArray = []
        for (let index = 0; index < countryCasesArray.length; index++) {
            tempArray.push(null)            
        }
        let projectedCases = tempArray.concat(countryProjectedCases);
        chartCountryCases.setOption(optionCountryCases (countryDateArray, countryCasesArray.reverse(), countryDateProjectedCases, projectedCases));
     });
}


function projectedCasesCheckBox (){
   if ( document.getElementById("projected-cases").checked ){
    getProjectedCases();
   } else{
       getCountryDatabyDate();
   }  
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
        if (splitdate) selection = selection.split("T")[0]
        temArray.push(selection);
    })
    return temArray;
}

// function from StackOverflow

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
