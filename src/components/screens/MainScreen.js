import React, { useState, useEffect, useRef } from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, TouchableHighlight } from 'react-native';
import Application from "../icons/application.svg"
import HorizontalCircles from '../HorizontalCircles';
import HorizontalDiscussion from "../HorizontalDiscussion";
import Energy from "../icons/energy.svg"
import Add from "../icons/add.svg"
import Calendar from "../icons/calendar.svg"
import Clock from "../icons/clock.svg"

const MainScreen = ({ navigation }) => {

  useEffect(() => {
    fetch('http://192.168.1.6/course-ui/liveDiscussions.json')
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error(error))
      .finally(() => console.log("bitti"));
  }, []);

  const inputRef = useRef(); // to make "O" letter in textinput clickable
  const [text, setText] = useState("");
  return (
    // for ios, i add safeareview and flex:1, otherwise height doesnt become 100%
    <SafeAreaView style={{ flex: 1, }} >
      <View style={styles.container}>
        <View style={styles.appIcon}>
          <Application height={30} width={22} fill={"#1E2439"} />
          <View style={{ height: 30, width: 30, backgroundColor: "#DBF1F9", borderRadius: 20 }} />
        </View>
        <View style={[styles.input, { flexDirection: "row", alignItems: "center" }]}>
          <TouchableWithoutFeedback onPress={() => inputRef.current.focus()}>
            <Text style={{ marginLeft: 5 }}>O</Text>
          </TouchableWithoutFeedback>
          <TextInput style={{ flex: 1 }} placeholder="Search" placeholderTextColor="#B9B9C5" onChangeText={setText} value={text} ref={inputRef}></TextInput>
        </View>
        <Text>{text}</Text>

        {/* Horizontal Circles */}
        {/* we can set height property for scrollview if want bigger touchable area or
        we can give height for view, and make flex:1 for scrollview */}
        <View>
          <ScrollView snapToInterval={75} showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20, alignItems: "center" }} horizontal={true}>
            <View style={{ alignItems: "center", justifyContent: "center", height: 40, width: 40, backgroundColor: "#FFFFFF", borderRadius: 20, marginRight: 15, marginLeft: 20, borderStyle: "dotted", borderWidth: 5, borderColor: "#E2E2E2" }}>
              <Text style={{ fontSize: 26, color: "#E2E2E2", lineHeight: 30, }}>+</Text>
            </View>
            <HorizontalCircles colorFirst={"#CFC8FF"} colorSecond={"#4CC98F"} />
            <HorizontalCircles colorFirst={"#FFA2BF"} colorSecond={"#FFD24D"} />
            <HorizontalCircles colorFirst={"#FEE3AA"} colorSecond={"#4DC98F"} />
            <HorizontalCircles colorFirst={"#FEDFCC"} colorSecond={"#B3C2D8"} />
            <HorizontalCircles colorFirst={"#FFA2BF"} colorSecond={"#FF3FFF"} />
            <HorizontalCircles colorFirst={"#F3A5FF"} colorSecond={"#1CB28F"} />
            <HorizontalCircles colorFirst={"#EFBCFF"} colorSecond={"#22398F"} />
            <HorizontalCircles colorFirst={"#AFBFCF"} colorSecond={"#44798F"} />
            <HorizontalCircles colorFirst={"#AEDF5F"} colorSecond={"#98C98F"} />
            <HorizontalCircles colorFirst={"#DDB825"} colorSecond={"#359424"} />
          </ScrollView>
        </View>

        <ScrollView>
          {/* Discussion Part */}
          <Text style={styles.blackText}>Group Discussion On Going</Text>

          <View style={{ height: 250 }}>
            <ScrollView snapToInterval={300} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", paddingLeft: 20, }}>
              <HorizontalDiscussion color={"#FFF9F2"} />
              <HorizontalDiscussion color={"#E7FBFF"} />
            </ScrollView>
          </View>

          <Text style={styles.blackText}>Todays Task</Text>

          {/* Task Part */}
          <View style={{ padding: 30 }}>
            <View style={styles.task}>
              <View style={{ backgroundColor: "#FFEFE2", padding: 10, borderRadius: 13 }}>
                <Energy height={35} width={25} fill={"#FB9238"} />
              </View>

              <View style={{ marginLeft: 15, flex: 1 }}>
                <Text style={styles.blackTextInside}>8 Tasks Today</Text>
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
                <Text style={styles.blackTextInside}>Event</Text>
                <Text style={styles.grayText}>Create & Share Event</Text>
              </View>

              <TouchableHighlight onPress={() => navigation.navigate("NewScreen")}>
                <View>
                  <Add height={35} width={25} fill={"#ABA8BA"} />

                </View>
              </TouchableHighlight>

            </View>
          </View>

          <Text style={styles.blackText}>Proposed classes</Text>

          {/* Proposed Class part */}
          <View style={{ padding: 30 }}>
            <View style={{backgroundColor:"white",borderRadius:20,padding:10,elevation:1,}}>
              <Text style={{ color: "#9993D3", fontSize: 18 }}>Math class</Text>
              <View style={styles.proposed}>
                <Text style={{ color: "#706E80", fontSize: 20 }}>Rasyid Hilman</Text>
                <View style={{ height: 35, width: 35, backgroundColor: "#FEE3AA", borderRadius: 25, marginHorizontal: 10, }} />

              </View>

              <View style={styles.proposed}>
                <View style={styles.agendaClockSvg}>
                  <Calendar height={40} width={30} fill={"#D4D3DA"} />
                  <Text style={{ color: "#B0AFB7", fontSize: 18, marginLeft: 10 }}>August 16, 2021</Text>
                </View>

                <View style={styles.agendaClockSvg}>
                  <Clock height={40} width={30} fill={"#C0BFC6"} />
                  <Text style={{ color: "#AFAEB8", fontSize: 18, marginLeft: 10 }}>15:00</Text>
                </View>
              </View>
            </View>
          </View>

        </ScrollView>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
  },
  appIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderWidth: .5,
    borderRadius: 10,
    backgroundColor: "#F7F6F9",
    marginHorizontal: 20,
    marginTop: 20,
  },
  blackText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  blackTextInside: {
    fontSize: 20,
    fontWeight: "bold",
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

