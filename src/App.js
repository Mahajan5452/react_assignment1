import './App.css';
import Display from './components/Display';
import Navbar from './components/Navbar';


function App() {
  const  products= [
        { id: 1, name: 'Mango', price: 10 },
        { id: 2, name: 'Banana', price: 20 },
        { id: 3, name: 'Grapes', price: 30 },
        { id: 4, name: 'Guvua', price: 40 },
        { id: 5, name: 'Apple', price: 50 }
    ]

  return (
    <>
    <Navbar></Navbar>
    {/* <ProductList  products={products}></ProductList> */}
    <Display products={products}></Display>
    </>
  );
}

export default App;
