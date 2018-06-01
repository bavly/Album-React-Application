import React from 'react';
import { View } from 'react-native';


// do need anything just show data
// functional component

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle} >
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
    // flex flexDirection row or column 
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};
export default CardSection;
