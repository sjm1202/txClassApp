import { API } from '../utils/config';
import HTTP from '../utils/http';
export default class ListModel extends HTTP{
    getCourseFields(){
        return new Promise((resolve, reject) => {
            this.fetchGet({
                url: API.getCourseFields,
                success: (res) => {
                    resolve(res)
                },
                error: (err) => {
                    reject(err)
                }
            })
        })
    }
    getCourses(field: string){
        return new Promise((resolve, reject) => {
            this.fetchGet({
                url: API.getCourseFields + field,
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