// export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/xiaohai/courses"
export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/xiaohai/courses"
export const MODULES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/xiaohai/modules"
export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/xiaohai/lessons"
export const TOPICS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/xiaohai/topics"
// export const WIDGETS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/xiaohai/widgets"
// export const WIDGETS_API_URL = "http://localhost:8080/widgets"
export const WIDGETS_API_URL = "https://wbdv-sp20-xiaohai-server-java2.herokuapp.com/widgets"

export const COURSES_MODULES_API_URL = (courseId) => `https://wbdv-generic-server.herokuapp.com/api/xiaohai/courses/${courseId}/modules`
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/xiaohai/modules/${moduleId}/lessons`
export const LESSONS_TOPICS_API_URL = (lessonId) =>  `https://wbdv-generic-server.herokuapp.com/api/xiaohai/lessons/${lessonId}/topics`
// export const TOPICS_WIDGETS_API_URL = (topicId) =>   `https://wbdv-generic-server.herokuapp.com/api/xiaohai/topics/${topicId}/widgets`
// export const TOPICS_WIDGETS_API_URL = (topicId) => `http://localhost:8080/topics/${topicId}/widgets`
export const TOPICS_WIDGETS_API_URL = (topicId) => `https://wbdv-sp20-xiaohai-server-java2.herokuapp.com/topics/${topicId}/widgets`

export const DEFAULT_COURSE_TITLE = "New Course"
export const DEFAULT_SECTION_TITLE = "New Section"
