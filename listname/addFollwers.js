import React, { Component } from 'react';
import { Text, FlatList, TextInput, View, Button, TouchableOpacity, Keyboard, Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import data from "../listname/users.js";

import { Entypo } from '@expo/vector-icons';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class addFollwers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: {},
      listItems: data,
      focus: false,
      selectedItems: [],
    };
    this.renderTextInput = this.renderTextInput.bind(this);
    this.renderFlatList = this.renderFlatList.bind(this);
    this.searchedItems = this.searchedItems.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  renderTextInput() {
    return <TextInput
      placeholder='Search...'
      placeholderTextColor='#000'
      underlineColorAndroid="transparent"
      style={styles.textinputStyle}
      onChangeText={this.searchedItems} />
  }

  renderFlatList() {
    return <FlatList
      ref={ref => this.flatlist = ref}
      data={this.state.listItems}
      style={{ maxHeight: SCREEN_HEIGHT }}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => this.renderItems(item, index)}
      nestedScrollEnabled={true}
    />
  };
  onRadioPressed() {
    alert("Your are Now Friends ")
  }

  renderItems = (item, index) => {
    return <TouchableOpacity
      onPress={() => { this.setState({ item: item }); Keyboard.dismiss() }}
      style={styles.selectedItemTouch}>
      <View style={styles.selectedItemText}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Entypo style={styles.addicon} name="add-user" size={30} color="white" onPress={this.onRadioPressed} />
      </View>
    </TouchableOpacity>
  };

  searchedItems = searchedText => {
    let setSort = (item, searchedText) => {
      return item.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1
    };
    var ac = data.filter((item) => {
      return setSort(item, searchedText);
    });
    let item = {
      id: -1,
      name: searchedText
    };
    this.setState({ listItems: ac, item: item });
  };

  render() {
    return (
      <View style={styles.container} >
        {this.renderTextInput()}
        <SafeAreaView style={styles.listContainer}>
          {this.renderFlatList()}
        </SafeAreaView>
      </View>
    );
  };

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  addicon: {
    position: 'absolute',
    bottom: -5,
    right: 0,
  },
  listContainer: {
    flex: 1
  },
  textinputStyle: {
    padding: 12,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    fontSize: 17
  },
  selectedItemTouch: {
    padding: 10,
    marginTop: 2,
    backgroundColor: 'black',
    borderColor: '#5f5f5f',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row'
  },
  selectedItemText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  itemTouch: {
    padding: 10,
    marginTop: 2,
    backgroundColor: '#484848',
    borderColor: '#5f5f5f',
    borderWidth: 1,
    borderRadius: 5,
  },
  itemText: {
    color: '#fff'
  },

})




export default addFollwers;
