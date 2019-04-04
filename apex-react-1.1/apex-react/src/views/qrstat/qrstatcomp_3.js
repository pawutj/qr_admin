import React,{Component} from "react"
import {Pie } from "react-chartjs-2";

import {
   PieData
} from "./chartData";

class QRstatComp_3 extends Component {
  render(){
    return (
      <div>
        <h1> TEST3 </h1>
        <Pie height={400} data={PieData.data} options={PieData.options} />
      </div>
    )
  }
}

export default QRstatComp_3
