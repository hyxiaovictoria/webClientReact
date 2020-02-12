import {COURSES_API_URL} from "../constants";

export const createCourse = (course) =>
    fetch(COURSES_API_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findAllCourses = async () => {
    const response = await fetch(COURSES_API_URL)

    return await response.json()
}

export const findCourseById = async (courseId) => {
    const response = await fetch(`${COURSES_API_URL}/${courseId}`)

    return await response.json()
}

export const updateCourse = async (courseId, course) => {
    const response = await fetch(`${COURSES_API_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            "content-type": 'application/json'
        }
    })

    return await response.json()
}

export const deleteCourse = async (courseId) => {
    const response = await fetch(`${COURSES_API_URL}/${courseId}`, {
        method: 'DELETE'
    })

    return await response.json()
}