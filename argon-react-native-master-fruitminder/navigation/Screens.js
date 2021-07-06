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
import addressIn from "../screens/manualAddressInput"
import treeSelect from "../screens/fruitTreeSelection"
import orchRowDetails from "../screens/orchRowDetails"
import newOrchDetails from "../screens/newOrchDetails"
import orchardHome from "../screens/orchardHome"
import orchardOverview from "../screens/orchardOverview"
import findClosestTree from "../screens/findClosestTree"
import locateTree from "../screens/findTree"
import addTree from "../screens/addTree"
import logOverview from "../screens/logOverview"
import logInsights from "../screens/allInsights"
import mostTaskInsight from "../screens/mostTaskInsight"
import mostTaskDetail from "../screens/mostTaskDetail"

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
    <Stack.Screen name="orchHome" component={OrchardHome} />
	  
    
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
      <Stack.Screen name="next" component={OrchardHome} />
    
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
      <Stack.Screen name="next" component={ManualAddress} />
    
    </Stack.Navigator>
  );
}

function ManualAddress(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="enterAddress"
        component={addressIn}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="prev" component={CreateNewOrchard_2} />
      <Stack.Screen name="next" component={TreeFruitSelect} />
    
    </Stack.Navigator>
  );
}

function TreeFruitSelect(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="selectTreeType"
        component={treeSelect}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="prev" component={ManualAddress} />
      <Stack.Screen name="next" component={OrchRowDetails} />
    
    </Stack.Navigator>
  );
}

function OrchRowDetails(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="orchRowDetails"
        component={orchRowDetails}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="prev" component={TreeFruitSelect} />
      <Stack.Screen name="next" component={OrchardDetails} />
    
    </Stack.Navigator>
  );
}

function OrchardDetails(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="orchardDetails"
        component={newOrchDetails}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="prev" component={OrchRowDetails} />
      <Stack.Screen name="next" component={OrchardHome} />
    
    </Stack.Navigator>
  );
}



function OrchardHome(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="orchardHome"
        component={orchardHome}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="orchOverview" component={OrchardOverview} />
      <Stack.Screen name="findTreeNear" component={FindClosestTree} />
      <Stack.Screen name="locateTree" component={FindTree} />
      <Stack.Screen name="addTree" component={AddTree} />
      <Stack.Screen name="logOverview" component={LogOverview} />
      <Stack.Screen name="next" component={Home} />
    
    </Stack.Navigator>
  );
}


function OrchardOverview(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="orchardOverview"
        component={orchardOverview}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="insights" component={AllInsights} />
      <Stack.Screen name="next" component={Home} />
    
    </Stack.Navigator>
  );
}

function AllInsights(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="allInsights"
        component={logInsights}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="mostTasks" component={MostTasksInsights} />
      <Stack.Screen name="mostLogs" component={Home} />
      <Stack.Screen name="back" component={OrchardHome} />
    
    </Stack.Navigator>
  );
}

function MostTasksInsights(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
	name="mostTaskInsight"
        component={mostTaskInsight}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="details" component={MostTasksDetails} />
      <Stack.Screen name="mostLogs" component={Home} />
      <Stack.Screen name="back" component={AllInsights} />
    
    </Stack.Navigator>
  );
}


function MostTasksDetails(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
	name="mostTaskInsight"
        component={mostTaskDetail}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="mostTasks" component={orchRowDetails} />
      <Stack.Screen name="mostLogs" component={Home} />
      <Stack.Screen name="back" component={MostTasksInsights} />
    
    </Stack.Navigator>
  );
}

function FindClosestTree(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="findClosestTree "
        component={findClosestTree}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="back" component={OrchardHome} />
      <Stack.Screen name="next" component={Home} />
    
    </Stack.Navigator>
  );
}

function FindTree(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="findTree "
        component={locateTree}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="back" component={OrchardHome} />
      <Stack.Screen name="next" component={Home} />
    
    </Stack.Navigator>
  );
}


function AddTree(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="addTree "
        component={addTree}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="back" component={OrchardHome} />
      <Stack.Screen name="next" component={Home} />
    
    </Stack.Navigator>
  );
}



function LogOverview(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
      name="logOverView "
        component={logOverview}
        option={{
          headerTransparent: true
        }}
	/>
      <Stack.Screen name="back" component={OrchardHome} />
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





