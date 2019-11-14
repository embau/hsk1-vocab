import React, {Component} from 'react'

const ReviewList = ({data, review, removeReview, showPinyin, hidePinyin, mousein, hovered}) => {
    const charList = review.map(id => {
        const { name, tone, ccharacter, pinyin } = data[id]
        if (mousein && hovered == id) {
            //show pinyin when hovering over character in review list
        return (
            <li 
            key={id} 
            className={tone}
            onClick={() => removeReview(id)}
            onMouseEnter={() => showPinyin(pinyin, id)}
            onMouseLeave={() => hidePinyin(id)}
            >
                {pinyin}
            </li>
        )
        }
        else {
            //otherwise just show character
            return (
                <li 
                key={id} 
                className={tone}
                onClick={() => removeReview(id)}
                onMouseEnter={() => showPinyin(pinyin, id)}
                onMouseLeave={() => hidePinyin(id)}
                >
                    {ccharacter}
                </li>
            )
        }
    })
    return (
        <div className="review">
           <h4> Click on a character to add it to review list, then hover to see pinyin. Click on it again to remove from review list...</h4> 
           <ul>
               {charList}
               
           </ul>
        </div>
        
    )
}
    
  export default ReviewList;