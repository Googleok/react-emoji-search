import React, {PureComponent} from 'react';
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = e => {
    this.setState({
      filteredEmoji: filterEmoji(e.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header/>
        <SearchInput textChange={this.handleSearchChange}/>
        <EmojiResults emojiData={this.state.filteredEmoji}/>
      </div>
    );
  }
}
