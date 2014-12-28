function FunctionMap() {
    this.GetUserId   = getUserIdByDisplayName;
    this.GetUserData = loadCommentData;
    this.ProcessData = countCommentsPerDay;
    this.DisplayData = fillBarWithData;
};