export function filterFieldData(courseData: any, filed: string, doSlice: boolean){
    const _data = courseData.filter((item: any) => {
        if(filed === 'all'){
            return
        }
        return item.field === filed;
    })
    return doSlice ? _data.slice(0, 4) : _data
}

export function directToPage(navigation: any, pageName: string, params: any){
  navigation.navigate(pageName, params);
}
