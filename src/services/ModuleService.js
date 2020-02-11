import {API_URL} from "../constants";

export const findModulesForCourse = async (courseId) => {
    const response = await fetch(`${API_URL}/${courseId}/modules`)

    return await response.json()
}

export const findAllModules = () =>
    fetch(`${API_URL}/modules`)
        .then(response => response.json())

export const createModule = (courseId, module) =>
    fetch(`${API_URL}/${courseId}/modules`, {
        method: 'POST',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const updateModule = async (moduleId, module) => {
    const response = await fetch(`${API_URL}/modules/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            "content-type": 'application/json'
        }
    })

    return await response.json()
}

export const deleteModule = async (moduleId) => {
    const response = await fetch(`${API_URL}/modules/${moduleId}`, {
        method: 'DELETE'
    })

    return await response.json()
}