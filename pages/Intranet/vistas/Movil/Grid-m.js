/** @format */

import React, { Component } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class PagosM extends Component {
  getArrayUniquePeriod = (arrayCourses) => {
    var periodos = [];
    arrayCourses.forEach((cursos) => {
      if (!periodos.includes(cursos.period)) {
        periodos.push(cursos.period);
      }
    });
    return periodos;
  };
  callColapsar = (art) => {
    let article = document.getElementById(art);
    article.classList.toggle("expanded");
  };
  render() {
    const Active = this.props.Active;
    const getFinancesPaid = this.props.objgetFinancesPaid;
    const getFinancesVisaSync = this.props.objgetFinancesVisaSync;
    const getFinancesDebts = this.props.objgetFinancesDebts;
    const tabActivoValue = this.props.ObjtabActivoValue;
    const FinacesDebts = this.props.objFinacesDebts;
    const FinacesPaid = this.props.objFinacesPaid;
    const dataHistorial =
      typeof this.props.objhistorial != false
        ? this.props.objhistorial.courseArray != undefined
          ? this.props.objhistorial.courseArray
          : null
        : null;
    const historial =
      dataHistorial != null ? this.getArrayUniquePeriod(dataHistorial) : [];
    return (
      <>
        {Active == "Pagos" ? (
          <div className="wrapper">
            <input type="radio" name="slide" id="apagar"></input>
            <input type="radio" name="slide" id="sincronizar"></input>
            <input type="radio" name="slide" id="pagadas"></input>
            <nav
              className="mb-3"
              style={{
                borderBottom: "0.2em solid #404041",
                padding: "2.1% 0",
              }}
            >
              <label
                htmlFor="apagar"
                checked={
                  tabActivoValue == "OBLIGACIONES_A_PAGAR" ? true : false
                }
                onClick={() => getFinancesDebts()}
              >
                Obligaciones a Pagar
              </label>
              <label
                htmlFor="sincronizar"
                checked={
                  tabActivoValue == "PAGOS_POR_SINCRONIZAR" ? true : false
                }
                onClick={() => getFinancesVisaSync()}
              >
                Pagos por Sincronizar
              </label>
              <label
                htmlFor="pagadas"
                checked={
                  tabActivoValue == "OBLIGACIONES_PAGADAS" ? true : false
                }
                onClick={() => getFinancesPaid()}
              >
                Obligaciones Pagadas
              </label>
              <div className="slider"></div>
            </nav>
            <section className="contenedor-card-pagos">
              {tabActivoValue == "OBLIGACIONES_A_PAGAR" ? (
                <>
                  {FinacesDebts.map((_, i) => {
                    return (
                      <div className="contend-apagar">
                        <div className="mb-1">
                          <div className="card-header background-sub-cursos header-pagos-card">
                            <div>
                              <label className="container-pagos" />
                              {_.docType}
                            </div>
                            <div>
                              <ExpandMoreIcon
                                style={{ float: "right", color: "black" }}
                                onClick={() =>
                                  this.callColapsar(
                                    `${i}_obligaciones_a_pagadas`
                                  )
                                }
                              ></ExpandMoreIcon>
                            </div>
                          </div>
                          <article
                            id={`${i}_obligaciones_a_pagadas`}
                            className="article"
                          >
                            <div
                              className="card-body "
                              style={{ display: "contents" }}
                            >
                              <div>
                                <div className="card-body list-detalle-boleta">
                                  <label htmlFor="N°documento">
                                    Núm. Documento:
                                  </label>
                                  <label>
                                    {_.numDoc == null || _.numDoc != ""
                                      ? _.numDoc
                                      : " No especificado. "}
                                  </label>
                                  <label htmlFor="FVencimiento">
                                    Fec. Vencimiento:
                                  </label>
                                  <label>{_.expirationDate}</label>
                                  <label htmlFor="Periodo">Periodo:</label>
                                  <label>{_.semester}</label>
                                  <label htmlFor="Saldo">Saldo:</label>
                                  <label>{_.balance}</label>
                                  <label htmlFor="Mora">Mora:</label>
                                  <label>{_.debtAmount}</label>
                                  <label htmlFor="TPagar">Total a Pagar:</label>
                                  <label>{_.balance}</label>
                                </div>
                                {_.amountDetail.map((__, item) => {
                                  return (
                                    <div className=" mb-3" key={item}>
                                      <div className="card-body card-detalle-boleta">
                                        <div className="list-detalle-boleta">
                                          <label htmlFor="N°documento">
                                            Cuota:
                                          </label>
                                          <label>{__.fee}</label>
                                          <label htmlFor="FVencimiento">
                                            Cantidad:
                                          </label>
                                          <label>{__.amount}</label>
                                          <label htmlFor="Periodo">
                                            Descripción:
                                          </label>
                                          <label>{__.description}</label>
                                          <label htmlFor="Saldo">
                                            Precio Unitario:
                                          </label>
                                          <label>{__.price}</label>
                                          <label htmlFor="TPagar">
                                            Subtotal:
                                          </label>
                                          <label>{__.subtotal}</label>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : null}

              {tabActivoValue == "PAGOS_POR_SINCRONIZAR" ? (
                <>
                  <div className=" contend-apagar">
                    <div className="mb-1">
                      {/* <div className="card-header background-sub-cursos header-pagos-card">
                        <div>
                          <label className="container-pagos" />
                        </div>
                        <div>
                          <ExpandMoreIcon
                            style={{ float: "right" }}
                          ></ExpandMoreIcon>
                        </div>
                      </div> */}
                      <div style={{ textAlign: "center" }}>
                        No existen Pagos por sincronizar...
                      </div>
                    </div>
                  </div>
                  {/* );
                  })} */}
                </>
              ) : null}

              {tabActivoValue == "OBLIGACIONES_PAGADAS" ? (
                <>
                  {FinacesPaid.map((_, i) => {
                    return (
                      <div className="mb-1 contend-apagar">
                        <div>
                          <div className="card-header background-sub-cursos header-pagos-card">
                            <div>
                              <label className="container-pagos" />
                              Periodo : {_.period}
                            </div>
                            <div>
                              <ExpandMoreIcon
                                style={{ float: "right", color: "black" }}
                                onClick={() =>
                                  this.callColapsar(`${i}_obligaciones_pagadas`)
                                }
                              ></ExpandMoreIcon>
                            </div>
                          </div>
                          <article
                            id={`${i}_obligaciones_pagadas`}
                            className="article"
                          >
                            <div>
                              {_.payments.map((__, item) => {
                                return (
                                  <div className="mb-1" key={item}>
                                    <div className="card-body card-detalle-boleta">
                                      <div className="list-detalle-boleta">
                                        <label htmlFor="FVencimiento">
                                          Fec. Vencimiento:
                                        </label>
                                        <label>{__.paidDate}</label>
                                        <label htmlFor="Concepto">
                                          Concepto:
                                        </label>
                                        <label>{__.concept}</label>
                                        <label htmlFor="NDocumento">
                                          Núm. Documento:
                                        </label>
                                        <label>{__.documentNumber}</label>
                                        <label htmlFor="Cuota">Cuota:</label>
                                        <label>{__.balance}</label>
                                        <label htmlFor="Importe">
                                          Importe:
                                        </label>
                                        <label>{__.import}</label>
                                        <label htmlFor="Pagado">Pagado:</label>
                                        <label>{__.paid}</label>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </article>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : null}
            </section>
          </div>
        ) : (
          <div className="wrapper">
            <section className="contenedor-card-pagos">
              {historial != null && historial.length != 0
                ? historial.map((_, i) => {
                    return (
                      <div className="mb-1 contend-apagar" key={i}>
                        <div>
                          <div className="card-header background-sub-cursos d-flex">
                            <div className="mr-auto p-2 ">Periodo: {_}</div>
                            {dataHistorial != null
                              ? dataHistorial
                                  .filter((u) => u.period == _)
                                  .map((courses, i) => {
                                    return i == 0 ? (
                                      <div className="ml-auto p-2" key={i}>
                                        Promedio: {courses.averageSemester}
                                      </div>
                                    ) : (
                                      ""
                                    );
                                  })
                              : null}

                            <div>
                              <ExpandMoreIcon
                                style={{ float: "right", color: "black" }}
                                onClick={() =>
                                  this.callColapsar(`${i}_historial_academico`)
                                }
                              ></ExpandMoreIcon>
                            </div>
                          </div>
                          <article
                            id={`${i}_historial_academico`}
                            className="article"
                          >
                            <div>
                              {dataHistorial != null &&
                              dataHistorial.length != 0
                                ? dataHistorial
                                    .filter((u) => u.period == _)
                                    .map((__, item) => {
                                      return (
                                        <div className=" mb-1" key={item}>
                                          <div className="card-body card-detalle-boleta">
                                            <div className="list-detalle-boleta">
                                              <label htmlFor="Codigo">
                                                Código:
                                              </label>
                                              <label>{__.courseId}</label>
                                              <label htmlFor="Curso">
                                                Curso:
                                              </label>
                                              <label>{__.courseName}</label>
                                              <label htmlFor="Credito">
                                                Crédito:
                                              </label>
                                              <label>{__.credit}</label>
                                              <label htmlFor="Periodo">
                                                Periodo:
                                              </label>
                                              <label>{__.period}</label>
                                              <label htmlFor="Estado">
                                                Estado:
                                              </label>
                                              <label>{__.state}</label>
                                              <label htmlFor="NVez">
                                                N° de Vez:
                                              </label>
                                              <label>{__.time}</label>
                                              <label htmlFor="Nota">
                                                Nota:
                                              </label>
                                              <label>{__.finalGrade}</label>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })
                                : ""}
                            </div>
                          </article>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </section>
          </div>
        )}
      </>
    );
  }
}
