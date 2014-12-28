function searchUserOnEdit(functionMap, maxPagesToFetch) {
var options = {
    callback: function (value) { value = value.trim(); if (value != "") {  functionMap.GetUserId(functionMap, value, maxPagesToFetch); } },
    wait: 750,
    highlight: true,
    captureLength: -1,
    event: 'typingDone'
};
    try {
      $("#userfilter").typeWatch( options );
    } catch (err) {
      window.alert(err.message);
    }
};
