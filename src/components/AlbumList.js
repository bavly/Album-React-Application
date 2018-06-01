import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//creat Class component
// Used for dynamic sources of data
// Handles any data that change like {fetching data , user events}
// more code to write
// life Functional method
class AlbumList extends Component {

 // set state built in function in every class base component
  // initial base state
  //state only in class base component
  // do not do 'this.state'
  state ={ albums: [] };

  componentWillMount() {
    //update albums of state
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
    console.log('start debug');
    // debugger;
}
renderAlbums() {
  // need to use js in JSX use {}
  //key for performance unique id to add in text
  //pass props of album to AlbumDetail
  return this.state.albums.map(album =>
    <AlbumDetail key={album.title} data={album} />);
}

render() {
  console.log(this.state);
  return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
