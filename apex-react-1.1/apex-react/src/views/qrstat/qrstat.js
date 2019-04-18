import React,{Component} from "react"
import MinimalStatisticsBG from "../../components/cards/minimalStatisticsBGCard";
import * as Icon from "react-feather";
import QRStatComp_1 from "./qrstatcomp_1.js"
import QRStatComp_2 from "./qrstatcomp_2.js"
import QRStatComp_3 from "./qrstatcomp_3.js"
import QRStatComp_4 from "./qrstatcomp_4.js"
import QRStatComp_5 from "./qrstatcomp_5.js"

import { Redirect  } from "react-router-dom";
import {

   Nav,
   NavItem,
   NavLink,

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
      data_3:{},
      data_4:{},
      data_5:{},
      dropdownOpen: false,
      bottomValue:'7 Day',
      d_start:d_start,
      d_end:d_end,
      activeTab: "1",
      c_1:0,
      c_2:0,
      c_5:0,
      c_4:'0 scan',
      c_4_1:0,
      c_4_2:1,
      c_4_3:0,
      c_3:'0 scan',
      c_3_1:'0'
    };
  }

  componentDidMount(){
    this.summary_1()
    this.summary_2()
    if(this.props.location.state.t == true)
      this.click_5()
  }

  summary_1(){
    let fetch_string = 'https://yourqr.today/api/v1/report.summary?qr_id='
    +this.props.location.state.qr_id
console.log(fetch_string)
fetch(fetch_string)
.then((response) => response.json())
.then(data => {
if(0 in data.c_data){
console.log(data.c_data[0])
this.setState({c_1:data.c_data[0].c_1})
this.setState({c_2:data.c_data[0].c_2})
this.setState({c_4:data.c_data[0].c_4})
this.setState({c_4_1:data.c_data[0].c_4_1})
this.setState({c_4_2:data.c_data[0].c_4_2})
const c_4_3 = (data.c_data[0].c_4_1/data.c_data[0].c_4_2*100).toFixed(0)
this.setState({c_4_3:c_4_3})
this.setState({c_5:data.c_data[0].c_5})
}
}
)
  }


  trim(s){
    return s.length>12?`${s.substring(0,12)}...`:s
  }

  summary_2(){
    let fetch_string = 'https://yourqr.today/api/v1/report.stat_3?d_seen_start="'
            +this.state.d_start
            +'"&d_seen_end="'
            +this.state.d_end
            +'"&c_type=scan&qr_id='
            +this.props.location.state.qr_id
    console.log(fetch_string)
    fetch(fetch_string)
      .then((response) => response.json())
      .then(data => {
        const data_t  = data.c_data.map(c => c.c)
                                   .map(c => c.split(',')[3])
                                   .map(c => c.replace(/[0-9]/g,''))
                                   .reduce( (acc,curr) => {
                                                if (typeof acc[curr] == 'undefined') {
                                                  acc[curr] = 1
                                                } else {
                                                  acc[curr] += 1
                                              }
                                              return acc
                                            },{})
        let data_key =[]
        let data_value = []                                   
        for (var x in data_t){
            data_key.push(x) 
            data_value.push(data_t[x])   
        }
        let max = 0
        let sum=0
        let index=0
        for( var i =0;i<data_value.length;i++){
          if(data_value[i]>max){
            max = data_value[i]
            index = i
          }
          sum = sum+data_value[i]
        }
        if(sum>0){
          let k = this.trim(data_key[index])
          this.setState({c_3:k})
          let t = (max/sum*100).toFixed(0)
          this.setState({c_3_1:t})
        } 
      })
      
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
                          .map((e,i)=>i)
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
            label: "Total Scan",
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
                          .map((e,i)=>i)
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
            label: "Unique Users",
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

  f_3 = () =>{
    let fetch_string = 'https://yourqr.today/api/v1/report.stat_3?d_seen_start="'
            +this.state.d_start
            +'"&d_seen_end="'
            +this.state.d_end
            +'"&c_type=scan&qr_id='
            +this.props.location.state.qr_id
    console.log(fetch_string)
    fetch(fetch_string)
      .then((response) => response.json())
      .then(data => {
        const data_t  = data.c_data.map(c => c.c)
                                   .map(c => c.split(',')[3])
                                   .map(c => c.replace(/[0-9]/g,''))
                                   .reduce( (acc,curr) => {
                                                if (typeof acc[curr] == 'undefined') {
                                                  acc[curr] = 1
                                                } else {
                                                  acc[curr] += 1
                                              }
                                              return acc
                                            },{})
        let data_key =[]
        let data_value = []                                   
        for (var x in data_t){
            data_key.push(x) 
            data_value.push(data_t[x])   
        }
        console.log(data_key)
        console.log(data_value)
        const data_temp = {
          labels: data_key,
          datasets: [
             {
                data: data_value,
                backgroundColor: [
                   "rgba(0, 157, 160, 0.8)",
                   "rgba(28, 188, 216, 0.8)",
                   "rgba(255, 141, 96, 0.8)"
                ]
             }
          ]
       }
       return data_temp
  }).then(data_temp => {
    this.setState(state => ({data_3:data_temp}))
  })
  
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
    }) , () => this.f_3()
    )}

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
      this.f_3()
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
      <h1>Scan Statistics * สถิติการสแกน</h1>
     
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
           <DropdownToggle caret>{this.state.bottomValue}</DropdownToggle>
           <DropdownMenu>
              <DropdownItem header></DropdownItem>
              <DropdownItem onClick = {() => this.setValueBottom_1('7 Day')} >7 Day</DropdownItem>
              <DropdownItem onClick = {() => this.setValueBottom_1('30 Day')} >30 Day</DropdownItem>
           </DropdownMenu>
        </Dropdown>

      <div style = {containner} >
          <div style ={{display:'flex',width:"18%",flexDirection:'column' , marginLeft:'auto',marginRight:'auto'}}
            onClick = {this.click_1}
          >
            <MinimalStatisticsBG
               cardBgColor="gradient-blackberry"
               statistics={this.state.c_1}
               text="Total Scan"
               iconSide="right"
            >
             <Icon.BarChart size={56} strokeWidth="1.3" color="#fff" />  
            </MinimalStatisticsBG>
          </div>


          <div style ={{display:'flex',width:"18%",flexDirection:'column' , marginLeft:'auto',marginRight:'auto'}}
          onClick = {this.click_2}
          >
            <MinimalStatisticsBG
               cardBgColor="gradient-blackberry"
               statistics={this.state.c_2}
               text="Unique Users"
               iconSide="right"
            >
               <Icon.UserX size={56} strokeWidth="1.3" color="#fff" />  
            </MinimalStatisticsBG>
            </div>

            <div style ={{display:'flex',width:"18%",flexDirection:'column' , marginLeft:'auto',marginRight:'auto'}}
            onClick = {this.click_3}
            >
              <MinimalStatisticsBG
                 cardBgColor="gradient-blackberry"
                 statistics={this.state.c_3_1+' %'}
                 text={this.state.c_3}
                 iconSide="right"
              >
                 <Icon.MapPin size={56} strokeWidth="1.3" color="#fff" />  
              </MinimalStatisticsBG>
              </div>

              <div style ={{display:'flex',width:"18%",flexDirection:'column' , marginLeft:'auto',marginRight:'auto'}}
              onClick = {this.click_4}
              >
                <MinimalStatisticsBG
                   cardBgColor="gradient-blackberry"
                   statistics={this.state.c_4_3+ ' %'}
                   text={this.state.c_4}
                   iconSide="right"
                >
                   <Icon.Smartphone size={56} strokeWidth="1.3" color="#fff" />  
                </MinimalStatisticsBG>
                </div>

                <div style ={{display:'flex',width:"18%",flexDirection:'column' , marginLeft:'auto',marginRight:'auto'}}
                onClick = {this.click_5}
                >
                  <MinimalStatisticsBG
                     cardBgColor="gradient-blackberry"
                     statistics={this.state.c_5}
                     text="Who Scan"
                     iconSide="right"
                  >
                     <Icon.Users size={56} strokeWidth="1.3" color="#fff" />  
                  </MinimalStatisticsBG>
                  </div>


      </div>

      <div>

        {this.state.g1 && <QRStatComp_1 data = {this.state.data_1}/>}
        {this.state.g2 && <QRStatComp_2 data ={this.state.data_2}/>}
        {this.state.g3 && <QRStatComp_3 data ={this.state.data_3}/>}

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
                     <b>Browser</b>
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
                     <b>Platform</b>
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
                    <b>Device</b>
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
