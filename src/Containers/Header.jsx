import React,{Component} from "react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import { connect } from "react-redux";

alertify.set('notifier', 'position', 'top-center');

// const Header = (props) => {
class Header extends Component{

    renderRefreshPage = (e)=>{
        if(e.target.href == window.location.href){
            window.location.reload();
        }
    }
        render(){
            const { user } = this.props;
        return(
            <React.Fragment>
                <header className="header_sticky ">
                <div className="container">
                {/* <!--Navbar --> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#" onClick={this.renderRefreshPage}>
                        <div id="logo_home">
                            <h1>
                                <Link to="/" onClick={this.renderRefreshPage} title="Find a Doctor">Find doctor</Link>
                            </h1>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav-item-margin-top">
                            <Link className="nav-link" to="/" onClick={this.renderRefreshPage}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item nav-item-margin-top">
                            <Link className="nav-link" to="/doctor_list" onClick={this.renderRefreshPage}>Doctors</Link>
                        </li>
                        <li className="nav-item nav-item-margin-top">
                            <Link className="nav-link" to="/specialization_list" onClick={this.renderRefreshPage}>Specializations</Link>
                        </li>
                        <li className="nav-item nav-item-margin-top">
                            <Link className="nav-link" to="/clinic_list" onClick={this.renderRefreshPage}>Clinics</Link>
                        </li>
                        <li className="nav-item nav-item-margin-top dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="about" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            About Us
                            </a>
                            <div className="dropdown-menu" aria-labelledby="about">
                                <Link className="dropdown-item" to="/about_us" onClick={this.renderRefreshPage}>About</Link>
                                <Link className="dropdown-item" to="/contacts" onClick={this.renderRefreshPage}>Contact Us</Link>
                            </div>
                        </li>
                        {(user != null)? 
                        <li className="nav-item nav-item-margin-top dropdown">
                            <Link className="nav-link dropdown-toggle" to="/customer_profile" id="loged-in" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {user.customer.name}
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="loged-in">
                                <Link className="dropdown-item" to="/approved_appointments" onClick={this.renderRefreshPage}>My Appointments</Link>
                                <Link className="dropdown-item" to="/pending_appointments" onClick={this.renderRefreshPage}>Pending Appointments</Link>
                                <Link className="dropdown-item" to="/customer_profile" onClick={this.renderRefreshPage}>My Profile</Link>
                                <Link className="dropdown-item" to="/current_lab_test" onClick={this.renderRefreshPage}>My Test</Link>
                                <Link className="dropdown-item" to="/allergy_notes" onClick={this.renderRefreshPage}>Allergies</Link>
                                <Link className="dropdown-item" to="/riskfactor_notes" onClick={this.renderRefreshPage}>Risk Factor</Link>
                                <Link className="dropdown-item" to="/doctor_notes" onClick={this.renderRefreshPage}>Doctor Notes</Link>
                                <Link className="dropdown-item" to="/logout" onClick={this.renderRefreshPage}>Logout</Link>
                            </div>
                        </li>
                        :
                        <React.Fragment>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="signup-nav" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="pe-7s-add-user user-logo"></i>
                            </a>
                            <div className="dropdown-menu m-top" aria-labelledby="signup-nav">
                                <Link className="dropdown-item" to="/register" onClick={this.renderRefreshPage}>Customer Register</Link>
                                <Link className="dropdown-item"   to="/join_doctor" onClick={this.renderRefreshPage}>Doctor Register</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="login-nav" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="pe-7s-user user-logo"></i>
                            </a>
                            <div className="dropdown-menu m-top" aria-labelledby="login-nav">
                                <Link className="dropdown-item" to="/login" onClick={this.renderRefreshPage}>Customer Login</Link>
                                <Link className="dropdown-item" to="/doctor_signin" onClick={this.renderRefreshPage}>Doctor Login</Link>
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
