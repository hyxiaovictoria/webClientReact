import {MODULES_API_URL, COURSES_MODULES_API_URL, COURSES_API_URL} from "../constants";

export const findModulesForCourse = (courseId) =>
    fetch(COURSES_MODULES_API_URL(courseId))
        .then(response => response.json())

export const createModule = (courseId, module) =>
    fetch(COURSES_MODULES_API_URL(courseId), {
        method: 'POST',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const updateModule = async (moduleId, module) => {
    const response = await fetch(`${MODULES_API_URL}/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            "content-type": 'application/json'
        }
    })

    return await response.json()
}

export const deleteModule = (moduleId) =>
    fetch(`${MODULES_API_URL}/${moduleId}`, {
        method: 'DELETE'
    }).then(response =>response.json())

export const findAllModules = async () => {
    const response = await fetch(MODULES_API_URL)

    return await response.json()
}

export const findModuleById = async (moduleId) => {
    const response = await fetch(`${MODULES_API_URL}/${moduleId}`)

    return await response.json()
}