interface Options{
    url: string;
    success: (res: any) => void;
    error: (res: any) => void;
}
export default class HTTP {
    fetchGet(options: Options){
        return fetch(options.url)
            .then((res) => res.json())
            .then((resJson) => {
              options.success(resJson)
            })
            .catch((err) => {
                options.error(err)
            })
    }
}