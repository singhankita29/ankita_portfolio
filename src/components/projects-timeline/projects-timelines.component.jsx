import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
//project logo
// import L_SmartBrain from "../../assets/img/projects/brain.webp";
// import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
// import L_ProductHuntClone from "../../assets/img/projects/SecretDiary.webp";
// import L_ChatRoom from "../../assets/img/projects/VChat.webp";
// skills
import Overstock from "../../assets/img/projects/Overstock.png"
import Pharmeasy from "../../assets/img/projects/Pharmeasy.png"
// import mart from "../../assets/img/projects/mart.webp"
// import L_REACT from "../../assets/img/skills/react.svg";
// import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
// import L_EXPRESS from "../../assets/img/skills/express.svg";
// import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
// import Image from "react-bootstrap/Image";
// import L_REDUX from "../../assets/img/skills/redux.svg";
// import L_HTML5 from "../../assets/img/skills/html-5.svg";
// import L_CSS3 from "../../assets/img/skills/css3.svg";
// import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
// import L_DJANGO from "../../assets/img/skills/django.svg";
// import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
// import L_GIT from "../../assets/img/skills/github-api.svg";
// import L_PHP from "../../assets/img/skills/php.svg";
// import L_MYSQL from "../../assets/img/skills/mysql.svg";
// import L_FIREBASE from "../../assets/img/skills/firebase.svg";
import './projects-timelines.style.css';
const ProjectTimeline = () => {
  return (
    <div id='projects'>
       <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        
         {/* Project: OverStock */}

         <ImageEvent date="March/2022" className="text-center" text="Overstock.com:cloned" src={Overstock} alt="overstock">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Overstock.com,is an American internet retailer selling primarily furniture company.
                        <hr />
                        <strong>Tecnology used:</strong>
                        <ul className="list-styles pt-1">
                          <li>HTML | CSS | Javascript </li>
                         
                         
                        </ul>
                        <hr />
                        {/* <strong>Tech used:</strong>
                        <ul>
                          
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React Native" rounded className="image-style1 m-1"></Image> React Native
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_FIREBASE} alt="Fire Base" rounded className="image-style1 m-1"></Image> Firebase
                            </span>
                          </li> */}
                        {/* </ul> */}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://profound-praline-6eee04.netlify.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                { <UrlButton href="https://github.com/singhankita29/Over_Stock_project.git" target="_blank">
                  SOURCE CODE
                </UrlButton> }
                
              </div>
            </div>
          </ImageEvent>
        
        {/* Project: Pharmeasy*/}
          <ImageEvent date="May/2022" className="text-center" text=" Pharmeasy : cloned" src={Pharmeasy} 
          alt="pharma">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> PharmEasy is one of India's most trusted online pharmacy & medical stores offering pharmaceutical and healthcare products.
                        <hr />
                        <strong>Tecnology used:</strong>
                        <ul className="list-styles pt-1">
                          <li>HTML|CSS|JAVASCRIPT|FONT AWESOME|BOOTSTRAP</li>
                          {/* <li>Login with OTP.</li> */}
                         
                        </ul>
                        <hr />
                                                
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://soft-dusk-4d35d1.netlify.app" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/singhankita29/Pharmesay-clone.git" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
       
                 
        </Events>
      </Timeline>  
    </div>
  );
}

export default ProjectTimeline;
