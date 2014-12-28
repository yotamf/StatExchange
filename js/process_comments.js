function countCommentsPerDay(functionMap, comments) {
    var format = d3.time.format("%A"); // Day of week

    var commentsPerDay = {};
    comments.forEach(function (d) {
        var creation_date = format(new Date(d.creation_date * 1000));

        if (typeof commentsPerDay[creation_date] === 'undefined') {
            commentsPerDay[creation_date] = 1;
        } else {
            commentsPerDay[creation_date] = commentsPerDay[creation_date] + 1;
        }
    });

    var arr = [];
    Object.keys(commentsPerDay).forEach( function (key) { var data = {}; data.date = key; data.frequency = commentsPerDay[key]; arr.push(data); } );
    
    arr.sort(function(d1, d2) { 
            daysOfTheWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            return daysOfTheWeek.indexOf(d1.date) > daysOfTheWeek.indexOf(d2.date); }); // Ascending order
    
    return arr;
};
