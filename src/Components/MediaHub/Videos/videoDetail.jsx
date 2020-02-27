import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../Store/Actions/MediaHubAction";
import { getSearchUrlFromState } from '../../../util/functions'
import * as qs from 'query-string';
import SearchPages from '../../Search/search_pages';
import {Helmet} from "react-helmet";
import moment from 'moment';
import Pagination from "react-js-pagination";

class VideoDetail extends Component{

	SearchPages = () => {
		return	<SearchPages {...this.props} />		
	};
    render(){
        return(
            <>
				<Helmet>
					<meta charSet="utf-8" />
    				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="keywords" content="HTML,CSS,XML,JavaScript"></meta>
					
    				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    				<meta name="description" content="Top blog of health | get latast News regarting health | HospitALL Health Care" />
    				<meta name="author" content="Hospitall Care" />
					<title>Top blog of health | get latast News regarting health | HospitALL Health Care</title>
					<Link to='/blogs'></Link>
            	</Helmet>
            	<main>
				<div id="results">
						<div className="container">
							<div className="row">
							<div className="col-md-6">
												<div id="breadcrumb">
													<div className="container">
														<ul>
															<li><Link to="/">Home</Link></li>
															<li><Link to="/blogs">Vlogs</Link></li>
															<li>List of Vlogs</li>
														</ul>
													</div>
												</div>
											</div>
								{this.SearchPages()}
							</div>
						</div>
					</div>
				</main>
            </>
        );
    }
}
export default VideoDetail;