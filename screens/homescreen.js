import React, {Component} from 'react';
import {StyleSheet, Text, View,ScrollView,FlatList,AsyncStorage} from 'react-native';
import {Header,Button,Input,Card,Icon} from 'react-native-elements';
import Modal from 'react-native-modal'
import Modals from '../screens/modalforlisting'
import CardDesp from '../screens/cardDescription'
export default class HomeScreen extends Component {
    constructor(props){
      super(props);
      this.state={
        data:[{text:"category 1",iconname:'artist-outline'},{text:"category 1",iconname:'artist-outline'},{text:"category 1",iconname:'artist-outline'},{text:"category 1",iconname:'artist-outline'},{text:"category 1",iconname:'artist-outline'},{text:"category 1",iconname:'artist-outline'}],
        ismodalVisible:false,
        isCatModal:false,
        showDespModal:false,
        placeholder:'Artisan'
      }
    }
    closeModalbyProps=()=>{
      this.setState({
        isCatModal:false
      })
    }
    _storeData = async () => {
      try {
        await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
      } catch (error) {
        // Error saving data
      }
    };
    async UNSAFE_componentWillUpdate(){
      try {
        const value = await AsyncStorage.getItem('MySuperStore:key');
        if (value !== null) {
          // We have data!!
          console.log(value);
        }
      } catch (error) {
        // Error retrieving data
      }
    }
    _toggleModal = () =>
    this.setState({ ismodalVisible: !this.state.ismodalVisible });
    _toggleCatModal = () =>this.setState({ isCatModal: true });
    _toggleDespModal = ()=>this.setState({showDespModal:true})
    _toggleCatCloseModal = () =>this.setState({ isCatModal: false});
    _toggleDespCloseModal = ()=>this.setState({showDespModal:false})
    renderGridItem = (item)=> {
      <View>
      <Card 
      title={item} image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}>
      <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about the structure of components than about the actual design.
      </Text>
      <Button
        raised
        onPress={this._toggleDespModal}
        buttonStyle={{borderRadius: 9, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:'darkorange'}}
        title='VIEW' 
        />
    </Card>
    </View>
    }
    render() {
      
      return (
        <View style={styles.container}>
        
      <Header centerContainerStyle={{flexBasis:"80%"}} rightContainerStyle={{flexBasis:'10%',marginBottom:22}}
      collapsable={true}
       centerComponent={<Input 
        leftIcon={
          <Icon 
          name='ios-search'
                  type='ionicon'
                  color='darkorange'
          />
        }
          placeholder={this.state.placeholder}
          shake={true}
          inputContainerStyle={{width:"100%",backgroundColor:'white',borderRadius:15,borderBottomColor:'orange'}}
          containerStyle={{marginBottom:23,height:45}}
        />}
       rightComponent={
         <Icon name="ios-options"
         type='ionicon'
     color="darkorange"
     size={30}
     onPress={()=>{
      this._storeData()
     }}
     />
        
       }
       containerStyle={{backgroundColor:'white',
      }}
       />
  <ScrollView>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{borderBottomColor:'orange',borderBottomWidth:1}}>
  <Icon
          reverse
          name='face'
          type='material'
          color='darkred'
          onPress={()=>{
            this._toggleModal()
            this._toggleCatCloseModal()
            this._toggleDespCloseModal()
          }
          }
        />
        <Icon
          reverse
          name='home'
          type='material'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='ring'
          type='material-community'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='drawing'
          type='material-community'
          color='darkred'
          onPress={()=>{
            this._toggleModal()
            this._toggleCatCloseModal()
            this._toggleDespCloseModal()
          }}
        />
        <Icon
          reverse
          name='music'
          type='material-community'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='gift'
          type='material-community'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='artist-outline'
          type='material-community'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
  <Icon
          reverse
          name='face'
          type='material'
          color='darkred'
          onPress={()=>{
            this._toggleModal()
            this._toggleCatCloseModal()
            this._toggleDespCloseModal()
          }
          }
        />
        <Icon
          reverse
          name='home'
          type='material'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='ring'
          type='material-community'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='drawing'
          type='material-community'
          color='darkred'
          onPress={()=>{
            this._toggleModal()
            this._toggleCatCloseModal()
            this._toggleDespCloseModal()
          }}
        />
        <Icon
          reverse
          name='music'
          type='material-community'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='gift'
          type='material-community'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='artist-outline'
          type='material-community'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
  <Icon
          reverse
          name='face'
          type='material'
          color='darkred'
          onPress={()=>{
            this._toggleModal()
            this._toggleCatCloseModal()
            this._toggleDespCloseModal()
          }
          }
        />
        <Icon
          reverse
          name='home'
          type='material'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='ring'
          type='material-community'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='drawing'
          type='material-community'
          color='darkred'
          onPress={()=>{
            this._toggleModal()
            this._toggleCatCloseModal()
            this._toggleDespCloseModal()
          }}
        />
        <Icon
          reverse
          name='music'
          type='material-community'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='gift'
          type='material-community'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
        <Icon
          reverse
          name='artist-outline'
          type='material-community'
          color='darkred'
          onPress={
            ()=>{
              this._toggleModal()
              this._toggleCatCloseModal()
              this._toggleDespCloseModal()
            }
          }
        />
  </ScrollView>
  <Modal isVisible={this.state.ismodalVisible} style={{backgroundColor:'#fff5ed',width:"90%",height:175,borderRadius:8}} onBackButtonPress={this._toggleModal} swipeDirection="down" onSwipeComplete={this._toggleModal}>
   <View style={{flex:1}}>
   <Text style={{textAlign:"center",fontSize:25,fontWeight:'bold'}}>Sub Categories</Text>
  <FlatList data={this.state.data} keyExtractor={()=>`item${Math.round(Math.random()*10000)}`} renderItem={({item})=>
  <View style={{paddingBottom:10,borderBottomColor:'orange',borderBottomWidth:2,flexDirection:'row'}}>
     <Icon
     containerStyle={{marginTop:12,marginLeft:10}}
          name={item.iconname}
          type='material-community'
          color='darkred'
          size={24}
        />
  <Text style={{fontSize:20,marginLeft:10,marginRight:10,paddingTop:10}}>{item.text}</Text>
  </View>
  } 
  />
   </View>
    </Modal>
  <View style={{marginTop:5,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
  <View 
  style={{flexBasis:'50%',width:'50%',borderRadius:10}}>
  <Card 
  title='HELLO WORLD' image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}>
  <Text style={{marginBottom: 10}}>
  The idea with React Native Elements is more about the structure of components than about the actual design.
  </Text>
  <Button
    raised
    onPress={()=>{
      this._toggleDespModal()
      this._toggleCatCloseModal()
    }}
    buttonStyle={{borderRadius: 9, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:'darkorange'}}
    title='VIEW' 
    />
</Card>
</View>
<View 
  style={{flexBasis:'50%',width:'50%'}}>
  <Card
  title='HELLO WORLD' image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}>
  <Text style={{marginBottom: 10}}>
  The idea with React Native Elements is more about the structure of components than about the actual design.
  </Text>
  <Button
    raised
    onPress={()=>{
      this._toggleDespModal()
      this._toggleCatCloseModal()
    }}
    buttonStyle={{borderRadius: 9, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:'darkorange'}}
    title='VIEW' 
    />
</Card>
</View>
<View 
  style={{flexBasis:'50%',width:'50%'}}>
  <Card
  title='HELLO WORLD' image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}>
  <Text style={{marginBottom: 10}}>
  The idea with React Native Elements is more about the structure of components than about the actual design.
  </Text>
  <Button
    raised
    onPress={()=>{
      this._toggleDespModal()
      this._toggleCatCloseModal()
    }}
    buttonStyle={{borderRadius: 9, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:'darkorange'}}
    title='VIEW' 
    />
