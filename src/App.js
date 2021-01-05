import { useEffect, useState } from 'react';
import './App.css';
import Course from './components/Course/Course';
import fakeData from './components/fakeData/fakeData.json';

function App() {

  const [course, setCourse] = useState([]);

  useEffect(() => {
    setCourse(fakeData);
  }, [])

  return (
    <div>
      <h1 className="text-center">All Course {course.length}</h1>
      <main className="d-flex">
        <div className="course-container">
          {
            course.map(item => <Course course={item}></Course>)
          }
        </div>
        <div>
          <h3>Cart</h3>
          <h4>Number of course on Cart: 0</h4>
          <h4>Total course price: 0</h4>
        </div>
      </main>
    </div>
  );
}

export default App;
