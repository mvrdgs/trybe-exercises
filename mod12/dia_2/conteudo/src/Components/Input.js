import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { handler, name, value } = this.props;
    return(
      <div>
        <input className={`input-${name}`} onChange={ handler } value={ value } name={ name } />
      </div>
    );
  }
}

Input.propTypes = {
  handler: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
}

export default Input;
