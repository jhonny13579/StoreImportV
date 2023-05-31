
import "../css/loader.css";

function Loader(loading) {
    // console.log("loading",loading)
  return (
    <div id="loader-wrapper" className={loading ? "Activo" : "Oculto"}>
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  );
}

export { Loader };