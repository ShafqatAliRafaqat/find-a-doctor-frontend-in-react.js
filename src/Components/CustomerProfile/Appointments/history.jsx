import React, {Component} from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import moment from 'moment';

import * as actions from "../../../Store/Actions/AppointmentAction";

class AppointmentHistory extends Component{
    initState = {
        processing	: false,
    };
    
	state = {
        ...this.initState,
        isLoading       : true, 
        treatment_data  : '',     
    };
    componentDidMount (){
        if(!this.props.user){
			return <Redirect to='/404_not_found' />;
        };
        this.fetchAppointmentHistory();
    }
    fetchAppointmentHistory= () => {
        
        this.setState({
			isLoading: true
        });
        
		let { fetchAppointmentHistory, dispatch, errorHandler } = this.props;

        let customerId = this.props.user.customer.id;
        let token = this.props.user.access_token;

        fetchAppointmentHistory(customerId, token).then(res => {
			this.setState({
				treatment_data	: res.data.data,
			});
			dispatch({
				type: actions.FETCH_APPOINTMENT_HISTORY,
				payload: res.data.data
			});
		}).catch(errorHandler).finally(() => {
			this.setState({
				isLoading: false
			});
		});
    }
    renderCard = () => {
        const {treatment_data} =this.state;
        if(treatment_data.length ==0){
            return (
                <div class="strip_list wow fadeIn">
                    <p className="text-center">There is no current appointment you have done!</p>
                </div>
            );
        }
        return treatment_data.map(m =>{
            return(
                <div className="card mb-3 rounded-0 border-0 doc-listing-card" style={{position: "relative"}}>
                    <div className="card-body p-2 py-lg-3">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-2 align-self-start">
                                <div className="row css-row-picture-name">
                                    <div className="col-3 col-lg-12 px-3 px-lg-3 pb-2">
                                        <div className=" position-relative">
                                            <Link to={{pathname:`/doctor_detail/${m.doctor_id}`}} className="css-avatar-img rounded-circle d-block overflow-hidden position-relative overflow-hidden shadow-none">
                                                {(m.doctor_image) ? <img src={m.doctor_image} alt="" className="img-fluid card-img-overlay p-0" style={{width:"100%", height:"auto"}} /> : <img src="web_imgs/doctor2.jpg" alt="" className="img-fluid card-img-overlay p-0" />}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-9 col-lg-9 mobil-offset d-lg-none">
                                        <div className="row">
                                            <div className="col-12 pr-2 pr-sm-5">
                                                <div className="row css-name-offset">
                                                    <div className="col-12">
                                                        <h2 className="h5 font-weight-bold m-0">
                                                            <Link to={{pathname:`/doctor_detail/${m.doctor_id}`}} className="text-decoration-none shadow-none btn-outline-none">{m.doctor_name}</Link>
                                                        </h2>
                                                        <h3 className="m-0 pt-2 h6"><small className="text-sm">{m.treatment_name}</small></h3>
                                                        <p className="m-0 pt-2"><small className="text-muted text-sm">{m.center_name}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 order-3 order-lg-2">
                                <div className="row mobil-offset mb-3 d-none d-lg-block">
                                    <div className="col-12 pr-5">
                                        <div className="row css-name-offset">
                                            <div className="col-12">
                                                <h2 className="h5 font-weight-bold m-0">
                                                    <Link to={{pathname:`/doctor_detail/${m.doctor_id}`}} className="btn-light bg-transparent text-decoration-none shadow-none btn-outline-none">{m.doctor_name}</Link>
                                                </h2>
                                                <h3 className="m-0  pt-2 h6"><small className="text-sm ">{m.treatment_name}</small></h3>
                                                <p className="m-0  pt-2"><small className="text-muted text-sm ">{m.center_name}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row align-items-center">
                                            <div className="col-12 pr-lg-5">
                                                
                                            <div className="row pt-2 pt-lg-0">
                                                <div className="col-6 col-lg-5 col-xl-4 mb-2 mb-lg-0 d-lg-none">
                                                    <Link to={{pathname:`/doctor_detail/${m.doctor_id}`}} className="btn btn-block btn-outline-primary font-weight-bold text-size-14">Book Again</Link>
                                                </div>
                                                <div className="col-6 col-lg-5 col-xl-4 top-arrow-dropdown dropdown mb-2 mb-lg-0">
                                                    <Link to={{pathname:`/doctor_detail/${m.doctor_id}`}} className="btn btn-block btn-warning text-white font-weight-bold d-none d-lg-block no-booking-btn"   >
                                                        Book Again
                                                    </Link>
                                                    <Link to={{pathname:`/doctor_detail/${m.doctor_id}`}} className="btn btn-block btn-warning text-white font-weight-bold m-0 d-lg-none no-booking-btn">
                                                        Book Again
                                                    </Link>
                                                </div>
                                                <div className="col-6 col-lg-5 col-xl-4 top-arrow-dropdown dropdown mb-2 mb-lg-0">
                                                    <a href={m.map} className="btn btn-block btn-light text-white font-weight-bold d-none d-lg-block no-booking-btn " target="_blank">
                                                        View on map
                                                    </a>
                                                    <a href={m.map} className="btn btn-block btn-light text-white font-weight-bold m-0 d-lg-none no-booking-btn">
                                                    View on map
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 order-2 css-col-stats py-2 py-lg-0">
                            <div className="row">
                                <div className="my-1 col-6 col-lg-12">
                                    <div className="row align-items-center text-available ">
                                        <span className="col-2 text-center d-flex justify-content-center align-items-center">
                                            <i className="icon-available"></i>
                                        </span>
                                        <small className="col pl-0 font-weight-bold text-sm">Appointment Date </small>                                                          
                                    </div>
                                </div>
                                <div className="my-1 col-12 col-lg-12">
                                    <div className="row align-items-center">
                                        <span className="col-2 text-center d-flex justify-content-center align-items-center">
                                            <svg viewBox="0 0 100 100" className="d-inline-block listing-svg" width="14px">
                                            </svg>
                                        </span>
                                        <small className="col pl-0 text-sm text-truncate">{moment(m.appointment_date).format('MMMM Do YYYY')}</small>
                                    </div>
                                </div>
                                <div className="my-1 col-12 col-lg-12">
                                    <div className="row align-items-center">
                                        <span className="col-2 text-center d-flex justify-content-center align-items-center">
                                            <svg viewBox="0 0 100 100" className="d-inline-block listing-svg" width="14px">
                                            </svg>
                                        </span>
                                        <small className="col pl-0 text-sm text-truncate">{moment(m.appointment_date).format('LT')}</small>                           
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            );
        });
    }
    render(){

        if(!this.props.user){
			return <Redirect to='/404_not_found' />;
        };
        if(this.state.isLoading){
            return (<div data-loader="circle-side"></div>);
        }
        return(
            <React.Fragment>
                <main>
                    <div id="breadcrumb">
                        <div className="container">
                            <ul>
                            <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Category</Link></li>
                                <li>Page active</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container margin_60">
                        <div className="row">
                            <aside className="col-lg-3" id="sidebar">
                                    <div className="box_style_cat" id="faq_box">
                                        <ul id="cat_nav">
                                            <li><Link to="/customer_profile"><i className="icon_document_alt"></i>My Profile</Link></li>
                                            <li >
                                                <a href="#" data-toggle="collapse" data-target="#appointment" aria-expanded="false" aria-controls="users">
                                                <i class="icon_document_alt"></i>Appointments</a>
                                                <div id="appointment" class="collapse show ">
                                                <ul class="sidebar-menu">
                                                    <li className="pl-3" style={{borderTop:"1px solid #e1e8ed"}}><Link to="/pending_appointments" >Pending Appointments</Link></li>
                                                    <li className="pl-3"><Link to="/approved_appointments" >Approved Appointments</Link></li>
                                                    <li className="pl-3"><Link to="#" className="active">Appointment History</Link></li>
                                                </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#" data-toggle="collapse" data-target="#labTest" aria-expanded="false" aria-controls="users">
                                                <i class="icon_document_alt"></i>Lab Test</a>
                                                <div id="labTest" class="collapse ">
                                                <ul class="sidebar-menu">
                                                    <li className="pl-3" style={{borderTop:"1px solid #e1e8ed"}}><Link to="/current_lab_test" >Current Test</Link></li>
                                                    <li className="pl-3"><Link to="/lab_test_history" >Test History</Link></li>
                                                </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#" data-toggle="collapse" data-target="#details" aria-expanded="false" aria-controls="users">
                                                <i class="icon_document_alt"></i>Additional Detail</a>
                                                <div id="details" class="collapse ">
                                                <ul class="sidebar-menu">
                                                    <li className="pl-3" style={{borderTop:"1px solid #e1e8ed"}}><Link to="/allergy_notes" >Allergy Notes</Link></li>
                                                    <li className="pl-3"><Link to="/riskfactor_notes" >Risk Factor</Link></li>
                                                    <li className="pl-3"><Link to="/doctor_notes" >Doctor Notes</Link></li>
                                                </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                            </aside> 
                            <div className="col-lg-9 ml-auto" >
                                {this.renderCard()}
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.AuthReducers.user
    };
};

const mapDispatchToProps = dispatch => {
	return {
		dispatch: dispatch,
		fetchAppointmentHistory: (id, token)     => actions.fetchAppointmentHistory(id, token),

	};
};

export default connect( mapStateToProps, mapDispatchToProps )(AppointmentHistory);