// const BASE_URL = 'http://122.51.211.215:3000';
const BASE_URL = 'http:/localhost:3000';
export const API = {
    getHomeData: BASE_URL + '/course/v1/get_home_datas',
    getCourses: BASE_URL + '/course/v1/get_courses',
    getCourseTypes: BASE_URL + '/course/v1/get_course_types'
}