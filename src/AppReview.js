import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pics:'http://res.cloudinary.com/culturemap-com/image/upload/q_auto/ar_4:3,c_fill,g_faces:center,w_1200/v1514996820/photos/189316_original.jpg',
      rating: 4.5,
      views: 124,
      review: 'I stumbled into this lovely Pho restaurant and was met with kindness from my waitress. The food was astonishing with a nice Pho to fill up my stomach. Prices were relatively cheaper then other places I’ve been and the taste factor didn’t fail to impress. Would recommend to anyone!',
      ratingOb: this.props.navigation.state.params.review
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ReviewPhoto/>
          <View style={styles.reviewsContainer}>
              <View style={styles.sideBar}>
                  <Text style={styles.rating}>{this.state.ratingOb.rating}/5</Text>
                  <Text style={styles.views}>{this.state.views} views</Text>
              </View>
              <Text style={styles.review}>{this.state.ratingOb.description}</Text>
          </View>
        <Button title={"Back"} onPress={() => {
          this.props.navigation.goBack()
        }}/>
      </View>
    );
  }
}

class Rectangle extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Back</Text>
      </View>
    );
  }
}

class ReviewPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pics:'http://res.cloudinary.com/culturemap-com/image/upload/q_auto/ar_4:3,c_fill,g_faces:center,w_1200/v1514996820/photos/189316_original.jpg'
    }
  }

  render() {
    return(
      <Image style={{alignSelf: 'stretch', height: 250, padding: 5}} source={{uri:this.state.pics}}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reviewsContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    position: 'relative',
  },
  sideBar: {
    flex: 1
  },
  review: {
    flex: 3,
    color: 'rgba(0, 0, 0, 0.76)',
    fontSize: 17,
  },
  rating: {
    color: '#54D669',
    fontSize: 25,
  },
  views: {
    fontWeight: 'bold',
    bottom: 0,
    position: 'absolute',
  },
  header: {
    alignSelf: 'stretch',
    marginTop:0,
    top: 0,
    height: 100,
    backgroundColor:'#97E4E0',
    padding: 10,
  },
  headerText: {
    color: 'white',
    padding: 28,
    fontSize: 23,
  },
  
});
