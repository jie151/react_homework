import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Greeting from "./greet";

function LoginButton(props) {
  return (
    <Button
      onClick={props.onClick}
      type="submit"
      variant="outlined"
      color="primary"
    >
      <Link color="inherit">Sign In</Link>
    </Button>
  );
}

function LogoutButton(props) {
  return (
    <Button
      onClick={props.onClick}
      type="submit"
      variant="outlined"
      color="secondary"
    >
      <Link color="inherit">Logout</Link>
    </Button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
