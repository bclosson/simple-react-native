import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  const [item, setItem] = useState([]);
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://fetch-hiring.s3.amazonaws.com/hiring.json";

  useEffect(() => {
    fetch(proxyurl + url)
    .then(data => data.json())
    .then((data) => {
      console.log("this is data:", data);
      setItem(data)
      console.log("this is item:", item);
    })
    .catch((error) => {
      setItem({error:error})
    });   
  },[]);
    // const items = item.map(item =>(<Text key={ item.id }>{ item.id, item.listId, item.name }</Text>));
    const items = item.map((obj) => {
      let id = obj.id;
      let listId = obj.listId;
      let name = obj.name;
      // let listObj = [{
      //   id:{id},
      //   listId:{listId},
      //   name:{name}
      // }];
      return <Text key={id}>[id:{id}, listId:{listId} name:{name}]</Text>;
      // return <Text key={id}>{ listObj }</Text>;
    });

    //  const format = items = Object.keys(items).reduce((results, key) => {
    //    results.push({name:key, value:items[key] });
    //    return results;
    //  }, []);

    return (
    <View style={styles.container}>
      <Text>{ items }</Text>
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
