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
    redirect: false
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

                               })
            .then(() => this.setState({redirect:true   }))

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
          <h1>test</h1>
          <Input
             type="text"
             className="form-control"
             value = {this.state.url}
             onChange = {this.urlChange}
             placeholder="URL"
             required
          />
          <Input
             type="text"
             className="form-control"
             value = {this.state.text}
             onChange = {this.textChange}
             placeholder="Text"
          />

          <Button type="button" color="danger" block className="btn-pink btn-raised" onClick = {this.postData} >
             Submit
          </Button>
        </div>

      );
    }
   }
}

export default QRCreate;
