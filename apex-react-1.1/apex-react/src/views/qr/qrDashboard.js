import React, { Component, Fragment } from "react";

import QRComp from "./qrComp.js"

import {  Button } from "reactstrap";
import { Link ,Redirect} from "react-router-dom";

class QRDashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      qr_list :[]
    }
  }

  componentDidMount(){
    if(!(localStorage.getItem('user_id')=='null' || localStorage.getItem("user_id") == 'undefined')){
      console.log(localStorage.getItem('user_id'))

      let fetch_string = "https://yourqr.today/api/v1/report.qr_list?user_id="+localStorage.getItem('user_id')
        fetch(fetch_string)
          .then((response) => response.json())
          .then(data => {
                     this.setState({qr_list:data.c_data})
                     console.log(this.state.qr_list)
                   }
                  )
                }
  }

   render() {
     if(localStorage.getItem("user_id")== 'null' || localStorage.getItem("user_id") == 'undefined' || localStorage.getItem("user_id") == ''||localStorage.getItem("user_id") == undefined) 
      return (<Redirect to ={{pathname:'../pages/login'
                            }}
                                                        />
              )
      else
      return (
         <Fragment>
           <div style ={{margin:30}}>
          <h1>QRCode Dashboard</h1>
          <p>รายงานแสดงผลสถิติการสแกน QR Code ที่สร้างทั้งหมด</p>
          <Link to = '/qrcreate'>
          <Button color="warning">Create QR Code</Button>
          </Link>
          </div>


        {this.state.qr_list.map(q =>
          <div style ={containner}>
            <QRComp data = {q} />
          </div>
        )
        }

         </Fragment>
      );
   }
}

const containner = {
  backgroundColor:'#F5F7FA',

};

export default QRDashboard;
