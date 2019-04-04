import React,{Component} from "react"
import {Pie } from "react-chartjs-2";

import {
   PieData
} from "./chartData";


class QRstatComp_4 extends Component {
  render(){
    return (
      <div>
        <h1> TEST4 </h1>
        <Pie height={400} data={this.props.data} options={PieData.options} />
      </div>
    )
  }
}

export default QRstatComp_4
