

import { Component } from 'react';
import {View, Text, SafeAreaView, SectionList, StyleSheet, StatusBar} from 'react-native';

const data = [
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
  

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const newData = [];

class ListAssignment extends Component {
  render(){
  
  data.forEach(element => {
    console.log(element)
    if (newData.length) {
      var match= false;

      newData.forEach(item => {
        if (item.categoryId === element.categoryId) {
          item.data.push(element.title);
          match= true;
        }
      });

      if (!match) {
        let obj1 = {
          categoryId: element.categoryId,
          data: [element.title],
        };
        newData.push(obj1);
      }
    }
    
    
    
    
    else {
      let obj2 = {
        categoryId: element.categoryId,
         data: [element.title]};
      newData.push(obj2);
    }
  });


  return (
    <SafeAreaView style={styles.container}>
    <SectionList
      sections={newData}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section }) => (
        <Text style={styles.header}>{section.categoryId}</Text>
      )}
    />
  </SafeAreaView>
  );
}};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    
  },
  item: {
    backgroundColor: "grey",
    padding: 20,
    marginVertical: 8,
    alignItems:"center"
  },
  header: {
    fontSize: 32,
    backgroundColor: "brown",
    textAlign:"center",
    borderRadius: 10,
    
  },
  title: {
    fontSize: 24
  }
});


export default ListAssignment;










// const data = [
//     {
//       categoryId: 'fruits',
//       title: 'mango',
//       quantity: 2,
//     },
//     {
//       categoryId: 'fruits',
//       title: 'apple',
//       quantity: 5,
//     },
//     {
//       categoryId: 'fruits',
//       title: 'coconut',
//       quantity: 4,
//     },
//     {
//       categoryId: 'fruits',
//       title: 'orange',
//       quantity: 2,
//     },
//     {
//       categoryId: 'fruits',
//       title: 'pomegranade',
//       quantity: 2,
//     },
//     {
//       categoryId: 'fruits',
//       title: 'mausmi',
//       quantity: 3,
//     },
//     {
//       categoryId: 'flowers',
//       title: 'rose',
//       quantity: 1,
//     },
//     {
//       categoryId: 'flowers',
//       title: 'lili',
//       quantity: 4,
//     },
//     {
//       categoryId: 'flowers',
//       title: 'jasmine',
//       quantity: 2,
//     },
//     {
//       categoryId: 'flowers',
//       title: 'hibiscus',
//       quantity: 8,
//     },
//     {
//       categoryId: 'flowers',
//       title: 'daffodils',
//       quantity: 9,
//     },
//     {
//       categoryId: 'flowers',
//       title: 'seasonal flowers',
//       quantity: 1,
//     },
//     {
//       categoryId: 'flowers',
//       title: 'sregional fruits',
//       quantity: 1,
//     },
//     {
//       categoryId: 'vegetables',
//       title: 'potato',
//       quantity: 8,
//     },
//     {
//       categoryId: 'vegetables',
//       title: 'tomato',
//       quantity: 5,
//     },
//     {
//       categoryId: 'vegetables',
//       title: 'guard',
//       quantity: 2,
//     },
//     {
//       categoryId: 'vegetables',
//       title: 'brinjal',
//       quantity: 6,
//     },
//   ];
//   const newData = [];
//   data.forEach(element => 
//   {
//     if (newData.length)
//     {
//       var match= false;

//       newData.forEach(item =>
//       {
//         if (item.categoryId === element.categoryId) 
//         {
//           item.data.push(element.title);
//           match= true;
//         }
//         else
//         {
//         let obj1 = {
//           categoryId: element.categoryId,
//           data: [element.title],
//         };
//         newData.push(obj1);
//         }
//       });

     
//     } else {
//       let obj2 = {categoryId: element.categoryId, data: [element.title]};
//       newData.push(obj2);
//     }
//   });
//   console.log(newData)
