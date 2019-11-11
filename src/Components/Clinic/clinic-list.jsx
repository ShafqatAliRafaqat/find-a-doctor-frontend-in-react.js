import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/CenterAction";
import SimplePagination from "../Common/SimplePagination";
import { getSearchUrlFromState } from '../../util/functions'
import * as qs from 'query-string';
import alertify from 'alertifyjs';
import List from './list';
import SearchPages from '../Search/search_pages';
import Pagination from "react-js-pagination";

class CenterList extends Component{
    state = {
		isLoading	: true,
		page		: 0,
		totalPages	: 0,
		current_page: 0,
		last_page	: 0,
		per_page	: 0,
        center_data	: '',
    };
    componentDidMount() {
		let search = this.props.location.search;
        const params = qs.parse(search);
        for (let key in params) {
            this.setState({
                [key]: params[key]
            });
        }

        this.getCenters(search);
      }
      getCenters = (search) => {

        this.setState({
            isLoading: true
        });

        let { getCenters, dispatch, errorHandler, alertify } = this.props;
            getCenters(search).then(res => {
            this.setState({
				current_page: res.data.meta.current_page,
                last_page	: res.data.meta.last_page,
                to			: res.data.meta.to,
                per_page	: res.data.meta.per_page,
                total		: res.data.meta.total,
                center_data	: res.data.data
			});
			window.scrollTo(0, 0);
			if(res.data.meta.total == 0){
				alertify.error("There is no Clinic");
			}
            dispatch({
                type: actions.GET_ALL_CENTERS,
                payload: res.data.data
            }); 
        }).catch(errorHandler).finally(() => {
            this.setState({
                isLoading: false
            });
        });
    };

	ListOfCenters = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { center_data } = this.state;
		return	<List {...this.props} center_data={center_data} />		
	};

	SearchPages = () => {
		return	<SearchPages {...this.props} />		
	};

	handlePageChange = (pageNumber) => {
		this.setState({activePage: pageNumber});
		let search = getSearchUrlFromState(this.state);
		this.getCenters(search + "page=" + 	pageNumber , actions.GET_ALL_CENTERS);
	}	
    render(){
		let { to,total } = this.state;
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
												<li>Hospitals</li>
												<li>Hospitals in Lahore</li>
											</ul>
										</div>
									</div>
								</div>
								{this.SearchPages()}
							</div>
						</div>
					</div>
					<div className="filters_listing">
						<div className="container">
							<ul className="clearfix">
								<li>
									<h6>Type</h6>
									<div className="switch-field">
										<Link to="clinic_list">
											<input type="radio" id="clinics" name="type_patient" value="clinics" checked/>
											<label >Clinics</label>
										</Link>
										<Link to="doctor_list">
											<input type="radio" id="doctors" name="type_patient" value="doctors" />
											<label >Doctors</label>
										</Link>
										<Link to="specialization_list">
											<input type="radio" id="clinics" name="type_patient" value="clinics"/>
											<label >Specialization</label>
										</Link>
										
									</div>
								</li>	
								<li className="pt-3">
								<span><strong>Showing {to}</strong> of {total} results</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="container margin_60_35">
						<div className="row">
							{this.ListOfCenters()}
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
const mapStateToProps = state => {
    return {
        centers: state.CenterReducers.centers,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch,
        getCenters: (search) => actions.getAllCenters(search),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CenterList);