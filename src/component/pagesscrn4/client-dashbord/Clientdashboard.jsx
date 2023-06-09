import React from "react";
import { Row, Col } from "antd";
import { Link} from "react-router-dom";
import { ReactComponent as Thumb1 } from "../../assets/images/welcome/1.svg";
import { ReactComponent as Thumb2 } from "../../assets/images/welcome/2.svg";
import { ReactComponent as Thumb3 } from "../../assets/images/welcome/3.svg";
import { ReactComponent as Thumb4 } from "../../assets/images/welcome/4.svg";
import Thumb5png from "../../assets/images/welcome/5.png";
import "./Clientdashboard.css";

const ClientDashboard = () => {

  const WELCOME_OPTIONS = [
    {
      title: "Start New Project",
      thumb: <Thumb1 />,
      route: "/navbar/firstpage",
    },
    {
      title: "Track Application",
      thumb: <Thumb2 />,
      route: "/navbar/review",
    },
    {
      title: "My account",
      thumb: <Thumb3 />,
      route: "/navbar/myaccount",
    },
    {
      title: "Checklist of Compliance",
      thumb: <Thumb4 />,
      route: "/navbar/check",
    },
    {
      title: "Add users",
      thumb: <img src={Thumb5png} alt="" />,
      route: "/navbar/add",
    },
  ];
 

  return (
    <div className="welcome">
      <div className="nav-box">Welcome</div>
      <div className="welcome-options">
        <Row>
          {WELCOME_OPTIONS.map((item, index) => (
            <Col xs={12} md={12} lg={8} key={index}>
              <Link to={item.route} className="option-box">
                {item.thumb}
                <img src={item.thumb} alt="" />
                <h4>{item.title}</h4>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ClientDashboard;
