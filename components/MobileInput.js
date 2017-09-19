import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { mobileInputChanged } from '../actions';

import Styles from '../styles/MobileInputStyles';

const propTypes = {
  mobile: PropTypes.string.isRequired,
  mobileInputChanged: PropTypes.func.isRequired,
};

class MobileInput extends Component {
  handleChangedText = text => this.props.mobileInputChanged(text);

  displayMobile = () => {
    const displayMobile = this.props.mobile.split('');
    if (displayMobile.length === 0) { displayMobile.slice(0, 0, ''); }
    if (displayMobile.length > 0) { displayMobile.splice(0, 0, '('); }
    if (displayMobile.length > 4) { displayMobile.splice(4, 0, ') '); }
    if (displayMobile.length > 8) { displayMobile.splice(8, 0, '-'); }
    return displayMobile.join('');
  }

  render() {
    return (
      <TextInput
        placeholder="(555) 555-5555"
        keyboardType="phone-pad"
        style={Styles.inputField}
        onChangeText={this.handleChangedText}
        value={this.props.mobile ? this.displayMobile() : null}
        textAlign="center"
        autoFocus
        pointerEvents="none"
      />
    );
  }
}

MobileInput.propTypes = propTypes;

const mapStateToProps = state => ({ mobile: state.mobile });

export default connect(mapStateToProps, { mobileInputChanged })(MobileInput);