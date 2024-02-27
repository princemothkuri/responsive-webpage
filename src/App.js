import "./App.css";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";

function App() {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="image">
          <img src="./asserts/logo.png" alt="" />
        </div>
        <div className="main">
          <div className="main1">
            <img src="./asserts/1.png" alt="" />
          </div>
          <div className="main2">
            <p>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </p>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img src="./asserts/2.png" alt="" />
            <p>
              Government of India has awarded the{" "}
              <span>"National Energy Conservation Award 2018"</span>. Mr. G.
              Selvaraj, Joint Managing Director of C.R.I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
              Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
        <div className="motors">
          <p className="before">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
          <img src="./asserts/3.png" alt="" />
          <p className="after">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
        <hr className="line" />
        <p className="products">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <div class="container">
          <div class="text">CHEMICALS & PROCESS</div>
          <div class="separator"></div>
          <div class="text">POWER WATER & WASTE WATER</div>
          <div class="separator"></div>
          <div class="text">OILS & GAS</div>
          <div class="separator"></div>
          <div class="text">PHARMA</div>
          <div class="separator"></div>
          <div class="text">SUGARS & DISTILLERIES</div>
          <div class="separator"></div>
          <div class="text">PAPER & PULP</div>
          <div class="separator"></div>
          <div class="text">MARINE & DEFENCE</div>
          <div class="separator"></div>
          <div class="text">METAL & MINING</div>
          <div class="separator"></div>
          <div class="text">FOOD & BEVERAGE</div>
          <div class="separator"></div>
          <div class="text">PETROCHEMICAL & REFINERIES</div>
          <div class="separator"></div>
          <div class="text">SOLAR</div>
          <div class="separator"></div>
          <div class="text">BUILDING</div>
          <div class="separator"></div>
          <div class="text">HVAC</div>
          <div class="separator"></div>
          <div class="text">FIRE FIGHTING</div>
          <div class="separator"></div>
          <div class="text">AGRICULTURE & RESIDENTIAL</div>
        </div>
        <div className="footer">
          <div className="icons">
            <div className="phone">
              <LocalPhoneIcon
                style={{
                  background: "transparent",
                  color: "white",
                }}
              />
              <p>
                Toll free <span>1800 200 1234</span>
              </p>
            </div>
            <div className="facebook">
              <FacebookIcon
                style={{ background: "transparent", color: "white" }}
              />
              <p>www.facebook.com/cripumps</p>
            </div>
            <div className="website">
              <LanguageIcon
                style={{ background: "transparent", color: "white" }}
              />
              <p>www.crigroups.com</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
