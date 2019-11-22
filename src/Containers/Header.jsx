import React,{Component} from "react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import { connect } from "react-redux";

alertify.set('notifier', 'position', 'top-center');

// const Header = (props) => {
class Header extends Component{
        render(){
            const { user } = this.props;
        return(
            <React.Fragment>
                <header className="header_sticky ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6 ">
                            <div id="logo_home" className="pt-2">
                                <h1>
                                    <Link to="/" title="Findoctor">Findoctor</Link></h1>
                            </div>
                        </div>
                        <nav className="col-lg-9 col-6">
                            <Link className="cmn-toggle-switch cmn-toggle-switch__htx open_close" to="#0"><span>Menu mobile</span></Link>
                            
                                {(user != null)? 
                                    <div className="main-menu pt-2">
                                        <ul>
                                            <li className="submenu">
                                                <Link to="#0" className="show-submenu">{user.customer.name}<i className="icon-down-open-mini"></i></Link>
                                                <ul>
                                                    <li><Link to="/current_appointment">My Appointments</Link></li>
                                                    <li><Link to="/customer_profile">My Profile</Link></li>
                                                    <li><Link to="/current_lab_test">My Test</Link></li>
                                                    <li><Link to="/logout">Logout</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    :
                                    <ul id="top_access"> 
                                        
                                        <div className="main-menu">
                                            <ul>
                                                <li className="submenu">
                                                    <Link to="#0"  className="show-submenu" ><i className="pe-7s-user"></i></Link>
                                                    <ul>
                                                        <li><Link to="/login">Customer Login</Link></li>
                                                        <li><Link to="/doctor_signin">Doctor Login</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="main-menu">
                                            <ul>
                                                <li className="submenu">
                                                    <Link to="#0"  className="show-submenu" ><i className="pe-7s-add-user"></i></Link>
                                                    <ul>
                                                        <li><Link to="/register">Customer Register</Link></li>
                                                        <li><Link to="/join_doctor">Doctor Register</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </ul>
                                }
                               
                            <div className="main-menu pt-2">
                                <ul>
                                    <li className="submenu">
                                        <Link to="#0" className="show-submenu">Home<i className="icon-down-open-mini"></i></Link>
                                        <ul>
                                            <li><Link to="/doctor_list">Doctors</Link></li>
                                            <li><Link to="/specialization_list">Specializations</Link></li>
                                            <li><Link to="/clinic_list">Centers</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link to="#0" className="show-submenu">Blog<i className="icon-down-open-mini"></i></Link>
                                        <ul>
                                            <li><Link to="/doctor_list">Doctor List</Link></li>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/contacts">Contacts</Link></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <Link to="#0" className="show-submenu">About Us<i className="icon-down-open-mini"></i></Link>
                                        <ul>
                                            <li><Link to="/faq">Faq page</Link></li>
                                            <li><Link to="/404_not_found">404 page</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
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
