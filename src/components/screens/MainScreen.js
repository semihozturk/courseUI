import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, TouchableHighlight } from 'react-native';
import Application from "../icons/application.svg"
import HorizontalCircles from '../HorizontalCircles';
import HorizontalDiscussion from "../HorizontalDiscussion";
import Energy from "../icons/energy.svg"
import Add from "../icons/add.svg"
import Calendar from "../icons/calendar.svg"
import Clock from "../icons/clock.svg"


const MainScreen = ({ navigation }) => {

  const [text,setText] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appIcon}>
        <Application height={30} width={22} fill={"#1E2439"} />
        <View style={{ height: 30, width: 30, backgroundColor: "#DBF1F9", borderRadius: 20 }} />
      </View>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        {/* <Text>O</Text> */}
        <TextInput style={[styles.input, {flex:1}]} placeholder="Search" placeholderTextColor="#B9B9C5" onChangeText={setText} value={text}></TextInput>
      </View>
      <Text>{text}</Text>
      <View style={{ height: 120 }}>
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginVertical: 20, alignItems: "center" }} horizontal={true}>
          <View style={{ height: 40, width: 40, backgroundColor: "#FFFFFF", borderRadius: 20, marginRight: 10, borderStyle: "dotted", borderWidth: 5, borderColor: "#E2E2E2" }} />
          <HorizontalCircles colorFirst={"#CFC8FF"} colorSecond={"#4CC98F"}/>
          <HorizontalCircles colorFirst={"#FFA2BF"} colorSecond={"#FFD24D"}/>
          <HorizontalCircles colorFirst={"#FEE3AA"} colorSecond={"#4DC98F"}/>
          <HorizontalCircles colorFirst={"#FEDFCC"} colorSecond={"#B3C2D8"}/>
          <HorizontalCircles colorFirst={"#FFA2BF"} colorSecond={"#FF3FFF"}/>
          <HorizontalCircles colorFirst={"#F3A5FF"} colorSecond={"#1CB28F"}/>
          <HorizontalCircles colorFirst={"#EFBCFF"} colorSecond={"#22398F"}/>
          <HorizontalCircles colorFirst={"#AFBFCF"} colorSecond={"#44798F"}/>
          <HorizontalCircles colorFirst={"#AEDF5F"} colorSecond={"#98C98F"}/>
          <HorizontalCircles colorFirst={"#DDB825"} colorSecond={"#359424"}/>
        </ScrollView>
      </View>

      {/* Discussion Part */}
      <Text style={styles.blackText}>Group Discussion On Going</Text>

      <View style={{ height: 250 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", }}>
          <HorizontalDiscussion color={"#FFF9F2"} />
          <HorizontalDiscussion color={"#E7FBFF"} />
        </ScrollView>
      </View>

      <Text style={styles.blackText}>Todays Task</Text>

      {/* Task Part */}
      <ScrollView style={{ height: 300 }}>
        <View style={{ padding: 30 }}>
          <View style={styles.task}>
            <View style={{ backgroundColor:"#FFEFE2", padding:10,borderRadius:13}}>
              <Energy height={35} width={25} fill={"#FB9238"} />
            </View>

            <View style={{ marginLeft: 15, flex: 1}}>
              <Text style={styles.blackText}>8 Tasks Today</Text>
              <Text style={styles.grayText}>Meet them & Share your experience</Text>
            </View>

            <View style={{ marginLeft: 5 }}>
              <Add height={35} width={25} fill={"#ABA8BA"} />

            </View>

          </View>

          <View style={styles.task}>
            <View style={{ backgroundColor: "#FEF8E6", padding: 10, borderRadius: 13 }}>
              <Calendar height={35} width={25} fill={"#FCC626"} />

            </View>

            <View style={{ marginLeft: 15, flex: 1 }}>
              <Text style={styles.blackText}>Event</Text>
              <Text style={styles.grayText}>Create & Share Event</Text>
            </View>

            <TouchableHighlight onPress={() => navigation.navigate("NewScreen")}>
              <View>
                <Add height={35} width={25} fill={"#ABA8BA"} />

              </View>
            </TouchableHighlight>      

          </View>

          <Text style={styles.blackText}>Proposed classes</Text>

          <View>
            <Text style={{ color:"#9993D3",fontSize:18}}>Math class</Text>
            <View style={styles.proposed}>
              <Text style={{ color:"#706E80",fontSize:20}}>Rasyid Hilman</Text>
              <View style={{ height: 35, width: 35, backgroundColor: "#FEE3AA", borderRadius: 25, marginHorizontal: 10, }} />

            </View>

            <View style={styles.proposed}>
              <View style={styles.agendaClockSvg}>
                <Calendar height={40} width={30} fill={"#D4D3DA"} />
                <Text style={{ color: "#B0AFB7", fontSize: 18, marginLeft: 10}}>August 16, 2021</Text>
              </View>

              <View style={styles.agendaClockSvg}>
                <Clock height={40} width={30} fill={"#C0BFC6"} />
                <Text style={{ color:"#AFAEB8", fontSize:18, marginLeft:10}}>15:00</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  appIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderWidth: .5,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#F7F6F9",
    marginVertical: 20,
  },
  blackText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  grayText: {
    color: "#A29E97",
    fontSize: 17,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "space-between"
  },
  proposed: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  agendaClockSvg: {
    flexDirection: "row", 
    alignItems: "center",
  }


});

export default MainScreen;

