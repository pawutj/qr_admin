import React,{Component} from "react"
import { Table } from 'reactstrap';


class QRstatComp_5 extends Component {

  render(){
    console.log(this.props.data)
    let data = Array.from(this.props.data);
      return (

      <div>

        <Table>
        <thead>
          <tr>
            <th>fname</th>
            <th>lname</th>
            <th>phone</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
        {data.map((d) =>
          <tr>
            <td>{d.c_fname}</td>
            <td>{d.c_lname}</td>
            <td>0{d.c_phone_no}</td>
            <td>{d.c_email}</td>
          </tr>
        )
        }
        </tbody>
      </Table>

      </div>
    )
  }
}

export default QRstatComp_5
