import React, { Component } from 'react'

import styles from './index.module.css'

class SearchInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
    };
  }


  onChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return(
      <input 
        className = {styles.searchBox}
        value = {this.state.text}
        onChange = {this.onChange.bind(this)}
        placeholder = 'Search'
      />
    )
  }
}

export default SearchInput
