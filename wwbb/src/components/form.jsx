import React from 'react'

const styles = {
  labels: {
    color: 'red'
  }
}

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
    <div className="Form" onSubmit={this.handleClick}>
      <form>
        <label style={styles.labels} >Name:</label>
        <input name="name" type="text" value={this.state.name} onChange={this.changeHandler}/>
        <br />
        <label style={styles.labels} >Email:</label>
        <input name="email" type="text" value={this.state.email} onChange={this.changeHandler}/>
        <br />
        <label style={styles.labels} >Subject:</label>
        <input name="subject" type="text" value={this.state.subject} onChange={this.changeHandler}/>
        <br />
        <label style={styles.labels} >Quote:</label>
        <input name="quote" type="text" value={this.state.quote} onChange={this.changeHandler}/>
        <br />
        <label style={styles.labels} >Message:</label>
        <input name="message" type="text" value={this.state.message} onChange={this.changeHandler}/>
        <br />
        <input type="submit" value="Submit" />
        </form>
    </div>
  );
}
}