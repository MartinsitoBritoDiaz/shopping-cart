import { Component } from 'react';
import Products from './components/Products'
import Layout from './components/Layout.js'
import Title from './components/Title.js'

class App extends Component {
  state = {
    products: [
      { name: 'Alcantara', price: 149.99, img: './sneakers/nike-1.png'},
      { name: 'Aurora', price: 89.99, img: './sneakers/nike-2.png'},
      { name: 'Spacial', price: 69.99, img: './sneakers/nike-3.png'},
      { name: 'Blood', price: 120, img: './sneakers/nike-4.png'},
      { name: 'Tension', price: 99.99, img: './sneakers/nike-5.png'},
      { name: 'Huarache', price: 196.99, img: './sneakers/nike-6.png'},
      { name: 'Waffle', price: 64.99, img: './sneakers/nike-7.png'},
      { name: 'Cortez', price: 55, img: './sneakers/nike-8.png'}, 
      { name: 'Blazer', price: 76.99, img: './sneakers/nike-9.png'},
      { name: 'Flyknit', price: 43.99, img: './sneakers/nike-10.png'},
    ]
  }

  render() {
    return (
      <div>
       <Layout>
        <Title />
        <Products
          addToCart={() => console.log('This function still do nothing')}
          products={this.state.products}
        />
        </Layout>
      </div>
    );
  }
}


export default App;
