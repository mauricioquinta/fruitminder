import React,{useState} from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
    KeyboardAvoidingView,
    ScrollView,
    Image
    
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import  Button from '../components/Button';
import Icon from '../components/Icon';
import Input from '../components/Input';
import  Card from '../components/Card';
import  InsightCard from '../components/InsightCard';

import { Images, argonTheme } from "../constants";

import articles from '../constants/articles';
import {  useNavigation } from '@react-navigation/native' // <-- import useNavigation hook


const { width, height } = Dimensions.get("screen");



const  newOrchard = () => {     
	
	
	

    const [orchardName, setOrchardName] = useState();
    const navigation = useNavigation() // <-- add this line
    
	
	return (
	    
	    <ScrollView contentContainerStyle={{ paddingBottom: 250 }}>
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>

	    <Block flex space="between" style={styles.padded}>
	      <Block flex space="around" style={{ zIndex: 2 }}>
                <Block style={styles.title}>
                  <Block>
                    <Text color="black" size={40}>
		      Fruitminder
                    </Text>
		  </Block>
		</Block>
		</Block>
	
	    
            <Block style={styles.registerContainer}>
	      
		
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                    >
		    
		    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
		      <Block style={styles.orchOverview}>
			<Text color="black" size={16}>
			 Orchard Overview
			</Text>
                      </Block>
		      
                      <Block center>
			<Image source={Images.orchardMap} style={styles.logo} />
		      </Block>
		      
                    </Block>

		     <Block width={width * 0.8} style={{ marginBottom: 15 }}>
		      <Block style={styles.subTitle}>
			<Text color="black" size={16}>
			 Orchard Insights
			</Text>	
                      </Block>
		      
                      <Block flex  style={styles.orchInsights}>
			<InsightCard style={{ marginRight:5 }}
			      item={articles[4]} />
			<InsightCard  style={{ marginLeft:5 }}
			      item={articles[3]}  />
		      </Block>
		     

		      <Block center>
			<Button color="primary" style={styles.button}
				onPress={() => navigation.navigate("insights")}>
			  <Text color="black">
			    View all insights
			  </Text>
			</Button>
		      </Block>

		     
		      
                    </Block>

		     
		    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
		      <Block style={styles.subTitle}>
			<Text color="black" size={16}>
			  Orchard Admin
			</Text>
                      </Block>
		      
                      <Block center>
			<Button color="primary" style={styles.button}>
			  <Text color="black">
			    Edit Orchard Categories
			    </Text>
			</Button>
		      </Block>

		      <Block center>
			<Button color="primary" style={styles.button}>
			  <Text color="black">
			    Orchard Passcode
			    </Text>
			</Button>
		      </Block>
		      
                    </Block>

		    
		 

		    
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
		</Block>
		</ScrollView>
    );
}


const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
      elevation: 1
  },
  socialConnect: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
    button: {
    marginBottom: theme.SIZES.BASE,
	width: width - theme.SIZES.BASE * 2.6,
	borderColor: 'black'
    },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: "40%",
    marginTop: 25
  },
  title: {
      marginTop:5
  },
  subTitle: {
      marginTop: 5,
  },
    orchInsights: {
	marginTop: 5,
	paddingBottom:150,
	flexDirection: "row",
	flexWrap: "wrap",
  },
  orchOverview: {
      marginTop: 5,
      paddingBottom:160
  },
  padded: {
      paddingHorizontal: theme.SIZES.BASE *2,
      position: "relative",
      bottom: theme.SIZES.BASE,
      zIndex: 2,
  },
    logo: {
    width: 205,
    height: 215,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  }
  
});

export default newOrchard;
