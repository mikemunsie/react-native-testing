import React, { Component } from 'react';
import { Provider, connect } from "react-redux";
import { Text, View } from 'react-native';
import { GiphySearch } from "../../giphySearch/giphySearchComponent";

class IndexComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { criteria } = this.props;
    return (
      <View>
        <Text>Giphy Search Text is: {criteria}</Text>
        <GiphySearch />
      </View>
    )
  }
}

export const Index = connect(
  state => {
    return {
      criteria: state.GiphySearch.criteria
    }
  }
)(IndexComponent)