import { useEffect } from 'react';
import { useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import './App.css';
import DisplayCountry from './Components/DisplayCountry/DisplayCountry';

function App() {
  const [Country, setCountry] = useState([])
  const [searched, setSearched] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setCountry(data)
        setSearched(data)
      })
  }, [])
  console.log(Country)
  const handleSearch = (inputData) => {
    const filtering = Country.filter(datas => datas.name.common.toLowerCase().includes(inputData.toLowerCase()))
    setSearched(filtering)
    console.log(inputData)
  }
  return (
    <section className="main_section">
      <div className="content">
        <div className="Heading_input">
          <h1>Search Country That You Need</h1>
          <div className="input_btn">
            <input
            id='input_value'
              type="text"
              placeholder='search country by name'
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button id='search_btn'>Search</button>
          </div>
        </div>
        <div className="disply_country">
          {searched.length === 0 &&
            <div className="spinner">
              <ScaleLoader
                color="#e83a00"
                height={50}
                loading
                margin={4}
                width={10}
              /><p>Loading...</p> </div>
          }
          {
            searched.map(data => <DisplayCountry key={data.id} allCountry={data}></DisplayCountry>)
          }
        </div>
      </div>
    </section>
  );
}

export default App;
