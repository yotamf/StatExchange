function fillBarWithData(functionMap, commentsData) {
    $("#svg").empty();
    $(".axis").empty();
    $(".bar").empty();
    svg.selectAll("*").remove();

    x.domain(commentsData.map(function(d) { return d.date; }));
    y.domain([0, d3.max(commentsData, function(d) { return d.frequency; })]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Comments");

    svg.selectAll(".bar")
      .data(commentsData)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide); 
}