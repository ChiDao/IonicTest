angular.module('services.HtmlCreator', ['restangular','ui.router'])


/**
 * A simple example service that returns some data.
 */
.provider('HtmlCreator', function($stateProvider) {
  // Might use a resource here that returns a JSON array

  var apiConfigs = [
    {
      name: 'games',
      api: 'http://42.120.45.236:8485/discover?_last',
      apiType: 'list',
      stateUrl: '/games',
      itemUrl: '#/tab/tags/{{data._id}}',
      //Todo: displayType为自定义direcitve
      displayFields: [
        {
          fieldName: 'name',
          displayType: 'h1'
        }, 
        {
          fieldName: 'androidName',
          displayType: 'h3'
        }, 
        {
          fieldName: '_id',
          displayType: 'h3'
        }
      ]
    },
    {
      name: 'tags',
      api: 'http://42.120.45.236:8485/game-tags/<%= gameId %>?_last',//<%= gameId %>
      apiType: 'list',
      stateUrl: '/tags/:gameId',
      stateUrlParams : ['gameId'],
      displayFields: [
        {
          fieldName: 'title',
          displayType: 'h1'
        }
      ]
    }
  ];
  var displayFieldFunc = {
    h1: function(fieldName){
      return '<h1>' + fieldName + '</h1>';
    },
    h3: function(fieldName){
      return '<h3>' + fieldName + '</h3>';
    }
  };

  this.$get = function(Restangular){
    return {
      createRoute: function(){
        // console.log(JSON.stringify(this.allApiStates()['tab.games'].views));
        _.forEach(apiConfigs, function(apiConfig){
          $stateProvider.state('tab.' + apiConfig.name, {
            url: apiConfig.stateUrl,
            views: {
              'general-view': {
                templateProvider: function(HtmlCreator){
                  return HtmlCreator.getHtml(apiConfig.name);
                },
                controllerProvider: function(HtmlCreator){
                  return HtmlCreator.getController(apiConfig.name);
                }
              }
            }
          });
        });
      },
      getHtml :function(apiConfigName){
        //Todo: 正则表达式处理url匹配;
          var insertHtml = '';
          var apiConfig = _.find(apiConfigs, {name: apiConfigName});
          if (!_.isUndefined(apiConfig)){
            if (apiConfig.apiType === 'list'){
              if (_.isUndefined(apiConfig.itemUrl)){
                insertHtml += '<ion-list>' +
                '<ion-item ng-repeat="data in datas" type="item-text-wrap">';
              }
              else{
                insertHtml += '<ion-list>' +
                '<ion-item ng-repeat="data in datas" type="item-text-wrap" href="' + apiConfig.itemUrl + '">';
              }
              //根据配置显示属性
              _.forEach(apiConfig.displayFields, function(field){
                insertHtml += displayFieldFunc[field.displayType]('{{data.' + field.fieldName + '}}');
              });
              insertHtml += '</ion-item></ion-list>';
            }
          }
          console.log('get html' + insertHtml);
          return '<ion-view title="Test">' +
                   ' <ion-content has-header="true" padding="true">' +
                   '    ' + insertHtml + 
                   '  </ion-content>' +
                   '</ion-view>';
        
      },
      getController: function(apiConfigName){
        var apiConfig = _.find(apiConfigs, {name: apiConfigName});
        var baseFunc = function($scope, $stateParams){
          var api = '';
          if (_.isUndefined(apiConfig.stateUrlParams)){
            api = apiConfig.api;
          }
          else{
            var templateParams = {};
            templateParams[apiConfig.stateUrlParams] = $stateParams[apiConfig.stateUrlParams];
            api = _.template(apiConfig.api, templateParams);
          }
          // console.log('in controller:');
          Restangular.allUrl('Data', api).getList().then(function(data){
            console.log('in controller:' + JSON.stringify(data));
            $scope.datas = data;
          })
        };
        return baseFunc;
      }
    }
  };

})

.run(function(HtmlCreator){
  HtmlCreator.createRoute();
})



// .provider('RestfulRoute', function RestfulRouteProvider($stateProvider, HtmlCreator){
//   console.log(HtmlCreator.allApiStates);

//   var apiStatesUrl;

//   this.setApiStatesUrl = function(value){
//     console.log(value);
//     apiStatesUrl = value;
//   }

//   this.$get = function(){
//     return {};
//   };
// })
;
