import React from 'react';

const Course = (props) => {
    const { id, image, course_title, instructor, price, rating } = props.course
    return (
        <div className="bg-info m-3 p-3 border rounded">
            <img src={image} alt="" width="200" height="200" />
            <h3>{course_title}</h3>
            <p>{instructor}</p>
            <p>Rating: {rating}</p>
            <h6>${price}</h6>
            <button class="btn btn-success">Enroll Now</button>
        </div>

    );
};

export default Course;