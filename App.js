import { parse } from 'commander';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state={
      textHolder:''
    }
  }
  componentDidMount = async() => {
    let response = await fetch('http://127.0.0.1:5000', {
        method:'GET',
        headers: {
          'Access-Control-Allow-Origin': '*', 
          "Access-Control-Allow-Methods": "*",
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },  
      })
      var responseJson = await response.json();
      console.log(responseJson);
      var stringifiedResponse = JSON.stringify(responseJson)
      var array = JSON.parse(stringifiedResponse)
      var text1 = array.data.id;
      console.log(text1)
      this.setState({textHolder:text1})
    }
    
    // .then(response.json()).then((responseJson) => {
    //     data = responseJson;
    //     console.log(data)
    // })

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.textHolder}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:50,
    textAlign:"center"
  }
});
