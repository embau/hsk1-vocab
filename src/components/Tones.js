import React, {Component} from 'react'



  export default ({tones}) => {
  
    return (
      <div className="tones">
        <p>
            Tone Colors: 
            {'\n'}
        </p>
        <ul>
            <li 
            className={'green'}>
                {'one - high'}
            </li>
            <li 
            className={'blue'}>
                {'two - rising'}
            </li>
            <li 
            className={'purple'}>
                {'three - dipping'}
            </li>
            <li 
            className={'pink'}>
                {'four - falling'}
            </li>
            <li 
            className={'yellow'}>
                {'five - neutral'}
            </li>
        </ul>
      </div>
      
    );
  }