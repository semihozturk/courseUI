import React from "react";
import { View, Text } from "react-native";

const HorizontalCircles = (props) => {

  return (
    <View style={{flexDirection:"row"}}>
      <View style={{ height: 50, width: 50, backgroundColor: props.colorFirst, borderRadius: 25, marginHorizontal: 10, }} />
      <View style={{ height: 15, width: 15, backgroundColor: props.colorSecond, borderRadius: 25, marginHorizontal: 10, marginLeft:-20,marginTop:32 }} />

    </View>
    
  )
};

export default HorizontalCircles;