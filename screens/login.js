
import React, {Component} from 'react';
import {Text, View,Image,Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield'
const Height=Dimensions.get('window').height
export default class LoginScreen extends Component{
    state={
        name:"",
        pass:"",
        phone:''
      }
      render(){
        return(
          <View style={{flex:1,backgroundColor:'white',height:Height}}>
            <View style={{alignItems:'center'}}>
            <Image 
            source={require('./art.jpg')}
            style={{width:300,height:200}}
            />
            </View>
          
            <TextField 
            label='Email'
            value={this.state.name}
            onChangeText={ (name) => this.setState({ name }) }
            tintColor="orange"
            containerStyle={{marginLeft:15,marginRight:15,marginTop:2}}
            
          />
                   <TextField 
            label='Password'
            value={this.state.name}
            onChangeText={ (name) => this.setState({ name }) }
            tintColor="orange"
            containerStyle={{marginLeft:15,marginRight:15,marginTop:10}}
            
          />
            
          
          
          <View style={{alignItems:'center',justifyContenty:'center',marginTop:70}}>
          <Button title="Login" onPress={()=>this.props.navigation.navigate('HomeScreen')} containerStyle={{borderRadius:15,width:'50%',marginBottom:5}}  buttonStyle={{backgroundColor:'darkorange',borderRadius:10}} />
            <Button title="Register Free" onPress={()=>this.props.navigation.navigate('Signup')}  containerStyle={{borderRadius:15,width:'50%'}}  buttonStyle={{backgroundColor:'orange'}} />
         </View>
    
     </View>
        
        )
      }
}