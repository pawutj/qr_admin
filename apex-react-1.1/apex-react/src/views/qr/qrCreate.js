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
    path:'',
    texterror:''
  };
  urlChange = e =>{
    this.setState({url:e.target.value})
  }


  textChange = e => {
    this.setState({text:e.target.value})
  }

  postData =() => {
            if((`${this.state.text.length}`)<20){
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
            else{
              this.setState({texterror:'ข้อความต้องสั้นกว่า 20 ตัวอักษร'})
            }

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
          <div style = {{marginTop:70,marginLeft:20}}> 
          <h1>QR Code</h1>
          <p>สามารถ สร้าง โปรโมทWebsite,เชื่อมระบบแอดเพื่อน Line ,แชร์ Videos,เอกสารDownload,รับไลค์บนFacebook พร้อมติดตามวัดผล</p>
         

          <h5><b><font color="#F29258">เริ่มสร้าง QR Code ของคุณ</font></b></h5>
         
          </div>
          <div style ={{display:'flex' ,height:'50vh' ,marginTop:30 }}>
            <div style ={{backgroundColor:'white',width:'30%',height:'100%',marginLeft:'auto',marginRight:'auto',padding:20}}>
            <h5><b>ตั้งค่าลิงค์ไปยังเว็ปไซต์ของคุณ</b></h5>
            <div style = {{marginTop:40}}>
            <p>{this.state.texterror}</p>
            <h5><b>URL: <font color="#F29258">*</font></b></h5>
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
            <h5><b>Text:</b></h5>
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
            <div style ={{backgroundColor:'white',width:'30%',height:'100%',marginLeft:'auto',marginRight:'auto',padding:20}}>
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
            <div style = {{marginTop:30,marginLeft:20}}>
          <p><font color="#F29258">ข้อกำหนดในการใส่ข้อความ * Text บน QR Code</font></p>
          <p>กรณีพิมพ์ข้อความเป็นภาษาอังกฤษ จะพิมพ์ได้ 20 ตัวอักษร คิดเป็น 1 ข้อความ</p>
          <p>กรณีพิมพ์ข้อความเป็นภาษาไทยหรือไทยปนอังกฤษ จะพิมพ์ได้ 20 ตัวอักษร คิดเป็น 1 ข้อความ</p>
          </div>
        </div>

      );
    }
   }
}

export default QRCreate;
