import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {
    render() {
	 const { navigation } = this.props;
	
    return (
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
	                Please enter credentials supplied by your orchard manager
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
                      <Input
                        borderless
                        placeholder="Orchard Name"
                        iconContent={
				<Icon
				      size={16}
				      color={argonTheme.COLORS.ICON}
				      name="badge-13"
				      family="ArgonExtra"
				      style={styles.inputIcons}
				      />
				}
				/>
                    </Block>

		    


		    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        iconContent={
				<Icon
				      size={16}
				      color={argonTheme.COLORS.ICON}
				      name="padlock-unlocked"
				      family="ArgonExtra"
				      style={styles.inputIcons}
				      />
				}
				/>
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
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: "40%",
    marginTop: 475
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
  }
  
});

export default Register;
