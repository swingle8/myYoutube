import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
      super(props);
      const onTextChange = props.onTextChange;
      this.state = {term : ''};
    }

    render() {
      return (
        <div className="search-bar">
          <input
          value = {this.state.term}
          onChange={(event) => this.onSearchChange(event.target.value)} />
        </div>
      );
    }

    onSearchChange(value) {
      this.setState({term: value});
      this.props.onTextChange(value);
    }

    handler_input_change(event) {
      console.log('here');
      this.setState({term : event.target.value});
      //console.log();
    }

}

export default SearchBar;
