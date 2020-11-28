import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCartRequest } from '../store/modules/cart/actions';

function CatalogItem({ product }) {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector(state => {
    // verificando se o produto está dentro da lista de failedStockCheck
    return state.cart.failedStockCheck.includes(product.id);
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}

      <button 
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>

      {hasFailedStockCheck && <span style={{ color: 'red', marginLeft: 10 }}>Falta de estoque!</span>}
    </article>
  );
}

export default CatalogItem;