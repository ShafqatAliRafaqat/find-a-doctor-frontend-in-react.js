import React, {Component} from "react";
import { Link } from "react-router-dom";

class List extends Component{
    initState = {
        ...this.props,
    };
    state = {
        ...this.initState
    };
	render(){
        const { center_data } = this.state;
		return center_data.map(m => {
			return(
				<div className="col-lg-3 col-md-4  text-center feature-item spin rounded py-3">
						

				<div className="shadow list-card center-card">
					{/* <button className="btn btn-sm btn-doctors">{m.count_doctors} Doctors</button> */}
					<Link to={{pathname:`/center_detail/${m.id}`}}>

					<div className="img-padding">
					<div className="circle">
						{(m.picture) ?  <img src={m.picture} alt=""/>: <img src="https://support.hospitallcare.com/backend/web_imgs/specialization/32.svg" alt=""/>}
						{/* // <img src="https://support.hospitallcare.com/backend/web_imgs/specialization/32.svg" alt=""/> */}
					</div>
					</div>
					<h6 className="h6-center-list">{m.name}</h6>	
					<small className=" btn-block text-truncate">{m.focus_area}</small>

					</Link>

					<hr className="hr-card"></hr>
					<div className="row">
						<div className="col-6 col-sm-6 text-left text-12 border-right"><a href={m.map} >View on map</a></div>
						<div className="col-6 col-sm-6 text-right text-12 border-left"><Link to={{pathname:`/center_detail/${m.id}`}}>{m.count_doctors} Doctors</Link></div>
					</div>
				</div>
			</div>				

				// <div className="col-lg-4">
				// 	<div className="box_list wow fadeIn">
				// 		<a href="#0" className="wish_bt"></a>
				// 		<figure>
				// 			<Link to={{pathname:`/center_detail/${m.id}`}}>
				// 				{(m.picture) ? 
				// 					<img src={m.picture} alt="" className="img-fluid mx-auto d-block" style={{width:"100%", height:"auto"}} /> 
				// 				: 
				// 					<img src="web_imgs/center.jpg" alt="" className="img-fluid mx-auto d-block" style={{width:"100%", height:"auto"}}/>
				// 				}
				// 				<div className="preview"><span>Read more</span></div>
				// 			</Link>
				// 		</figure>
				// 		<div className="wrapper">
				// 			<small>{m.focus_area}</small>
				// 			<h3>{m.name}</h3>
				// 			<p>{m.about}</p>
				// 			<span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
				// 			<a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt="" /></a>
				// 		</div>
				// 		<ul>
				// 			<li><a href={m.map} ><i className="icon_pin_alt"></i>View on map</a></li>
				// 			<li><Link to={{pathname:`/center_detail/${m.id}`}}>View Details</Link></li>
                //             <li><Link to={{pathname:`/center_detail/${m.id}`}}>View Details</Link></li>
				// 		</ul>
				// 	</div>
				// </div>
			);
		});
	}
}

export default List;