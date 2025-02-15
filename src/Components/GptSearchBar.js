import React from 'react'
import lang from '../Utils/LanguageConstant'

const GptSearchBar = () => {
  return (
    <div>
      <form className='p-6 pt-20 ml-[18rem] bg-opacity-80 rounded-lg'>
        <input 
          type="text" 
          className='w-1/2 p-4 m-4 text-white bg-gray-700 rounded-lg'
          placeholder={lang.fr.gptplaceholder}
        />
        <button 
          className='px-8 py-4  text-white bg-red-700 rounded-lg hover:bg-red-800'
          type="submit"
          
        >
          {lang.fr.search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
