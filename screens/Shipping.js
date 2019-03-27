/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Platform, Text, View,ScrollView} from 'react-native';
import {Header,Icon} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield'

import {Dropdown} from 'react-native-material-dropdown'



export default class Shipping extends Component {
  state = {
    price:"",
    messages: [{
      value: 'Others',
    }]
  }

  
  
  render() {
    const Company=[{
      value:'TCS'
    }
    ,{
      value:'Fedex'
    }
    ,{
      value:'ABC'
    }
    ,{
      value:'XYZ'
    }
  ]
    return (
  <View style={{flex:1}}>
     <Header placement="left"
      leftComponent={
    <Icon  containerStyle={{marginBottom:8}}
    name="ios-arrow-round-back"
    type="ionicon"
    color="black"
    size={40}
    onPress={()=>this.props.navigation.navigate('Profile')}
  
    />
      }
      centerComponent={{ text: 'Shipping', style: { color: 'black',fontSize:20,marginBottom:10} }}
      containerStyle={{backgroundColor:'white', borderTopLeftRadius:15,
      borderTopRightRadius:15,
      height: Platform.OS === 'ios' ? 70 :  70 - 10}}
      />
      <ScrollView>
   <View style={{marginTop:25,marginLeft:15}}>
              <Text style={{color:'darkorange',fontSize:30}}>Shipping Profile</Text>
            </View>
            <View style={{borderBottomColor:'gray',borderBottomWidth:1,paddingBottom:10}}>
            <View style={{marginTop:15,marginLeft:15}}>
              <Text style={{color:'darkred',fontSize:22}}>Domestic</Text>
            </View>
<Dropdown containerStyle={{marginLeft:15,marginRight:15}} 
        label='Company'
        value="TCS"
      data={Company}

/>
<TextField
        label='The Cost'
        suffix="$"
        value={this.state.price}
        onChangeText={(price) => this.setState({price }) }
        tintColor="orange"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      <TextField
      suffix="$"
        label='Additional Cost'
    
        onChangeText={ (price) => this.setState({price}) }
        tintColor="orange"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      <View style={{marginLeft:7,marginTop:7,flexDirection:'row'}}>
      <View style={{flexBasis:'45%'}}>
      <TextField
        label='Delivery Time'
        tintColor="orange"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      </View>
      <View style={{flexBasis:'10%',marginTop:35,paddingLeft:10}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>to</Text>
      </View>
      <View style={{flexBasis:'45%'}}>
      <TextField
        tintColor="orange"
        containerStyle={{marginLeft:15,marginRight:15}}
        label='Maximum time'
      />
      </View>
      </View>
      </View>
      <View>
            <View style={{marginTop:15,marginLeft:15}}>
              <Text style={{color:'darkred',fontSize:22}}>International</Text>
            </View>
<Dropdown containerStyle={{marginLeft:15,marginRight:15}} 
        label='Company'
        value="TCS"
      data={Company}

/>
<TextField
        label='Cost'
        value={this.state.price}
        onChangeText={(price) => this.setState({price }) }
        tintColor="orange"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      <TextField
        label='Addtional Cost'
    
        onChangeText={ (price) => this.setState({price}) }
        tintColor="orange"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      <View style={{marginLeft:7,marginTop:7,flexDirection:'row'}}>
      <View style={{flexBasis:'45%'}}>
      <TextField
        label='Delivery Time'        
        tintColor="orange"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      </View>
      <View style={{flexBasis:'10%',marginTop:35,paddingLeft:10}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>to</Text>
      </View>
      <View style={{flexBasis:'45%'}}>
      <TextField
      label='Maximum time'
        tintColor="orange"
        containerStyle={{marginLeft:15,marginRight:15}}
      />
      </View>
      </View>
      </View>
        </ScrollView>
        <View style={{backgroundColor:'darkorange',position: 'relative', left: 0, right: 0, bottom: 0,height:40,width:'100%',alignItems:'center',justifyContent:'center'}}>
       <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Save</Text>
         </View>
  </View>
   
    )
  }
}
