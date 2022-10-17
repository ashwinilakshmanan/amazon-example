import { ActionTypes } from "../actions/ActionTypes";

const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  INCREASE_ITEM_QTY,
  DECREASE_ITEM_QT,
  UPDATE_ITEM_QTY,
} = ActionTypes;

const initialState = {
  cartList: [],
  wishList: [],
  cartTotalQty: 0,
  cartTotalAmt: 0,
};
export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reached cartReducer");
      return {
        ...state,

        cartList: [...state.cartList, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartList: state.cartList.filter((p) => p.id !== action.payload.id),
      };

    case ADD_TO_WISHLIST:
      //console.log("reached wishlist");
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishList: state.wishList.filter((w) => w.id !== action.payload.id),
      };

    // case INCREASE_ITEM_QTY:
    //   const temp = state.cartList.find(
    //     (itemInc) => itemInc.id === action.payload.id
    //   );
    //   temp.qty++;
    //   const newCartItems=state.cartList.filter((product)=>product.id!==temp.id)
    //   console.log("cartreducer", temp);
    //   return {
    //     ...state,
    //     cartList: [...newCartItems, temp],
    //   };

    case UPDATE_ITEM_QTY:
      const temp = state.cartList.find(
        (incItem) => incItem.id === action.payload.item.id
      );
      if(action.payload.action==="increment"){
        temp.qty++;
      }
      else{
        temp.qty--;
      }
        
      const newCartItems = state.cartList.filter(
        (product) => product.id !== temp.id
      );
      console.log("cartreducer", temp);
      return {
        ...state,
        cartList: [...newCartItems, temp],
      };

    default:
      return state;
      break;
  }
};
