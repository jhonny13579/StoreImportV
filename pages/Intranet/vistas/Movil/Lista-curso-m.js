import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AssignmentIcon from '@material-ui/icons/Assignment';
// import ArchiveIcon from '@material-ui/icons/Archive';
// import NotesIcon from '@material-ui/icons/Notes';
// import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
// import VisibilityIcon from '@material-ui/icons/ImportContacts';
// import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
export default class ListaCursoM extends Component {
  callColapsar = (art) => {
    let article = document.getElementById(art);
    console.log("article", article);
    article.classList.toggle("expanded");
    // article.classList.contains("expanded");
  };
  render() {
    const curso = this.props.objCursos;
    return (
      <div className=" wrapper">
        <div className="card">
          <div
            className="row "
            style={{ padding: "0 3%" }}
          >
            <div className="col-9 mt-3">
              <h1 className="nombre-curso-movil">
                {curso.courseName} ({curso.courseSection})
              </h1>
              <h1 className="nombre-profesor-movil">
                Profesor:{" "}
                {curso.professorArray.map((profesor, i) => {
                  return profesor.typeDescription == "Titular"
                    ? profesor.professorName
                    : null;
                })}
              </h1>
              <h1 className="estado-movil">Estado: {curso.courseState}</h1>
            </div>
            <div
              className="col-3"
              data-toggle="tooltip"
              data-placement="right"
              title="Detalle de curso"
              style={{ textAlign: "right" }}
            >
              <div className="mt-2">
                <Link
                  to={`../detalle-curso/${curso.courseId}/${curso.courseSection}/${curso.period}`}
                >
                  <AssignmentIcon
                    viewBox="0 0 20 22"
                    style={{ color: "#fdba30" }}
                  />
                </Link>
              </div>
              <div>
                <ExpandMoreIcon
                  viewBox="0 0 20 22"
                  onClick={() => this.callColapsar(`${curso.courseId}_article`)}
                ></ExpandMoreIcon>
              </div>
            </div>
          </div>

          <div className="divisor-body-movil-card "></div>
          <div id={`${curso.courseId}_article`} className="article col-12">
            <div className="row">
              <div className="col-7">
                <div className=" pt-4">
                  <h1
                    className="carrera-estudiante-movil"
                    style={{ fontSize: "1.5ex" }}
                  >
                    Faltas
                  </h1>
                </div>
                <div className=" pt-4">
                  <h1
                    className="carrera-estudiante-movil"
                    style={{ fontSize: "1.5ex" }}
                  >
                    Créditos
                  </h1>
                </div>
                <div className=" pt-4">
                  <h1
                    className="carrera-estudiante-movil"
                    style={{ fontSize: "1.5ex" }}
                  >
                    Periodo
                  </h1>
                </div>
                <div className=" pt-4">
                  <h1
                    className="carrera-estudiante-movil"
                    style={{ fontSize: "1.5ex" }}
                  >
                    Notas
                  </h1>
                </div>
                <div className=" pt-4">
                  <h2
                    className="carrera-estudiante-movil"
                    style={{ fontSize: "1.5ex", fontWeight: "bold" }}
                  >
                    Tipo de Curso
                  </h2>
                </div>
                <div className=" pt-4">
                  <h1
                    className="carrera-estudiante-movil"
                    style={{ fontSize: "1.5ex" }}
                  >
                    Avance de promedio Final
                  </h1>
                </div>
              </div>
              <div className="col-5" style={{ textAlign: "right" }}>
                <div className=" pt-4">
                  <h1
                    className="carrera-estudiante-movil"
                    style={{ fontSize: "1.5ex" }}
                  >
                    {curso.attendance_fail_amount} de {curso.attendance_max}
                  </h1>
                </div>
                <div className=" pt-4">
                  <h1
                    className="carrera-estudiante-movil"
                    style={{ fontSize: "1.5ex" }}
                  >
                    {curso.credits}
                  </h1>
                </div>
                <div className=" pt-4">
                  <h1
                    className="carrera-estudiante-movil"
                    style={{ fontSize: "1.5ex" }}
                  >
                    {curso.cicle}
                  </h1>
                </div>
                <div className=" pt-4">
                  <h1
                    className="carrera-estudiante-movil"
                    style={{ fontSize: "1.5ex" }}
                  >
                    {curso.grades_amount}
                  </h1>
                </div>
                <div className=" pt-4">
                  <h2
                    className="carrera-estudiante-movil"
                    style={{ fontSize: "1.5ex", fontWeight: "bold" }}
                  >
                    {curso.courseType == "Presencial"
                      ? "PRESENCIAL"
                      : "VIRTUAL"}
                  </h2>
                </div>
                <div className=" pt-4">
                  <h1
                    className="carrera-estudiante-movil"
                    style={{ fontSize: "1.5ex" }}
                  >
                    {curso.finalGrade}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
