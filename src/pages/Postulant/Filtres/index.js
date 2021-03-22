import React from 'react'
import Navbar from '../../../components/Navbar/NavbarPostulant'
import './index.css';
import Select from 'react-select';

function App() {
  var colourOptions = [{ label: "coucou1", value: "valuer1" }, { label: "coucou2", value: "valuer2" }, { label: "coucou3", value: "valuer3" }, { label: "coucou4", value: "valuer4" }]
  return (<div>
    <div className="App">
      <Navbar />
    </div>
    <div className='main-page'>
      <h1>Filtre de recherche</h1>
      <div className='form'>
      <div className='display'>
        <div className='select'>
        <h2>Secteur d'activité</h2>
        <Select
         closeMenuOnSelect={false}
          defaultValue={[colourOptions[2], colourOptions[3]]}
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder='Choisir'
        />
        </div>
        <div className='select'>
          <h2>Localite</h2>
        <Select
         closeMenuOnSelect={false}
          defaultValue={[colourOptions[2], colourOptions[3]]}
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder='Choisir'
        />
        </div>
      </div>
      <div className='display'>
        <div className='select'>
        <h2>Secteur d'activité</h2>
        <Select
         closeMenuOnSelect={false}
          defaultValue={[colourOptions[2], colourOptions[3]]}
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder='Choisir'
        />
        </div>
        <div className='select'>
          <h2>Localite</h2>
        <Select
         closeMenuOnSelect={false}
          defaultValue={[colourOptions[2], colourOptions[3]]}
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder='Choisir'
        />
        </div>
      </div>
      <div className='display'>
        <div className='select'>
        <h2>Secteur d'activité</h2>
        <Select
         closeMenuOnSelect={false}
          defaultValue={[colourOptions[2], colourOptions[3]]}
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder='Choisir'
        />
        </div>
        <div className='select'>
          <h2>Localite</h2>
        <Select
         closeMenuOnSelect={false}
          defaultValue={[colourOptions[2], colourOptions[3]]}
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder='Choisir'
        />
        </div>
      </div>
      <div className='display'>
        <div className='select'>
        <h2>Secteur d'activité</h2>
        <Select
         closeMenuOnSelect={false}
          defaultValue={[colourOptions[2], colourOptions[3]]}
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder='Choisir'
        />
        </div>
        <div className='select'>
          <h2>Localite</h2>
        <Select
         closeMenuOnSelect={false}
          defaultValue={[colourOptions[2], colourOptions[3]]}
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder='Choisir'
        />
        </div>
      </div>
      </div>
    </div>
  </div>
  );
}

export default App;