import React, { Component } from "react";
function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <React.Fragment>
      <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">Produto:</span>
          {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">Preço:</span>
          {price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => decrement(id)}
              >
                -
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default CartItem;
