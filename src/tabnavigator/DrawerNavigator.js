import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MovieStackNavigator,NewMovieStackNavigator} from "./StackNavigator";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  const isAdmin = useSelector((state)=>state.auth.isAdmin);
  return (
    <Drawer.Navigator drawerStyle={{backgroundColor: '#121212'}}
    drawerContentOptions={{
      activeTintColor: '#fff', 
      inactiveTintColor: '#fff', 
    }}
    >
        <Drawer.Screen name="MOVIES" component={MovieStackNavigator}
        options={{
           title: 'MOVIES',
           drawerIcon: () => (
            <MaterialCommunityIcons name="movie-open" size={24} color="white" />
           ),
        }}
        />
        {isAdmin ?
          <Drawer.Screen name="ADD MOVIE" component={NewMovieStackNavigator}
          options={{
            title: 'ADD MOVIE',
            drawerIcon: () => (
              <Ionicons name="add-circle-outline" size={24} color="white" />
            ),
          }}
          />
          : null }
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;