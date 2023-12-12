import { useState, useEffect } from 'react'

import InputWithSuggestions from '../form/inputWithSuggestions/inputWithSuggestions'

export default function SearchCity() {
  const [searchText, setSearchText] = useState('')
  
  const fetchCitiesList = async () => {
    const CITIES_LIMIT = 5
    console.log(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)
  }

  useEffect(() => {
    if (searchText.length >= 3)
    fetchCitiesList()
  }, [searchText])

  return (
    <InputWithSuggestions 
      placeholder="Digite a cidade" 
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      
      />
  )
}