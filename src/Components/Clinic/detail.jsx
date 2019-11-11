import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import List from './../Doctor/list';
import * as actions from "../../Store/Actions/CenterAction";
import SimplePagination from "../Common/SimplePagination";
import { getSearchUrlFromState } from '../../util/functions'
import * as qs from 'query-string';
import SearchPages from '../Search/search_pages';
import Pagination from "react-js-pagination";

class Detail extends Component{
    state = {
		isLoading	: true,
		center_data	: '',
		current_page: 0,
		last_page	: 0,
		per_page	: 0,
		treatment_data:'',
		activePage	:0,
		treatments	: '',
		centerId	:'',
		center_doctor:'',
	};
	componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            let search = this.props.location.search;
			const params = qs.parse(search);
			for (let key in params) {
				this.setState({
					[key]: params[key]
				});
			}
        	this.fetchCenter(search);
        }
    }
	componentWillMount() {
		let search = this.props.location.search;
        const params = qs.parse(search);
        for (let key in params) {
            this.setState({
                [key]: params[key]
            });
        }

        this.fetchCenter(search);
	}
	fetchCenter = (search) => {

		this.setState({
			isLoading: true
		});
		let { fetchCenter, dispatch, errorHandler, alertify} = this.props;
		let centerId = this.props.match.params.centerId;
		fetchCenter(centerId,search).then(res => {
			this.setState({
				center_data	: res.data.meta.center,
				center_doctor:res.data.data,
				current_page: res.data.meta.current_page,
                last_page	: res.data.meta.last_page,
                to			: res.data.meta.to,
                per_page	: res.data.meta.per_page,
                total		: res.data.meta.total,
				});
			window.scrollTo(0, 0);
			if(res.data.meta.total == 0){
				alertify.error("There is no doctor");
			}
			dispatch({
				type: actions.FETCH_CENTERS,
				payload: res.data.data
			});
		}).catch(errorHandler).finally(() => {
			this.setState({
				isLoading: false
			});
		});
	};

	handlePageChange = (pageNumber) => {
		this.setState({activePage: pageNumber});
		let search = getSearchUrlFromState(this.state);
		this.fetchCenter(search + "page=" + 	pageNumber , actions.FETCH_CENTERS);
	}
	SearchPages = () => {
		return	<SearchPages {...this.props} />		
	};

    ListOfDoctors = () => {
        if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { center_doctor } = this.state;
		return	<List {...this.props} doctor_data={center_doctor} />
	}
	
    CenterProfile = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { center_data,total } = this.state;
		return (
            <aside className="col-xl-3 col-lg-4" id="sidebar">
				<div className="box_profile">
					<figure>
						{ (center_data.picture) ? <img src={center_data.picture} alt="" className="img-fluid" /> : <img src="http://via..com/565x565.jpg" alt="" className="img-fluid" />}
					</figure>
					<small>{center_data.focus_area}</small>
					<h1>{center_data.name}</h1>
					<span className="rating">
						<i className="icon_star voted"></i>
						<i className="icon_star voted"></i>
						<i className="icon_star voted"></i>
						<i className="icon_star voted"></i>
						<i className="icon_star"></i>
						<small>(145)</small>
						<a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"> 
                            <img src="img/badges/badge_1.svg" width="15" height="15" alt="" />
                        </a>
					</span>
					<ul className="statistic">
						<li>{total} Doctor</li>
						<li>{center_data.treatments.length} Treatment</li>
					</ul>
					<ul className="contacts">
						<li><h6>Address</h6>{center_data.address}</li>
						<li><h6>Phone</h6>{center_data.assistant_phone}</li>
					</ul>
					<div className="text-center">
						<a href={center_data.map}  className="btn_1 outline" target="_blank">
							<i className="icon_pin"></i> View on map
						</a>
					</div>
				</div>
			</aside>
        );
	};
	render(){
		const { page,totalPages,total,to,center_data } = this.state;
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
			return(
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
												<li><Link to="#">Hospitals</Link></li>
												 	{(center_data.city_name)?<li><Link to="#">Hospitals in {center_data.city_name}</Link></li>:''}												
												<li><Link>{center_data.name}</Link></li>
											</ul>
										</div>
									</div>
								</div>
									{this.SearchPages()}
								</div>
							</div>
						</div>
						<div className="container pagination_details text-right"><span><strong>Showing {to}</strong> of {total} results</span></div>
						<div className="container margin_25">
							<div className="row">
								{this.CenterProfile()}
								<div className="col-xl-9 col-lg-8">
									<div className="row">
										{this.ListOfDoctors()}
									</div>
									<div className="row">
									<div className="text-center col-12">
										{(total != 0)?	<Pagination
											prevPageText='prev'
											nextPageText='next'
											firstPageText='first'
											lastPageText='last'
											activePage={this.state.current_page}
											itemsCountPerPage={this.state.per_page}
											totalItemsCount={this.state.total}
											onChange={this.handlePageChange}
											/>
											:<div className="text-center  col-12">There is no data</div>
										}
									</div>
									</div>
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
		centers: state.CenterReducers.centers,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		dispatch: dispatch,
		fetchCenter: (id,search) => actions.fetchCenter(id,search),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);