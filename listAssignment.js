import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

const DATA = [
    {
    categoryId: 'fruits',
    title: 'mango',
    quantity: 2,
    },
    {
    categoryId: 'fruits',
    title: 'apple',
    quantity: 5,
    },
    {
    categoryId: 'fruits',
    title: 'coconut',
    quantity: 4,
    },
    {
    categoryId: 'fruits',
    title: 'orange',
    quantity: 2,
    },
    {
    categoryId: 'fruits',
    title: 'pomegranade',
    quantity: 2,
    },
    {
    categoryId: 'fruits',
    title: 'mausmi',
    quantity: 3,
    },
    {
    categoryId: 'flowers',
    title: 'rose',
    quantity: 1,
    },
    {
    categoryId: 'flowers',
    title: 'lili',
    quantity: 4,
    },
    {
    categoryId: 'flowers',
    title: 'jasmine',
    quantity: 2,
    },
    {
    categoryId: 'flowers',
    title: 'hibiscus',
    quantity: 8,
    },
    {
    categoryId: 'flowers',
    title: 'daffodils',
    quantity: 9,
    },
    {
    categoryId: 'flowers',
    title: 'seasonal flowers',
    quantity: 1,
    },
    {
    categoryId: 'flowers',
    title: 'sregional fruits',
    quantity: 1,
    },
    {
    categoryId: 'vegetables',
    title: 'potato',
    quantity: 8,
    },
    {
    categoryId: 'vegetables',
    title: 'tomato',
    quantity: 5,
    },
    {
    categoryId: 'vegetables',
    title: 'guard',
    quantity: 2,
    },
    {
    categoryId: 'vegetables',
    title: 'brinjal',
    quantity: 6,
    },
    ];

const Item = ({ categoryId }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{categoryId}</Text>
  </View>
);

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <Text>{item.title}</Text>
          )}
          renderSectionHeader={({ section:{title}}) => (
            <Text>{title}</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default App;