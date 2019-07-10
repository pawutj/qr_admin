import React, { Component } from "react";
import { NavLink,Redirect  } from "react-router-dom";

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


class Password extends Component{

    state = {
        isChecked: true,
        pass:'',
        redirect: false,
        uuid:'',
        user_id:'',
        c_data:''
     };
    
    
     passwordChange = e =>{
        this.setState({password:e.target.value})
    }

    postData = e => {
        console.log(this.state.password)
        const uuid = localStorage.getItem('uuid')
        console.log(uuid)
        fetch('https://yourqr.today/api/v1/user.profile', {
            method: 'POST',
            headers : {c_uuid:uuid},
            body:JSON.stringify({c_passwd:this.state.pass
                                })
        }).then((res) => res.json())
        .then(data => {
            console.log(data)
        })
    }

    render(){
        return (
            <div>
            <Input  type="email"
                    className="form-control"
                    value = {this.state.password}
                    onChange = {this.passwordChange}
                    placeholder="New Password"
                    required
            />
            <h1>{this.state.password}</h1>

            <Button type="button" color="danger" block className="btn-pink btn-raised" onClick = {this.postData}>
                                    Submit
                                 </Button>

            </div>
        )
    }
}

export default Password