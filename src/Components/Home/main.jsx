import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/DoctorAction";
import * as center_actions from "../../Store/Actions/CenterAction";
import * as qs from 'query-string';
import SpecializationBlocks from './../Specialization/blocks';
import AppSection from "./app_section";
import SearchHeader from "./search_header"; 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class Main extends Component{
    state = {
        isLoading   : true,
        doctor_data : '',
        top_centers : '',
        responsive  : {
            0: {
                items: 1,
                animateOut:false,
                nav:false,
            },
            600: {
                items: 3,
                animateOut:true,
                nav:true,
            },
            1000: {
                    animateOut:true,
                    items: 5,
                    nav:true,
            },
        },
    };
    componentDidMount() {
		let search = this.props.location.search;
        const params = qs.parse(search);
        for (let key in params) {
            this.setState({
                [key]: params[key]
            });
        }
        this.getDoctors(search);
        this.getCenters(search);
      }
      getDoctors = (search) => {

        this.setState({
            isLoading: true
        });

        let { getDoctors,errorHandler } = this.props;

            getDoctors(search).then(res => {
            this.setState({
                doctor_data: JSON.parse(window.atob(res.data))
            });

        }).catch(errorHandler).finally(() => {
            this.setState({
                isLoading: false
            });
        });
    };

    getCenters = (search) => {

        this.setState({
            isLoading: true
        });

        let { getCenters,errorHandler } = this.props;


            getCenters(search).then(res => {
            this.setState({
                top_centers: res.data.data
            });
        }).catch(errorHandler).finally(() => {
            this.setState({
                isLoading: false
            });
        });
    };
	ListOfDoctors = () => {
		if (this.state.isLoading) {
            return(<div data-loader="circle-side"></div>);
        }
		if (!this.state.doctor_data) {
            return true;
        }
        const { doctor_data } = this.state;
        return doctor_data.map( d =>{
            return (
                <div className="item">
                    <Link to={{pathname:`/doctor_detail/${d.id}`}}>
						<div className="views"><i className="icon-eye-7"></i>98</div>
						{/* <div className="title">
							<h4>{d.first_name}<em>{d.focus_area}</em></h4>
						</div> */}
                        {(d.picture) ? 
                        <img src={d.picture} alt=""  width="200px"  height="300px" /> 
                        : 
                        <img src="web_imgs/doctor2.jpg" alt="" width="200px"  height="300px" />
                        }
                        <div className="card-bottom">
							<h6>{d.first_name}</h6>
                            <em>{d.focus_area}</em>
						</div>
                    </Link>
				</div>
            );
        }); 
    };
    // position: absolute;
    // bottom: 0;
    // left: 0;
    // text-align: center;
    // width: 100%;
    // z-index: 9;
    ListOfTopCenters = () => {
		if (!this.state.top_centers) {
            return true;
        }
        const { top_centers } = this.state;
        return top_centers.map( c =>{
            return (
                <div className="item">
                    <Link to={{pathname:`/center_detail/${c.id}`}}>
						<div className="views"><i className="icon-eye-7"></i>98</div>
						{/* <div className="title">
							<h4>{c.name}
                                <em>{c.focus_area}</em>
                            </h4>
						</div> */}
                        {(c.picture) ? 
                        <img src={c.picture} alt=""  width="200px"  height="300px" /> 
                        : 
                        <img src="web_imgs/doctor2.jpg" alt="" width="300px"  height="400px" />
                        }
                        <div className="card-bottom">
							<h6>{c.name}</h6>
                            <em>{c.focus_area}</em>
						</div>
                    </Link>
				</div>
            );
        }); 
    };

    SearchHeader = () => {
        let page = "FIND A DOCTOR";
        return <SearchHeader {...this.props} page = {page}/>;
    };

    Specialization = () => {
        if (this.state.isLoading) {
            return(<div data-loader="circle-side"></div>);
        }
        const {doctor_data}     =   this.state;
        return <SpecializationBlocks {...this.props} doctor_data = {doctor_data} />;
    };

    render(){
        if (this.state.isLoading) {
            return(<div data-loader="circle-side"></div>);
        }
        const { doctor_data } = this.state;
        return(
            <React.Fragment>
                <main>
                    {this.SearchHeader()}
                    {this.Specialization()}
                        <div className="container margin_120_95">
                            <div className="main_title">
                                <h2>Discover the <strong>online</strong> appointment!</h2>
                                <p>Now you can Book your Appointment with a Doctor in three very easy Steps.</p>
                            </div>
                            <div className="row add_bottom_30">
                                <div className="col-lg-4">
                                    <div className="box_feat" id="icon_1">
                                        <span></span>
                                        <h3>Find a Doctor</h3>
                                        <p>Find a Doctor by Specialization, Clinic or Doctors near to your location using filters.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box_feat" id="icon_2">
                                        <span></span>
                                        <h3>View profile</h3>
                                        <p>From the list of Doctors, click on any Doctor's name and View his/her Profile</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box_feat" id="icon_3">
                                        <h3>Book a visit</h3>
                                        <p>On Doctor's Profile, select the Center, Treatment, date and slot of Appointment.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center"><Link to="/doctor_list" className="btn_1 medium">Find Doctor</Link></p>
                        </div>
                        <div className="bg_color_1">
                            <div className="container margin_120_95">
                                <div className="main_title">
                                    <h2>Most Viewed doctors</h2>
                                    <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri.</p>
                                </div>
                                <OwlCarousel
                                    id          = "reccomended"
                                    className   = "owl-carousel owl-theme owl-loaded owl-drag owl-item cloned"
                                    loop        = {true}
                                    margin      = {0}
                                    items       = {5}
                                    responsive  = {this.state.responsive}
                                    autoplay    = {true}
                                    animateOut  = {true}
                                    center      = {true}
                                    nav         = {true}                    
                                    >
                                    {this.ListOfDoctors()}
                                </OwlCarousel>
                            </div>
                        </div>
                        <div className="bg_color_1">
                            <div className="container margin_120_95">
                                <div className="main_title">
                                    <h2>Most Viewed Medical Facilities</h2>
                                    <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri.</p>
                                </div>
                                <OwlCarousel
                                    id          = "reccomended"
                                    className   = "owl-carousel owl-theme owl-loaded owl-drag owl-item cloned"
                                    loop        = {true}
                                    margin      = {0}
                                    items       = {5}
                                    responsive  = {this.state.responsive}
                                    autoplay    = {true}
                                    animateOut  = {true}
                                    center      = {true}
                                    nav         = {true}                    
                                    >
                                    {this.ListOfTopCenters()}
                                </OwlCarousel>
                            </div>
                        </div>
                    {/* <AppSection /> */}
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
        getDoctors: (search) => actions.getTopDoctors(search),
        getCenters: (search) => center_actions.getTopCenters(search),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Main);