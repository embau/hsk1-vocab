import React, {Component} from 'react'

const ShortList = ({data, favorites, removeFavorite, showPinyin, hidePinyin, mousein, hovered}) => {
    const namesList = favorites.map(id => {
        const { name, tone, ccharacter, pinyin } = data[id]
        if (mousein && hovered == id) {
        return (
            <li 
            key={id} 
            className={tone}
            onClick={() => removeFavorite(id)}
            onMouseEnter={() => showPinyin(pinyin, id)}
            onMouseLeave={() => hidePinyin(id)}
            >
                {pinyin}
            </li>
        )
        }
        else {
            console.log('id:', hovered)
            return (
                <li 
                key={id} 
                className={tone}
                onClick={() => removeFavorite(id)}
                onMouseEnter={() => showPinyin(pinyin, id)}
                onMouseLeave={() => hidePinyin(id)}
                >
                    {ccharacter}
                </li>
            )
        }
    })
    return (
        <div className="favorites">
           <h4> Click on a character to add it to review list, then hover to see pinyin. Click on it again to remove from review list...</h4> 
           <ul>
               {namesList}
               
           </ul>
        </div>
        
    )
}
    
  export default ShortList;