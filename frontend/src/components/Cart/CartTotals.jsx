import React from "react";
import { Link } from "react-router-dom";

function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Limpar carrinho
              </button>
            </Link>
            <h5>
              <span className="text-title">Subtotal:</span>
              <strong>R$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Taxas:</span>
              <strong>R$ {cartTax}</strong>
              <small class="form-text text-muted">10% sobre o valor</small>
            </h5>
            <h5>
              <span className="text-title">Total:</span>
              <strong>R$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartTotals;
