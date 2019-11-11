import APIModel from "../../Models/APIModel";
import axios from "axios";

export const GET_ALL_TREATMENTS       = "GET_ALL_TREATMENTS";
export const FETCH_TREATMENT          = "FETCH_TREATMENT";
export const FETCH_SPECIALIZATION     = "FETCH_SPECIALIZATION";

export const getAllTreatments = (search) => {
  return axios.get(APIModel.HOST+"all_treatments"+search,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
    }
  });
};

export const getSpecialization = () => {
  return axios.get(APIModel.HOST+"top_specializations",{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
    }
  });
};

export const fetchTreatemnt = (id,search) => {
  return axios.get(APIModel.HOST+"fetch_treatment/"+id+search,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
    }
  });
};
export const getCenterTreatments = (data) => {
  return axios.post(APIModel.HOST+"get_center_treatments",data,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
    }
  });
};