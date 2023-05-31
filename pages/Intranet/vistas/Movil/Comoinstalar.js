import React, { Component } from 'react';

import imgFirefox from "../../assets/img/Firefox.png";
import imgSafari from "../../assets/img/Safari.png";
//import video from "../../assets/video/InstructivoFirefox.mp4";
import imgfirefoxGif from "../../assets/img/firefox-gift.gif";
import imgSafariGif from "../../assets/img/iphone-gif.gif";




export default class Comoinstalar extends Component {
    render() {
        return (
          <div>
            <div className="contend">
              <div className="text col-12">
                <div>
                  <h4 className="mt-3">
                    Instalar en Firefox:
                    <img src={imgFirefox} style={{ width: "35px" }} />{" "}
                  </h4>

                  <div
                    style={{ textAlign: "center" }}
                  >
                    <img src={imgfirefoxGif} style={{ height: "36.5rem" }} />
                  </div>
                </div>
                <div>
                  <h4 className="mt-5">
                    Instalar en Safari:{" "}
                    <img src={imgSafari} style={{ width: "35px" }} />{" "}
                  </h4>
                  <div
                    style={{ textAlign: "center" }}
                  >
                    <img src={imgSafariGif} style={{ height: "30rem" }} />
                  </div>
                  
                </div>
                <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                 
                  
              </div>
            </div>
          </div>
        );
    }
}
