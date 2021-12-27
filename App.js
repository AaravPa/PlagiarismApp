import { parse } from 'commander';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { round } from 'react-native-reanimated';

//ar sentence1="Space is an amazing place."
//var sentence2="Space is an interesting place."

export default class App extends React.Component {
  constructor() {
    super();
    this.state={
      user_sentence:'',
      result:''
    }
  }
  plagiarism = async() => {
    var data = {user_sentence:this.state.user_sentence}
    let response = await fetch("http://127.0.0.1:5000", {
        method:'POST',
        headers: {
          'Access-Control-Allow-Origin': '*', 
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },  
        body:JSON.stringify(data)
         
      })

      var responseJson = await response.json();
      console.log(responseJson);
      var stringifiedResponse = JSON.stringify(responseJson)
      //var array = JSON.parse(stringifiedResponse)
      //var text1 = array.data.id;
      console.log(stringifiedResponse)
      //this.setState({textHolder:text1})
      console.log(this.state.user_sentence)
      var rounded_stringifiedResponse=Math.round(stringifiedResponse * 10) / 10
      this.setState({result:rounded_stringifiedResponse})
    }
    
    // .then(response.json()).then((responseJson) => {
    //     data = responseJson;
    //     console.log(data)
    // })

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}></View>
        <TextInput style={styles.input} onChangeText= {(text) => {
        this.setState({ user_sentence: text});
      }}>
        </TextInput>
        <TouchableOpacity style={styles.button} 
        onPress={()=> {
          this.plagiarism()
        }}>
          <Text> Check
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.state.result}</Text>
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  view: {
    borderWidth: 1, 
    borderRadius: 10,
    borderColor: '#E91E63',
    width: 100,
    height:100,
    padding: 5,
    backgroundColor: '#FFEB3B'
  }
}); 