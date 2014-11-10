IonicTest
=========

## 初始化环境

 1. npm install -g cordova
 2. cordova plugins 
 	* cordova plugin add org.apache.cordova.device
	* cordova plugin add org.apache.cordova.console
	* cordova plugin add com.ionic.keyboard

## Cordova命令行方式
 1. git获取
 2. cd restful_client
 3. cordova platform add android(ios)
 4. 根据restful服务端ip地址，修改www->js->server.js
 5. cordova build android
 6. cordova run android

## ADT方式
  1. git获取
  2. cd restful_client
    * cordova platform add android
  3. 使用adt导入目录下的两项目，注意如果之前已经导入过Cordova的类库，此次不导入并在导入后修改类库的设置
  4. 根据restful服务端ip地址，修改assets->www->js->server.js
  5. 运行

## 综合方式
  1. git获取
  2. cd restful_client
    * cordova platform add android
  3. 根据restful服务端ip地址，修改www->js->server.js
  4. cordova build android
  5. 使用adt导入目录下的两项目，注意如果之前已经导入过Cordova的类库，此次不导入并在导入后修改类库的设置
  6. 运行
