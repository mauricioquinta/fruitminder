import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme,Text } from 'galio-framework';

import  Card from '../components/Card';
import  Button from '../components/Button';
import DetailCard from '../components/DetailCard';
import articles from '../constants/articles';
import orchDetails from '../constants/orchDetails';
import argonTheme from '../constants/Theme';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
    /* this needs to be changed to get the trees object displayed*/
    renderArticles = () => {
	const { navigation } = this.props;
    return (
	<ScrollView
          showsVerticalScrollIndicator={false}	
          contentContainerStyle={styles.articles}>
	  
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
		    Lets review the details of your orchard
                  </Text>
                </Block>
		
	      </Block>
	      
	    </Block>
	  </Block>
	  
	  <Block flex>
            <DetailCard item={orchDetails[0]} horizontal/>
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
	  
	</ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
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
      marginTop:80
  }
});

export default Home;
