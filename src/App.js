import React from 'react'
import Cards from './Components/Cards/Cards'
import CountryArray from './Components/ContryArray/CountryArray'
import Charts from './Components/Charts/Charts'
import styles from './App.module.css';
import {fetchData} from './API/index'

class App extends React.Component{

  state ={
    afgData: {},
  }

  async componentDidMount () {
    const fetchedData = await fetchData()
    this.setState({afgData: fetchedData});
  }
  render(){
    const {afgData} = this.state;
    return(
      <div className={styles.Container}>
        <Cards  data={afgData} />
        <CountryArray />
        <Charts />
      </div>
    )
  }
}

export default App;

