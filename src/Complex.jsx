import React, { Component } from "react";
import "./Complex.css";

export default class Complex extends Component {
  state = {
    nom: "",
    numSerie: "",
    date: ""
  };

  changeNom = e => {
    let x = this.state.nom.length;
    if (x < 21 && e.target.value.match(/[^0-9/]/gi)) {
      this.setState({
        nom: e.target.value.toUpperCase()
      });
    }
  };

  changeSerie = e => {
    if (!e.target.value.match(/[^0-9]/gi) && e.target.value.length < 17) {
      this.setState({
        numSerie: e.target.value.replace(/[ ]/g, "")
      });
    }
  };

  testNumSerie = ch1 => {
    let ch2 = "";
    let res = "";
    for (let i = 0; i < ch1.length; i += 4) {
      ch2 = ch1.slice(i, i + 4);
      res += ch2+ " "
    }
    return res;
  };

  changeDate = e => {
    if (
      !e.target.value.match(/[^0-9/]/gi) &&
      e.target.value.length < 6 &&
      e.target.value.slice(0, 2) < 13
    ) {
      this.setState({
        date: e.target.value
          .replace(/[^\d]/g, "")
          .replace(/(.{2})/g, "$1/")
          .replace(/^['/'\uFEFF\xA0]+|['/'\uFEFF\xA0]+$/g, "")
          .slice(0, 5)
      });
    }
  };

  render() {
    let res;
    if (this.state.numSerie.length === 16) {
      res = this.testNumSerie(this.state.numSerie);
    }

    return (
      <div className="objet">
        <div className="credit-card">
          <h3 className="title">Company name</h3>
          <img
            className="puce"
            src="https://t4.ftcdn.net/jpg/00/63/97/01/240_F_63970103_dXdz645GQ9DjenhJOti1eEvsFZY8gucA.jpg"
            alt="puce"
          />
          <div className="information">
            <div className="result">
              <span className="name">{this.state.nom}</span>
              <span style={{ color: "white" }}>{res}</span>
              <span style={{ color: "red" }}>{this.state.date}</span>
            </div>
            <div className="contener-card">
              <img
                className="mastercard"
                src="https://seeklogo.net/wp-content/uploads/2012/11/mastercard-maestro-logo-vector-400x400.png"
                alt="master card"
              />
            </div>
          </div>
        </div>
        <div className="contener-input">
          <input
            type="text"
            placeholder="Name"
            onChange={this.changeNom}
            value={this.state.nom}
            maxLength="20"
          />
          <input
            type="text"
            placeholder="1351 8"
            onChange={this.changeSerie}
            value={this.state.numSerie}
            maxLength="16"
          />
          <input
            type="text"
            placeholder="birth date"
            onChange={this.changeDate}
            value={this.state.date}
            // maxLength="5"
          />
        </div>
      </div>
    );
  }
}
// e => this.setState({myInputValue: e.target.value})
