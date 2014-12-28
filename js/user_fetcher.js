/* Takes the firsr id it finds for the given display name */
function getUserIdByDisplayName (functionMap, displayName, maxPagesToDownload=-1, page=1) {
  var users = new Array();
  var hasMore = true;
  var stop = false;
  var quota_remaining = -1;
  var res = $.ajax({
    type: "GET",
    //url: "users.json",
    url: "http://api.stackexchange.com/2.2/users?site=stackoverflow&inname="+displayName+"&page="+page,
    dataType: "json",
    async: true,
    error: function (jqXHR, textStatus, errorThrown) {
      stop = true;
    },
    fail: function (jqXHR, textStatus, errorThrown) {
      stop = true;
    },
    success: function (jsonData) {
        try {
            $.each(jsonData.items, function(key, val) {
                users[val.display_name] = val.user_id;
            });

            hasMore = jsonData.has_more;
            quota_remaining = jsonData.quota_remaining;
        } catch (err) {
            stop = true;
        }
    },
    complete: function () {
        if (typeof users[displayName] != 'undefined') {
           // Call next step
           functionMap.GetUserData(functionMap, users[displayName], maxPagesToDownload);
        } else {
          if (hasMore && (stop == false) && (maxPagesToDownload == -1 || page < maxPagesToDownload)) {
              getUserIdByDisplayName(functionMap, displayName, maxPagesToDownload, page);
          } else {
              if (quota_remaining == 0) {
                  window.alert("No more quota");
              } else {
                window.alert("User not found");
              }
          }
        }
    }
  });
};