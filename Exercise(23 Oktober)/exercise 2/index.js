// handle login class
class LoginControl extends React.Component {
    constructor (props) {
        super (props);
        this.handleLoginClick= this.handleLoginClick.bind(this);
        this.handleLogoutclick
        this.handleLogoutclick.bind(this);
        this.state = {isLoggedIn: false}; // private data
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    
    handleLogoutclick() {
        this.setState({isLoggedIn: false });
    }

    render() {
        const isLoggedIn= this.state.isLoggedIn;
        let button;
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

// render komponen ke RealDOM
ReactDOM.render (<LoginControl />, document.getElementById("app"));