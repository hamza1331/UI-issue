// import React from 'react'
// import {createAppContainer,createStackNavigator,createBottomTabNavigator,createSwitchNavigator} from 'react-navigation'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import HomeScreen from '../screens/homescreen'
// import Conversation from '../screens/conversations'
// import Filter from '../screens/filter'
// import Profila from '../screens/profila'
// import Signup from '../screens/signup'
// import { View } from "react-native";
// import LoginScreen from '../screens/login'
// import Camera from '../screens/Camera'
// import Chat from '../screens/ChatGifted'
// import Shipping from '../screens/Shipping'
// import ListingScreen from '../screens/listingform'
// const conversationStack = createStackNavigator({
//     Conversations:Conversation,
//     Chat:Chat
// },{headerMode:'none',initialRouteName:'Conversations'})
// const profileStack = createStackNavigator({
//   Profile:Profila,
//   Shipping:{
//     screen:Shipping,
    
//   }
// },{initialRouteName:'Profile',headerMode:'none'})

// profileStack.navigationOptions = ({ navigation }) => {
//   let tabBarVisible;
//   if (navigation.state.routes.length > 1) {
//     navigation.state.routes.map(route => {
//       if (route.routeName === "Shipping") {
//         tabBarVisible = false;
//       } else {
//         tabBarVisible = true;
//       }
//     });
//   }

//   return {
//     tabBarVisible
//   };
// };
// conversationStack.navigationOptions = ({ navigation }) => {
//   let tabBarVisible;
//   if (navigation.state.routes.length > 1) {
//     navigation.state.routes.map(route => {
//       if (route.routeName === "Chat") {
//         tabBarVisible = false;
//       } else {
//         tabBarVisible = true;
//       }
//     });
//   }

//   return {
//     tabBarVisible
//   };
// };
// const Stack = createStackNavigator({
//     Filter:Filter,
//     HomeScreen:HomeScreen,
//     Camera:Camera,
//     Chat:Chat,
//     ListingScreen:ListingScreen
// },{
//     headerMode:'none',
//     initialRouteName:'HomeScreen'
// })
// const LoginStack = createStackNavigator({
//     LoginScreen:LoginScreen,
//     Signup:Signup
// },
// {
//     initialRouteName:'LoginScreen',
//     headerMode:'none'
// }
// )
// LoginStack.navigationOptions = ({navigation})=>{
//     let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }
//   return {
//     tabBarVisible,
//   };
// }
// class IconWithBadge extends React.Component {
//     render() {
//       const { name, badgeCount, color, size } = this.props;
//       return (
//         <View style={{ width: 24, height: 24, margin: 5 }}>
//           <Ionicons name={name} size={size} color={color} />
//         </View>
//       );
//     }
//   }
  

// const tabNavigator= createBottomTabNavigator({
//   Home:{
//         screen:Stack
//     },
//     Conversations:conversationStack,
//     Profile:profileStack,
// },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let IconComponent = Ionicons;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-home`;
//           // Sometimes we want to add badges to some icons. 
//           // You can check the implementation below.
//           IconComponent = IconWithBadge; 
//         } 
//         else if (routeName==='Conversations'){
//             iconName='ios-chatboxes'
//         }
//         else if(routeName==='Profile'){
//             iconName='ios-person'
//         }

//         // You can return any component that you like here!
//         return <IconComponent name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
// }
// )
// const rootSwitch = createSwitchNavigator({
//     Login:LoginStack,
//     TabStack:tabNavigator,
    
// })
// export default createAppContainer(rootSwitch)

import React from 'react'
import {createAppContainer,createStackNavigator,createSwitchNavigator,createDrawerNavigator} from 'react-navigation'
import HomeScreen from '../screens/homescreen'
import Conversation from '../screens/conversations'
import Filter from '../screens/filter'
import Profila from '../screens/profila'
import Signup from '../screens/signup'
import LoginScreen from '../screens/login'
import Camera from '../screens/Camera'
import Chat from '../screens/ChatGifted'
import Shipping from '../screens/Shipping'
import ListingScreen from '../screens/listingform'
import MenuDrawer from '../components/MenuDrawerComp'
import { Dimensions } from "react-native";
const Width = Dimensions.get('window').width
const conversationStack = createStackNavigator({
    Conversations:Conversation,
    Chat:Chat
},{headerMode:'none',initialRouteName:'Conversations'})
const profileStack = createStackNavigator({
  Profile:Profila,
  Shipping:{
    screen:Shipping,
    
  }
},{initialRouteName:'Profile',headerMode:'none'})

profileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "Shipping") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible
  };
};
conversationStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "Chat") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible
  };
};
const Stack = createStackNavigator({
    Filter:Filter,
    HomeScreen:HomeScreen,
    Camera:Camera,
    Chat:Chat,
    ListingScreen:ListingScreen    
},{
    headerMode:'none',
    initialRouteName:'HomeScreen'
})
const LoginStack = createStackNavigator({
    LoginScreen:LoginScreen,
    Signup:Signup
},
{
    initialRouteName:'LoginScreen',
    headerMode:'none'
}
)
LoginStack.navigationOptions = ({navigation})=>{
    let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
}
const drawerConfig={
  drawerWidth:Width*0.83,
  contentComponent:({navigation})=>{
      return <MenuDrawer navigation={navigation} /> 
  }
}
const drawerNavigator = createDrawerNavigator({
  HomeScreen:Stack,
  Profile:profileStack,
  Conversations:conversationStack
},drawerConfig)
const rootSwitch = createSwitchNavigator({
    Login:LoginStack,
    DrawerNavigator:drawerNavigator,
    
})
export default createAppContainer(rootSwitch)

