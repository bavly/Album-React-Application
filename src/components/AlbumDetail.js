import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
// do need anything just show data
// functional component

const AlbumDetail = ({ data }) => {

  const { title, artist, thumbnail_image, image, url } = data;
  const { thumbnailContainerStyle, headerContainerStyle,
    thumbnailStyle, headerTextStyle, imageStyle } = styles;
  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContainerStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text style={headerTextStyle} >{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button whenPressed={() => Linking.openURL(url)} >
          Buy now
        </Button>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContainerStyle: {
  flexDirection: 'column',
  justifyContent: 'space-around'
},
headerTextStyle: {
  fontSize: 18,
  fontColor: 'black'
},
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    // in order to take all width of mobile we do that
    flex: 1,
    width: null
  }
};


export default AlbumDetail;
