var d = new Date()
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months =['Jan','Feb','Mar','Apr','May','Juny','July','Aug','Sep','Oct','Nov','Dec']
var dayshorts=['Sun','Mon','Tue','Wed','Thu','Fry','Sat'];

day=days[d.getDay()]
dayshort=dayshorts[d.getDay()]
month=months[d.getMonth()]


$(document).ready(function () {
    $('.date-dayname').text(day)


    $('.date-day').text(d.getDate()+' '+month+' '+d.getFullYear())
    $('#day1').text(dayshorts[d.getDay()%7])
    $('#day2').text(dayshorts[(d.getDay()+1)%7])
    $('#day3').text(dayshorts[(d.getDay()+2)%7])
    $('#day4').text(dayshorts[(d.getDay()+3)%7])



    $('form').submit(function (event){
        event.preventDefault();
        var input_val=$('input[type="text"]').val();
        weather_url=`https://api.openweathermap.org/data/2.5/weather?q=${input_val}&appid=5b9492dc8edd623d59a60815012a3d8f`;
        
        $.ajax({
            url: weather_url,
            method: 'GET',
            success: function (response) {
                var weather_main=response.weather[0].main;
                var main_temp=response.main.temp;
                main_temp-=273;
                main_temp=parseInt(main_temp)
                var main_humidity=response.main.humidity;
                var wind_speed=response.wind.speed;
                var wind_deg=response.wind.deg;
                
                
                

                $('.weather-desc').text(weather_main);
                $('.weather-temp').text(main_temp+'°C');
                $('.precipitation .value').text(wind_deg+" %");
                $('.humidity .value').text(main_humidity+' %');
                $('.wind .value').text(wind_speed+' km/h')
                $('#temp1').text(main_temp+'°C')
            },
            error: function (error_response) {
                alert('olke adi yanlisdir')
            }
        })
    })
});
