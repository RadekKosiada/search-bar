var jqXHR, timeoutId;
//
var input = $('input');

var results = $('#results');

input.on('input', function(e) {
    //fixing asynchronous behaviour
    if(jqXHR) {
        console.log('aborting...');
        jqXHR.abort();
    }
    //throttling, delaying the number of requests in order to eliminate pointless requests (i.e. when users change their mind);
    timeoutId = setTimeout(jqXHR, 250);
    if(timeoutId) {
        console.log('clearing the timeout');
        clearTimeout(timeoutId);
    }

    var val = input.val();
    var jqXHR = $.ajax({
        url: 'https://flame-egg.glitch.me/',
        data: {
            q: e.target.value
        },
        success: function(data) {
            console.log(data);
            var resultHtml ='';
            if (data.length >0) {
                data.forEach(function(country) {
                    resultHtml+='<div class="result">' + country + '</div>';
                    console.log(resultHtml);
                });
            } else if (data.length ==0 && e.target.value !== '') {
                resultHtml = '<div id="no-result">No results</div>';
            } else if (e.target.value == ''){
                console.log("empty");
                resultHtml = '';
            }

            results.html(resultHtml);

            var divResult = $('.result');

            divResult.on('mouseenter', function(e) {
                $(e.target).addClass('highlight');
            }).on('mouseleave', function(e) {
                $(e.target).removeClass('highlight');
            }).on('mousedown', function gettingCountry (e) {
                val = $(e.target).text();
                input.val(val);
                results.html('');
            });

            input.on('blur', function(){
                results.css('visibility', 'hidden');
            }).on('focus', function() {
                results.css('visibility', 'visible');
            });
        }
    });

}).on('keydown', function (e) {
    var highlighted = $('.highlight');
    var divResult = $('.result');
    if( e.keyCode ==40 ) { //DOWN ARROW
        console.log(highlighted);
        if(highlighted.length ==0) {
            divResult.first().addClass('highlight');
        } else if (divResult.last().hasClass('highlight')) {
            return;
        } else {
            highlighted.first().removeClass('highlight');//removes the highlight class from the result that has it
            highlighted.next().addClass('highlight');
            console.log('div length: ' + divResult.length);
        }
    } else if (e.keyCode == 38) { //UP ARROW
        if(highlighted.length ==0) {
            divResult.last().addClass('highlight');
        } else if (divResult.first().hasClass('highlight')) {
            return;
        } else {
            highlighted.prev().addClass('highlight');
            highlighted.removeClass();
        }
    } else if(e.keyCode ==13) {
        input.val(highlighted.text());
        results.html('');
    }
});

var infoClicked = false;
$('#click-more').on('click', function() {
    if (!infoClicked) {
        $('#more-information').css('visibility', 'visible');
        $('#click-more').html('click for less information');
        infoClicked = !infoClicked;
    } else {
        $('#more-information').css('visibility', 'hidden');
        $('#click-more').html('click for more information');
        infoClicked = !infoClicked;
    }


});
