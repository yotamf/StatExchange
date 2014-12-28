function FunctionMap() {
    this.GetUserId   = window.getUserIdByDisplayName;
    this.GetUserData = window.loadCommentData;
    this.ProcessData = window.countCommentsPerDay;
    this.DisplayData = window.fillBarWithData;
};