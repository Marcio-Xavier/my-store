import React, { Component } from "react";
class Default extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
              <h1 className="display-3">Erro</h1>
              <h1>404</h1>
              <h2>Página não encontrada</h2>
              <h3>
                A URL requisistada{" "}
                <span className="text-danger">
                  {this.props.location.pathname}
                </span>{" "}
                não foi encontrada
              </h3>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Default;
