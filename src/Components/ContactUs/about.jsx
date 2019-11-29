import React, {Component} from "react";
import { Link } from "react-router-dom";

import SearchPages from '../Search/search_pages';

class About extends Component{
    SearchPages = () => {
		return	<SearchPages {...this.props} />		
	};
    render(){
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
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {this.SearchPages()}
                </div>
            </div>
        </div>
            <div className="container py-4">
                <div className="row">
                    <div className="col-12 ">
                        <h4>About</h4>
                    </div>
                </div>
            </div>
            </main>
            <div className="white-container">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3>Welcome to HospitALL</h3>
                    </div>
                    <hr className="shine hr-shine"></hr>
                </div>
                <div className="p-about text-justify">
                    <p> <strong>HospitALL</strong> was initiated nearly a year ago by <strong>Ayub Ghauri</strong>, Executive Director of Netsol Technologies, 
                        one of the biggest IT company of Pakistan. The goal was to create a self-sustainable and accessible 
                        <strong>healthcare</strong> system in Pakistan and to lead the <strong>healthcare</strong> industry towards a more effective and efficient 
                        system, making things easier for all stakeholders involved.
                    </p>
                    <p>
                    At <strong>HospitALL</strong> we see ourselves as solution providers of the <strong>healthcare</strong> industry. We take pride in our state 
                    of the art partner clinics and specialized medical care providers. By being the prominent reference point in 
                    <strong>healthcare</strong> we are creating a platform that connects, cures and provides ease of service. <strong>HospitALL</strong> is working to 
                    bring all those involved in the industry on a single platform. We are establishing systems, that will aid us in 
                    providing the right kind of medical assistance in the hour of chaos.<br></br>
                    We aim to be market drivers, our objective is to not only disrupt the <strong>healthcare</strong> market but also create change in 
                    terms of mindsets. We firmly believe in the new way, which we define as an emphasis on preventive care in order to 
                    stimulate value addition for all. Throughout our organization, we follow a philosophy which rewards and nurtures work 
                    ethic, where everyone is committed to our principles of care, cure, and support. We believe in engendering a mindset 
                    change that is geared towards preventative care.
                    </p>
                    <p>
                    Our clients get unwavering support from us and we promise to put them at the center of everything we do. <strong>HospitALL</strong>  
                    will help our clients make a health promise and stick to it – as they are important! Through the creation of this 
                    atmosphere we are the future of <strong>healthcare</strong>.
                    </p>
                </div>
            </div>
            </div>
            <div class="second-container">
                <div className="container py-4">
                <div className="row">
                        <div className="col-12 text-center">
                            <h3>Leadership Team</h3>
                        </div>
                        <hr className="shine hr-shine"></hr>
                    </div>
                </div>
            </div>
            
            </React.Fragment>
        );
    }
}
export default About;