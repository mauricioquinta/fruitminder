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

import { Button, Icon, Input,Card } from "../components";
import { Images, argonTheme } from "../constants";
import articles from '../constants/articlesTwo';
import {  useNavigation } from '@react-navigation/native' // <-- import useNavigation hook


const { width, height } = Dimensions.get("screen");



const  newOrchard = () => {     
	
    const [orchardName, setOrchardName] = useState();
    const navigation = useNavigation() // <-- add this line
    
	
	return (
	    
	    <ScrollView contentContainerStyle={{ paddingBottom: 250 }}>
	      <Block flex middle>	
		<StatusBar hidden/>
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
			    
			    <Block width={width * 0.8} style={{ marginBottom: 15, paddingBottom:300 }}>
			      <Block style={styles.orchOverview}>
				<Text color="black" size={16}>
				  Add a Tree 
				</Text>
				<Text color="grey" size={14}>
				  core information
				</Text>
			      </Block>
			      
			      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
				<Block style={styles.subTitle}>
				  <Text color="black" size={16}>
				    Tree Name
				  </Text>
				</Block>
				<Input
				  borderless
				  placeholder="Harrold"
				  iconContent={
					  <Icon
						size={16}
						color={argonTheme.COLORS.ICON}
						name="pencil"
						family="ArgonExtra"
						style={styles.inputIcons}
						/>
					  }
					  onChangeText={orchardName => setOrchardName(orchardName)}
				  defaultValue={orchardName}
				  />
</Block>

<Block width={width * 0.8} style={{ marginBottom: 15 }}>
  <Block style={styles.subTitle}>
    <Text color="black" size={16}>
      Tree Row
    </Text>
  </Block>
  <Input
    borderless
    placeholder="row x"
    iconContent={
	    <Icon
		  size={16}
		  color={argonTheme.COLORS.ICON}
		  name="pencil"
		  family="ArgonExtra"
		  style={styles.inputIcons}
		  />
	    }
	    onChangeText={orchardName => setOrchardName(orchardName)}
    defaultValue={orchardName}
    />
</Block>

			       <Block width={width * 0.8} style={{ marginBottom: 15 }}>
		      <Block style={styles.subTitle}>
			<Text color="black" size={16}>
			  Tree Number
			</Text>
                      </Block>
                      <Input
                        borderless
                        placeholder="tree num y"
                        iconContent={
				<Icon
				      size={16}
				      color={argonTheme.COLORS.ICON}
				      name="pencil"
				      family="ArgonExtra"
				      style={styles.inputIcons}
				      />
				}
			onChangeText={orchardName => setOrchardName(orchardName)}
			defaultValue={orchardName}
				/>
			       </Block>

			        <Block width={width * 0.8} style={{ marginBottom: 15 }}>
		      <Block style={styles.subTitle}>
			<Text color="black" size={16}>
			  Tree Variety
			</Text>
                      </Block>
                      <Input
                        borderless
                        placeholder="sweetheart"
                        iconContent={
				<Icon
				      size={16}
				      color={argonTheme.COLORS.ICON}
				      name="pencil"
				      family="ArgonExtra"
				      style={styles.inputIcons}
				      />
				}
			onChangeText={orchardName => setOrchardName(orchardName)}
			defaultValue={orchardName}
				/>
				</Block>


	    
		<Block style={{flexDirection: "row"}}>
		
	    
	    </Block>


	    	 <Block width={width * 0.8} style={{ marginBottom: 15 }}>
		      <Block style={styles.subTitle}>
			<Text color="black" size={16}>
			  Tree Age
			</Text>
                      </Block>
                      <Input
                        borderless
                        placeholder="dd/mm/yyy"
                        iconContent={
				<Icon
				      size={16}
				      color={argonTheme.COLORS.ICON}
				      name="pencil"
				      family="ArgonExtra"
				      style={styles.inputIcons}
				      />
				}
			onChangeText={orchardName => setOrchardName(orchardName)}
			defaultValue={orchardName}
				/>
                    </Block>

				 <Block width={width * 0.8} style={{ marginBottom: 15 }}>
		      <Block style={styles.subTitle}>
			<Text color="black" size={16}>
			  Tree Condition/Status
			</Text>
                      </Block>
                      <Input
                        borderless
                        placeholder="Name of Orchard"
                        iconContent={
				<Icon
				      size={16}
				      color={argonTheme.COLORS.ICON}
				      name="pencil"
				      family="ArgonExtra"
				      style={styles.inputIcons}
				      />
				}
			onChangeText={orchardName => setOrchardName(orchardName)}
			defaultValue={orchardName}
				/>
                    </Block>

				 <Block row  width={width * 0.75} style={{justifyContent: 'space-between'}}>
                      <Button color="secondary" style={styles.createButton}
			      onPress={() => navigation.navigate("back")}
			      >
                        <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                          Previous Step
                        </Text>
                      </Button>
		      <Button color="secondary" style={styles.createButton}
			      onPress={() => navigation.navigate("next", {orchName: orchardName})}
			      >
                        <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                          Next Step
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
    orchAdmin: {
	marginTop: 5,
	paddingBottom:150,
	flexDirection: "row",
	flexWrap: "wrap",
  },
  orchOverview: {
      marginTop: 5,
      paddingBottom:5
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
    },
    nearbyTrees: {
	paddingBottom:100
  }
  
});

export default newOrchard;
