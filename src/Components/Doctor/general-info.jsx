import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/DoctorAction";
import * as appointmentactions from "../../Store/Actions/AppointmentAction";
import AppointmentForm from "../Booking/appointment-form";
import PhoneModal from "../Booking/PhoneModal";
import DoctorFaq from './../FAQ/doctor_faq';
import SearchPages from '../Search/search_pages';

class GeneralInfo extends Component {

	initState = {
        name	: "",
	};
	
	state = {
		// ...this.props.match.params.doctorId,
		isLoading		: true,
		callNowStyle	: 'none',
		callNowButtoneStyle	: '',
		doctor_data		: '',
		qualification	: '',
		certification	: '',
		schedules		: '',
		specialization	: '',
		related_doctors	: '',
		related_centers : '',
		doctorId		: '',
		all_treatments	: '',
		...this.initState,
	};
	componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
        	this.getData();
        }
    }
	componentDidMount() {
		this.getData()
	}
	getData = () => {

		this.setState({
			isLoading: true
		});
		let { fetchDoctor, dispatch, errorHandler } = this.props;
		let doctorId = this.props.match.params.doctorId;
		fetchDoctor(doctorId).then(res => {
			this.setState({
				doctor_data		: res.data.data,
				qualification	: res.data.meta.doctor_qualification,
				certification	: res.data.meta.doctor_certification,
				schedules		: res.data.meta.doctor_schedules,
				specialization	: res.data.meta.specialization,
				all_treatments	: res.data.meta.all_treatments,
				related_doctors	: res.data.meta.related_doctors,
				related_centers	: res.data.meta.related_centers,
			});
			dispatch({
				type: actions.FETCH_DOCTOR,
				payload: res.data.data
			});
		}).catch(errorHandler).finally(() => {
			this.setState({
				isLoading: false
			});
		});
	};
	SearchPages = () => {
		return	<SearchPages {...this.props  } />		
	};

	DoctorFaq = () => {
		return <DoctorFaq {...this.props  } doctor_data = {this.state.doctor_data} schedules = {this.state.schedules} />
	}	
	DoctorProfile = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { doctor_data, callNowStyle, callNowButtoneStyle } = this.state;
		return (
			<div className="profile">
				<div className="row">
					<div className="col-lg-5 col-md-4">
						<figure>
							{(doctor_data.picture) ? <img src={doctor_data.picture} alt="" className="img-fluid" /> : <img src="web_imgs/doctor2.jpg" alt="" className="img-fluid" />}
						</figure>
					</div>
					<div className="col-lg-7 col-md-8">
						<small>{doctor_data.focus_area}</small>
						<h1>{doctor_data.first_name} {doctor_data.last_name}</h1>
						<span className="rating">
							<i className="icon_star voted"></i>
							<i className="icon_star voted"></i>
							<i className="icon_star voted"></i>
							<i className="icon_star voted"></i>
							<i className="icon_star"></i>
							<small>(145)</small>
							<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1">
								<img src="img/badges/badge_1.svg" width="15" height="15" alt="" />
							</a>
						</span>
						<ul className="statistic">
							<li>854 Views</li>
							<li>124 Patients</li>
						</ul>
						<ul className="col pl-0 font-weight-bold text-sm">
							<li><p style={{color: "#21a747"}}>{doctor_data.gender}</p></li>
						</ul>
						<ul className="contacts">
							<li>
								<h6>Address</h6>
								{doctor_data.address}
								<a href={doctor_data.map} target="_blank"> <strong>View on map</strong></a>
							</li>
							<li>
								<button className="btn_1" onClick={ () => this.setState({ callNowButtoneStyle:"none", callNowStyle:""})} style={{display:callNowButtoneStyle}}> 
									Call Now
								</button>
								<a href="tel://+923222555600" style={{display:callNowStyle}}>+92-322-2555600</a><br />
								<a href="tel://+923222555400" style={{display:callNowStyle}}>+92-322-2555400</a><br />
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	};
	DoctorSpecialization = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { specialization } = this.state;
		const counts = specialization.length;
		if (counts > 0) {
			return specialization.map(m => {
				return (
					<div className="col-lg-6">
						<ul className="bullets">
							<li>{m}</li>
						</ul>
					</div>
				);
			});
		} else {
			return (
				<div className="col-lg-6">
					<ul className="list_edu">
						<li>Not Updated Yet</li>
					</ul>
				</div>
			);
		}
	}
	Curriculum = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { qualification } = this.state;
		const count = qualification.length;
		if (count > 0) {
			return qualification.map(m => {
				return (
					<ul className="list_edu">
						<li>
							<strong>{m.university}</strong> - {m.degree}
						</li>
					</ul>
				);
			});
		} else {
			return (
				<ul className="list_edu">
					<li>Not Updated Yet</li>
				</ul>
			);
		}
	}

	renderBookingCard = () => {
		if (this.state.isLoading ) {
            return (<div data-loader="circle-side"></div>);
        }
		const { all_treatments, doctor_data, schedules } 	= this.state;
		return<AppointmentForm {...this.props} doctor_data = {doctor_data} all_treatments={all_treatments} schedules ={schedules}/>;
	}
	relatedDoctors = () => {
		const {related_doctors} =	this.state;
		if(related_doctors){
			if (related_doctors.length < 1) {
				return(
					<div className="pb-5"></div>
				);
			}
		}
		return(
			<div className="container margin_25_padding_0">
			<h6 className="h6-brief-intro">Nearest &amp; Related Doctors</h6>
			<div className="row">
				<div className="col">
				{(related_doctors)?
					related_doctors.map(m =><Link to={{ pathname:`/doctor_detail/${m.id}` }} className="m-1 text-sm btn btn-outline-midgray btn-sm mb-1 mr-1 white-space-normal">{m.name}</Link>)
				:
				''
				}
				</div>
			</div>
		</div>
		);
	}
	relatedCenters = () => {
		const {related_centers} =	this.state;
		if(related_centers){
			if (related_centers.length < 1) {
				return(
					<div className="pb-5"></div>
				);
			}
		}
		
		return(
			<div className="container margin_25">
			<h6 className="h6-brief-intro">Nearest Centers</h6>
			<div className="row">
				<div className="col">
				{(related_centers)?
					related_centers.map(m =><Link to={{ pathname:`/center_detail/${m.id}` }} className="m-1 text-sm btn btn-outline-midgray btn-sm mb-1 mr-1 white-space-normal">{m.name}</Link>)
				:
				''
				}
				</div>
			</div>
		</div>
		);
	}
	render() {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { doctor_data } 		= this.state;
		const {history } 			=	this.props;
		return (
			<React.Fragment>
				<main>
				<div id="results">
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<div id="breadcrumb">
										<div className="container">
											<ul>
												<li><Link to="/">Home</Link></li>
												<li><Link to="/doctor_list">Find a Doctor</Link></li>
												{(doctor_data.city_name)?<li><Link to="#">{doctor_data.city_name}</Link></li>:''}
												{(doctor_data.speciality)?<li><Link to={{ pathname: `/treatment_detail/${doctor_data.speciality}`}}>{doctor_data.speciality}</Link></li>:''}
												
												<li>{doctor_data.first_name}</li>
											</ul>
										</div>
									</div>
								</div>
								{this.SearchPages()}
							</div>
						</div>
					</div>

					<div className="container margin_60">
						<div className="row">
							<div className="col-xl-7 col-lg-7">
								<nav id="secondary_nav">
									<div className="container">
										<ul className="clearfix">
											<li>
												<a href="#section_1" className="active">General info</a>
											</li>
											<li>
												<a href="#sidebar">Booking</a>
											</li>
										</ul>
									</div>
								</nav>
								<div id="section_1">
									<div className="box_general_3">
										{this.DoctorProfile()}
										<hr />
										<div className="indent_title_in">
											<i className="pe-7s-user"></i>
											<h3>Professional statement</h3>
											<p>Best Known for Non Surgical Orthopedic Treatments.</p>
										</div>
										<div className="wrapper_indent">
											<p>{doctor_data.about}</p>
										</div>
										<div className="wrapper_indent">
											<h6>Specializations</h6>
											<div className="row">
												{this.DoctorSpecialization()}
											</div>
										</div>
										<hr />
										<div className="indent_title_in">
											<i className="pe-7s-news-paper"></i>
											<h3>Education</h3>
											<p>Highly Educated and Skilled.</p>
										</div>
										<div className="wrapper_indent">
											<p>{doctor_data.first_name} is a Nephrologist practicing in Lahore. {doctor_data.first_name} has
												the following degrees: MBBS, MRCP (UK), MRCP (Glasgow), FCPS, FRCP (Glasgow).
												You can book an appointment with {doctor_data.first_name} by calling us or
												using the 'book appointment' button.</p>
											<h6>Curriculum</h6>
											{this.Curriculum()}
										</div>
									</div>
								</div>
							</div>
							{this.renderBookingCard()}
						</div>
					</div>
					{this.relatedDoctors()}
					{this.DoctorFaq()}
					{this.relatedCenters()}

				</main>
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => {
	return {
		doctors: state.DoctorReducer.doctors,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		dispatch: dispatch,
		fetchDoctor: (id) => actions.fetchDoctor(id),
        create: (params) => appointmentactions.postLeadCrm(params),

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInfo);