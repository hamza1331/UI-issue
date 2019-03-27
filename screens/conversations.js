import React, {Component} from 'react';
import {Platform, Text, View,ScrollView,TouchableOpacity} from 'react-native';
import {Avatar,Header} from 'react-native-elements';

 export default class Conversation extends Component{
     render(){
         return(
            <View style={{flex:1}}>
            <Header  placement="left"
                  centerComponent={{ text: 'Conversations', style: { color: 'white',fontSize:22,marginBottom:10} }}
                  containerStyle={{backgroundColor:'orange',
                  height: Platform.OS === 'ios' ? 70 :  70 - 10}}
                  />
                    <View style={{flexDirection:'row'}}>
                    <Avatar containerStyle={{marginLeft:5,marginTop:15}}
                   size="medium"
                   rounded
                   source={{
                     uri:
                       'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                   }}
                 />  
                 <View style={{marginLeft:15,marginTop:20,borderBottomColor:'#f4a74e',borderBottomWidth:2,paddingBottom:15,flexBasis:'70%'}}>
                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('Chat')}>
                    
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Najam</Text>
                    <Text>no. dedu</Text>
                    </TouchableOpacity>
                 </View>
                    </View>
                         </View>
         )
     }
 }