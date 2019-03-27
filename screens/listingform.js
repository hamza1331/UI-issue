import React, {Component} from 'react';
import {Text, View,ScrollView,TouchableOpacity,KeyboardAvoidingView,CameraRoll} from 'react-native';
import {Icon} from 'react-native-elements';


import {SafeAreaView} from 'react-navigation'
import {TextField} from 'react-native-material-textfield'



 export default class ListingScreen extends Component{
     constructor(props){
         super(props)
         this.state={
             name:''
         }
     }
     render() {
       return (
        <SafeAreaView style={{flex:1}}>
        <View style={{flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:2,paddingBottom:5}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}><Text style={{fontSize:30,marginLeft:10,marginTop:10}}>X</Text></TouchableOpacity>
        <Text style={{fontSize:20,marginLeft:20,marginTop:20,fontWeight:'bold'}}>LISTADO</Text>
        <Icon
        name='ios-arrow-dropdown'
        type='ionicon'
        color='black'
        size={15}
        containerStyle={{marginTop:28,marginLeft:10}}
         />
        </View>
        <ScrollView>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:10}}>
          <Icon   
        name='ios-image'
        type='ionicon'
        color='#894d08'
        size={50}
        />
        <Icon   
        name='ios-image'
        type='ionicon'
        color='#894d08'
        size={50}
        />
        <Icon   
        name='ios-image'
        type='ionicon'
        color='#894d08'
        size={50}
        />
        <Icon   
        name='ios-image'
        type='ionicon'
        color='#894d08'
        size={50}
        />
        <Icon   
        name='ios-image'
        type='ionicon'
        color='#894d08'
        size={50}
        />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:10}}>  
          <Icon   
        name='ios-add-circle'
        type='ionicon'
        color='orange'
        size={50}
        />
        <Icon   
       name='ios-add-circle'
       type='ionicon'
       color='orange'
       onPress={()=>{
         this.setState({
           isFormModalVisible:false
         })
         this.props.navigation.navigate('Camera')}}
       size={50}
        />
        <Icon   
        name='ios-add-circle'
        type='ionicon'
        color='orange'
        onPress={()=>{
          this.setState({
            isFormModalVisible:false
          })
          this.props.navigation.navigate('Camera')}}
        size={50}
        />
        <Icon   
        name='ios-add-circle'
        type='ionicon'
        color='orange'
        onPress={()=>{
          this.setState({
            isFormModalVisible:false
          })
          this.props.navigation.navigate('Camera')}}
        size={50}
        />
        <Icon   
       name='ios-add-circle'
       type='ionicon'
       color='orange'
       onPress={()=>{
         this.setState({
           isFormModalVisible:false
         })
         this.props.navigation.navigate('Camera')}}
       size={50}
        />
        </View>
        <View>
          <KeyboardAvoidingView>
        <TextField
              label='Title'
              value={this.state.name}
              onChangeText={ (name) => this.setState({ name }) }
              tintColor="orange"
              containerStyle={{marginLeft:15,marginRight:15}}
            />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
              <TextField
              label='Description'
              value={this.state.name}
              onChangeText={ (name) => this.setState({ name }) }
              tintColor="orange"
              containerStyle={{marginLeft:15,marginRight:15}}
              characterRestriction={600}
            />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>      
               <TextField
              label='Price'
              value={this.state.name}
              onChangeText={ (name) => this.setState({ name }) }
              tintColor="orange"
              containerStyle={{marginLeft:15,marginRight:15}}
            />
            </KeyboardAvoidingView>
       <KeyboardAvoidingView>
              <TextField
              label='Extras'
              value={this.state.name}
              onChangeText={ (name) => this.setState({ name }) }
              tintColor="orange"
              containerStyle={{marginLeft:15,marginRight:15}}
              
            />
            </KeyboardAvoidingView>
        </View>
        </ScrollView>
          </SafeAreaView>
       )
     }
 }