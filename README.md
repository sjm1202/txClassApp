# txClassApp
react-native案例之腾讯课堂

包含一个express服务，跟react-native项目

启动express服务
cd txClass_server

npm install

npm start

启动react-native
cd txClass

npm install

运行ios
npx pod-install 

npx react-native run-ios

运行android
npx react-native run-android

注意: android 访问不了 localhost:3000 的express请求，需并将express它部署到服务器上
需将 txClass_server/config.js 中的baseUrl改为 http://IP:3000（IP为你服务器的IP地址）
并更改txClass/android_app/utils/config.ts中的BASE_URL改为 http://IP:3000（IP为你服务器的IP地址）
