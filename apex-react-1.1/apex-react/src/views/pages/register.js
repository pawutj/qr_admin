// import external modules
import React, { Component } from "react";
import { NavLink,Redirect } from "react-router-dom";
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

class Register extends Component {
   state = {
      isChecked: true,
      email: '',
      username :'',
      passwd:'',
      redirect:false,
      c_data:''
   };
   handleChecked = e => {
      this.setState(prevState => ({
         isChecked: !prevState.isChecked
      }));
   };
   emailChange = e =>{
     this.setState({email:e.target.value})
   }

   usernameChange = e =>{
     this.setState({username:e.target.value})
   }

   passwdChange = e =>{
     this.setState({passwd:e.target.value})
   }

  postData =() => {
            console.log("AA")
            fetch('https://yourqr.today/api/v1/user.nonce', {
                method: 'POST',
                headers : new Headers(),
                body:JSON.stringify({c_email:this.state.email
                                    ,c_username:this.state.username
                                    ,c_passwd:this.state.passwd
                                    ,c_fname:'pawut'
                                    })
            }).then((res) => res.json())
            .then((data) =>  {console.log(data)
                              if(data.success == false)
                              this.setState({'c_data':data.c_data})
                              else
                                this.setState({'c_data':data.c_data.msg})



                              } 
            )
            .catch((err)=>console.log(err))
        }


   render() {
     if(this.state.redirect)
      return (<Redirect to ={{pathname:'/pages/login'}}/>
              )
      else
      return (
         <div className="container">
            <Row className="full-height-vh">
               <Col xs="12" className="d-flex align-items-center justify-content-center">
                  <Card className="gradient-indigo-purple text-center width-400">
                     <CardBody>
                        <h2 className="white py-4">Register</h2>
                        <h3>{this.state.c_data}</h3>
                        <Form className="pt-2">
                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type='email'
                                    name="inputName"
                                    placeholder="Email"
                                    value ={this.state.email}
                                    onChange = {this.emailChange}
                                    required
                                 />
                              </Col>
                           </FormGroup>
                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type='text'
                                    className="form-control"
                                    placeholder="Username"
                                    value ={this.state.username}
                                    onChange = {this.usernameChange}
                                    required
                                 />
                              </Col>
                           </FormGroup>

                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="password"
                                    className="form-control"
                                    value ={this.state.passwd}
                                    onChange = {this.passwdChange}
                                    placeholder="passwd"
                                    required
                                 />
                              </Col>
                           </FormGroup>

                           <FormGroup>
                              <Row>
                                 <Col md="12">
                                    <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0 ml-3">
                                       <Input
                                          type="checkbox"
                                          className="custom-control-input"
                                          checked={this.state.isChecked}
                                          onChange={this.handleChecked}
                                          id="rememberme"
                                       />
                                       <Label className="custom-control-label float-left white" for="rememberme">
                                          I agree terms and conditions.
                                       </Label>
                                    </div>
                                 </Col>
                              </Row>
                           </FormGroup>
                           <FormGroup>
                              <Col md="12">
                                   <Button type="button" color="danger" block className="btn-pink btn-raised" onClick = { this.postData}>
                                    Submit
                                 </Button>
                                 <Button type="button" color="secondary" block className="btn-raised">
                                    Cancel
                                 </Button>
                              </Col>
                           </FormGroup>
                        </Form>
                     </CardBody>
                     <CardFooter>
                        <div className="float-left">
                           <NavLink to="/pages/forgot-password" className="text-white">
                              Forgot Password?
                           </NavLink>
                        </div>
                        <div className="float-right">
                           <NavLink to="/pages/login" className="text-white">
                              Login
                           </NavLink>
                        </div>
                     </CardFooter>
                  </Card>
               </Col>
            </Row>
         </div>
      );
   }
}

export default Register;
