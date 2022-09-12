import React from 'react'
import {DrawerActions} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignInScreen from './screens/SignIn'
import DashScreen from './screens/Dash'
import AddTaskScreen from './screens/AddTask'

const {navigation} = createDrawerNavigator();
const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{drawerPosition: 'left'}}>
            <Drawer.Screen name="SignIn" component={SignInScreen} options={{ headerShown:false,title:"LOGOUT" }}/>
            <Drawer.Screen name="Dash" component={DashScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#020C1B'},
                               headerTintColor: "#7ED957",
                               drawerStyle: {backgroundColor: '#020C1B',width: 180},
                               headerShown:true,title:"HOME",
                               drawerActiveTintColor:"#020C1B",
                               drawerInactiveTintColor:"#020C1B",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#7ED957" }} />
            <Drawer.Screen name="AddTask" component={AddTaskScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#020C1B'},
                               headerTintColor: "#7ED957",
                               drawerStyle: {backgroundColor: '#020C1B',width: 180},
                               headerShown:true,title:"ADD TASK",
                               drawerActiveTintColor:"#020C1B",
                               drawerInactiveTintColor:"#020C1B",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#7ED957" }} />

        </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default MyStack
