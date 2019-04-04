import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";
import QRComp from "./qrComp.js"
import * as Icon from "react-feather";
import { StaticCardData } from "../cards/staticCardData";
import { AdvancedCardData } from "../cards/advancedCardData";

import MinimalStatisticsChart2 from "../../components/cards/minimalStatisticsWithChart2Card";

import DiscoverPeopleListCard from "../../components/cards/discoverPeopleListCard";
import SalesAnalysisChartCarda from "../../components/cards/salesAnalysisChartCard";

import FitnessStatisticsChart from "../../components/cards/fitnessStatisticsWithChartCard";

import SalesPerVisitChartCard from "../../components/cards/salesPerVisitChartCard";
import DailyDietListCard from "../../components/cards/dailyDietListCard";

import UserStatisticsChartCard from "../../components/cards/userStatisticsChartCard";
import CarouselSliderCard from "../../components/cards/carouselSliderCard";
import EarningStatisticsChartCard from "../../components/cards/earningStatisticsChartCard";
import pic_1 from "../../assets/img/t3.png"
import { Card, CardBody, CardTitle, CardFooter, CardLink, CardText, Button, Badge } from "reactstrap";
import { Link ,Redirect} from "react-router-dom";

class QRDashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      qr_list :[]
    }
  }

  componentDidMount(){
    if(!(localStorage.getItem('user_id')=='null' || localStorage.getItem("user_id") === 'undefined')){
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
     if(localStorage.getItem('user_id')=='null' || localStorage.getItem("user_id") === 'undefined')
      return (<Redirect to ={{pathname:'../pages/login'
                            }}
                                                        />
              )
      else
      return (
         <Fragment>
          <h1>{localStorage.getItem('user_id')}</h1>
          <h1>{localStorage.getItem('uuid')}</h1>
          <Link to = '/qrcreate'>
          <Button color="warning">CreateQR</Button>
          </Link>


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
  backgroundColor:'skyblue',

};

export default QRDashboard;
