import {
    ADD_ITEM,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
} from './cartConstant';

export const addItem=(item)=>{
    return {
        type: ADD_ITEM,
        payload: item,
      };
}

export const increaseQuantity=(prodId)=>{
    return {
        type: INCREASE_QUANTITY,
        payload: prodId,
      };
}


export const decreaseQuantity = (prodId) => {
    return {
      type: DECREASE_QUANTITY,
      payload: prodId,
    };
  };