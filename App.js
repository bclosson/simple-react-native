import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar} from 'react-native';


class App extends React.Component {
      state = {
        items: [
          {
            "id": 755,
            "listId": 2,
            "name": ""
            },
            {
            "id": 203,
            "listId": 2,
            "name": ""
            },
            {
            "id": 684,
            "listId": 1,
            "name": "Item 684"
            },
            {
            "id": 276,
            "listId": 1,
            "name": "Item 276"
            },
            {
            "id": 736,
            "listId": 3,
            "name": null
            },
            {
            "id": 926,
            "listId": 4,
            "name": null
            },
            {
            "id": 808,
            "listId": 4,
            "name": "Item 808"
            },
            {
            "id": 599,
            "listId": 1,
            "name": null
            },
            {
            "id": 424,
            "listId": 2,
            "name": null
            },
            {
            "id": 444,
            "listId": 1,
            "name": ""
            },
            {
            "id": 809,
            "listId": 3,
            "name": null
            },
            {
            "id": 293,
            "listId": 2,
            "name": null
            },
            {
            "id": 510,
            "listId": 2,
            "name": null
            },
            {
            "id": 680,
            "listId": 3,
            "name": "Item 680"
            },
            {
            "id": 231,
            "listId": 2,
            "name": null
            },
            {
            "id": 534,
            "listId": 4,
            "name": "Item 534"
            },
            {
            "id": 294,
            "listId": 4,
            "name": ""
            },
            {
            "id": 439,
            "listId": 1,
            "name": null
            },
            {
            "id": 156,
            "listId": 2,
            "name": null
            },
            {
            "id": 906,
            "listId": 2,
            "name": "Item 906"
            },
            {
            "id": 49,
            "listId": 2,
            "name": null
            },
            {
            "id": 48,
            "listId": 2,
            "name": null
            },
            {
            "id": 735,
            "listId": 1,
            "name": "Item 735"
            },
            {
            "id": 52,
            "listId": 2,
            "name": ""
            },
            {
            "id": 681,
            "listId": 4,
            "name": "Item 681"
            },
            {
            "id": 137,
            "listId": 3,
            "name": "Item 137"
            }
        ], 
        // loading: true,
      } 
  
  // componentDidMount() {
  //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //   const url = "https://fetch-hiring.s3.amazonaws.com/hiring.json";

  //   fetch(proxyurl + url)
  //     .then((buffer) => {
  //       if (buffer.ok) {
  //         return buffer.json(buffer)
  //       } else {
  //         console.log('API error')
  //         this.setState({error: true})
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({
  //         items: data,
  //         loading: false,
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       this.setState({error:error})
  //     });
  //}


  render() {
    // if (this.state.loading) {
    //   return <Text>Loading...</Text>
    // } else if (this.state.error) {
    //   return <Text>ERROR GETTING DATA</Text>
    // } else {
      let items = this.state.items;
      const filtered = items.filter((item, i) => typeof items[i].name === 'string');
      const filtered1 = filtered.filter((item, i) => filtered[i].name !== '');
      const sorted1 = filtered1.sort((a, b) => (a.name > b.name ? 1 : -1)); 
      const sorted = sorted1.sort((a, b) => (a.listId > b.listId ? 1 : -1));

      console.log(sorted);
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
  //}
}
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'left',
      }
    });

export default App;

