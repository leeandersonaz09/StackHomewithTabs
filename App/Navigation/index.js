import React from "react";
import 'react-native-gesture-handler';

//import navigators
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Imports Icons and Fonts
import { Ionicons } from "@expo/vector-icons";
import * as Font from 'expo-font';
//import de telas 
import HomeScreen from "../Screens/Home";
import TabsScreen from "../Screens/Tabs";
import Loading from  "../Components/Loading";

//instancing navigators
const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const TabsStack = createStackNavigator();

//stack navigator Home
const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: true,
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
    />
    <HomeStack.Screen
      name="Tabs"
      component={TabsScreen}
    />  
  </HomeStack.Navigator>
);


//stack navigator Tabs
const TabsStackScreen = () => (
  <TabsStack.Navigator    
  screenOptions={{
    headerShown: true
  }}>
    <TabsStack.Screen name="Tabs" component={TabsScreen} />
  </TabsStack.Navigator>
);

//Root Navigator
const RootStackScreen = () => {
  
  const [isLoading, setIsLoading] = React.useState(true);
  

  React.useEffect(() => {

    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 5000);

  }, []);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: true 
      }}
    >
      {isLoading ? (
        <RootStack.Screen name="Loading" component={Loading} />
      ) : (
        <RootStack.Screen name="AppTabsScreen" component={HomeStackScreen} />
      )}

    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};