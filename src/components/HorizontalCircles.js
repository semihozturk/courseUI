import React from "react";
import { View, Text } from "react-native";

const HorizontalCircles = (props) => {

  return (
    <View style={{ height: 50, width: 50, backgroundColor: props.color, borderRadius: 25, marginHorizontal: 10, }} />

  )
};

export default HorizontalCircles;