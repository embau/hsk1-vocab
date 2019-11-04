import React from 'react';
import './App.css';
import NamesList from './components/NamesList'
import Credit from './components/Credit'
import Search from './components/Search'
import ShortList from './components/ShortList'
import Tones from './components/Tones'
import { tsConstructorType } from '@babel/types';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      favorites: [],
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

  addFavorite(id) {
    var favList = this.state.favorites
    if (favList.indexOf(id) == -1)
    favList = this.state.favorites.concat([id])
    this.setState({
      favorites: favList
    })
    favList.forEach(element => {
      console.log('id:',element,' index:', favList.indexOf(element))
    });
  }
  removeFavorite(id) {
    var favList = this.state.favorites;
    var index = favList.indexOf(id);
    console.log(index)
    favList.splice(index,1)
    this.setState({
      favorites: favList
    })
  }

  showPinyin(pinyin,id) {
    console.log(pinyin)
    console.log(id)
    var favList = this.state.favorites;
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
            <ShortList 
            favorites={this.state.favorites}
            data={this.props.data}
            removeFavorite={this.removeFavorite.bind(this)}
            showPinyin={this.showPinyin.bind(this)}
            hidePinyin={this.hidePinyin.bind(this)}
            pytext={this.state.pytext}
            mousein={this.state.mousein}
            hovered={this.state.hovered}
            />
            <NamesList 
            data={this.props.data}
            filterText={this.state.filterText}
            addFavorite={this.addFavorite.bind(this)}
            />
            <Credit />
          </main>
        </div>
      )
    }

}


export default App;

//TODO:
//nice styling
