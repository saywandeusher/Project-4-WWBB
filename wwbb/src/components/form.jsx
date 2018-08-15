import React from 'react'
import '../styles/forms.css'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      quote: "",
      message: ""
    };
  }


changeHandler = (event) =>{
  let text = event.target.value;
  let field = (event.target.name === 'name')? 'name' : (event.target.name === 'email')? 'email' : (event.target.name === 'subject')? 'subject' : (event.target.name === 'quote')? 'quote' : 'message' ;
  this.setState({[field]: text});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
}

handleClick = (event) => {
  let nameInput = this.state.name;
  let emailInput = this.state.email;
  let subjectInput = this.state.subject;
  let quoteInput = this.state.quote;
  let messageInput = this.state.message;
  this.setState({name: nameInput,email: emailInput,subject: subjectInput,quote: quoteInput,message: messageInput});
}

render() {
  return (
    <div className="container formContainer">
    <div className="card-panel z-depth-5">
    <div className="row">
    
      <form className="col s12"  onSubmit={this.handleClick}>

        <h4>Want a performance from us?</h4>
        <h5>Contact Us now!</h5><br />
        <div className="row">
        <div className="input-field col s6">
          <label className="active" >Name:</label>
          <input name="name" type="text" value={this.state.name} onChange={this.changeHandler}/>
        </div>

        <div className="input-field col s6">
          <label className="active" >Email:</label>
          <input name="email" type="email" value={this.state.email} onChange={this.changeHandler} className="validate" />
        </div><br />
        </div>
        <div className="row">
        <div className="input-field col s7">
          <label className="active" >Subject:</label>
          <input name="subject" type="text" value={this.state.subject} onChange={this.changeHandler}/>
        </div>

        <div className="input-field col s5">
          <label className="active" >Quote:</label>
          <input name="quote" type="text" value={this.state.quote} onChange={this.changeHandler}/>
        </div><br />
        </div>
        <div className="input-field col s12">
          <label className="active" >Message:</label>
          <textarea name="message" type="textarea" value={this.state.message} onChange={this.changeHandler} className="materialize-textarea" ></textarea>
        </div><br />

        <input type="submit" value="Submit" className="btn"/>
      </form>
      </div>
      </div>
      </div>
  );
}
}