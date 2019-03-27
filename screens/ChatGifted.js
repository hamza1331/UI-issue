/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import {Header,Icon} from 'react-native-elements';

import { GiftedChat,Bubble } from 'react-native-gifted-chat'


export default class ChatwGifted extends Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
        
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
            _id: 2,
            image:'https://static.zerochan.net/Link.%28Daichi.no.Kiteki%29.full.175552.jpg',
            createdAt: new Date(),
          
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            }
          }
      ],
    })
  }

  renderCustomContainer= ()=>{
    return(
      <View style={{backgroundColor:'#963396',color:'white'}}><Text>cjacefhebchbe</Text></View>
    )
  }
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
      backgroundColor: 'brown',
    },
    left:{
      backgroundColor:'#e6e6e6',
    }
        }}
        textProps={{
          style: {
            color: props.position === 'left' ? '#000' : '#fff',
          },
        }}
       />
    );
  }
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'beige'}}>
         <Header placement="left"
      leftComponent={
    <Icon  containerStyle={{marginBottom:8}}
    name="ios-arrow-round-back"
    type="ionicon"
    color="black"
    size={40}
    onPress={()=>this.props.navigation.navigate('Conversations')}
  
    />
      }
      centerComponent={{ text: 'Candy', style: { color: 'black',fontSize:20,marginBottom:10} }}
      rightComponent={
        <View style={{flexDirection:'row',marginBottom:8}}>
          
  <Icon containerStyle={{marginRight:10}}
  name="ios-image"
  type="ionicon"
  color="darkorange"
  size={30}
  />
  
        
        </View>
      }
      containerStyle={{backgroundColor:'white', borderTopLeftRadius:15,
      borderTopRightRadius:15,
      height: Platform.OS === 'ios' ? 70 :  70 - 10}}
      />
      <GiftedChat
      
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        renderBubble={this.renderBubble.bind(this)}
        user={{
          _id: 1,
        }}
    
      />
    
      </View>
    )
  }
}