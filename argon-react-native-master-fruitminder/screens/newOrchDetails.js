import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import  Card from '../components/Card';
import DetailCard from '../components/DetailCard';
import articles from '../constants/articles';
import orchDetails from '../constants/orchDetails'
const { width } = Dimensions.get('screen');

class Home extends React.Component {
    /* this needs to be changed to get the trees object displayed*/
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}	
        contentContainerStyle={styles.articles}>

	    <Block flex>
          <DetailCard item={orchDetails[0]} horizontal  />
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
});

export default Home;
