import React, {Component} from 'react'

export default ({data, filterText, addReview}) => {

    const charList = data
    //filter results based on user input in search bar
    .filter(name => {
      return name.searchpy.toLowerCase().indexOf(filterText.toLowerCase()) >=0
    })
    .map(name => {
      return (
        <li 
        key={name.id} 
        className={name.tone}
        onClick={() => addReview(name.id)}
        >
        {name.ccharacter}
        </li>
      )

    })
  
    return (
      <div>

        <ul>
          {charList}
        </ul>
      </div>
      
    );
  }
  