import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Course from './components/Course/Course';
import fakeData from './components/fakeData/fakeData.json';

function App() {

  const [course, setCourse] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCourse(fakeData);
  }, [])

  const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
    console.log('cart', cart);
  }

  return (
    <div>
      <h1 className="text-center">All Course {course.length}</h1>
      <main className="d-flex ">
        <div className="course-container border-right">
          {
            course.map(item => <Course course={item} handleAddCourse={handleAddCourse}></Course>)
          }
        </div>
        <div>
          <h3>Cart</h3>
          <h4>Number of course on Cart: {cart.length}</h4>
          <h4>Total course price: 0</h4>
          <Cart></Cart>
        </div>
      </main>
    </div>
  );
}

export default App;
