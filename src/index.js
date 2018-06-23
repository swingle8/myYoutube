import React, {Component} from 'react';
import _ from 'lodash'
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDOEUL4mFrbzHD5MT_sYkXRXcy4FzaJKEc';
// creating a new component to produce some HTML.



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {searchedVideos : [], selectedVideo : null};
    this.searchOnYT('Znmd');
}

  searchOnYT(searchedText) {
    YTSearch({key: API_KEY, term: searchedText}, (searchedVideos) => {
      this.setState({
        searchedVideos : searchedVideos,
        selectedVideo : searchedVideos[0],
      });
      //this.setState({searchedVideos: searchedVideos});  ES6
    });
  }


  render() {
    const searchOnYT = _.debounce((term) => { this.searchOnYT(term) }, 300);

    return (
      <div>
        <SearchBar
          onTextChange={searchOnYT} />

        <VideoDetail
          video={this.state.selectedVideo} />

        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.searchedVideos} />

      </div>
    )
  }


}


// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

// React please put these HTML components into DOM.

ReactDOM.render(<App />, document.querySelector('.container'));
