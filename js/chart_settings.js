function setupChart() {
    if (window.screen.availWidth < 500) {
        margin = {top: 40, right: 5, bottom: 30, left: 5},
            width = window.screen.availWidth - margin.left - margin.right,
            height = window.screen.availHeight/3 - margin.top - margin.bottom;
    } else {
        margin = {top: 40, right: 20, bottom: 30, left: 40},
            width = window.screen.availWidth/2 - margin.left - margin.right,
            height = window.screen.height/3 - margin.top - margin.bottom;
    }

    x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);
    y = d3.scale.linear()
        .range([height, 0]);
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");
    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");
    tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        return "<strong>comments:</strong> <span style='color:red'>" + d.frequency + "</span>";
      })
    svg = d3.select("#statsCol").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svg.call(tip);
};