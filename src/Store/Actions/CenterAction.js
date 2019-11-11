import APIModel from "../../Models/APIModel";
import axios from "axios";

export const GET_ALL_CENTERS  = "GET_ALL_CENTERS";
export const GET_TOP_CENTERS  = "GET_TOP_CENTERS";
export const FETCH_CENTERS    = "FETCH_CENTERS";

export const getAllCenters = (search) => {
  return axios.get(APIModel.HOST+"all_centers"+search,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
    }
  });
};

export const getTopCenters = (search) => {
  return axios.get(APIModel.HOST+"top_centers"+search,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
    }
  });
};

export const fetchCenter = (id,search) => {
  return axios.get(APIModel.HOST+"fetch_center/"+id+search,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
    }
  });
};