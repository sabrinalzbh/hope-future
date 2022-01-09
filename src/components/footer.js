import React from "react";
import {
  mainFooter,
  container,
  row,
  col1,
  col2,
  col3,
  infoList,
  ul1,
  ul2,
  row2,
  colSm
} from "./footer.module.css";


const Footer = () => {
  return (
    <div className={mainFooter}>
      <div className={container}>
        <div className={row}>
          <div className={col1}>
            <h4> Hope & Future </h4>
            <ul className={infoList}>
              <li>Phone: 216-856-0086</li>
              <li>Email: sachacon15@gmail.com</li>
            </ul>
          </div>
          <div classNmae={col2}>
            <h2>STUFF</h2>
            <ul className={ul1}>
              <li>info1</li>
              <li>info2</li>
            </ul>
          </div>
          <div className={col3}>
            <h2>Other Stuff</h2>
            <ul className={ul2}>
              <li>other1</li>
              <li>other2</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className={row2}>
            <p className={colSm}>
                &copy;{new Date().getFullYear()} Hope & Future LLC | All right reserved | Terms of Service | Privacy
            </p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
