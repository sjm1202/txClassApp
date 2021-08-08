const { baseUrl } = require('../config')
module.exports = {
  "result": {
    "swipers": [
      { "id": "01", "img": `${baseUrl}/img/swiper01.jpeg` },
      { "id": "02", "img": `${baseUrl}/img/swiper02.jpeg` },
      { "id": "03", "img": `${baseUrl}/img/swiper03.jpeg`},
      { "id": "04", "img": `${baseUrl}/img/swiper04.jpeg`},
      { "id": "05", "img": `${baseUrl}/img/swiper05.png`},
      { "id": "06", "img": `${baseUrl}/img/swiper06.png`}
    ],
    "fields": [
      {
        "id": "01", "name": "IT互联网热门课程"
      },
      {
        "id": "02", "name": "设计创作热门课程"
      },
      {
        "id": "03", "name": "电商营销热门课程"
      },
      {
        "id": "04", "name": "地道日韩语修炼"
      },
      {
        "id": "05", "name": "最30天最多人在学"
      }
    ],
    "courses": [
      {
        "id": "01", 
        "title": "马士兵JAVA高级互联网架构师｜java进阶架构师专题【马士兵教育】", 
        "img": `${baseUrl}/courseImg/course01.jpeg`,
        "fieldType": "01",
        "section": 54
      },
      {
        "id": "02", 
        "title": "自媒体运营|新媒体运营|微信公众号大鱼号百家号企鹅号", 
        "img": `${baseUrl}/courseImg/course02.jpeg`,
        "fieldType": "01",
        "section": 32
      },
      {
        "id": "03", 
        "title": "最新华为认证入门到精通 DATACOM数通HCIA HCIP HCIE【思博网络】", 
        "img": `${baseUrl}/courseImg/course03.jpeg`,
        "fieldType": "01",
        "section": 88
      },
      {
        "id": "04", 
        "title": "软件测试零基础/面试/接口/压力/自动化/性能/", 
        "img": `${baseUrl}/courseImg/course04.jpeg`,
        "fieldType": "01",
        "section": 65
      },
      {
        "id": "09", 
        "title": "商业插画设计【公开课】", 
        "img": `${baseUrl}/courseImg/course09.jpeg`,
        "fieldType": "02",
        "section": 3
      },
      {
        "id": "10", 
        "title": "PS淘宝美工PS免费教程/平面设计/抠图/产品精修+主图/海报/详情页", 
        "img": `${baseUrl}/courseImg/course10.jpeg`,
        "fieldType": "02",
        "section": 22
      },
      {
        "id": "11", 
        "title": "极画b-PS板绘原画入门讲解 1", 
        "img": `${baseUrl}/courseImg/course11.jpeg`,
        "fieldType": "02",
        "section": 6
      },
      {
        "id": "12", 
        "title": "Ps教程/平面设计/品牌logo/VI设计/海报设计/淘宝美工【直播】", 
        "img": `${baseUrl}/courseImg/course12.png`,
        "fieldType": "02",
        "section": 35
      },
    ],
    "recomCourses": []
  }
}