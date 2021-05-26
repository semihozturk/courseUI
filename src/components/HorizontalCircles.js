import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";

const HorizontalCircles = (props) => {

  return (
    // added TouchableHighlight to have more clickable area around circles
    <TouchableHighlight onPress={() => console.log("Circle is clicked")}>
      <View style={{ position: 'relative', height: 50, width: 50, borderColor: "white", borderWidth: 1, backgroundColor: props.colorFirst, elevation: 3, borderRadius: 25, marginHorizontal: 10, }} >
        <View style={{ position: 'absolute', right: 0, height: 15, width: 15, backgroundColor: props.colorSecond, borderRadius: 25, marginTop: 32 }} />
      </View>
    </TouchableHighlight>
    /* when i give elevation for the first View, the small circles lose a bit of their position */
  )
};

export default HorizontalCircles;