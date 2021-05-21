import React from "react";
import { Text, View, StyleSheet } from "react-native";


const HorizontalDiscussion = (props) => {

  return (
    <View style={{
      backgroundColor: props.color,
      borderRadius: 25,
      padding: 25,
      marginRight:20,
    }}>
      <View style={styles.firstDiscussion}>
        <View style={{ height: 10, width: 10, backgroundColor: "red", borderRadius: 10, }} />
        <Text style={{ marginLeft: 10 }}>Live</Text>
      </View>
      <View>
        <Text style={styles.grayText}>Topic</Text>
        <Text style={styles.blackText}>Human Resources Analysis</Text>
        <Text style={styles.grayText}>By Emran Emon</Text>
        <View style={styles.circles}>
          <View style={{ height: 40, width: 40, backgroundColor: "#DDF0F8", borderRadius: 25, marginLeft: 5, borderWidth: 1, borderColor: "white" }} />
          <View style={{ height: 40, width: 40, backgroundColor: "#CEC7FE", borderRadius: 25, marginLeft: -5, borderWidth: 1, borderColor: "white" }} />
          <View style={{ height: 40, width: 40, backgroundColor: "#FEA2BE", borderRadius: 25, marginLeft: -5, borderWidth: 1, borderColor: "white" }} />
          <View style={{ height: 40, width: 40, backgroundColor: "#FEE3AB", borderRadius: 25, marginLeft: -5, borderWidth: 1, borderColor: "white" }} />
          <View style={{ height: 30, width: 30, backgroundColor: "#FEE3AA", borderRadius: 25, marginLeft: -5, borderWidth: 1, borderColor: "white", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ textAlign: "center" }}>+8</Text>
          </View>
        </View>
      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  firstDiscussion: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },

  grayText: {
    color: "#A29E97",
    fontSize: 17,
  },
  blackText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  circles: {
    flexDirection: "row",
    alignItems: "center",
  }
})


export default HorizontalDiscussion;

