import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import OnboardingPick from "../screens/OnboardingPick"
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Elements from "../screens/Elements";
import Articles from "../screens/Articles";
import newAccount_1 from "../screens/newAccount_1"
import newAccount_2 from "../screens/newAccount_2"
import todoTest from "../screens/todoTest"
import newOrchard_1 from "../screens/newOrchard_1"
import newOrchard_2 from "../screens/newOrchard_2"
import joinOrchard_1 from "../screens/joinOrchard_1"
// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";
import { argonTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ElementsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Elements"
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Elements" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "blue" }
        }}
      />
            <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
            <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}





export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
    />
    
    <Stack.Screen name="App" component={AppStack} />
    <Stack.Screen name="OnboardingPick" component={OnboardingPickStack} />
    
    </Stack.Navigator>
  );
}


function OnboardingPickStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="OnboardingPick"
        component={OnboardingPick}
        option={{
          headerTransparent: true
        }}
    />
    
    <Stack.Screen name="App" component={AppStack} />
    <Stack.Screen name="Login" component={LoginPage} />
    <Stack.Screen name="newUser" component={CreateNewAccount_1} />
    <Stack.Screen name="todoTest" component={todoTest} />
	  
    
    </Stack.Navigator>
  );
}


function LoginPage(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="login"
        component={Register}
        option={{
          headerTransparent: true
        }}
	/>
      
      <Stack.Screen name="joinOrchard" component={JoinOrchard_1} />
      
    </Stack.Navigator>
  );
}

function JoinOrchard_1(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="joinOrchard_1"
        component={joinOrchard_1}
        option={{
          headerTransparent: true
        }}
	/>
      
      
      <Stack.Screen name="prev" component={LoginPage} />
      <Stack.Screen name="next" component={Home} />
    
    </Stack.Navigator>
  );
}

function CreateNewAccount_1(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="newUser_1"
        component={newAccount_1}
        option={{
          headerTransparent: true
        }}
	/>
      
      
      <Stack.Screen name="prev" component={OnboardingPickStack} />
      <Stack.Screen name="next" component={CreateNewAccount_2} />
    
    </Stack.Navigator>
  );
}

function CreateNewAccount_2(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="newUser_2"
        component={newAccount_2}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="newOrchard" component={CreateNewOrchard_1} />
      <Stack.Screen name="prev" component={CreateNewAccount_1} />
      <Stack.Screen name="next" component={CreateNewOrchard_1} />
    
    </Stack.Navigator>
  );
}


function CreateNewOrchard_1(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="newOrchard"
        component={newOrchard_1}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="prev" component={CreateNewAccount_2} />
      <Stack.Screen name="next" component={CreateNewOrchard_2} />
    
    </Stack.Navigator>
  );
}


function CreateNewOrchard_2(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="newOrchard_2"
        component={newOrchard_2}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="prev" component={CreateNewOrchard_1} />
      <Stack.Screen name="next" component={Home} />
    
    </Stack.Navigator>
  );
}





function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Account" component={Register} />
      <Drawer.Screen name="Elements" component={ElementsStack} />
      <Drawer.Screen name="Articles" component={ArticlesStack} />
    </Drawer.Navigator>
  );
}





