import React, { Component } from 'react';
import { Provider, connect } from "react-redux";
import { View, Text, TextInput } from 'react-native';
import * as Actions from "./giphySearchActions";

class GiphySearchComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "cool"
    }
  }
  update(text) {
    let { dispatch } = this.props;
    dispatch(Actions.fetchPosts(text))
  }
  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.update(text)}
          value={this.props.stateCriteria}
        />
      </View>
    )
  }
}

export const GiphySearch = connect(
  state => {
    return {
      stateCriteria: state.GiphySearch.criteria
    }
  }
)(GiphySearchComponent)