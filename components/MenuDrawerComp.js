import React from 'react'
import {StyleSheet,Platform,Dimensions,View,Text,TouchableOpacity} from'react-native'
import {Avatar,Button} from 'react-native-elements'
const Width=Dimensions.get('window').width
const Height=Dimensions.get('window').height

export default class MenuDrawer extends React.Component{
    navLink(nav,text){
     return(
         <TouchableOpacity onPress={()=>{this.props.navigation.navigate(nav)}}>
             <Text style={{fontSize:15,fontWeight:'bold',marginLeft:20,marginTop:20}}>{text}</Text>
         </TouchableOpacity>
     )
    }
render(){
    return(  
    <View style={{flex:1}}>
     <View style={{backgroundColor:'black',height:160,width:'100%',flexDirection:'row'}}>
     <Avatar containerStyle={{marginLeft:30,marginTop:40}} onPress={()=>{this.props.navigation.navigate('Profile')}}
       size="large"
       rounded
       source={{
         uri:
           'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
       }}
     />  
     <Text style={{fontSize:20,fontWeight:'bold',color:'white',marginLeft:10,marginTop:60}}>Hamza Ali</Text>
     </View>
     <View style={{marginTop:20}}>
     {this.navLink('HomeScreen','Home')}
     {this.navLink('Conversations','Conversation')}
     {/* <TouchableOpacity>
         <View style={{alignItems:'center'}}>
             <Text style={{fontSize:30,fontWeight:'bold',marginLeft:15,marginTop:80,alignText:'center'}}>All Categories</Text>
             </View>
         </TouchableOpacity> */}
          <View style={{alignItems:'center'}}>
          <View style={{position: 'absolute',
      width:180,
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#d66933',
      borderRadius:10,
      marginTop:450,
      top:'50%',
      bottom:'10%',
      marginBottom:15
      }}>
            <Button title="All categories" buttonStyle={{backgroundColor:'#d66933',height:40}}/>
          </View>
          </View>
     </View>
    </View>
    )
}
}
