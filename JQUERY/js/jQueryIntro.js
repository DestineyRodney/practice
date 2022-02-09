"use strict";

var student = $('#student').html(); //We then chained the html() method to get the contents of the HTML element as a string and then assigned that string to the variable content.
alert(student)
$('#student').css('color', 'blue').css('font-size', '40px').css('text-align', 'center').html('Happy Coding');

$('.danger').css('background-color','yellow');

var newalert = $('#alert').html();
alert(newalert);

$('.new').css('border', '1px solid blue');