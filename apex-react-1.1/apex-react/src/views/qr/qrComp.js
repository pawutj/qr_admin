import React,{Component} from "react"
import pic_1 from "../../assets/img/t3.png"
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class QRComp extends Component{

  render(){
    return(
      <div style = {box_1}>
        <div style = {box_left}>
          <img src={"https://yourqr.today/api/v1/qr.show/"+this.props.data.c_code} width="190" alt="Card cap 01" className=""style ={pic} />
        </div>

        <div style = {box_center}>
          <p>Name QR :{this.props.data&&this.props.data.c_code} </p>
          <p>URL :{this.props.data&&this.props.data.c_data}</p>
          <p>Created at :{this.props.data&&this.props.data.d_create}</p>
        </div>

        <div style = {box_right}>
          <p>จำนวนคนสแกน</p>

        </div>

        <div style = {box_rightest}>
          <div style ={{margin:'auto'}}>
          <Link to ={{pathname:'/qrstat',state:{qr_id:this.props.data.qr_id} }}>
          <Button variant="outlined">

              Statisics

          </Button>
          </Link>
          </div>
          <div style ={{margin:'auto'}}>
          <Button variant="outlined" >
            Download
          </Button>
          </div>
          <div style ={{margin:'auto'}}>
          <Button variant="outlined" >
            Who Scans me!
          </Button>
        </div>

        </div>

      </div>
    )
  }

}

const containner = {
  height:"100vh",
};

const pic ={
border: '1px solid #000000'
}

const box_1 ={
  // display:'flex',
  width:"100%",
  background:'white',
  margin:5,
  display:'flex',
  flexDirection:'row'
}

const box_left = {

}

const box_center = {
  width: '50%'
}

const box_right = {
  width: '20%',

}

const box_rightest = {
  display: 'flex',
  flexDirection:'column',
  backgroundColor:'skyblue',
  width:'15%',
    alignItems: 'center',
    justifyContent :'center',

}




export default QRComp;
