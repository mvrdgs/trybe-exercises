import React from 'react';
import './App.css';
import TextArea from './Components/TextArea';
import Input from './Components/Input';

class App extends React.Component {
  constructor() {
    super ();

    this.handler = this.handler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.fileInput = React.createRef();
    this.errorHandler = this.errorHandler.bind(this);

    this.state = {
      select: '',
      one: '',
      two: '',
      area: '',
      'checkbox-test': false,
    }
  }

  errorHandler() {

  }

  handler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }));
  }

  buttonHandler(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  render() {
    return (
      <form className="form-test">
        <fieldset>
          <select defaultValue="" onChange={ this.handler } name="select">
            <option value="" disabled hidden>Select your option</option>
            <option value="value1">Valor 1</option>
            <option value="value2">Valor 2</option>
          </select>
          <input type="checkbox" name="checkbox-test" onClick={this.handler} />
          <Input handler={ this.handler } value={ this.state.one } name={ 'one' } />
          <Input handler={ this.handler } name={ 'two' } />
          <TextArea handler={this.handler} />
          <input type="file" ref={ this.fileInput } />
        </fieldset>
        <button type="submit" onClick={ this.buttonHandler }>Submit</button>
      </form>
    );
  }
}

export default App;
