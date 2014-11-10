IonicTest
=========

Cordova命令行方式<br/>
1、git获取<br/>
2、cd restful_client<br/>
   cordova platform add android<br/>
3、根据restful服务端ip地址，修改www->js->server.js<br/>
4、cordova build android<br/>
5、cordova run android<br/>

ADT方式<br/>
1、git获取<br/>
2、cd restful_client<br/>
   cordova platform add android<br/>
3、使用adt导入目录下的两项目，注意如果之前已经导入过Cordova的类库，此次不导入并在导入后修改类库的设置<br/>
4、根据restful服务端ip地址，修改assets->www->js->server.js<br/>
5、运行<br/>

综合方式<br/>
1、git获取<br/>
2、cd restful_client<br/>
   cordova platform add android<br/>
3、根据restful服务端ip地址，修改www->js->server.js<br/>
4、cordova build android<br/>
5、使用adt导入目录下的两项目，注意如果之前已经导入过Cordova的类库，此次不导入并在导入后修改类库的设置<br/>
6、运行
