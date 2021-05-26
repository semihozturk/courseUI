import React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from "react-native";

import LeftArrow from "../icons/left-arrow.svg"
import Add from "../icons/add.svg"
import Person from "../icons/person.svg"




const NewScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {/* since I cant add onPress event for icons, I added TouchableHighlight and View */}
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <View>
            <LeftArrow height={30} width={22} fill={"#1E2439"} />
          </View>
        </TouchableHighlight>
        <Add height={35} width={25} fill={"#ABA8BA"} />
      </View>

      <View style={{ paddingLeft: 15, backgroundColor: "#FAF2EA", marginTop: 25, paddingVertical: 15, borderRadius: 20 }}>
        <Text style={[styles.normalText]}>Select time</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 15, paddingLeft: 20 }} snapToInterval={80}>
          <View style={{ backgroundColor: "black", padding: 10, borderRadius: 13 }}>
            <Text style={{ color: "white", }}>15:00</Text>
          </View>
          <View style={{ backgroundColor: "#F4EAE2", padding: 10, borderRadius: 13, marginLeft: 25 }}>
            <Text style={{ color: "#B4AEB0" }}>15:00</Text>
          </View>
          <View style={{ backgroundColor: "#F4EAE2", padding: 10, borderRadius: 13, marginLeft: 25 }}>
            <Text style={{ color: "#B4AEB0" }}>15:00</Text>
          </View>
          <View style={{ backgroundColor: "#F4EAE2", padding: 10, borderRadius: 13, marginLeft: 25 }}>
            <Text style={{ color: "#B4AEB0" }}>15:00</Text>
          </View>
          <View style={{ backgroundColor: "#F4EAE2", padding: 10, borderRadius: 13, marginLeft: 25 }}>
            <Text style={{ color: "#B4AEB0" }}>15:00</Text>
          </View>
          <View style={{ backgroundColor: "#F4EAE2", padding: 10, borderRadius: 13, marginLeft: 25 }}>
            <Text style={{ color: "#B4AEB0" }}>15:00</Text>
          </View>
          <View style={{ backgroundColor: "#F4EAE2", padding: 10, borderRadius: 13, marginLeft: 25 }}>
            <Text style={{ color: "#B4AEB0" }}>15:00</Text>
          </View>
          <View style={{ backgroundColor: "#F4EAE2", padding: 10, borderRadius: 13, marginLeft: 25 }}>
            <Text style={{ color: "#B4AEB0" }}>15:00</Text>
          </View>
        </ScrollView>
      </View>

      <View style={{ marginVertical: 25, }}>
        <Text style={styles.normalText}>Select type of class</Text>

        <View style={{ marginVertical: 25, }}>
          <View style={{ backgroundColor: "black", paddingVertical: 20, borderRadius: 20 }} >
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ paddingLeft: 15, flexDirection: "row", alignItems: "center" }}>
                <View>
                  <Person height={35} width={25} fill={"#8964F6"} />
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={{ color: "#FEFEFE", fontSize: 18 }}>Chemistry Class</Text>
                  <Text style={{ color: "#F4F3F4", fontSize: 17 }}>2 - 20 Students</Text>
                </View>

              </View>

              <View style={{ marginRight: 20 }}>
                <Text style={styles.coin}>5 Coins</Text>
              </View>
            </View>
          </View>


          <View style={{ marginVertical: 15, elevation: 5, backgroundColor: "#FFFFFF", paddingVertical: 20, borderRadius: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ paddingLeft: 15, flexDirection: "row", alignItems: "center" }}>
                <View>
                  <Person height={35} width={25} fill={"#F0A02E"} />
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={{ color: "#BFBDC6", fontSize: 18 }}>Philosopy Class</Text>
                  <Text style={{ color: "#BDBCC3", fontSize: 17 }}>&#60; 1000 Students</Text>
                </View>

              </View>

              <View style={{ marginRight: 20 }}>
                <Text style={styles.coin}>5 Coins</Text>
              </View>
            </View>
          </View>

        </View>

        <ScrollView style={{ height: 150 }} showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.normalText}>Summary</Text>

            <View style={{ elevation: 3, backgroundColor: "#FFFFFF", borderRadius: 15, padding: 10, }}>

              <View style={styles.summary}>
                <Text style={styles.summaryText}>Schedule</Text>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>15:00</Text>

              </View>
              <View style={styles.summary}>
                <Text style={styles.summaryText}>Coin</Text>
                <Text style={styles.coin}>5 Coins</Text>

              </View>
              <View style={styles.summary}>
                <Text style={styles.summaryText}>Class type</Text>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Small Class</Text>

              </View>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("AnotherScreen")}>
            <View style={{ backgroundColor: "black", marginVertical: 10, paddingVertical: 5, borderRadius: 10, justifyContent: "center", flexDirection: "row" }}>
              <Text style={{ fontSize: 16, color: "white", }}>Join</Text>
            </View>
          </TouchableOpacity>

       
        </ScrollView>

      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 25,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  normalText: {
    color: "#1C1918",
    fontSize: 18,
    fontWeight: "bold",

  },
  coin: {
    color: "#D69B48",
    fontSize: 18,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    elevation: 7,
  },
  summaryText: {
    fontSize: 17,
    color: "#4B4B4B",
  }
})

export default NewScreen;