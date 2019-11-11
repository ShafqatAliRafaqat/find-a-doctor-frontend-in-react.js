import React,{Component} from 'react';
import SearchHeader from "../Home/search_header"; 
class NotFound extends Component{
	state = {
		isLoading: true,
	}
    SearchHeader = () => {
		let page 	=	"404 Page Not Found";
        return <SearchHeader page = {page}/>
    }
    render(){
        return(
            <React.Fragment>
				<main>
					{this.SearchHeader()}
				</main>
            </React.Fragment>
        );
    }
} 
export default (NotFound);
