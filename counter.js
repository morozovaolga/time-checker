var date = new Date();
var monthes = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
var day = date.getDate(),
 month = monthes[date.getMonth()],
 year = date.getFullYear(),
 hours = date.getHours();

var seminarDate = date.getDate()+1;
if (hours >= 20) { 
$(".kblock").html("<p>" + seminarDate + " " + month + ", 20:00 МСК<\/p>");
}
else {
    $(".kblock").html("<p>" + day + " " + month + ", 20:00 МСК<\/p>");
}
