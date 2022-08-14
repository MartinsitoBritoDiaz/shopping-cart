import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    sneakers: [
      { name: 'Alcantara', price: 149.99, img: './sneakers/nike-1'},
      { name: 'Aurora', price: 89.99, img: './sneakers/nike-2'},
      { name: 'Spacial', price: 69.99, img: './sneakers/nike-3'},
      { name: 'Blood', price: 120, img: './sneakers/nike-4'},
      { name: 'Tension', price: 99.99, img: './sneakers/nike-5'},
      { name: 'Huarache', price: 196.99, img: './sneakers/nike-6'},
      { name: 'Waffle', price: 64.99, img: './sneakers/nike-7'},
      { name: 'Cortez', price: 55, img: './sneakers/nike-8'}, 
      { name: 'Blazer', price: 76.99, img: './sneakers/nike-9'},
      { name: 'Flyknit', price: 43.99, img: './sneakers/nike-10'},
    ]
  }

  render() {
    return (
       <div>
          <p>Hello world</p>
       </div>
    );
  }
}


export default App;
