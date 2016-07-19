angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.greyComp'
      2) Using $state.go programatically:
        $state.go('tabsController.greyComp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab3/page2
  */
  .state('tabsController.greyComp', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/greyComp.html',
        controller: 'greyCompCtrl'
      },
      'tab3': {
        templateUrl: 'templates/greyComp.html',
        controller: 'greyCompCtrl'
      }
    }
  })

  .state('tabsController.photo', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/photo.html',
        controller: 'photoCtrl'
      }
    }
  })

  .state('tabsController.peeps', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/peeps.html',
        controller: 'peepsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.greyCompProject1'
      2) Using $state.go programatically:
        $state.go('tabsController.greyCompProject1');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/gcp1
      /page1/tab3/gcp1
  */
  .state('tabsController.greyCompProject1', {
    url: '/gcp1',
    views: {
      'tab1': {
        templateUrl: 'templates/greyCompProject1.html',
        controller: 'greyCompProject1Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/greyCompProject1.html',
        controller: 'greyCompProject1Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.greyCompProject2'
      2) Using $state.go programatically:
        $state.go('tabsController.greyCompProject2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab2/page6
      /page1/tab3/page6
  */
  .state('tabsController.greyCompProject2', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/greyCompProject2.html',
        controller: 'greyCompProject2Ctrl'
      },
      'tab2': {
        templateUrl: 'templates/greyCompProject2.html',
        controller: 'greyCompProject2Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/greyCompProject2.html',
        controller: 'greyCompProject2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.kitchenSink'
      2) Using $state.go programatically:
        $state.go('tabsController.kitchenSink');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/kitchenSink
      /page1/tab3/kitchenSink
  */
  .state('tabsController.kitchenSink', {
    url: '/kitchenSink',
    views: {
      'tab1': {
        templateUrl: 'templates/kitchenSink.html',
        controller: 'kitchenSinkCtrl'
      },
      'tab3': {
        templateUrl: 'templates/kitchenSink.html',
        controller: 'kitchenSinkCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab1/page2')

  

});