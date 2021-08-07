const express = require('express');
const home_data = require('./data/home_data');
const swiper_datas = require('./data/swiper_datas');
const course_types = require('./data/course_types');
const course_datas = require('./data/course_datas');
const app = express();
app.use(express.static('public'));
app.get('/course/v1/get_home_datas', (req, res) => {
  let offset = req.query.offset;
  let limit = req.query.limit;
  let types = course_types;
  if(offset && limit){
    offset = parseInt(offset);
    limit = parseInt(limit);
    types = types.slice(offset, offset + limit);
  }
  const courseList = []
  types.forEach(type => {
    const temp = course_datas.filter(data => {
      return data.type === type.id
    })
    courseList.push(...temp.slice(0, 4))
  })
  const data = {
    data: {
      courseTypes: types,
      courseDatas: courseList,
      swiperDatas: swiper_datas,
      allTypeCount: course_types.length
    },
    success: true,
    message: ''
  }
  res.json(data);
})

app.listen(3000, () => {
    console.log('server is start');
})