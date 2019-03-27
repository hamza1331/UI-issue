import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';
import {Avatar,Header,Icon,Rating,Button} from 'react-native-elements';

import ScrollableTabView, { ScrollableTabBar} from 'react-native-scrollable-tab-view'
import OnSale from "../components/onsale"
import Favourites from '../components/favourites'
import Review from '../components/review'
import Info from '../components/info'
import Profiles from '../components/profile'
import { SafeAreaView } from "react-navigation";


export default class Profila extends Component {

  render() {
    
 
    return (
    
          <SafeAreaView style={{flex: 1,backgroundColor:'#fff5ed'}}>
       <Header 
       backgroundColor='#fff5ed'
       rightComponent={
         <View style={{flexDirection:'row',marginBottom:8}}>
           
           <Icon containerStyle={{marginRight:10}}
   name="ios-boat"
   type="ionicon"
   color="darkorange"
   size={35}
   onPress={()=>this.props.navigation.navigate('Shipping')}
   />
         </View>
       }
       containerStyle={{backgroundColor:'white', borderTopLeftRadius:15,
       borderTopRightRadius:15
       }}
       />

<View style={{flexDirection:'row'}}>
  <View style={{flexBasis:'75%'}}>
      <Text style={{fontSize:30,fontWeight:'bold',marginTop:10,marginLeft:5}}>Anthony Joe</Text>
      <Rating style={{alignItems:'flex-start',marginLeft:5}}
  type='star'
  ratingCount={5}
  imageSize={15}
/>
  </View>
  <Avatar containerStyle={{flexBasis:'25%',marginTop:5}}
  size="large"
  rounded
  title="AJ"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
</View>
<View style={{marginTop:10,alignItems:'center'}}>
  <Button buttonStyle={{width:300,borderRadius:15,backgroundColor:'orange'}} title="Become Pro"/>
</View>
<View style={styles.spCount}>
<View style={{flexDirection:'row',marginTop:5,marginLeft:7}}>
<Icon containerStyle={{marginRight:5}}
    name='ios-stats'
    type='ionicon'
    color='black'
    />
  <Text style={{fontWeight:'bold',marginTop:5}}>0</Text>
  <Text style={{marginTop:5,marginLeft:5}}>Sales</Text>
  <Text style={{fontWeight:'bold',marginTop:5,marginLeft:5}}>0</Text>
  <Text style={{marginTop:5,marginLeft:5}}>Shopping</Text>
</View>
<Text style={{marginLeft:25,marginTop:5}}>Distance not available</Text>
</View>
<ScrollableTabView
    style={{marginTop: 20}}
    initialPage={0}
    tabBarActiveTextColor='orange'
    tabBarUnderlineStyle={{backgroundColor:'orange'}}
    renderTabBar={() => <ScrollableTabBar />}
    >
  <OnSale tabLabel="On sale(0)"/>
  <Favourites tabLabel="Favorites(0)"/>
  <Review tabLabel="Revisions(0)"/>
  <Profiles tabLabel="Profiles(0)"/>
  <Info tabLabel="Information"/>

  </ScrollableTabView>

          </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    height: Platform.OS === 'ios' ? 70 :  70 - 24
  },
  spCount:{
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:'lightgray',
    paddingBottom:15,
    borderTopWidth:1,
    borderTopColor:'lightgray',
    paddingTop:10
  }
})