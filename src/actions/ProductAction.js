import { ActionTypes } from "./ActionTypes";

const {
  SET_PRODUCTS,
  SET_PROD_SEARCH_TEXT,
  SELECTED_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  INCREASE_ITEM_QTY,
  DECREASE_ITEM_QT,
  SET_DEPARTMENT,
  UPDATE_ITEM_QTY
} = ActionTypes;

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const setProdSearchText = (searchText) => {
  return {
    type: SET_PROD_SEARCH_TEXT,
    payload: searchText,
  };
};

export const setSelectedProduct = (productId) => {
  return {
    type: SELECTED_PRODUCT,
    payload: productId,
  };
};

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (remove) => {
  return {
    type: REMOVE_FROM_CART,
    payload: remove,
  };
};

export const addToWishlist = (wishlist) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: wishlist,
  };
};

export const removeFromWishList = (removeWish) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: removeWish,
  };
};

// export const increaseItemQty = (inc) => {
//   return {
//     type: INCREASE_ITEM_QTY,
//     payload: inc,
//   };
// };

// export const decreseItemQty = (dec) => {
//   return {
//     type: DECREASE_ITEM_QT,
//     payload: dec,
//   };
// };

export const updateItemQty = (inc) => {
    return {
      type: UPDATE_ITEM_QTY,
      payload: inc,
    };
  };

export const setDepartment=(dept)=>{
  return{
    type:SET_DEPARTMENT,
    payload:dept,
  }
}
