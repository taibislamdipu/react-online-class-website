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
    <div className="text-center app-body">
      <h1 className="text-center sticky-top bg-white p-3" style={{ top: '0px' }}>All Course {course.length}</h1>
      <main className="d-flex ">
        <div className="course-container border-right">
          {
            course.map(item => <Course course={item} handleAddCourse={handleAddCourse}></Course>)
          }
        </div>
        <div className="container p-3">
          <Cart cart={cart}></Cart>
        </div>
      </main>
    </div>
  );
}

export default App;
