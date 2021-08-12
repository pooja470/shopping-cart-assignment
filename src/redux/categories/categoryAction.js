import {
    FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from './categoryConstant';

import { CATEGORIES_URL } from "../../constants";

export const fetchCategoriesRequest=()=>{
  return{
      type:FETCH_CATEGORIES_REQUEST,
  }
}

export const fetchCategoriesSuccess=(categories)=>{
    return{
        type:FETCH_CATEGORIES_SUCCESS,
        payload:categories,
    }
  }

  export const fetchCategoriesFailure=(error)=>{
    return{
        type:FETCH_CATEGORIES_FAILURE,
        payload:error,
    }
  }

  export const fetchCategories=()=>{
      return(dispatch)=>{
       dispatch(fetchCategoriesRequest());
       fetch(CATEGORIES_URL)
       .then((res)=>res.json())
       .then((data)=>{
        dispatch(fetchCategoriesSuccess(data));
       })
       .catch((err)=>{
        dispatch(fetchCategoriesFailure(err));
       });
      }
  }