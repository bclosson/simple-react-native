import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar} from 'react-native';


class App extends React.Component {
      state = {
        items: [],    
        loading: true,
      } 
  
  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://fetch-hiring.s3.amazonaws.com/hiring.json";

    fetch(proxyurl + url)
      .then((buffer) => {
        if (buffer.ok) {
          return buffer.json(buffer)
        } else {
          console.log('API error')
          this.setState({error: true})
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          items: data,
          loading: false,
        })
      })
      .catch((error) => {
        console.log(error)
        this.setState({error:error})
      });
  }


  render() {
    if (this.state.loading) {
      return <Text>Loading...</Text>
    } else if (this.state.error) {
      return <Text>ERROR GETTING DATA</Text>
    } else {
      let items = this.state.items;
      const filtered = items.filter((item, i) => items[i].name !== null);
      const filtered1 = filtered.filter((item, i) => filtered[i].name !== '');
      const sorted = filtered1.sort((a, b) => {
        if (a.listId < b.listId) {
          return -1;
        } else if (a.listId > b.listId){
          return 1;
        } else {
          if(a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        }
      })
    
      const itemMap = sorted.map((obj, i) => {
          let id = obj.id;
          let listId = obj.listId;
          let name = obj.name;
          console.log(`this is obj: ${obj}`);
            return <View key={i}>
              <Text>{`id: ${id}`}</Text>
              <Text>{`listId: ${listId}`}</Text>
              <Text>{`name: ${name}`}</Text>
              <Text>{'\n'}</Text>
            </View>
      });

      return (
        <View style={styles.container}>
          {itemMap}
          <StatusBar style="auto" />
        </View>
      )
    }
  }
}
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'left',
        margin: '0, 2%',
        padding: '0, 0, 0, 10%'
      }
    });

export default App;

