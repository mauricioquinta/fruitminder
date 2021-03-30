import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity, FlatList, View } from "react-native";
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
    
    constructor(props) {
	super(props);

	this.state  = {
	    loading: false,
	    data: [],
	    error: null,
	    refreshing: false,
	    base_url: " http://127.0.0.1:8000/api/todos"
	}
    }

    componentDidMount() {
	this.fetchDataFromApi();

    }

    fetchDataFromApi = ()  => {
	const url = " http://127.0.0.1:8000/api/todos";

	this.setState({ loading: true });

	fetch(url)
	    .then(res => res.json())
	    .then(res => {

		this.setState({
		    data: res,
		    error: null,
		    loading: false,
		    refreshing: false
		});
	    })
	    .catch(error => {
		this.setState({ error, loading : false });
	    })
    };

 


    renderHeader = () => {
	return <SearchBar placeholder="Type Here..." lightTheme round />;
    };
    


    
  renderList = () => {
    return (
    	<View style={{ flex: 1, padding: 24 }}>
	  {this.loading ? <ActivityIndicator/> : (
              <FlatList
		data={this.state.data}
		keyExtractor={({ id }, index) => id}
		renderItem={({ item }) => (
		    <Text>{item.title}, {item.description}</Text>
		    
		)}
		  />
	  )}
	</View>

	
    );
  };

 
 
 


    
  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 80, paddingBottom: 30, width }}>
	  {this.renderHeader()}
          {this.renderList()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  input: {
    borderBottomWidth: 1
  },
  inputDefault: {
    borderBottomColor: argonTheme.COLORS.PLACEHOLDER
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputInfo: {
    borderBottomColor: argonTheme.COLORS.INFO
  },
  inputSuccess: {
    borderBottomColor: argonTheme.COLORS.SUCCESS
  },
  inputWarning: {
    borderBottomColor: argonTheme.COLORS.WARNING
  },
  inputDanger: {
    borderBottomColor: argonTheme.COLORS.ERROR
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center"
  },
});

export default Elements;
