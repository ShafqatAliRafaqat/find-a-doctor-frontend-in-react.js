import React,{Component} from "react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import { connect } from "react-redux";

alertify.set('notifier', 'position', 'top-center');

// const Header = (props) => {
class Header extends Component{
    state = {
        name:window.location.hash,
    }
    renderRefreshPage = (e)=>{
        this.setState({
            name:e.target.name,
        })
        if(e.target.href == window.location.href){
            window.location.reload();
        }

    }
    render(){
        const { user } = this.props;
        const { name } = this.state;
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
                            <Link className={(name == '#/') ? " nav-link active-nav" : "nav-link"} name="#/" to="/" onClick={this.renderRefreshPage}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item nav-item-margin-top">
                            <Link className={(name == '#/doctor_list') ? " nav-link active-nav" : "nav-link"} name="#/doctor_list" to="/doctor_list" onClick={this.renderRefreshPage}>Doctors</Link>
                        </li>
                        <li className="nav-item nav-item-margin-top">
                            <Link className={(name == '#/specialization_list') ? " nav-link active-nav" : "nav-link"} name="#/specialization_list" to="/specialization_list" onClick={this.renderRefreshPage}>Specializations</Link>
                        </li>
                        <li className="nav-item nav-item-margin-top">
                            <Link className={(name == '#/clinic_list') ? " nav-link active-nav" : "nav-link"} name="#/clinic_list" to="/clinic_list" onClick={this.renderRefreshPage}>Clinics</Link>
                        </li>
                        <li className="nav-item nav-item-margin-top dropdown">
                            <a  className={(name == '#/about_us' || name == '#/contacts') ? "nav-link dropdown-toggle active-nav" : "nav-link dropdown-toggle"}  href="#" id="about" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            About Us
                            </a>
                            <div className="dropdown-menu" aria-labelledby="about">
                                <Link className={(name == '#/about_us') ? " dropdown-item active-nav" : "dropdown-item"} name="#/about_us" to="/about_us" onClick={this.renderRefreshPage}>About</Link>
                                <Link className={(name == '#/contact_us') ? " dropdown-item active-nav" : "dropdown-item"} name="#/contact_us" to="/contacts" onClick={this.renderRefreshPage}>Contact Us</Link>
                            </div>
                        </li>
                        {(user != null)? 
                        <li className="nav-item nav-item-margin-top dropdown">

                            <a className={(name == '#/approved_appointments' || name == '#/pending_appointments' || name == '#/customer_profile'|| name == '#/current_lab_test'|| name == '#/allergy_notes' || name == '#/riskfactor_notes' || name == '#/doctor_notes') ? "nav-link dropdown-toggle active-nav" : "nav-link dropdown-toggle"} to="#" id="loged-in" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {user.customer.name}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="loged-in">
                                <Link className={(name == '#/approved_appointments') ? " dropdown-item active-nav" : "dropdown-item"} name="#/approved_appointments" to="/approved_appointments" onClick={this.renderRefreshPage}>My Appointments</Link>
                                <Link className={(name == '#/pending_appointments' ) ? " dropdown-item active-nav" : "dropdown-item"} name="#/pending_appointments"  to="/pending_appointments" onClick={this.renderRefreshPage}>Pending Appointments</Link>
                                <Link className={(name == '#/customer_profile'     ) ? " dropdown-item active-nav" : "dropdown-item"} name="#/customer_profile"      to="/customer_profile" onClick={this.renderRefreshPage}>My Profile</Link>
                                <Link className={(name == '#/current_lab_test'     ) ? " dropdown-item active-nav" : "dropdown-item"} name="#/current_lab_test"      to="/current_lab_test" onClick={this.renderRefreshPage}>My Test</Link>
                                <Link className={(name == '#/allergy_notes'        ) ? " dropdown-item active-nav" : "dropdown-item"} name="#/allergy_notes"         to="/allergy_notes" onClick={this.renderRefreshPage}>Allergies</Link>
                                <Link className={(name == '#/riskfactor_notes'     ) ? " dropdown-item active-nav" : "dropdown-item"} name="#/riskfactor_notes"      to="/riskfactor_notes" onClick={this.renderRefreshPage}>Risk Factor</Link>
                                <Link className={(name == '#/doctor_notes'         ) ? " dropdown-item active-nav" : "dropdown-item"} name="#/doctor_notes"          to="/doctor_notes" onClick={this.renderRefreshPage}>Doctor Notes</Link>
                                <Link className="dropdown-item" to="/logout" onClick={this.renderRefreshPage}>Logout</Link>
                            </div>
                        </li>
                        :
                        <React.Fragment>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="signup-nav" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="nav-icons-span"><i className="pe-7s-add-user user-logo"></i><span>Register</span></div>
                            </a>
                            <div className="dropdown-menu m-top" aria-labelledby="signup-nav">
                                <Link className="dropdown-item" to="/register" onClick={this.renderRefreshPage}>Customer Register</Link>
                                <Link className="dropdown-item"   to="/join_doctor" onClick={this.renderRefreshPage}>Doctor Register</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="login-nav" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="nav-icons-span"><i className="pe-7s-user user-logo"></i><span>Login</span></div>
                            </a>
                            <div className="dropdown-menu m-top" aria-labelledby="login-nav">
                                <Link className="dropdown-item" to="/login" onClick={this.renderRefreshPage}>Customer Login</Link>
                                <Link className="dropdown-item" to="/doctor_signin" onClick={this.renderRefreshPage}>Doctor Login</Link>
                            </div>
                        </li>
                        </React.Fragment>
                        }
                        <li className="nav-item nav-item-margin-top app-nav">

                        <a href="https://play.google.com/store/apps/details?id=com.hospitall.drathospitall">
                            <div className="div-icon"><i className="icon-mobile-1 app-icon"></i></div>
                            <div className="text-app">Download Our DoctorALL App Now.<br/>
                                <span>Now it's Easy to handle your Appointments</span>
                            </div>
                        </a>
                        </li>
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
