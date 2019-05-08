import React, { Component, Fragment } from "react";
import '../../app/app.css';
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
          <h1>Create QR Code</h1>
          <p>คุณก็เป็นเจ้าของ QR Code ที่วัดผลได้ ที่เอาไปใช้ได้กับการโปรโมทเว็บไซต์, โปรโมทเพจ,
ชวนทำแบบสอบถาม, หรือประชาสัมพันธ์ทั่วไป แต่พิเศษที่คุณเช็คยอดการสแกนได้ด้วย</p>
         

          <h5><b><font color="#F29258">เริ่มสร้าง QR Code ที่วัดผลได้ของคุณ ได้เลย!</font></b></h5>
         
          </div>
          <div style ={{display:'flex' ,height:'50vh' ,marginTop:30 }}>
            <div style ={{backgroundColor:'white',width:'30%',height:'100%',marginLeft:'auto',marginRight:'auto',padding:20}}>
            <h5><b>Input your destination link</b></h5>
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
             placeholder="https://"
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
            <a href={"https://yourqr.today/api/v1/qr.show/"+this.state.path} download="YourQR.png"  >
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
          <p><font color="#F29258">คำแนะนำการสร้าง QR Code</font></p>
          <p>1. URL เป็นลิงค์ของเว็บไซต์ปลายทางที่ต้องการสร้าง QR Code
เช่น เว็บไซต์ร้านค้าหรือบริษัท http://www.9net.co.th, Line@ ใช้ https://line.me/ , แบบสอบถาม ใช้ https://docs.google.com/forms , โปรโมทแอปบน Play Store ใช้ https://play.google.com/store/apps/details?id=</p>
          <p>2. Text ใช้เพื่อใส่ “ข้อความ” ลงไปบน QR Code เพื่อสร้างความแตกต่าง และจดจำได้ง่าย 
ซึ่งต้องป้อนไม่เกิน 20 ตัวอักษรเท่านั้น
</p>
          </div>
        </div>

      );
    }
   }
}

export default QRCreate;
