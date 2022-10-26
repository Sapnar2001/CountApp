import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Clipboard,
  BackHandler,
  StyleSheet,
} from 'react-native';


export default function ClipAssign(props) {

  const [copiedText, setCopiedText] = useState('');
//   const [showCopiedText, setShowCopiedText] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setString(copiedText);
    setCopiedText('');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
    

  }
  return (
    <SafeAreaView>
      <View style={styles.mainCont}>
        <TextInput
          onChangeText={text => setCopiedText(text)}
          value={copiedText}
          style={styles.box}
          placeholder="Enter Text To Be Copied"></TextInput>
        <TouchableOpacity onPress={copyToClipboard} style={styles.copyBtn}>
          <Text style={styles.btnText}>COPY</Text>
        </TouchableOpacity>
        <View>
                <TouchableOpacity onPress={fetchCopiedText} style={styles.copyBtn}>
          <Text style={styles.btnText}>show</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCont: {
      alignItems: 'center'
  },
  box: {
      marginVertical: 20,
      borderWidth: 1,
      borderRadius: 10,
      width: 300,
      height:100,

  },
  copyBtn: {
      backgroundColor: 'blue',
      width: 200,
      padding: 10,
      alignItems: 'center',
      borderRadius: 10,
      margin: 10
      
  },
  btnText: {
      fontWeight: 'bold',
      color: 'white',
      textDecoration: 'underline'
  },
  button: {
    textAlign: 'center',
    backgroundColor: 'rgb(90,128,236)',
    width: "65%",
    height: 60,
    margin: 10,
    justifyContent: 'center'
},
buttonText: {
    textAlign: 'center',
    color: 'white',
},
})