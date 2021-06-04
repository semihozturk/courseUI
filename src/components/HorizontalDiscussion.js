import React from "react";
import { Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";


const HorizontalDiscussion = (props) => {



  if (props.skeleton === true) {
    return (
      <View style={{
        // window is the visible area, screen is all the area
        width: Dimensions.get("screen").width - 90,
        backgroundColor: props.color,
        borderRadius: 25,
        padding: 25,
        marginRight: 20,
      }}>
        <View style={styles.firstDiscussion}>
          <View style={{ height: 10, width: 10, backgroundColor: "gray", borderRadius: 10, }} />
          <Text style={[{ marginLeft: 10, }, styles.grayText]}>---</Text>
        </View>
        <View>
          <Text style={styles.grayText}>----</Text>
          {/* adjustsFontSizeToFit={true} fits it in the space */}
          <Text style={styles.grayText} adjustsFontSizeToFit={true} numberOfLines={1} minimumFontScale={.7}>--------------------</Text>
          <Text style={styles.grayText}>-----</Text>

          {/* onPressIn runs when we click, onLongPress runs when we long press
and when we click one time, it gets in onPressIn first, then onPress
but if we click on a circle and left our mouse pointer at another place, only onPressIn runs
onPressOut runs when we stop clicking */}
          <TouchableWithoutFeedback onPress={() => console.log("onPress")} onPressOut={() => console.log("onPressOut")} onPressIn={() => console.log("onPressIn")} onLongPress={() => console.log("onLongPress")}>
            <View style={styles.circles}>
              <View style={{ height: 40, width: 40, backgroundColor: "#A29E97", borderRadius: 25, marginLeft: 5, borderWidth: 1, borderColor: "white" }} />
              <View style={{ height: 40, width: 40, backgroundColor: "#A29E97", borderRadius: 25, marginLeft: -5, borderWidth: 1, borderColor: "white" }} />
              <View style={{ height: 40, width: 40, backgroundColor: "#A29E97", borderRadius: 25, marginLeft: -5, borderWidth: 1, borderColor: "white" }} />
              <View style={{ height: 40, width: 40, backgroundColor: "#A29E97", borderRadius: 25, marginLeft: -5, borderWidth: 1, borderColor: "white" }} />
              <View style={{ height: 30, width: 30, backgroundColor: "#A29E97", borderRadius: 25, marginLeft: -5, borderWidth: 1, borderColor: "white", alignItems: "center", justifyContent: "center" }}>
                <Text style={[{ textAlign: "center" }, styles.grayText]}>+8</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

        </View>
      </View>


    )
  } else {
    return (
      <View style={{
        // window is the visible area, screen is all the area
        width: Dimensions.get("screen").width - 90,
        backgroundColor: props.color,
        borderRadius: 25,
        padding: 25,
        marginRight: 20,
      }}>

        <View style={styles.firstDiscussion}>
          <View style={{ height: 10, width: 10, backgroundColor: props.isLive ? "red" : "black", borderRadius: 10, }} />
          <Text style={{ marginLeft: 10 }}>{props.isLive ? "Live":""}</Text>
        </View>

        <View>
          <Text style={styles.grayText}>{props.topic}</Text>
          {/* adjustsFontSizeToFit={true} fits it in the space */}
          <Text style={styles.blackText} adjustsFontSizeToFit={true} numberOfLines={1} minimumFontScale={.7}>{props.title}</Text>
          <Text style={styles.grayText}>{props.author}</Text>

          {/* onPressIn runs when we click, onLongPress runs when we long press
and when we click one time, it gets in onPressIn first, then onPress
but if we click on a circle and left our mouse pointer at another place, only onPressIn runs
onPressOut runs when we stop clicking */}
          <TouchableWithoutFeedback onPress={() => console.log("onPress")} onPressOut={() => console.log("onPressOut")} onPressIn={() => console.log("onPressIn")} onLongPress={() => console.log("onLongPress")}>
            <View style={styles.circles}>
              <View style={{ height: 40, width: 40, backgroundColor: "#DDF0F8", borderRadius: 25, marginLeft: 5, borderWidth: 1, borderColor: "white" }} />
              <View style={{ height: 40, width: 40, backgroundColor: "#CEC7FE", borderRadius: 25, marginLeft: -5, borderWidth: 1, borderColor: "white" }} />
              <View style={{ height: 40, width: 40, backgroundColor: "#FEA2BE", borderRadius: 25, marginLeft: -5, borderWidth: 1, borderColor: "white" }} />
              <View style={{ height: 40, width: 40, backgroundColor: "#FEE3AB", borderRadius: 25, marginLeft: -5, borderWidth: 1, borderColor: "white" }} />
              <View style={{ height: 30, width: 30, backgroundColor: "#FEE3AA", borderRadius: 25, marginLeft: -5, borderWidth: 1, borderColor: "white", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ textAlign: "center" }}>+8</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

        </View>
      </View>


    )
  }

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
  },
  circles: {
    flexDirection: "row",
    alignItems: "center",
  }
})


export default HorizontalDiscussion;

