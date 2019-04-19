import React, { Component, Fragment } from "react";
import {
   Row,
   Col,
   Input,
   Form,
   FormGroup,
   Button,
   Label,
   Card,
   CardBody,
   CardFooter
} from "reactstrap";
import { NavLink,Redirect  } from "react-router-dom";
class QRCreate extends Component {
  state = {
    url:'',
    text:'',
    redirect: false,
    path:''
  };
  urlChange = e =>{
    this.setState({url:e.target.value})
  }


  textChange = e => {
    this.setState({text:e.target.value})
  }

  postData =() => {
            console.log("AA")
            fetch('https://yourqr.today/api/v1/qr.save', {
                method: 'POST',
                headers : {
                  'uuid':localStorage.getItem('uuid')
                },
                body:JSON.stringify({c_data:this.state.url
                                    ,c_text:this.state.text
                                    })
            }).then((res) => res.json())
            .then((data) =>  {console.log(data)
                              if(data.success == true)                
                                this.setState({'path':data.c_data})
                               })

        }
   render() {

     if(localStorage.getItem('user_id')=='null')
      return (<Redirect to ={{pathname:'../pages/login'
                            }}
                                                        />
              )
      else
      {

     if(this.state.redirect)
      return (<Redirect to ='../qr'/>
              )
      else
      return (
        <div>
          <div style = {{marginTop:70}}> 
          <h1>QRCode</h1>
          <p>สร้างQRCode ของคุณสำหรับการติดตามวัดผล</p>
          </div>
          <div style ={{display:'flex' ,height:'100vh' ,marginTop:'5%' }}>
            <div style ={{backgroundColor:'white',width:'30%',height:'55%',marginLeft:'auto',marginRight:'auto',padding:20}}>
            <h5><b>Set the link to your website.</b></h5>
            <div style = {{marginTop:40}}>
            <h5><b>Url :*</b></h5>
            </div>
          <div style = {{marginLeft:'auto',marginRight:'auto'}}>
          <Input
             type="text"
             className="form-control"
             value = {this.state.url}
             onChange = {this.urlChange}
             placeholder="URL"
             required
          />
          </div>
          <div style ={{marginTop:20}}></div>
            <h5><b>Text :</b></h5>
            <div style = {{marginLeft:'auto',marginRight:'auto'}}>
          <Input
             type="text"
             className="form-control"
             value = {this.state.text}
             onChange = {this.textChange}
             placeholder="Text"
          />
            </div>
            <div style ={{marginTop:20}}></div>
          <Button type="button" color="warning" block  onClick = {this.postData} >
             Submit
          </Button>
            </div>
            <div style ={{backgroundColor:'white',width:'30%',height:'55%',marginLeft:'auto',marginRight:'auto',padding:20}}>
            {this.state.path && <img src={"https://yourqr.today/api/v1/qr.show/"+this.state.path} width="250" style = {{marginLeft:'auto',marginRight:'auto' ,display: 'block'}} />}
            {this.state.path &&
            <div >
            <div style = {{marginLeft:'auto',marginRight:'auto'}}>
            <a href={"https://yourqr.today/api/v1/qr.show/"+this.state.path} download  >
            <Button type="button" color="warning" block >   
             Download 
            </Button>
            </a>
            </div>
            
             </div>
            }
            </div>
          </div>
        </div>

      );
    }
   }
}

export default QRCreate;
