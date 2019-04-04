import React,{Component} from "react"
import MinimalStatisticsBG from "../../components/cards/minimalStatisticsBGCard";
import * as Icon from "react-feather";
import QRStatComp_1 from "./qrstatcomp_1.js"
import QRStatComp_2 from "./qrstatcomp_2.js"
import QRStatComp_3 from "./qrstatcomp_3.js"
import QRStatComp_4 from "./qrstatcomp_4.js"
import QRStatComp_5 from "./qrstatcomp_5.js"
import Table_stat from "./table_stat.js"
import { Redirect  } from "react-router-dom";
import {
   TabContent,
   TabPane,
   Nav,
   NavItem,
   NavLink,
   Card,
   Button,
   CardTitle,
   CardText,
   Row,
   Col
} from "reactstrap";
import classnames from "classnames";


import {
   Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
} from "reactstrap";


class QRStatis extends Component{

  constructor(props){
    super(props);
    let d_end = new Date()
    let d_start = new Date()
    d_start.setTime(d_start.getTime()-60*60*24*7*1000)
    d_end = d_end.getFullYear() +'-'+(d_end.getMonth()+1)+'-'+d_end.getDate()
    d_start = d_start.getFullYear() +'-'+(d_start.getMonth()+1)+'-'+d_start.getDate()
    this.state = {
      g1: false,
      g2:false,
      g3:false,
      g4:false,
      g5:false,
      data_1:{},
      data_4:{},
      data_5:{},
      dropdownOpen: false,
      bottomValue:'7 Day',
      d_start:d_start,
      d_end:d_end,
      activeTab: "1"
    };
  }
  toggle = () => {
    this.setState(prevState => ({
       dropdownOpen: !prevState.dropdownOpen
    }));
 }

 toggle_2 = tab => {
        this.setState({
           activeTab: tab
        },() =>this.f_4());
  };

 pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }

  f_1 = () =>{
    let fetch_string = 'https://yourqr.today/api/v1/report.stat?d_seen_start="'
            +this.state.d_start
            +'"&d_seen_end="'
            +this.state.d_end
            +'"&c_type=scan&qr_id='
            +this.props.location.state.qr_id
    console.log(fetch_string)
    fetch(fetch_string)
      .then((response) => response.json())
      .then(data => {
        console.log(data.c_data)
        const data_set = data.c_data.map((d) => d.c)
        const data_label = data.c_data.map((d) => d.d)
        console.log(data_set)
        console.log(data_label)
        const a = Array(this.state.bottomValue=='7 Day'?7:30).fill()
                          .map((e,i)=>i+1)
                          .map( d => {let d_temp = new Date()
                                        d_temp.setTime(d_temp.getTime() -60*60*24*d*1000 )
                                        return d_temp
                                        })
                          .map( e => e.getFullYear() +'-'+this.pad((e.getMonth()+1))+'-'+this.pad(e.getDate()) )
        const s_1 = {}
        for (let i=0;i<data_set.length;i++){
          s_1[data_label[i]]=data_set[i]

        }
        const b = a.map((c)=>s_1[c]?s_1[c]:0)
        console.log(a)
        console.log(b)

        const data_temp = {
          labels:a,
          datasets:[{
            label: "Series A",
            data: b ,
            backgroundColor: "rgba(255, 141, 96, 0.8)",
            borderColor: "rgba(148,159,177,1)",
            pointBackgroundColor: "rgba(148,159,177,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(148,159,177,0.8)"
          }
          ]
        }

        this.setState(state => ({data_1:data_temp}))
        console.log(this.state.data_1)
        }
      )
  }

  f_2 = () =>{
    let fetch_string = 'https://yourqr.today/api/v1/report.stat_2?d_seen_start="'
            +this.state.d_start
            +'"&d_seen_end="'
            +this.state.d_end
            +'"&c_type=scan&qr_id='
            +this.props.location.state.qr_id
    console.log(fetch_string)
    fetch(fetch_string)
      .then((response) => response.json())
      .then(data => {
        console.log(data.c_data)
        const data_set = data.c_data.map((d) => d.c)
        const data_label = data.c_data.map((d) => d.d)
        console.log(data_set)
        console.log(data_label)
        const a = Array(this.state.bottomValue=='7 Day'?7:30).fill()
                          .map((e,i)=>i+1)
                          .map( d => {let d_temp = new Date()
                                        d_temp.setTime(d_temp.getTime() -60*60*24*d*1000 )
                                        return d_temp
                                        })
                          .map( e => e.getFullYear() +'-'+this.pad((e.getMonth()+1))+'-'+this.pad(e.getDate()) )
        const s_1 = {}
        for (let i=0;i<data_set.length;i++){
          s_1[data_label[i]]=data_set[i]

        }
        const b = a.map((c)=>s_1[c]?s_1[c]:0)
        console.log(a)
        console.log(b)

        const data_temp = {
          labels:a,
          datasets:[{
            label: "Series A",
            data: b ,
            backgroundColor: "rgba(255, 141, 96, 0.8)",
            borderColor: "rgba(148,159,177,1)",
            pointBackgroundColor: "rgba(148,159,177,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(148,159,177,0.8)"
          }
          ]
        }

        this.setState(state => ({data_2:data_temp}))
        console.log(this.state.data_2)
        }
      )
  }

  f_5 = () =>{
    let fetch_string = 'https://yourqr.today/api/v1/report.stat_5?d_seen_start="'
            +this.state.d_start
            +'"&d_seen_end="'
            +this.state.d_end
            +'"&c_type=scan&qr_id='
            +this.props.location.state.qr_id
    console.log(fetch_string)
    fetch(fetch_string)
      .then((response) => response.json())
      .then(data => {

        this.setState(state => ({data_5:data.c_data}))
        }
      )
  }



  f_4 = () =>{

    const fetch_string = 'https://yourqr.today/api/v1/report.stat_4?d_seen_start="'
            +this.state.d_start
            +'"&d_seen_end="'
            +this.state.d_end
            +'"&c_type=scan&qr_id='
            +this.props.location.state.qr_id
            +'&subtype='
            +this.state.activeTab

    fetch(fetch_string)
      .then((response) => response.json())
      .then(data => {
        console.log(data.c_data)
        const data_set = data.c_data.map((d) => d.c)
        const data_label = data.c_data.map((d) => d.d)
        console.log(data_set)
        console.log(data_label)
        const data_temp = {
             labels: data_label,
             datasets: [
                {
                   data: data_set,
                   backgroundColor: [
                      "rgba(0, 157, 160, 0.8)",
                      "rgba(28, 188, 216, 0.8)",
                      "rgba(255, 141, 96, 0.8)"
                   ]
                }
             ]
          }
          return data_temp
        }).then((data_temp)=>{
          this.setState(state => ({data_4:data_temp}))
        }
      )
  }




  click_1 = () =>{
    this.setState(state => ({
      g1 : !state.g1,
      g2 : false,
      g3 : false,
      g4 :false,
      g5:false
    }),()=>this.f_1())



    }

  click_2 = () => {
    this.setState(state => ({
      g2:!state.g2,
      g1 : false,
      g3 : false,
      g4:false,
      g5:false
      }
    ),()=>this.f_2()
  )}

  click_3 = () => {
    this.setState(state => ({g3:!state.g3,
    g1 : false,
    g2 : false,
    g4: false,
    g5: false
    }))
  }

  click_4 = () => {
    this.setState(state => ({g4:!state.g4,
    g1 : false,
    g2 : false,
    g3: false,
    g5: false


  }),()=>this.f_4())
  }

  click_5 = () => {
    this.setState(state => ({g5:!state.g5,
    g1 : false,
    g2 : false,
    g4: false,
    g3: false
  }),()=>this.f_5())
  }

  setValueBottom_1 = (value) => {
    this.setState(state => ({bottomValue :value}))
    let d_end = new Date()
    let d_start = new Date()
    if(value == '7 Day'){
    d_start.setTime(d_start.getTime()-60*60*24*7*1000)
  }else if(value =='30 Day'){
    d_start.setTime(d_start.getTime()-60*60*24*30*1000)
  }
    d_end = d_end.getFullYear() +'-'+(d_end.getMonth()+1)+'-'+d_end.getDate()
    d_start = d_start.getFullYear() +'-'+(d_start.getMonth()+1)+'-'+d_start.getDate ()
    this.setState(state => ({d_start:d_start , d_end:d_end}),()=>{
      this.f_1()
      this.f_2()
      this.f_4()
      this.f_5()
    })
    console.log(d_end,d_start)

  }


  render(){

    if(localStorage.getItem('user_id')=='null')
     return (<Redirect to ={{pathname:'../pages/login'
                           }}
                                                       />
             )
     else
    return(
      <div>
      <h1>{this.state.d_start}</h1>
      <h1>{this.props.location.state.qr_id}</h1>
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
           <DropdownToggle caret>{this.state.bottomValue}</DropdownToggle>
           <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem onClick = {() => this.setValueBottom_1('7 Day')} >7 Day</DropdownItem>
              <DropdownItem onClick = {() => this.setValueBottom_1('30 Day')} >30 Day</DropdownItem>
              <DropdownItem onClick = {() => this.setValueBottom_1('Custom')} >Custom</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
           </DropdownMenu>
        </Dropdown>

      <div style = {containner} >
          <div style ={{display:'flex',width:"18%",flexDirection:'column' , marginLeft:'auto',marginRight:'auto'}}
            onClick = {this.click_1}
          >
            <MinimalStatisticsBG
               cardBgColor="gradient-blackberry"
               statistics="278"
               text="Total Scan"
               iconSide="right"
            >
               <Icon.Briefcase size={56} strokeWidth="1.3" color="#fff" />
            </MinimalStatisticsBG>
          </div>


          <div style ={{display:'flex',width:"18%",flexDirection:'column' , marginLeft:'auto',marginRight:'auto'}}
          onClick = {this.click_2}
          >
            <MinimalStatisticsBG
               cardBgColor="gradient-blackberry"
               statistics="100"
               text="Unique Users"
               iconSide="right"
            >
               <Icon.Briefcase size={56} strokeWidth="1.3" color="#fff" />
            </MinimalStatisticsBG>
            </div>

            <div style ={{display:'flex',width:"18%",flexDirection:'column' , marginLeft:'auto',marginRight:'auto'}}
            onClick = {this.click_3}
            >
              <MinimalStatisticsBG
                 cardBgColor="gradient-blackberry"
                 statistics="100%"
                 text="Location"
                 iconSide="right"
              >
                 <Icon.Briefcase size={56} strokeWidth="1.3" color="#fff" />
              </MinimalStatisticsBG>
              </div>

              <div style ={{display:'flex',width:"18%",flexDirection:'column' , marginLeft:'auto',marginRight:'auto'}}
              onClick = {this.click_4}
              >
                <MinimalStatisticsBG
                   cardBgColor="gradient-blackberry"
                   statistics="100%"
                   text="Platform"
                   iconSide="right"
                >
                   <Icon.Briefcase size={56} strokeWidth="1.3" color="#fff" />
                </MinimalStatisticsBG>
                </div>

                <div style ={{display:'flex',width:"18%",flexDirection:'column' , marginLeft:'auto',marginRight:'auto'}}
                onClick = {this.click_5}
                >
                  <MinimalStatisticsBG
                     cardBgColor="gradient-blackberry"
                     statistics="Pawut"
                     text="Who Scan"
                     iconSide="right"
                  >
                     <Icon.Briefcase size={56} strokeWidth="1.3" color="#fff" />
                  </MinimalStatisticsBG>
                  </div>


      </div>

      <div>

        {this.state.g1 && <QRStatComp_1 data = {this.state.data_1}/>}
        {this.state.g2 && <QRStatComp_2 data ={this.state.data_2}/>}
        {this.state.g3 && <QRStatComp_3 />}

        {this.state.g4 &&
          <div>
            <Nav tabs className="nav-border-bottom">
               <NavItem>
                  <NavLink
                     className={classnames({
                        active: this.state.activeTab === "1"
                     })}
                     onClick={() => {
                        this.toggle_2("1");
                     }}
                  >
                     browser
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink
                     className={classnames({
                        active: this.state.activeTab === "2"
                     })}
                     onClick={() => {
                        this.toggle_2("2");
                     }}
                  >
                     platform
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink
                     className={classnames({
                        active: this.state.activeTab === "3"
                     })}
                     onClick={() => {
                        this.toggle_2("3");
                     }}
                  >
                    device
                  </NavLink>
               </NavItem>
            </Nav>
            </div>
          }


        {this.state.g4 && <QRStatComp_4 data = {this.state.data_4}/>}
      </div>
        {this.state.g5 && <QRStatComp_5 data = {this.state.data_5}/>}



      </div>

    )
  }
}

const containner ={
  display:'flex',
  flexDirection:'row',

}

const box = {
  backgroundColor :'skyblue',
  width:'18%',
  height:'11%',
  marginLeft:'auto',
  marginRight:'auto'
}

export default QRStatis;
