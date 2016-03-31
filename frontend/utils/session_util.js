var SessionActions = require('../actions/session_actions');

var SessionUtil = {
  login: function(credentials, callback) {

    $.ajax({
      type: 'POST',
      url: '/api/session',
      dataType: 'json',
      data: credentials,
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      },
      error: function() {
        console.error("Failed AJAX Request");
      },
    });
  },
  logout: function() {
    $.ajax({
      type: 'DELETE',
      url: '/api/session',
      dataType: 'json',
      success: function() {
        SessionActions.logout();
      },
      error: function() {
        console.error("Failed AJAX Request");
      },
    });
  },
  fetchCurrentUser: function(completion) {
    $.ajax({
      type: 'GET',
      url: '/api/session',
      dataType: 'json',
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      error: function() {
        console.log("Failed AJAX Request");
      },
      complete: function () {
        completion && completion();
      }
    });
  }
};

module.exports = SessionUtil;