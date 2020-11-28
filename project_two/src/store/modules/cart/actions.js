export function addProductToCartRequest(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product,
    }
  };
}

export function addProductToCartSuccess(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      product,
    }
  };
}

export function addProductToCartFailure(productId) {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: {
      productId,
    }
  };
}