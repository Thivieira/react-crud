import React, { Component } from 'react';
import { Input } from 'reactstrap';

class FilterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      filter: e.target.value
    });
    this.props.onChange(e.target.value);
  }

  render() {
    return <Input type="text" placeholder="Digite para pesquisar um usuário pelo nome..." id="filter" value={this.state.filter} onChange={this.handleChange} />;
  }
}

export default FilterTable;
