import React from "react";
import axios from "axios";
import "../style/Component/CV.css";

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      experience: "",
      language: "",
      diploma: "",
      description: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlEmailChange = this.handlEmailChange.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  this.handleDiplome = this.handleDiplome.bind(this);
    this.handlDescritpion = this.handlDescritpion.bind(this);
  }

  handlEmailChange(e) {
    this.setState({ emailValue: e.target.value });
  }

  handleExperience(e) {
    this.setState({ experience: e.target.value });
  }

  handleLanguage(e) {
    this.setState({ language: e.target.value });
  }

  handleDiplome(e) {
    this.setState({ diploma: e.target.value });
  }
  handlDescritpion(e) {
    this.setState({ description: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let obj = {};
    obj.email = this.state.emailValue;
    obj.description = this.state.description;
    obj.experience = this.state.experience;
    obj.languages = this.state.language;
    obj.diploma = this.state.diploma;
    axios.post("/Cv", obj).then((res) => console.log(res.data));
    this.props.click();
  }

  render() {
    return (
      <div>
        <div className="container">
          <form>
            <input
              className="in1"
              type="email"
              placeholder="Enter Email"
              onChange={this.handlEmailChange}
            ></input>
            <input
              className="in2"
              type="languages"
              placeholder="Enter languages"
              onChange={this.handleLanguage}
            ></input>
            <input
              className="in3"
              type="text"
              placeholder="Enter your Diploma"
              onChange={this.handleDiplome}
            ></input>
              <input
              className="in5"
              type="text"
              placeholder="Enter your Description"
              onChange={this.handlDescritpion}
            ></input>
            <textarea
              className="in4"
              type="text"
              onChange={this.handleExperience}
            ></textarea>
            <button className="btn1" onClick={this.handleSubmit}>
              Post your resume
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CV;
