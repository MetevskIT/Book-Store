import { Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { AuthProvider } from './contexts/AuthContext';
import Logout from './components/Logout/Logout';
import Categories from './components/Categories/Categories';
import Books from './components/Books/Books';
import Details from './components/Details/Details';
import AddToCart from './components/AddToCart/AddToCart';
import Cart from './components/Cart/Cart';
import RemoveFromCart from './components/RemoveFromCart/RemoveFromCart';
import CreateBook from './components/CreateBook/CreateBook';
import Unauthorize from './components/Unauthorize/Unauthorize';
import DeleteBook from './components/DeleteBook/DeleteBook';
import EditBook from './components/EditBook/EditBook';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <AuthProvider>
    <div className="hero">
      <Header />
      <main id='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/categories/:id' element={<Books/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/addToCart/:id' element={<AddToCart/>}/>
          <Route path='/removeFromCart/:id' element={<RemoveFromCart/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/createBook' element={<CreateBook/>}/>
          <Route path='/deleteBook/:id' element={<DeleteBook/>}/>
          <Route path='/editBook/:id' element={<EditBook/>}/>
          <Route path='/unauthorize' element={<Unauthorize/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
    </AuthProvider>
  );
}

export default App;
