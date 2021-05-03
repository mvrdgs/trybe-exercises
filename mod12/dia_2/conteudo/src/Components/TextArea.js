import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { handler } = this.props;
    return (
      <textarea name="area" onChange={ handler } />
    )
  }
}

TextArea.propTypes = {
  handler: PropTypes.func,
}

export default TextArea;
