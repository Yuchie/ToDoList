var image_onclick = function (event) {
    window.alert('Hello World !');
};
 
var document_onready = function (event) {
    $('#img').on('click', image_onclick);
};
 
$(document).ready(document_onready);