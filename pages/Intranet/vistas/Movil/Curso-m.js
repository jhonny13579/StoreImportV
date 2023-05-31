import React, { Component } from 'react';

import ListaCursoM from "./Lista-curso-m";

export default class CursoM extends Component {

  render() {
    const lisCursos = this.props.objlisCursos;
    const data = this.props.objdata;
    return (
      <div className="wrapper">
        <nav className="mb-2">
          <div className="row col-12">
            <div className="row col">
              <div className="leyenda-virtual-movil"></div>
              <div>
                <h1 className="leyenda-text-movil">VIRTUAL</h1>
              </div>
            </div>
            <div className="row col">
              <div className="leyenda-presencial-movil"></div>
              <div>
                <h1 className="leyenda-text-movil">PRESENCIAL</h1>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="background-sub-cursos col-12"
          style={{ padding: "4% 3%" }}
        >
          <div className="row">
            <div className="col-4 mr-2">
              <div className="navbar-brand text-curso-movil">MIS CURSOS</div>
            </div>
          </div>
        </div>
        {lisCursos != undefined &&
        lisCursos != null &&
        lisCursos.length != 0 ? (
          lisCursos.map((cursos, i) => {
            return (
              <div
                className={
                  cursos.courseType == "Presencial"
                    ? "border-presencial-movil mt-4 card"
                    : "border-virtual-movil mt-4 card"
                }
                key={cursos.courseId}
              >
                <ListaCursoM objCursos={cursos} objStudent={data.student} />
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: "center" }}>No existen Cursos...</div>
        )}
      </div>
    );
  }
}
