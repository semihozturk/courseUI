import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { Circle } from 'react-native-svg';
import Application from "./src/components/icons/application.svg"



const App  = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appIcon}>
        <Application height={30} width={22} fill={"#1E2439"} />
        <View style={{ height: 30, width: 30, backgroundColor:"#DBF1F9", borderRadius:20}}/>
      </View>
      <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#B9B9C5"></TextInput>
    
      <View style={{height:100}}>
        <ScrollView contentContainerStyle={{ marginVertical: 20, alignItems:"center"}} horizontal={true}>
          <View style={{ height: 40, width: 40, backgroundColor: "#FFFFFF", borderRadius: 20, borderStyle: "dotted", borderWidth: 5, borderColor: "#E2E2E2" }} />
          <View style={{ height: 50, width: 50, backgroundColor: "#CFC8FF", borderRadius: 25, marginLeft: 20, }} />
          <View style={{ height: 50, width: 50, backgroundColor: "#FFA2BF", borderRadius: 25, marginLeft: 20, }} />
          <View style={{ height: 50, width: 50, backgroundColor: "#FEE3AA", borderRadius: 25, marginLeft: 20, }} />
          <View style={{ height: 50, width: 50, backgroundColor: "#FEDFCC", borderRadius: 25, marginLeft: 20, }} />
          <View style={{ height: 50, width: 50, backgroundColor: "#FFA2BF", borderRadius: 25, marginLeft: 20, }} />
          <View style={{ height: 50, width: 50, backgroundColor: "#F3A5FF", borderRadius: 25, marginLeft: 20, }} />
          <View style={{ height: 50, width: 50, backgroundColor: "#EFBCFF", borderRadius: 25, marginLeft: 20, }} />
          <View style={{ height: 50, width: 50, backgroundColor: "#AFBFCF", borderRadius: 25, marginLeft: 20, }} />
          <View style={{ height: 50, width: 50, backgroundColor: "#AEDF5F", borderRadius: 25, marginLeft: 20, }} />
          <View style={{ height: 50, width: 50, backgroundColor: "#DDB825", borderRadius: 25, marginLeft: 20, }} />

        </ScrollView>
      </View>
      

      <Text style={styles.blackText}>Group Discussion On Going</Text>

      <View style={styles.discussionOutside}>
        <View style={styles.discussionInside}>
          <View style={styles.firstDiscussion}>
            <View style={{ height: 10, width: 10, backgroundColor: "red", borderRadius: 10, }} />
            <Text style={{ marginLeft: 10 }}>Live</Text>
          </View>
          <View>
            <Text style={styles.grayText}>Topic</Text>
            <Text style={styles.blackText}>Human Resources Analysis</Text>
            <Text style={styles.grayText}>By Emran Emon</Text>
            <View style={styles.circles}>
              <View style={{ height: 40, width: 40, backgroundColor: "#CFC8FF", borderRadius: 25, marginLeft: 5, }} />
              <View style={{ height: 40, width: 40, backgroundColor: "#FFA2BF", borderRadius: 25, marginLeft: -5, }} />
              <View style={{ height: 40, width: 40, backgroundColor: "#FEE3AA", borderRadius: 25, marginLeft: -5, }} />
              <View style={{ height: 40, width: 40, backgroundColor: "#FEDFCC", borderRadius: 25, marginLeft: -5, }} />

            </View>
          </View>
          
         
        </View>
      </View>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    backgroundColor:"#FFFFFF",
  },
  appIcon: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  input: {
    height: 40,
    borderWidth: .5,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#F7F6F9",
    marginVertical:20,
  },
  discussionInside: {
    backgroundColor: "#FFF9F2",

  },
  firstDiscussion: {
    flexDirection:"row",
    alignItems:"center",
    borderRadius:20,
    padding:20,
    marginBottom:20,
  },
  grayText: {
    color:"#A29E97",
    fontSize:17,
  },
  blackText:{
    fontSize:20,
    fontWeight:"bold",
    fontFamily: "Times New Roman",
  },
  circles: {
    flexDirection:"row",
    alignItems:"center",
  }
});

export default App;
