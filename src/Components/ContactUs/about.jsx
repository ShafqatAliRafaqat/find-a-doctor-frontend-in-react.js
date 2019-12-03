import React, {Component} from "react";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';


import SearchPages from '../Search/search_pages';

class About extends Component{
    state = {
        isLoading   : true,
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
    componentDidMount(){
        window.scrollTo(0, 0);
    }
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
            <div className="second-container">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>Leadership Team</h3>
                        </div>
                        <hr className="shine hr-shine"></hr>
    <section id="team" className="pb-5">
    <div className="container">
        <div className="row">
            {/* <!-- Team member  1--> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="web_imgs/ayubGhauri.jpg" alt="card image"/></p>
                                    <h4 className="card-title">Ayub Ghauri</h4>
                                    <h6 className="card-text h6-team">Founder / CEO</h6>
                                    {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Ayub Ghauri</h4>
                                    <p className="card-text">Ayub Ghauri is currently in charge of providing Information Security Solutions to the 
                                    companies in the region, and as well as in the process of expanding the domain footprint globally. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member 1 --> */}
            {/* <!-- Team member 2 --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="web_imgs/shahid-javed-burki.jpg" alt="card image"/></p>
                                    <h4 className="card-title">Shahid Burki</h4>
                                    <h6 className="card-text h6-team">Board of Director</h6>
                                    {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Shahid Burki</h4>
                                    <p className="card-text">Shahid Burki is currently in charge of providing Information Security Solutions to the 
                                    companies in the region, and as well as in the process of expanding the domain footprint globally. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member 2 --> */}
            {/* <!-- Team member 3 --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="web_imgs/najam-1.jpg" alt="card image"/></p>
                                    <h4 className="card-title">Shahid Najam</h4>
                                    <h6 className="card-text h6-team">Board of Director</h6>
                                    {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Shahid Najam</h4>
                                    <p className="card-text">Shahid Burki is currently in charge of providing Information Security Solutions to the 
                                    companies in the region, and as well as in the process of expanding the domain footprint globally. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member 3 --> */}
            {/* <!-- Team member 4 --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="web_imgs/Najeeb-Ghauri.jpg" alt="card image"/></p>
                                    <h4 className="card-title">Najeeb Ghauri</h4>
                                    <h6 className="card-text h6-team">Board of Advisory</h6>
                                    {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Najeeb Ghauri</h4>
                                    <p className="card-text">Najeeb Ghauri is currently in charge of providing Information Security Solutions to the 
                                    companies in the region, and as well as in the process of expanding the domain footprint globally. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member 4 --> */}
            {/* <!-- Team member 5 --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="web_imgs/Sairah.jpg" alt="card image"/></p>
                                    <h4 className="card-title">Saira Burki</h4>
                                    <h6 className="card-text h6-team">Board of Advisory</h6>
                                    {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Saira Burki</h4>
                                    <p className="card-text">Saira Burki is currently in charge of providing Information Security Solutions to the 
                                    companies in the region, and as well as in the process of expanding the domain footprint globally. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member 5 --> */}
            {/* <!-- Team member 6 --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="web_imgs/Naeem-Ghuri.jpg" alt="card image"/></p>
                                    <h4 className="card-title">Naeem Ghauri</h4>
                                    <h6 className="card-text h6-team">Board of Advisory</h6>
                                    {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Naeem Ghauri</h4>
                                    <p className="card-text">Naeem Ghauri is currently in charge of providing Information Security Solutions to the 
                                    companies in the region, and as well as in the process of expanding the domain footprint globally. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./Team member 6 --> */}



        </div>
    </div>
</section>
                    </div>
                </div>
            </div>
            
            <div className="white-container">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3>Our Partners</h3>
                    </div>
                    <hr className="shine hr-shine"></hr>
                </div>
                <div className="col-12 text-center">
                <OwlCarousel
                    id          = "reccomended"
                    className   = "owl-carousel owl-theme owl-loaded owl-drag owl-item cloned"
                    loop        = {true}
                    margin      = {2}
                    items       = {5}
                    responsive  = {this.state.responsive}
                    autoplay    = {true}
                    animateOut  = {true}
                    center      = {true}
                    nav         = {true}                    
                    >

                    <div className="item ">
                    <Link>
                        <img className="logos-img" src="web_imgs/logos/Advance-Hair-Center-400x300.jpg" alt=""  width="200px"  height="300px" />
                    </Link>
                    </div>

                    <div className="item">
                    <Link>
                    <img className="logos-img" src="web_imgs/logos/CosmoLux-400x300.jpg" alt=""  width="200px"  height="300px" />
                    </Link>
                    </div>
                    <div className="item">
                    <Link>
                    <img className="logos-img" src="web_imgs/logos/Doctor-Hospital-400x300.jpg" alt=""  width="200px"  height="300px" />
                    </Link>
                    </div>
                    <div className="item">
                    <Link>
                        <img  className="logos-img"src="web_imgs/logos/Netsol-400x300.jpg" alt=""  width="200px"  height="300px" />
                    </Link>
                    </div>
                    <div className="item">
                    <Link>
                        <img className="logos-img" src="web_imgs/logos/NSpire-400x300.jpg" alt=""  width="200px"  height="300px" />
                    </Link>
                    </div>
                    <div className="item">
                    <Link>
                        <img className="logos-img" src="web_imgs/logos/Servaid--400x300.jpg" alt=""  width="200px"  height="300px" />
                    </Link>
                    </div>
                </OwlCarousel>
                </div>
            </div>
            </div>

            </React.Fragment>
        );
    }
}
export default About;