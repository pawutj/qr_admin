import React,{Component} from "react"
import { Button } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class QRComp extends Component{

  render(){
    return(
      

      <div style = {box_1}>
        <div style = {box_left}>
          <img src={"https://yourqr.today/api/v1/qr.show/"+this.props.data.c_code} width="170" alt="Card cap 01" className=""style ={pic} />
        </div>

        <div style = {box_center}>
          <p>Name : {this.props.data&&this.props.data.c_code} </p>
          <p>URL : {this.props.data&&this.props.data.c_data}</p>
          <p>Created  : {this.props.data&&this.props.data.d_create}</p>
          <p>0 Scan</p>
        </div>

        <div style = {box_right}>
          

        </div>

        <div style = {box_rightest}>
          <div style ={{margin:'auto'}}>
          <Link to ={{pathname:'/qrstat',state:{qr_id:this.props.data.qr_id} }}>
          <Button outline color="warning" block>

              Statisics

          </Button>
          </Link>
          </div>
          
          <div style ={{margin:'auto'}}>
          <a href={"https://yourqr.today/api/v1/qr.show/"+this.props.data.c_code} download  >
          <Button outline color="warning" block >
          <div style ={{color:'black'}}>
            Download
            </div>
          </Button>
          </a>
          </div>
          <div style ={{margin:'auto'}}>
          <Button outline color="warning" block >
            Who Scans !
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

}

const box_1 ={
  // display:'flex',
  width:"100%",
  background:'#F5F7FA',
  margin:5,
  display:'flex',
  flexDirection:'row'
}

const box_left = {

}

const box_center = {
  width: '50%',
  margin:15
}

const box_right = {
  width: '0%',

}

const box_rightest = {
  backgroundColor:'#F5F7FA',
  width:'15%',
    alignItems: 'center',
    justifyContent :'center',

}




export default QRComp;
