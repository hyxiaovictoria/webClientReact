import {API_URL} from "../constants";

export const createCourse = (course) =>
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findAllCourses = () => fetch(API_URL)
        .then(response => response.json())

export const deleteCourse = (courseId) =>
    fetch(`${API_URL}/${courseId}`, {
        method: 'DELETE'
    }).then(response => response.json())