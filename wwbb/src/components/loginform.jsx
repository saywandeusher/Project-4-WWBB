import React from 'react'

const styles = {
  labels: {
    color: 'red'
  }
}

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
  }


changeHandler(event){
  let text = event.target.value;
  let field = event.target.name === 'username'? 'username' : 'password';
  this.setState({[field]: text});
}



render() {
  return (
    <div className="LoginForm">
      <form>
        <label style={styles.labels} for="username">User Name:</label>
        <input name="username" type="text" value={this.state.username} onChange={this.changeHandler}/>
        <br />
        <label style={styles.labels} for="username">Password:</label>
        <input name="password" type="text" value={this.state.password} onChange={this.changeHandler}/>
        <br />
        <input type="submit" value="login" />
        </form>
    </div>
  );
}
}