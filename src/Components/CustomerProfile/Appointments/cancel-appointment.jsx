import React, { Component } from "react";
import { connect } from "react-redux";
import alertify from "alertifyjs";

import {
    Button,
    ModalFooter,
    ModalBody,
    ModalHeader,
    Modal,
    FormGroup, Input, Label,
} from 'reactstrap';
import * as actions from "../../../Store/Actions/AppointmentAction";
import SweetAlert from 'react-bootstrap-sweetalert';

alertify.set('notifier', 'position', 'top-center');

class CancelAppointment extends Component {

    initState = {
        ...this.props,
        processing      : false,
        isOpen          : false,
        show            : false
    };

    state = {
        ...this.initState,
        id              :this.initState.id,
        isLoading       : false,
        data            : '',
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
 
    cancelAppointment = () => {

        let { cancelAppointment, dispatch, errorHandler } = this.props;

        let id  = this.state.id;
        let token       = this.props.user.access_token;
        cancelAppointment(id, token).then(res => {
            this.setState({
				show	: true,
				data	: res.data.data,
			});
			if(res.data.data){
                this.props.history.push('/approved_appointments');
                alertify.success("Your appointment has been canceled!");
                setTimeout(window.location.reload(false),100000);
            }
		}).catch(errorHandler).finally(() => {
			this.setState({
				show: false
			});
		});
    };
   
    render() {

        const { isOpen, processing} = this.state;
        return (
            <React.Fragment>    
                <button onClick={() => this.setState({ show: true })} className="btn btn-block btn-warning text-white font-weight-bold d-none d-lg-block no-booking-btn">
                    Cancel Booking
                </button>
                <button onClick={() => this.setState({ show: true })} className="btn btn-block btn-warning text-white font-weight-bold m-0 d-lg-none no-booking-btn">
                    Cancel Booking
                </button>
                <SweetAlert
                    warning
                    showCancel
                    show={this.state.show}
                    confirmBtnText="Yes, Cancel!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={this.cancelAppointment}
                    onCancel={() => this.setState({ show: false })}
                    focusCancelBtn
                    >
                    You want to cancel the appointment!
                </SweetAlert>
                {/* <Modal isOpen={isOpen} toggle={this.toggle} className="modal-primary modal-center">
                    <ModalHeader toggle={this.toggle}><i className="fa fa-edit" />Cancel Appointment</ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group text-center">
                                    <label>
                                        Are you sure? 
                                    </label>
                                </div>
                                <div className="form-group text-center">
                                    <label>
                                        You want to cancel appointment!
                                    </label>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button color="primary" className='btn_1' onClick={this.cancelAppointment}>{(processing) ? "Updating..." : " Continue"}</button>{' '}
                    </ModalFooter>
                </Modal> */}
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
      user: state.AuthReducers.user
    };
  };
const mapDispatchToProps = dispatch => {
	return {
		dispatch: dispatch,
        cancelAppointment : (params,token) => actions.cancelAppointment(params, token),
	};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CancelAppointment);
