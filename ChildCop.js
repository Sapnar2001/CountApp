import {Component} from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
export default class ChildCop extends Component
{
    render()
    {
    return(
        <View>
    <View style={styles.Main}>
          <Text style={{ fontSize: 40 }}>Counter</Text>
          <View style={styles.counter}>
            <TouchableOpacity style={styles.button} onPress={this.props.childInc}>
              <Text style={styles.Textstyle}>+</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 70 }}>{this.props.childCount}</Text>
            <TouchableOpacity style={styles.button} onPress={this.props.childDec}>
              <Text style={styles.Textstyle}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        </View>
    );
    }
}

const styles = StyleSheet.create({
    counter: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'blue',
      padding: 10,
      margin: 40,
      borderRadius: 10
    },
    Main: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    Textstyle: {
      color: 'white'
    }
  });
