import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class History extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Rectangle/>
        <Text style={styles.title}>Review History</Text>
        <Text style={styles.date }>2018</Text>
        <Gallery/>
      </View>
    );
  }
}

export class Rectangle extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
    );
  }
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pics:['http://res.cloudinary.com/culturemap-com/image/upload/q_auto/ar_4:3,c_fill,g_faces:center,w_1200/v1514996820/photos/189316_original.jpg', 'https://img1.mashed.com/img/gallery/popular-restaurant-dishes-you-should-avoid/intro.jpg', 'https://img4.mashed.com/img/gallery/popular-restaurant-dishes-you-should-avoid/red-snapper-1504794950.jpg', 'https://www.elblogalternativo.com/wp-content/uploads/2012/10/paella.jpg']
    }
  }



  picsList() {
    return (
      <View style={{alignSelf: 'stretch', height: 550,  flexDirection:'row', overflow: 'visible', flexWrap: 'wrap', alignItems: 'center',     justifyContent: 'center'
    }}>

      {this.state.pics.map((data) => {
        return (
            <Image source={{uri:data}} style={{width: 160, height: 160, padding: 5, margin: 10, alignSelf: 'center'}}/>
        )
      })}
      </View>

    )
  }

  render() {
    return (
      <View>
        {this.picsList()}
      </View>
    )
  }


}


const styles = StyleSheet.create({
  container: {
    flex:1,
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
  arrow: {
    position: 'absolute',
    width: 10,
    height: 16,
    left: 36,
    top: 39,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderStyle: 'solid',
    transform: [ {rotateY: '-180deg'}],
  }, 
  title: {
  fontWeight: '600',
  padding: 20,
  paddingTop: 25, 
  fontSize: 20,
  color: '#6A6A6A',
  }, 
  date: {
    color: 'rgba(0, 0, 0, 0.7)',
    padding: 20, 
    fontSize: 15,

  }
});
