import React, {Component} from 'react'

export default ({data, filterText, addFavorite}) => {

    const namesList = data
    .filter(name => {
      return name.searchpy.toLowerCase().indexOf(filterText.toLowerCase()) >=0
    })
    .map(name => {
      return (
        <li 
        key={name.id} 
        className={name.tone}
        onClick={() => addFavorite(name.id)}
        >
        {name.ccharacter}
        </li>
      )

    })
  
    return (
      <div>

        <ul>
          {namesList}
        </ul>
      </div>
      
    );
  }
  