import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { Background_netflix } from '../Utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10 w-screen h-screen bg-black bg-opacity-50">
          <img 
            className="h-screen w-screen object-cover opacity-80"
            src={Background_netflix}
            alt="netflix background"
          />
        </div>

      <GptSearchBar  />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch
