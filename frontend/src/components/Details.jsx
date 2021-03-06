import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {value => {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart
            } = value.detailProduct;
            return (
              <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src={img} alt={title} className="img-fluid" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>Modelo: {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      Marca: <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        <span>R$</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Sobre
                    </p>
                    <p className="text-muted lead">{info}</p>
                    <div>
                      <Link to="/">
                        <ButtonContainer>Voltar</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disable={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "Adicionado" : "Adicionar ao Carrinho"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}

export default Details;
