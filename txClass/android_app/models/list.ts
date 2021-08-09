import { API } from '../utils/config';
import HTTP from '../utils/http';
class ListModel extends HTTP{
    getCourseTypes(){
        return new Promise((resolve, reject) => {
            this.fetchGet({
                url: API.getCourseTypes,
                success: (res) => {
                    resolve(res)
                },
                error: (err) => {
                    reject(err)
                }
            })
        })
    }
    getCourses(courseType: string, offset: number, limit: number){
        return new Promise((resolve, reject) => {
            this.fetchGet({
                url: `${API.getCourses}?course_type=${courseType}&offset=${offset}&limit=${limit}` ,
                success: (res) => {
                    resolve(res)
                },
                error: (err) => {
                    reject(err)
                }
            })
        })
    }
}
export default new ListModel();