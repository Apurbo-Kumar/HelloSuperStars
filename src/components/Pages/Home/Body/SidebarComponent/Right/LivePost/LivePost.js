import React, { Component } from "react";
import LeftSidebar from '../../../../../../Sidebar/LeftSidebar'
import RightSidebar from '../../../../../../Sidebar/RightSidebar'
import LiveData from "./LiveData";

export default class LivePost extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="homebody"  style={{ background: "#000000"}}>
          <div className="container">
            <div className="row">

              <div className="col-sm-3 justify-content-center">
                <LeftSidebar/>
              </div>

              <div className="col-sm-6 justify-content-center" >
                <LiveData/>
              </div>

              <div className="col-md-3 justify-content-center" >
                <RightSidebar/>
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}