import { API } from '../utils/config';
import HTTP from '../utils/http';
class HomeModel extends HTTP{
  getHomeData(offset: number, limit: number){
    return new Promise((resolve, reject) => {
      this.fetchGet({
        url: `${API.getHomeData}?offset=${offset}&limit=${limit}`,
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
export default new HomeModel()