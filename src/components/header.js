// Import Libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


// make a component

//props for sending a value from component to another Like what we will do
// remove Albums makes it variable

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText}</Text>
    </View>
  );
};


const styles = {
  //flix box system of position element in a container
  //justify containts for up and down
  // align Items for move elements right and left

  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'

  },

textStyle: {
  fontSize: 20
  }
};

// Make the component available to other parts of the app
//use the componet in any other aries

export default Header;
