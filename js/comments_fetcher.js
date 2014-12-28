function loadCommentData(functionMap, userId, maxPagesToDownload=-1, page=1, comments=[]) {
    "use strict";
    d3.json("http://api.stackexchange.com/2.2/users/"+userId+"/comments?site=stackoverflow", function(error, json) {
    //d3.json("./comments_22656.json", function (error, json) {
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

