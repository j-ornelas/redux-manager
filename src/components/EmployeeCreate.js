import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

const styles = {
  pickerStyle: {
    fontSize: 18,
    paddingLeft: 14,
  },
};

class EmployeeCreate extends Component {
  onButtonPress() {
    let { name, phone, shift } = this.props;
    // picker doesn't have a default value, so if it's undefined,
    // we manually add in the first value here.
    if (!shift) {
      shift = 'Monday';
    }

    this.props.employeeCreate({ name, phone, shift });
  }


  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
            label="Name"
            placeholder="Jane"
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerStyle}> Shift </Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
