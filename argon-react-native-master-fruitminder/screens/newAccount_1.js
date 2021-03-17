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
		      Create an Account: General Info
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
                        placeholder="Full Name"
                        iconContent={
				<Icon
				      size={16}
				      color={argonTheme.COLORS.ICON}
				      name="single-01"
				      family="ArgonExtra"
				      style={styles.inputIcons}
				      />
				}
				/>
                    </Block>

		    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="UserName"
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

		    
                

		    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Worker Status "
                        iconContent={
				<Icon
				      size={16}
				      color={argonTheme.COLORS.ICON}
				      name="notes"
				      family="ArgonExtra"
				      style={styles.inputIcons}
				      />
				}
				/>
                    </Block>

		    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Phone Number"
                        iconContent={
				<Icon
				      size={16}
				      color={argonTheme.COLORS.ICON}
				      name="phone-2"
				      family="ArgonExtra"
				      style={styles.inputIcons}
				      />
				}
				/>
                    </Block>

		    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email Address"
                        iconContent={
				<Icon
				      size={16}
				      color={argonTheme.COLORS.ICON}
				      name="ic_mail_24px"
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

		    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Comfirm Password"
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
                      <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          password strength:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          strong
                        </Text>
                      </Block>
                    </Block>

		    
		    
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="primary"
                        textStyle={{
                          color: argonTheme.COLORS.BLACK,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button>
                    </Block>
		    
                    <Block row  width={width * 0.75} style={{justifyContent: 'space-between'}}>
                      <Button color="secondary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.BLACK}>
                          Previous Step
                        </Text>
                      </Button>
		      <Button color="secondary" style={styles.createButton}>
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
    marginTop: 25
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
