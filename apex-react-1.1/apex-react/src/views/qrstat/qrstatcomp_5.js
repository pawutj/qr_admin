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
            <th>d_seen</th>
            <th>browser</th>
            <th>platform</th>
          </tr>
        </thead>
        <tbody>
        {data.map((d) =>
          <tr>
            <td>{d.d_seen}</td>
            <td>{d.browser}</td>
            <td>{d.platform}</td>
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
