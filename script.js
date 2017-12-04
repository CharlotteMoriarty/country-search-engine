$(function(){
    var url = 'https://restcountries.eu/rest/v1/name/';

    var countriesList = $('#countries');
    $('#search').click(searchCountries);
    function searchCountries() {
        var countryName = $('#country-name').val();
        if(!countryName.length) countryName = 'Poland';
        $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
        countriesList.empty();
    }
   
    function showCountriesList(resp) {      
        resp.forEach(function(item){
           
            $('#countries').text(item.name).appendTo(countriesList);     
            $('<li id="capital">').text(item.capital).appendTo(countriesList);
            $('<li id="languages">').text(item.languages).appendTo(countriesList);
            $('<li id="borders">').text(item.borders).appendTo(countriesList);
            $('<li id="currencies">').text(item.currencies).appendTo(countriesList);
            $('<li id="latlng">').text(item.latlng).appendTo(countriesList);
        });
    };
    
});
