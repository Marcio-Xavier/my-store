import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";

class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <ProductConsumer>
            {value => {
              const { cart } = value;
              if (cart.length > 0) {
                return (
                  <React.Fragment>
                    <Title name="Seu" title="carrinho" />
                    <CartColumns />
                    <CartList value={value} />
                  </React.Fragment>
                );
              } else {
                return <Title name="Carrinho" title="vazio" />;
              }
            }}
          </ProductConsumer>
        </section>
      </React.Fragment>
    );
  }
}

export default Cart;
