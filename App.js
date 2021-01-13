import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
    const [item, setItem] = useState([{}]);
    useEffect(() => {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://fetch-hiring.s3.amazonaws.com/hiring.json";
      fetch(proxyurl + url)
        .then(data => data.json())
        .then((data) => {
          setItem(data)
        })
        .catch((error) => {
          setItem({error:error})
        });
    })
  

  return (
    <View style={styles.container}>
      <Text>{ item }</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
