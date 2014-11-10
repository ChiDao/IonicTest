IonicTest
=========

Cordova命令行方式
1、ionic start restful_client blank
2、git获取
3、cd project_name
   cordova platform add android
4、根据restful服务端ip地址，修改www->js->server.js
5、cordova run android

ADT方式
1、ionic start restful_client blank
2、git获取
3、cd project_name
   cordova platform add android
4、使用adt导入目录下的两项目，注意如果之前已经导入过Cordova的类库，此次不导入并在导入后修改类库的设置
5、根据restful服务端ip地址，修改assets->www->js->server.js
6、运行

综合方式
1、ionic start restful_client blank
2、git获取
3、cd project_name
   cordova platform add android
4、根据restful服务端ip地址，修改www->js->server.js
5、cordova build android
6、使用adt导入目录下的两项目，注意如果之前已经导入过Cordova的类库，此次不导入并在导入后修改类库的设置
7、运行