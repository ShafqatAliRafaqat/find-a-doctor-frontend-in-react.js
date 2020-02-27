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
class BlogCategory extends Component{
    state = {
		isLoading	: true,
		current_page: 0,
		last_page	: 0,
		per_page	: 0,
		total		: 0,
		recent_blogs:'',
		category	:'',
		blog_data	:'',
		activePage	:0,
		blog_categories	:'',
		
	};
	componentDidMount() {
		window.scrollTo(0, 0);
		let search	 = this.props.location.search;
        const params = qs.parse(search);
        for (let key in params) {
            this.setState({
                [key]: params[key]
            });
        }
        this.getBlogCategory(search);
	  }
	  componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
			let search	 = this.props.location.search;
			const params = qs.parse(search);
			for (let key in params) {
				this.setState({
					[key]: params[key]
				});
			}
        	this.getBlogCategory(search);
        }
    }
      getBlogCategory = (search) => {

        this.setState({
            isLoading: true
        });

        let { getBlogCategory, dispatch, errorHandler, alertify } = this.props;
		let categoryId = this.props.match.params.categoryId;
		getBlogCategory(categoryId,search).then(res => {
            this.setState({
				current_page: res.data.meta.current_page,
                last_page	: res.data.meta.last_page,
                to			: res.data.meta.to,
                per_page	: res.data.meta.per_page,
                total		: res.data.meta.total,
                category	: res.data.meta.category,
                blog_data	: res.data.data,
                recent_blogs	: res.data.meta.recent_blogs,
                blog_categories	: res.data.meta.blog_categories,
			});
			if(res.data.meta.total == 0){
				alertify.error("There is no Blog Right now");
			}
			window.scrollTo(0, 0);
            dispatch({
                type: actions.GET_BLOG_CATEGORY,
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
	handlePageChange = (pageNumber) => {
		this.setState({activePage: pageNumber});
		let search = getSearchUrlFromState(this.state);
		this.getBlogCategory(search + "page=" + 	pageNumber , actions.GET_BLOG_CATEGORY);
	}
	ListOfblogs = () => {
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { blog_data } = this.state;
		var slugify = require('slugify');
		return blog_data.map(m => {
			var image = "http://127.0.0.1:8000/backend/uploads/blogs/"+m.picture
			var description = m.description.substr(0, 500)
			return(
				<article className="blog wow fadeIn">
					<div className="row no-gutters">
						<div className="col-lg-7">
							<figure>
								<Link to={{ pathname:`/blog-detail/${slugify(m.title)}/${m.id}` }}><img src={image} alt={m.title} /><div className="preview"><span>Read more</span></div></Link>
							</figure>
						</div>
						<div className="col-lg-5">
							<div className="post_info">
								<small>{ moment(m.updated_at).format('LLLL')}</small>
								<h3><Link to={{ pathname:`/blog-detail/${slugify(m.title)}/${m.id}` }}>{m.title}</Link></h3>
								<span dangerouslySetInnerHTML={{__html: description}} />
								<ul>
									<li>
										<div className="thumb"><img src="http://via.placeholder.com/100x100.jpg" alt="" /></div> {m.updated_by}
									</li>
									<li><i className="icon_comment_alt"></i> 20</li>
								</ul>
							</div>
						</div>
					</div>
				</article>
			);	
		});
	};
	recentBlogs = () =>{
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { recent_blogs } = this.state;
		var slugify = require('slugify');
		return recent_blogs.map(m => {
			var image = "http://127.0.0.1:8000/backend/uploads/blogs/"+m.picture
			return(
				<li>
					<div className="alignleft">
						<Link to={{ pathname:`/blog-detail/${slugify(m.title)}/${m.id}` }}><img src={image} alt={m.title} /></Link>
					</div>
					<small>{moment(m.updated_at).format('LL')}</small>
					<h3><Link to={{ pathname:`/blog-detail/${slugify(m.title)}/${m.id}` }} title="">{m.title}</Link></h3>
				</li>
			);	
		});
	};
	blogCategories = () =>{
		if (this.state.isLoading) {
            return (<div data-loader="circle-side"></div>);
        }
		const { blog_categories } = this.state;
		var slugify = require('slugify');
		return blog_categories.map(m => {
			return(
				<li><Link to={{ pathname:`/blog/${slugify(m.name)}/${m.category_id}` }}>{m.name} <span>({m.total_blogs})</span></Link></li>
			);	
		});
	};
    render(){
		let { total ,category} = this.state;	

        return(
            <>
				<Helmet>
					<meta charSet="utf-8" />
    				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="keywords" content="HTML,CSS,XML,JavaScript"></meta>
					<meta http-equiv="refresh" content="30"></meta>
    				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    				<meta name="description" content={category.meta_description} />
    				<meta name="author" content="Hospitall Care" />
					<title>{category.meta_title}</title>
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
															<li><Link to="/blogs">Blogs</Link></li>
															<li>{category.name}</li>
														</ul>
													</div>
												</div>
											</div>
								{this.SearchPages()}
							</div>
						</div>
					</div>

		<div className="container margin_60">
			<div className="main_title">
				<h1>{category.name}</h1>
				<span dangerouslySetInnerHTML={{__html: category.description}} />
			</div>
			<div className="row">
				<div className="col-lg-9">
				
					{this.ListOfblogs()}
					<div className="row">
							<div className="text-center col-12">
								{(total != 0)?	<Pagination
									prevPageText='<'
									nextPageText='>'
									firstPageText='<<'
									lastPageText='>>'
									pageRangeDisplayed={4}
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
				<aside className="col-lg-3">

					<div className="widget">
						<div className="widget-title">
							<h4>Recent Posts</h4>
						</div>
						<ul className="comments-list">
							{this.recentBlogs()}
						</ul>
					</div>
					<div className="widget">
						<div className="widget-title">
							<h4>Blog Categories</h4>
						</div>
						<ul className="cats">
							{this.blogCategories()}
						</ul>
					</div>
				</aside>
			</div>
		</div>
	</main>
            </>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch,
        getBlogCategory: (categoryId,search) => actions.getBlogCategory(categoryId,search),
    };
};

export default connect(mapDispatchToProps)(BlogCategory);