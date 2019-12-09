import React, { Component } from "react";
import { Redirect, Route, Switch, HashRouter } from 'react-router-dom';
import FooterSection from "./Footer";
import NavBarSection from "./Header";
import alertify from "alertifyjs";
import { connect } from "react-redux";
import ScrollToTop from "./../ScrollToTop"
import routes from "./../routes";
alertify.set('notifier', 'position', 'top-center');

class Layout extends Component {
  
    errorHandler = error => {

        let title = "Error";
        let message = "Something went wrong";
    
        if (error) {
          message = error.toString();
        }
    
        const { response } = error;
    
        if (response) {
    
          title = 'Error ' + response.status + ' - ' + response.statusText;
          message = response.data.message;
        }
    
        alertify.alert(title, message);
      }
    
    render() {
      
          return ( 
              <React.Fragment>
                  <div id="preloader">
                    <div data-loader="circle-side"></div>
                  </div>
                  <HashRouter>
                  <NavBarSection />
                  
                      <Switch>
                      {/* <ScrollToTop> */}
                        {routes.map((route, idx) => {
                          return route.Component ? (
                                  <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => {
                                    
                                    if(route.path){
                                          return (
                                            <div style={{minHeight:"500px"}}>
                                              <route.Component alertify={alertify} {...props} {...this.props} errorHandler={this.errorHandler}  />                                  
                                            </div>  
                                          );
                                      }
                                      return <Redirect to='/404_not_found' />;
                                  }}
                                  />     
                          )
                            : (null) 
                        },
                          )}
                          <Redirect to='/404_not_found' />
                          {/* </ScrollToTop> */}
                      </Switch>
                    
                    <FooterSection />
                  </HashRouter>
                  
            </React.Fragment>
        );
      }
    }
    const mapStateToProps = state => {
      return {
          user: state.AuthReducers.user
      };
  };
  
  
  export default connect( mapStateToProps, null )(Layout);
