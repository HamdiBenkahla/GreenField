import React from "react";

class Progress extends React.Component {
    constructor(props){
    super(props)
    }



    render() { 
        return ( 
              <div className="feed">
        <ul>
          <li className="feed-list-item">
            <span className="feed-list-item-title">
              {/* {this.props.data.title} */}
            </span>
            <br></br>
            <br></br>
            <p className="feed-list-item-description">
              {/* {this.props.data.description} */}
            </p>{" "}
            <br></br>
            <span className="feed-list-item-poster">
              {/* {this.props.data.contact} */}
            </span>
            <br></br>
            <br></br>
            <span className="feed-list-item-poster">
              {/* {this.props.data.providerEmail} */}
            </span>
            <br></br>
            <br></br>
            <span className="feed-list-item-poster">
              {/* {this.props.data.employeeEmail} */}
            </span>
            <br></br>
            <br></br>
            <span className="feed-list-item-price">
              <strong> Earning: </strong>
              <span style={{color : '#00E600', fontSize : "20px", fontWeight :'bold' }}>{/* {this.props.data.price}DT */}</span>
            </span>
            <br></br>
            <br></br>
            <span className="feed-list-item-address">
              {/* <strong> Location : </strong> {this.props.data.address} */}
            </span>{" "}
            <br></br>
            <span className="feed-list-item-poster">
             <strong>Task applicant : </strong>{/* {this.props.data.employeeEmail} */}
            </span>
            <br></br>
          </li>
        </ul>
      </div> 
      );
    }
}
 
export default Progress;