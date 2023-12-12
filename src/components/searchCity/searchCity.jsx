import { useState, useEffect } from 'react'

import InputWithSuggestions from '../form/inputWithSuggestions/inputWithSuggestions'

export default function SearchCity() {
  const [searchText, setSearchText] = useState('')
  const [suggestions, setSuggestions] = useState([])
  
  const fetchCitiesList = async () => {
    const CITIES_LIMIT = 5
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)
    const json = await response.json()
    handleList(json)
  }

  const handleList = (list) => {
    const formattedList = list.map((obj) => ({
      text: `${obj.name}, ${obj.state}, ${obj.country}`,
      onClick: () => console.log(`Lat: ${obj.lat} lon: ${obj.lon}`)
    }))
    setSuggestions(formattedList)
  }

  useEffect(() => {
    if (searchText.length >= 3) fetchCitiesList()
    else setSuggestions([])
  }, [searchText])

  return (
    <InputWithSuggestions 
      placeholder="Digite a cidade" 
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      suggestions={suggestions}
      />
  )
}