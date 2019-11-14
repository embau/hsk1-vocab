import React from 'react';
import './App.css';
import CharList from './components/CharList'
import Credit from './components/Credit'
import Search from './components/Search'
import ReviewList from './components/ReviewList'
import Tones from './components/Tones'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      review: [],
      pytext: '',
      mousein: false,
      hovered: -1
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  addReview(id) {
    var rList = this.state.review
    if (rList.indexOf(id) == -1)
    rList = this.state.review.concat([id])
    this.setState({
      review: rList
    })
  }
  removeReview(id) {
    var rList = this.state.review;
    var index = rList.indexOf(id);
    rList.splice(index,1)
    this.setState({
      review: rList
    })
  }

  showPinyin(pinyin,id) {
    this.setState({
      pytext: pinyin,
      mousein: true,
      hovered: id
    })
  }
  hidePinyin(id) {
    this.setState({
      pytext: '',
      mousein: false,
      hovered: id
    })
  }
 
    render () {
      return (
        <div>
          <Search 
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
           />
          <Tones />
          <main>
            <ReviewList 
            review={this.state.review}
            data={this.props.data}
            removeReview={this.removeReview.bind(this)}
            showPinyin={this.showPinyin.bind(this)}
            hidePinyin={this.hidePinyin.bind(this)}
            pytext={this.state.pytext}
            mousein={this.state.mousein}
            hovered={this.state.hovered}
            />
            <CharList 
            data={this.props.data}
            filterText={this.state.filterText}
            addReview={this.addReview.bind(this)}
            />
            <Credit />
          </main>
        </div>
      )
    }

}


export default App;