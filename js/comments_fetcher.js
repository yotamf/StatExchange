function loadCommentData(functionMap, userId, maxPagesToDownload, page, comments) {
  if (typeof(maxPagesToDownload) === 'undefined') maxPagesToDownload = -1;
  if (typeof(page) === 'undefined') page = 1;
  if (typeof(comments) === 'undefined') comments = [];
    
  "use strict";
    d3.json("http://api.stackexchange.com/2.2/users/"+userId+"/comments?site=stackoverflow", function(error, json) {
    //d3.json("./data/comments_22656.json", function (error, json) {
        if (error) { return console.warn(error); }

        json.items.forEach(function (d) {
            comments.push(d);
        });
        if (json.has_more && (maxPagesToDownload == -1 || page < maxPagesToDownload)) {
            loadCommentData(functionMap, userId, maxPagesToDownload, page + 1, comments); // read the next user comment pages
        } else {
            var processedData = functionMap.ProcessData(functionMap, comments);
            functionMap.DisplayData(functionMap, processedData);
        }
    });
};

