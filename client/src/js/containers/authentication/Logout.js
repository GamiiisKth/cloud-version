/**
 * Created by se90514 on 2017-07-16.
 */

import React, { PropTypes } from "react";

import Auth from "../../modules/Auth";

export default class Logout extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.context.router.history.replace("/");
  }

  render() {
    Auth.deauthenticateUser();
    return null;
  }
}

Logout.contextTypes = {
  router: PropTypes.object.isRequired
};

//window.location.reload()