</Card>
</View>
<View 
  style={{flexBasis:'50%',width:'50%'}}>
  <Card
  title='HELLO WORLD' image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}>
  <Text style={{marginBottom: 10}}>
  The idea with React Native Elements is more about the structure of components than about the actual design.
  </Text>
  <Button
    raised
    onPress={()=>{
      this._toggleDespModal()
      this._toggleCatCloseModal()
    }}
    buttonStyle={{borderRadius: 9, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:'darkorange'}}
    title='VIEW' 
    />
</Card>
</View>
<View 
  style={{flexBasis:'50%',width:'50%'}}>
  <Card
  title='HELLO WORLD' image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}>
  <Text style={{marginBottom: 10}}>
  The idea with React Native Elements is more about the structure of components than about the actual design.
  </Text>
  <Button
    raised
    onPress={()=>{
      this._toggleDespModal()
      this._toggleCatCloseModal()
    }}
    buttonStyle={{borderRadius: 9, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:'darkorange'}}
    title='VIEW' 
    />
</Card>
</View>
<View 
  style={{flexBasis:'50%',width:'50%'}}>
  <Card 
  title='HELLO WORLD' image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}>
  <Text style={{marginBottom: 10}}>
  The idea with React Native Elements is more about the structure of components than about the actual design.
  </Text>
  <Button
    raised
    onPress={()=>{
      this._toggleDespModal()
      this._toggleCatCloseModal()
    }}
    buttonStyle={{borderRadius: 9, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:'darkorange'}}
    title='VIEW' 
    />
</Card>
</View>
</View>
 {/* <GridLayout
            items={this.state.data}
            itemsPerRow={2}
            renderItem={this.renderGridItem}
          /> */}
  </ScrollView>
  {/* <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.clickHandler}
            style={styles.TouchableOpacityStyle}>
        <Text style={{color:'white',padding:10,fontSize:20}} onPress={this._toggleCatModal}>+ListItems</Text>
          </TouchableOpacity> */}
          <View style={{alignItems:'center'}}>
          <View style={{position: 'absolute',
      width:180,
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#d66933',
      borderRadius:10,
      bottom:'20%',
      marginBottom:25
      }}>
            <Button title="+List New Item" onPress={()=>{
              this._toggleCatModal()
              this._toggleDespCloseModal()
              }} buttonStyle={{backgroundColor:'#d66933',height:40}}/>
          </View>
          </View>
          <CardDesp showDpModal={this.state.showDespModal} />
          <Modals navigation={this.props.navigation} showModal={this.state.isCatModal} closecatModal={this.closeModalbyProps}/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff5ed',
    },
    TouchableOpacityStyle: {
      position: 'absolute',
      width:140,
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: '10%',
      backgroundColor:'purple',
      borderRadius:10
    },
   
    
  });
  