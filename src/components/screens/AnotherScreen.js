import React from "react";
import { Dimensions, Text, View } from "react-native";

const AnotherScreen = () => {
  return(
    <View style={{ top:Dimensions.get("window").height/2, flex:1, flexWrap:"wrap", flexDirection:"row", paddingHorizontal:20 }}>
      <View style={{ width: (Dimensions.get("window").width - 40) / 3, height: (Dimensions.get("window").width - 40) / 3 }}>
        <View style={{ backgroundColor: "orange", borderRadius:30, flex: 1, margin: 5 }}></View>
      </View>
      <View style={{ width: (Dimensions.get("window").width - 40) / 3, height: (Dimensions.get("window").width - 40) / 3 }}>
        <View style={{ backgroundColor: "orange", borderRadius: 30, flex: 1, margin: 5 }}></View>
      </View>
      <View style={{ width: (Dimensions.get("window").width - 40) / 3, height: (Dimensions.get("window").width - 40) / 3 }}>
        <View style={{ backgroundColor: "orange", borderRadius: 30, flex: 1, margin: 5 }}></View>
      </View>
      <View style={{ width: (Dimensions.get("window").width - 40) / 3, height: (Dimensions.get("window").width - 40) / 3 }}>
        <View style={{ backgroundColor: "orange", borderRadius: 30, flex: 1, margin: 5 }}></View>
      </View>
      <View style={{ width: (Dimensions.get("window").width - 40) / 3, height: (Dimensions.get("window").width - 40) / 3 }}>
        <View style={{ backgroundColor: "orange", borderRadius: 30, flex: 1, margin: 5 }}></View>
      </View>
      <View style={{ width: (Dimensions.get("window").width - 40) / 3, height: (Dimensions.get("window").width - 40) / 3 }}>
        <View style={{ backgroundColor: "orange", borderRadius: 30, flex: 1, margin: 5 }}></View>
      </View>
    </View>
  )
};

export default AnotherScreen;