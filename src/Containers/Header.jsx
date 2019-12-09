import React,{Component} from "react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import { connect } from "react-redux";

alertify.set('notifier', 'position', 'top-center');

// const Header = (props) => {
class Header extends Component{

    state = {
        activeTabClassName: '',
    }
    render(){
        const { user } = this.props;
        const { activeTabClassName } = this.state;
        return(
            <React.Fragment>
                <header className="header_sticky ">
                <div className="container">
                {/* <!--Navbar --> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <div id="logo_home">
                            <h1>
                                <Link to="/" title="Find a Doctor">Find doctor</Link>
                            </h1>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav-item-margin-top">
                            <a className={(this.state.activeTabClassName === "#/") ? " nav-link active-nav" : "nav-link"} href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item nav-item-margin-top">
                            <Link className={(this.state.activeTabClassName === "#/doctor_list") ? " nav-link active-nav" : "nav-link"} to="/doctor_list">Doctors</Link>
                        </li>
                        <li className="nav-item nav-item-margin-top">
                            <Link className={(this.state.activeTabClassName === "#/specialization_list") ? " nav-link active-nav" : "nav-link"} to="/specialization_list">Specializations</Link>
                        </li>
                        <li className="nav-item nav-item-margin-top">
                            <Link className={(this.state.activeTabClassName === "#/clinic_list") ? " nav-link active-nav" : "nav-link"} to="/clinic_list">Clinics</Link>
                        </li>
                        <li className="nav-item nav-item-margin-top dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="about" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            About Us
                            </a>
                            <div className="dropdown-menu" aria-labelledby="about">
                                <Link className="dropdown-item" to="/about_us">About</Link>
                                <Link className="dropdown-item" to="/contacts">Contact Us</Link>
                            </div>
                        </li>
                        {(user != null)? 
                        <li className="nav-item nav-item-margin-top dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="loged-in" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {user.customer.name}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="loged-in">
                                <Link className="dropdown-item" to="/approved_appointments">My Appointments</Link>
                                <Link className="dropdown-item" to="/pending_appointments">Pending Appointments</Link>
                                <Link className="dropdown-item" to="/customer_profile">My Profile</Link>
                                <Link className="dropdown-item" to="/current_lab_test">My Test</Link>
                                <Link className="dropdown-item" to="/allergy_notes">Allergies</Link>
                                <Link className="dropdown-item" to="/riskfactor_notes">Risk Factor</Link>
                                <Link className="dropdown-item" to="/doctor_notes">Doctor Notes</Link>
                                <Link className="dropdown-item" to="/logout">Logout</Link>
                            </div>
                        </li>
                        :
                        <React.Fragment>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="signup-nav" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="nav-icons-span"><i className="pe-7s-add-user user-logo"></i><span>Register</span></div>
                            </a>
                            <div className="dropdown-menu m-top" aria-labelledby="signup-nav">
                                <Link className="dropdown-item" to="/register">Customer Register</Link>
                                <Link className="dropdown-item"   to="/join_doctor">Doctor Register</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="login-nav" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="nav-icons-span"><i className="pe-7s-user user-logo"></i><span>Login</span></div>
                            </a>
                            <div className="dropdown-menu m-top" aria-labelledby="login-nav">
                                <Link className="dropdown-item" to="/login">Customer Login</Link>
                                <Link className="dropdown-item" to="/doctor_signin">Doctor Login</Link>
                            </div>
                        </li>
                        </React.Fragment>
                        }
                        </ul>
                    </div>
                </nav>
                {/* <!--/.Navbar --> */}
                </div>
            </header>
            </React.Fragment>
        );
    }
};
const mapStateToProps = state => {
    return {
        user: state.AuthReducers.user
    };
};


export default connect(
    mapStateToProps,
    null
)(Header);
