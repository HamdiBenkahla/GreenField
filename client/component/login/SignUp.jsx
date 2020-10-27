import React from "react";
import axios from "axios";
import "./SignUp.css"

class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users:[],
          userName:'',
          email:'',
          password:'',
          adress:'',
          phoneNumber:'',
          gender:'',
          age:'',
          check:""
      };
      this.addUser=this.addUser.bind(this);
    }
    addUser(e){
      e.preventDefault()
      this.props.onClickChange('SignIn')
      const newUser = {
        userName:this.state.userName,
        email:this.state.email,
        password:this.state.password,
        adress:this.state.adress,
        phoneNumber: this.state.phoneNumber,
        gender:this.state.gender,
        age:this.state.age,

      }
      // axios.post('http://localhost:3000/',newUser)
      // .then(res => console.log(res.data));
      //     this.setState({
      //     userName:'',
      //     email:'',
      //     password:'',
      //     adress:'',
      //     phoneNumber:'',
      //     gender:'',
      //     age:'',
      //     check:"SignIn"
      //     })
    }
    render() {
      if(this.state.check === ""){
      return (<div>
    <form onSubmit={this.addUser}>
    <input className="i1" type="text" name="user" placeholder="userName" required value={this.state.userName} onChange={(e)=>{this.setState({userName:e.target.value})}}/><br></br>
    <input className="i2" type="email" name="email" placeholder="email" required value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} /><br></br>
    <input className="i3" type="password" name="password" placeholder="password" required value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/><br></br>
    <input  className="i4" type="text" name="name" placeholder="gender" required value={this.state.gender} onChange={(e)=>{this.setState({gender:e.target.value})}} /><br></br>
    <input className="i5" type="text" name="name" placeholder="age" required value={this.state.age} onChange={(e)=>{this.setState({age:e.target.value})}} /><br></br> 
    <button className="btn" type="submit"  name="SignIn" >SignUp </button>
    </form>
      </div>
      );
    }else {
      return (
        <div>
          <button onClick={props.onClick} name="" >Enter </button>
        </div>
      )
    }
  }
  }
  export default SignUp;
