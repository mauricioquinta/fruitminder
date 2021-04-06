import React, {useEffect, useState} from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity, FlatList, View, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar, Avatar } from "react-native-elements";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

const { width } = Dimensions.get("screen");

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  }
]


class Elements extends React.Component {
    
    

    //Define your state for your component. 
    state = {
        //Assing a array to your pokeList state
        toDoList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true
    }
    
    //Define your componentDidMount lifecycle hook that will retrieve data.
    //Also have the async keyword to indicate that it is asynchronous. 
    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            const todoListApiCall = await fetch('http://127.0.0.1:8000/api/todos.json');
            const todos = await todoListApiCall.json();
            this.setState({toDoList: todos, loading: false});
	    console.log("data be got---");
	    console.log(todos);
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }

    
    //Define your renderItem method the callback for the FlatList for
    //rendering each item, and pass data as a argument. 
    renderItem(data) {
        return <TouchableOpacity style={{backgroundColor: 'transparent'}}>
            <View  style={styles.listItemContainer}>
            <Text style={styles.pokeItemHeader}>{data.item.tittle}</Text>
	    <Text>{data.item.description}</Text>
            </View>
            </TouchableOpacity>
    }
    
    render() {
        //Destruct pokeList and Loading from state.
        const { toDoList, loading } = this.state;
        //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if(!loading) {
            return <FlatList style={styles.flatListContainer}
            data={toDoList}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.name} 
                />
        } else {
            return <ActivityIndicator />
        }

    }
}

const styles = StyleSheet.create({
    flatListContainer:{
	marginTop:50
    },
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    pokeItemHeader: {  
        color: '#fff',
        fontSize: 24,
    },
    pokeImage: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    }
});

export default Elements;
