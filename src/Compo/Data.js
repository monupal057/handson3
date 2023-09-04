import React, { Component } from 'react'
import './Style.css'
import DataStore from "./Display"

class Data extends Component {

    state={
        name: "",
        department: "",
        rating: "",
        Btnclick: true,
        data: []
    }

    handelChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handelClick=()=>{
        const obj={
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating
        }
        this.state.data.push(obj);
        this.setState({
            data: this.state.data, Btnclick: false, name:"",department:"",rating:"",
        })
    }

    toggleFunction = ()=>{
      this.setState({
        Btnclick : !this.state.Btnclick
      })
    }

  render() {
    return (
      <div className='MainBox'>
        {this.state.Btnclick ? 
          <>
            <h1>Employee FeedBack</h1>
            <label > Name:
            <input type="text" name="name" onChange={this.handelChange} placeholder='Enter your Name' value={this.state.name} />
            </label>

            <label> Department:
            <input type="text" name="department" onChange={this.handelChange} placeholder='Enter Your Department' value={this.state.department} />
            </label>
        
            <label>Rating: 
            <input type="number" name="rating" onChange={this.handelChange} placeholder='Enter your Rating' value= {this.state.rating} />
            </label>
        
            <button className='btn' onClick={this.handelClick}>Submit</button>
    
          </>
          :

          <DataStore FeedBack={this.state.data} Tf={this.toggleFunction} />

        }
      </div>
    )
  }
}

export default Data;