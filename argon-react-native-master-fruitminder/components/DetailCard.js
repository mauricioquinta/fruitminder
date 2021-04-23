import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { argonTheme } from '../constants';
const { width, height } = Dimensions.get("screen");


class DetailCard extends React.Component {
  render() {
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];

      return (

	  <Block flex style={styles.container}>
	    <Block row={horizontal} card flex style={cardContainer}>
	      
              
	      <Block flex space="between" style={styles.cardDescription}>
		<Text style={{paddingBottom: 10}}>
		  <Text size={20} style={{fontWeight: 'bold'}}>Name:</Text>
		  <Text size={20} style={styles.cardText}> {item.name}</Text>
		</Text>
		
		<Text style={{paddingBottom: 10}}>
		  <Text size={20} style={{fontWeight: 'bold'}}>Address:</Text>
		  <Text size={20} style={styles.cardText}> {item.address}</Text>
		</Text>
		
		<Text style={{paddingBottom: 10}}>
		  <Text size={20} style={{fontWeight: 'bold'}}>Category:</Text>
		  <Text size={20} style={styles.cardText}> {item.category}</Text>
		</Text>
		
		<Text style={{paddingBottom: 10}}>
		  <Text size={20} style={{fontWeight: 'bold'}}>Fruit Type:</Text>
		  <Text size={20}> {item.fruitType}</Text>
		</Text>
		
		<Text style={{paddingBottom: 10}}>
		  <Text size={20} style={{fontWeight: 'bold'}}>Tree Variety:</Text>
		  <Text size={20}> {item.treeVariety}</Text>
		</Text>
		
		<Text style={{paddingBottom: 10}}>
		  <Text size={20} style={{fontWeight: 'bold'}}>Growing Strategies:</Text>
		  <Text size={20} style={styles.cardText}> {item.growingStrategies}</Text>
		</Text>
		
		<Text style={{paddingBottom: 10}}>
		  <Text size={20} style={{fontWeight: 'bold'}}> Further:</Text>
		  <Text size={20} style={styles.cardText}> {item.further}</Text>
		</Text>
              </Block>
	      
	    </Block>
	  </Block>
	  
    );
  }
}

DetailCard.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16
  },
  cardText: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 2
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
    container: {
	width: width * 0.9,
    height: height * 0.78,
    borderRadius: 4,
    
	marginTop:10,
    overflow: "hidden"
  },
});

export default withNavigation(DetailCard);
