/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../App.css";
import "../components/Movil/movil.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./Sidebar";

import { Login } from "./Login/Login";

export default class Home extends Component {
  state = {
    isHome: true,
    isChangePasswordToken: false,
  };

  componentDidMount() {
    const valores = window.location;
    var dataUser = localStorage.getItem("userLogin");
    console.log("dataUser!!!", dataUser);

    if (valores.pathname == "/Login") {
      localStorage.removeItem("userLogin");
      this.setState({
        isHome: false,
        isChangePasswordToken: false,
      });
    } else if (
      valores.pathname == "/login" ||
      valores.pathname == "/" ||
      valores.pathname == "/recuperar-constrasenia"
    ) {
      console.log("dataUser!!!", dataUser);
      if (dataUser == null || dataUser == "") {
        this.setState({
          isHome: false,
          isChangePasswordToken: false,
        });
        if (valores.pathname == "/") {
          window.location.href = "/login";
        }
      } else {
        this.setState({
          isHome: true,
          isChangePasswordToken: false,
        });
        window.location.href = "/pagos";
      }
    }
    if (valores.pathname.includes("/recover-password")) {
      this.setState({
        isHome: false,
        isChangePasswordToken: true,
      });
    }
  }

  render() {
    const _isMobile = this.props.isMobile;
    console.log(_isMobile);
    const dataUser = JSON.parse(localStorage.getItem("userLogin"));
    const document =
      dataUser && dataUser.results ? dataUser.results[0].num_doc : null;
    console.log(document, "docu");

    return (
      <Router>
        {this.state.isHome && !this.state.isChangePasswordToken ? (
          <Sidebar isMobile={_isMobile} />
        ) : null}
        <Route
          exact
          path="/login"
          component={() => {
            return <Login />;
          }}
        />
      </Router>
    );
  }
}
