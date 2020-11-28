import produce from 'immer';

const INITIAL_STATE = {
  items: [],
  failedStockCheck: []
};

function cart(state = INITIAL_STATE, action) {
  /**
   * Draft seria um rascunho do estado, modificamos ele
   * e a lib compara nossas alterações com o estado anterior
   * com isso, ela consegue manter a imutabilidade e não precisamos utilizar spread
   */
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_PRODUCT_TO_CART_SUCCESS': {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item => 
          item.product.id === product.id,
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }      
      case 'ADD_PRODUCT_TO_CART_FAILURE': {
        draft.failedStockCheck.push(action.payload.productId);
        break;
      }
      default: {
        return draft;
      }
    }
  });
}

export default cart;