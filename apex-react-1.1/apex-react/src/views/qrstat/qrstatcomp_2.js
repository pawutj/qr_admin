import React,{Component} from "react"
import { Bar } from "react-chartjs-2";
import {
   BarData,
} from "./chartData";

class QRstatComp_2 extends Component {
  render(){
    return (
      <div>
        <h1> TEST2 </h1>
        <Bar height={400} data={this.props.data}  options={BarData.options} />  
      </div>
    )
  }
}

export default QRstatComp_2
