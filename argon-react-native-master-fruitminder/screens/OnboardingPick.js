import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
            <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
            />
        </Block>
	    
        <Block center>
            <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>

	
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 2 }}>
              <Block style={styles.title}>
                <Block>
                  <Text color="black" size={60}>
                    Fruitminder
                  </Text>
                </Block>
                
                <Block style={styles.subTitle}>
                  <Text color="black" size={16}>
                       We offer a way to track, update, and assign tasks for your fruit farm and orchard.
                  </Text>
                </Block>
              </Block>
	      
              <Block center>
                <Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => navigation.navigate("Login")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  Login
                </Button>

                <Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => navigation.navigate("newUser")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  Create Account
                </Button>

		<Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => navigation.navigate("orchHome")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                 Orchard Home
        </Button>
	    
              </Block>
	      
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 205,
    height: 215,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  }
});

export default Onboarding;
