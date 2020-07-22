
module.exports.getDate = function (){
var today = new Date();
    var options = {
        weekday: 'long',
        //year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    var day = today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016

    return day;
}


module.exports.getDay =  function() {
    var today = new Date();
        var options = {
            weekday: 'long',
        };
    
        var day = today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
    
        return day;
    }

