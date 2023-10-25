import React, {Component} from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
}from 'react-native';

export default class Homescreen extends Component {
  
  render() {
 return(
   <View>
   <View>
    <TouchableOpacity
    style={styles.button1}
    onPress={()=> this.props.navigation.navigate("SummaryScreen")}>
<Text>Present</Text>
    </TouchableOpacity>
</View>
<View>
<TouchableOpacity
    style={styles.button2}>
<Text>Absent</Text>
    </TouchableOpacity>
</View>
</View>
  )
}

}





const styles = StyleSheet.create({
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 175,
    marginTop: 150,
    width: 100,
    height: 25,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 100,
    width: 100,
    height: 25,
  }
})