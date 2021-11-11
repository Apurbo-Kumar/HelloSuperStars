import React, { Component } from "react";
import LeftSidebar from '../LeftSidebar'
import Content from "./Content";

export default class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="homebody"  style={{ background: "#000000"}}>
          <div className="container">
            <div className="row">

              <div className="col-sm-3 justify-content-center">
                <LeftSidebar/>
              </div>
              
              <div className="col-sm-9 justify-content-center" >
                  <Content/>
              </div>
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
