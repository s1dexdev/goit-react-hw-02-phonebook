import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    const { name } = this.state;

    return (
      <>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <button type="button">Add contact</button>
        </form>
      </>
    );
  }
}

export default App;
