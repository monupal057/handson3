import React, { Component } from 'react'
import './Style.css'
class Display extends Component {
  render() {
    return (
      <div>
        <h1>Employee FeedBack Data</h1> 
        <div className='myFeedBack'>   
            {this.props.FeedBack.map((item)=>{
                return(
                    <h4>Name: {item.name} | Department: {item.department} | Rating: {item.rating}</h4>
                    )
                })}
        </div>

        <button className='btn btn2' onClick={this.props.Tf}>Go Back</button>
      </div>
    )
  }
}

export default Display;