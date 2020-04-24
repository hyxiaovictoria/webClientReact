const SERVER_URL1 = "https://wbdv-generic-server.herokuapp.com/api/xiaohai";
const SERVER_URL2 = "http://localhost:8080/api";
const SERVER_URL3 = "https://wbdv-sp20-xiaohai-server-java.herokuapp.com/api";

export const COURSES_API_URL = `${SERVER_URL1}/courses`;
export const MODULES_API_URL = `${SERVER_URL1}/modules`;
export const LESSONS_API_URL = `${SERVER_URL1}/lessons`;
export const TOPICS_API_URL = `${SERVER_URL2}/topics`;
export const WIDGETS_API_URL = `${SERVER_URL2}/widgets`;

export const COURSES_MODULES_API_URL = (courseId) => `${SERVER_URL1}/courses/${courseId}/modules`
export const MODULES_LESSONS_API_URL = (moduleId) => `${SERVER_URL1}/modules/${moduleId}/lessons`
export const LESSONS_TOPICS_API_URL = (lessonId) =>  `${SERVER_URL2}/lessons/${lessonId}/topics`
export const TOPICS_WIDGETS_API_URL = (topicId) => `${SERVER_URL2}/topics/${topicId}/widgets`
