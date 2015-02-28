var colorsApp = angular.module('colorsApp', []);

colorsApp.controller('ColorController', function ($scope) {
    $scope.colors = [
        {name:'red', amount: 30},
        {name:'green', amount: 50},
        {name:'blue', amount: 69}
    ];

}).directive('colorData', function(){
    return {
        restrict: 'E',
        scope: {
            color: '='
        },
        link: function (scope, element, attrs, ShareCtrl) {
            scope.$watch(scope.color, function (newVal, oldVal) {
                scope.displayNum();
            });
            scope.displayNum = function(){
                console.log('this scope', scope.color, attrs, element.val);
            };
        },
        transclude: true,
        template:
            '<div> \
                <input type="range" min="0" max="100" step="10" value="{{scope.color}}" ng-model=scope.color ng-change="displayNum()" /> \
                <input type="text" value="{{scope.color}}" ng-model=scope.color /> \
            </div>'
    };
});