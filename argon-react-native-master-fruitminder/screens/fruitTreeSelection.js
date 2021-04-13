import React,{useState} from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
    KeyboardAvoidingView,
    View,
    ScrollView
  
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input, Select } from "../components";
import { Images, argonTheme } from "../constants";
import ModalDropdown from 'react-native-modal-dropdown';


const { width, height } = Dimensions.get("screen");

class Register extends React.Component {
    render() {
	const { navigation } = this.props;
	
	return (
	    <ScrollView>
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
		  <Block style={styles.subTitle}>
                    <Text color="black" size={16}>
		      Lets grab some details on the type of fruit trees and methods of growing 
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
		      <Block style={styles.subTitle}>
			<Text color="black" size={16}>
			  Category
			</Text>

			  <ModalDropdown style={styles.selectButton}
					 options={['Fruit Orchard', 'Nut Orchard', 'Vineyard']}
					 >
			    
			    <View style={{flexDirection:'row', justifyContent : 'space-between'}}>

			      <Text style={{alignSelf: 'flex-start'}} color="grey">select category </Text>
			      
			      <Icon
				size={16}
				color={argonTheme.COLORS.ICON}
				name="nav-down"
				family="ArgonExtra"
				style={styles.inputIcons}
				/>
			     
			    </View>
			  </ModalDropdown>

                      </Block>
                    </Block>


		    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
		      <Block style={styles.subTitle}>
			<Text color="black" size={16}>
			  Fruit Type
			</Text>

			  <ModalDropdown style={styles.selectButton}
					 options={['option', 'option','option','option']}
					 >
			    
			    <View style={{flexDirection:'row', justifyContent : 'space-between'}}>

			      <Text style={{alignSelf: 'flex-start'}} color="grey">select fruit type </Text>
			      
			      <Icon
				size={16}
				color={argonTheme.COLORS.ICON}
				name="nav-down"
				family="ArgonExtra"
				style={styles.inputIcons}
				/>
			     
			    </View>
			  </ModalDropdown>

                      </Block>
                    </Block>
		    

		    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
		      <Block style={styles.subTitle}>
			<Text color="black" size={16}>
			  Tree Type
			</Text>

			  <ModalDropdown style={styles.selectButton}
					 options={['treeType1', 'treeType2','treeType3']}
					 >
			    
			    <View style={{flexDirection:'row', justifyContent : 'space-between'}}>

			      <Text style={{alignSelf: 'flex-start'}} color="grey">select tree type </Text>
			      
			      <Icon
				size={16}
				color={argonTheme.COLORS.ICON}
				name="nav-down"
				family="ArgonExtra"
				style={styles.inputIcons}
				/>
			     
			    </View>
			  </ModalDropdown>

                      </Block>
                    </Block>

		    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
		      <Block style={styles.subTitle}>
			<Text color="black" size={16}>
			  Growing Strategy
			</Text>

			  <ModalDropdown style={styles.selectButton}
					 options={['option', 'option']}
					 >
			    
			    <View style={{flexDirection:'row', justifyContent : 'space-between'}}>

			      <Text style={{alignSelf: 'flex-start'}} color="grey">select growing startegy </Text>
			      
			      <Icon
				size={16}
				color={argonTheme.COLORS.ICON}
				name="nav-down"
				family="ArgonExtra"
				style={styles.inputIcons}
				/>
			     
			    </View>
			  </ModalDropdown>

                      </Block>
                    </Block>


		    

		    

		   

		    

		    

		    
		 
                    <Block row  width={width * 0.75} style={{justifyContent: 'space-between'}}>
                      <Button color="secondary" style={styles.createButton}
			      onPress={() => navigation.navigate("prev")}
			      >
                        <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                          Previous Step
                        </Text>
                      </Button>
		      <Button color="secondary" style={styles.createButton}
			      onPress={() => navigation.navigate("next")}
			      >
                        <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                          Next Step
                        </Text>
                      </Button>
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
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
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
  inputIcons: {
      marginRight: 12, 
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: "40%",
    marginTop: 250
  },
  title: {
      marginTop:5
  },
  subTitle: {
      marginTop: 5
  },
  padded: {
      paddingHorizontal: theme.SIZES.BASE *2,
      position: "relative",
      bottom: theme.SIZES.BASE,
      zIndex: 2,
  },
  optionsButton: {
      width: "auto",
      height: 34,
      paddingHorizontal: theme.SIZES.BASE,
      paddingVertical: 10
  },
    selectButton: {
	width: "auto",
	backgroundColor: "#fff",
	height: 40,
	paddingHorizontal: theme.SIZES.BASE,
	paddingVertical: 10,
	borderRadius:4,
	shadowColor: argonTheme.COLORS.BLACK,
	shadowOffset: {
	    width: 0,
	    height: 4
	},
	shadowRadius: 8,
	shadowOpacity: 0.1,
	elevation: 1
	
	
    }
	
  
});

export default Register;
