var app = angular.module("main-module", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: "ms",
    url: "/ms",
    template: "<ms />",
  });

  $stateProvider.state({
    name: "mf",
    url: "/mf",
    template: "<mf />",
  });
  
  $urlRouterProvider.otherwise("ms")
});

app.component("ms", {
  templateUrl: `/assets/templates/ms.html`
});

app.component("mf", {
  templateUrl: `/assets/templates/mf.html`
});
