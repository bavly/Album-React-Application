//Index.ios.js  - place code in here for IOS !!!!!!!!!

// Babel start by change JSX to JS
// Component is a shape or text which have render to the screen
// create a component and render it on mobile device

// React Library Knows how a component should behave
// also knows how to work with bunch of component

// ReactNative Knows how to take the output from a component
//and place it on the screen  (provides Core components images , texts )

// Only root componet uses 'AppRegistry'
//react is library installed in npm module

//Import Library to help create a Component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create Functional component for displaying Only
// used for presenting static data
// canot handle fetching data
// easy to write
const App = () => (
  // works like retun so we caould not make same for Album List
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
