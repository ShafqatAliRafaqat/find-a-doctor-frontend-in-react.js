import APIModel from "../../Models/APIModel";
import axios from "axios";

export const DOCTOR_SIGN_UP             =   "DOCTOR_SIGN_UP";
export const DOCTOR_SIGN_IN             =   "DOCTOR_SIGN_IN";
export const PHONE_VARIFICATOIN         =   "PHONE_VARIFICATOIN";
export const CODE_VARIFICATOIN          =   "CODE_VARIFICATOIN";

export const doctorSignIn = (data) => {
    return axios.post(APIModel.HOST+"doctor_signIn",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}  
export const doctorSignUp = (data) => {
    return axios.post(APIModel.HOST+"doctor_signUp",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}  
export const phoneVarification = (data) => {
    return axios.post(APIModel.HOST+"phone",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}   
export const codeVarification = (data) => {
    return axios.post(APIModel.HOST+"doctorCodeVarification",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}   