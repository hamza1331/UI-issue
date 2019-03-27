import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';


import {SafeAreaView} from 'react-navigation'

import Modal from 'react-native-modal'


export default class Modals extends Component{
  
  constructor(props){
    super(props);
    this.state={
      isCatModalVisible:false,
      name:""
    }
  }
  UNSAFE_componentWillReceiveProps(newProps){
      this.setState({
        isCatModalVisible:newProps.showModal
      })

  }
  _toggleModalCat=()=>{
    this.setState({
      isCatModalVisible:false
    })
  }
  
  
render(){
  return(
  <Modal isVisible={this.state.isCatModalVisible} style={{borderRadius:15,
       backgroundColor:'white',
       margin:0
       }} swipeDirection="down" onBackButtonPress={this._toggleModalCat} onSwipeComplete={this._toggleModalCat}>
          <SafeAreaView style={{flex:1}}>
<View style={{borderBottomColor:'gray',borderBottomWidth:2,paddingBottom:5}}>
  <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,marginTop:10}}>All Categories</Text>
</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:10}}>
  <View>
  <Icon
          reverse
          name='face'
          type='material'
          color='darkred'
          onPress={()=>{
            this.setState({
              isCatModalVisible:false
            })
            this.props.navigation.navigate('ListingScreen')
          
          }}
          containerStyle={{alignSelf:'center'}}
        />
    <Text style={{alignSelf:'center'}}>Books</Text>
  </View>
  <View>
  <Icon   
          name='home'
          type='material'
          color='darkred'
      reverse
      onPress={()=>{
        this.setState({
          isCatModalVisible:false
        })
        this.props.navigation.navigate('ListingScreen')
      
      }}     
      containerStyle={{alignSelf:'center'}}
          />
    <Text style={{alignSelf:'center'}}>Car</Text>
  </View>
  <View>
  <Icon   
          name='ring'
          type='material-community'
          color='darkred'
      reverse
      onPress={()=>{
        this.setState({
          isCatModalVisible:false
        })
        this.props.navigation.navigate('ListingScreen')
      
      }}     
      containerStyle={{alignSelf:'center'}}
          />
    <Text style={{alignSelf:'center'}}>Motorcycle</Text>
  </View>
</View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:10}}>
  <View style={{alignItems:'center'}}>
  <Icon 
  containerStyle={{alignSelf:'center'}}
  name='drawing'
  type='material-community'
  color='darkred'
      reverse
      onPress={()=>{
        this.setState({
          isCatModalVisible:false
        })
        this.props.navigation.navigate('ListingScreen')
      
      }}          
      />
    <Text style={{alignSelf:'center'}}>Cameras</Text>
  </View>
  <View style={{alignItems:'center'}}>
  <Icon   
        name='music'
        type='material-community'
        color='darkred'
      reverse
      onPress={()=>{
        this.setState({
          isCatModalVisible:false
        })
        this.props.navigation.navigate('ListingScreen')
      
      }}  
      containerStyle={{alignSelf:'center'}}
          />
    <Text style={{alignSelf:'center'}}>Sports</Text>
  </View>
  <View style={{alignItems:'center'}}>
  <Icon   
        name='gift'
        type='material-community'
        color='darkred'
      reverse
      onPress={()=>{
        this.setState({
          isCatModalVisible:false
        })
        this.props.navigation.navigate('ListingScreen')
      
      }}     
      containerStyle={{alignSelf:'center'}}
          />
    <Text style={{alignSelf:'center'}}>Gift</Text>
  </View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
  <View style={{alignItems:'center'}}>
    <Icon   
          name='artist-outline'
          type='material-community'
          color='darkred'
      reverse
      onPress={()=>{
        this.setState({
          isCatModalVisible:false
        })
        this.props.navigation.navigate('ListingScreen')
      
      }}     
      containerStyle={{alignSelf:'center'}}
          />
    <Text style={{alignSelf:'center'}}>Laptops</Text>
  </View>
  <View style={{alignItems:'center'}}>
    <Icon   
          name='face'
          type='material'
          color='darkred'
      reverse
      containerStyle={{alignSelf:'center'}}
          />
    <Text style={{alignSelf:'center'}}>Laptops</Text>
  </View>
  <View style={{alignItems:'center'}}>
    <Icon   
          name='home'
          type='material'
          color='darkred'
      reverse
      onPress={()=>{
        this.setState({
          isCatModalVisible:false
        })
        this.props.navigation.navigate('ListingScreen')
      
      }}   
      containerStyle={{alignSelf:'center'}}
          />
    <Text style={{alignSelf:'center'}}>Laptops</Text>
  </View>
</View>
          </SafeAreaView>
        </Modal>
  )
}
}