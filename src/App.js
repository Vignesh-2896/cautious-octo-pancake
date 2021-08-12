import './App.css';
import React,{Component} from 'react';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import MainForm from './Components/MainForm';

class App extends Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <div>
        <Header/>
        <MainForm/>
        <Footer/>
      </div>
    )
  }
}

export default App;
