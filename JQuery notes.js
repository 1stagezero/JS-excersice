// Gives you the DOM element without the outside wrapper you want
$('.classSelector').html()

// Gives you the outside wrapper as well only for the first element
var something = $('.classSelector')[0].outerHTML;

// Gives you the outer HTML for all the selected elements
var html = '';
$('.classSelector').each(function () {
    html += this.outerHTML;
});

//Or if you need a one liner for the previous code
$('.classSelector').get().map(function(v){return v.outerHTML}).join('');