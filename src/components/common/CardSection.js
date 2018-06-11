import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    // this syntax is pretty cool. it uses the module styles
    // ( left argument ) and overrides them with any prop styles
    // ( right argument)
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'whitesmoke',
    position: 'relative',
  },
};

export { CardSection };
