import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/components/screens/MainScreen';
import NewScreen from './src/components/screens/NewScreen';
import AnotherScreen from "./src/components/screens/AnotherScreen";

import  GlobalContextManager  from "./src/context/GlobalContextManager";


const Stack = createStackNavigator();

const App = () => {

  return (
    <GlobalContextManager>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen name="NewScreen" component={NewScreen} />
          <Stack.Screen name="AnotherScreen" component={AnotherScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </GlobalContextManager>

  );
}

export default App;

