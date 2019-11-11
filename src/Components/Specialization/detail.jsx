import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import List from './../Doctor/list';
import * as actions from "../../Store/Actions/TreatmentAction";
import SimplePagination from "../Common/SimplePagination";
import { getSearchUrlFromState } from '../../util/functions'
import * as qs from 'query-string';
import SearchPages from '../Search/search_pages';
import Pagination from "react-js-pagination";

class Detail extends Component{
    state = {
		isLoading		: true,
		treatment_data	: '',
		current_page	: 0,
		last_page		: 0,
		per_page		: 0,
		treatments		:'',
		activePage		:0,
		treatments		: '',
		centerId		:'',
		doctor_treatment:'',
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
        	this.fetchTreatment(search);
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
        this.fetchTreatment(search);
	}

	fetchTreatment = (search) => {

		this.setState({
			isLoading: true
		});
		let { fetchTreatment, dispatch, errorHandler, alertify } = this.props;
		let treatmentId = this.props.match.params.treatmentId;

		fetchTreatment(treatmentId,search).then(res => {
			this.setState({
				treatment_data	: res.data.meta.treatment,
				doctor_treatment:res.data.data,
				current_page: res.data.meta.current_page,
                last_page	: res.data.meta.last_page,
                to			: res.data.meta.to,
                per_page	: res.data.meta.per_page,
                total		: res.data.meta.total,
				});
			window.scrollTo(0, 0);
			if (res.data.meta.total == 0){
				alertify.error('There is no doctor');
			}
			dispatch({
				type: actions.FETCH_TREATMENT,
				payload: res.data.data
			});
		}).catch(errorHandler).finally(() => {
			this.setState({
				isLoading: false
			});
		});
	};

	SearchPages = () => {
		return	<SearchPages {...this.props} />		
	};

    ListOfDoctors = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { doctor_treatment } = this.state;
		return	<List {...this.props} doctor_data={doctor_treatment} />
	}

	handlePageChange = (pageNumber) => {
		this.setState({activePage: pageNumber});
		let search = getSearchUrlFromState(this.state);
		this.fetchTreatment(search + "page=" + 	pageNumber , actions.FETCH_TREATMENT);
	}

    CenterProfile = () => {
		const { treatment_data,total } = this.state;
		return (
            <aside className="col-xl-3 col-lg-4" id="sidebar">
					<div className="box_profile">
						<figure>
							{ (treatment_data.picture) ? <img src={treatment_data.picture} alt="" className="img-fluid" /> : <img src="http://via..com/565x565.jpg" alt="" className="img-fluid" />}
						</figure>
						<small>{treatment_data.focus_area}</small>
						<h1>{treatment_data.name}</h1>
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
							<li>{total} Doctors</li>
						</ul>
					</div>
				</aside>
            );
	};
	render(){
		const { page, totalPages, total, to,treatment_data } = this.state;
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
												<li><Link to="/">Find A Doctor</Link></li>
												<li><Link>{treatment_data.name}</Link></li>
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
								</div>
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
					</main>
                </React.Fragment>
			);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch: dispatch,
		fetchTreatment: (id,search) => actions.fetchTreatemnt(id,search),
	};
};

export default connect(mapDispatchToProps)(Detail);