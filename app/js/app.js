/*
 * This file is part of Oshinko.
 *
 * Copyright (C) 2016 Red Hat, Inc.
 *
 */

'use strict';


var app = angular.module('Oshinko', [
  'ngRoute',
  'Oshinko.controllers',
  'Oshinko.factories'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/clusters/:Id?',
    {
      templateUrl: function (params) {
        if (!params.Id) {
          return 'partials/clusters.html';
        }
        else {
          return 'partials/cluster-detail.html';
        }
      },
      controller: 'ClusterCtrl',
      activetab: 'clusters'
    });
  $routeProvider.when('/login',
    {
      templateUrl: 'partials/login.html',
      controller: 'LoginController',
      activetab: ''
    });
  $routeProvider.otherwise({redirectTo: '/clusters'});
}]);

app.run(function ($http) {
  window.__env = {};
  $http.get('/config/refresh').success(function (result) {
    window.__env.refresh_interval = result;
  }).error(function (error) {
    console.log("Unable to fetch refresh interval, using default of 5. " + error);
    window.__env.refresh_interval = 5;
  });
  $http.get('/config/sparkimage').success(function (result) {
    window.__env.spark_image = result;
  }).error(function (error) {
    console.log("Unable to fetch default spark image, using default of radanalyticsio/openshift-spark. " + error);
    window.__env.spark_image = 'radanalyticsio/openshift-spark';
  });
});
