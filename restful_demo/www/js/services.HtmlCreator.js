angular.module('services.HtmlCreator', ['restangular'])

/**
 * A simple example service that returns some data.
 */
.factory('HtmlCreator', function(Restangular) {
  // Might use a resource here that returns a JSON array

  var apiConfigs = [
    {
      name: 'games',
      api: 'http://42.120.45.236:8485/discover?_last',
      apiType: 'list',
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

  return {
    allApiStates: function(){
      var apiStates = {};
      _.forEach(apiConfigs, function(apiConfig){
        apiStates['tab.' + apiConfig.name] = {
          url: '/' + apiConfig.name,
          views: {}
        },
        apiStates['tab.' + apiConfig.name].views = {
          templateProvider: function(HtmlCreator){
            // return HtmlCreator.getHtml('http://42.120.45.236:8485/discover?_last').then(createHtml);
            return this.getHtml('http://42.120.45.236:8485/discover?_last');
          },
          controllerProvider: function(HtmlCreator){
            return this.getController('http://42.120.45.236:8485/discover?_last');
          }
        }
      });
      console.log(apiStates);
      return apiStates;
    },
    getHtml :function(url){
      //Todo: 正则表达式处理url匹配;
        var insertHtml = '';
        var apiConfig = _.find(apiConfigs, {api: url});
        if (!_.isUndefined(apiConfig)){
          if (apiConfig.apiType === 'list'){
            insertHtml += '<ion-list>' +
            '<ion-item ng-repeat="data in datas" type="item-text-wrap">';
            //根据配置显示属性
            _.forEach(apiConfig.displayFields, function(field){
              console.log(field.fieldName + ' ' + field.displayType)
              insertHtml += displayFieldFunc[field.displayType]('{{data.' + field.fieldName + '}}');
            });
            insertHtml += '</ion-item></ion-list>';
          }
        }
        return '<ion-view title="Test">' +
                 ' <ion-content has-header="true" padding="true">' +
                 '    ' + insertHtml + 
                 '  </ion-content>' +
                 '</ion-view>';
      ;
    },
    getController: function(url){
      var baseFunc = function($scope){
        console.log('controller log');
        Restangular.allUrl('Data', url).getList().then(function(data){
          console.log('in controller:' + JSON.stringify(data));
          $scope.datas = data;
        })
      };
      return baseFunc;
    }
  }

});
