var React = require('react'),
    SessionAPI = require('../../utils/session_util');

var AccountBadge = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleClick: function() {
    SessionAPI.logout();
    this.context.router.push("/");
  },
  render: function () {
    return (
      <div className='navbar-account-box'
           onClick={this.handleClick}>
           <img src={this.props.user.image} />
           <span className='navbar-text-logout'>Logout</span>
      </div>
    );
  },
});

module.exports = AccountBadge;
