import React, { Component } from 'react';
import Reloj from '../../assets/img/time-outline.svg';


export default class HorariosM extends Component {
    render() {
        const Horario = this.props.objHorario;
        const timeDetail = Horario.timeArray[0];
        return (
          <>
            <div className="col card-horario-movil mb-2 p-0">
              <div
                className="background-sub-cursos-movil"
                style={{ textAlign: "center" }}>
                <table className="table">
                  <thead className="background-cursos">
                    <tr>
                      <th scope="col-2" className="text-card">
                        {Horario.dayName} 
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className=" background-horario">
                <div className="p-2">
                  <p className="card-title">{timeDetail.courseName}</p>
                  <p
                    className="card-subtitle mb-2 text-muted "
                    style={{ fontSize: "0.8em" }}
                  >
                    AULA : {timeDetail.classRoom}
                  </p>
                  <p className="card-subtitle" style={{ fontSize: "0.7em" }}>
                    {" "}
                    <img src={Reloj} className="mr-2" />
                    {timeDetail.timeStart} -{timeDetail.timeEnd}{" "}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
    }
}