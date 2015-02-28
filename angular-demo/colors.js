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
        link: function (scope, element, attrs) {
            // scope.displayNum = function(){
            //     console.log('this scope', scope.color);
            // };
        },
        transclude: true,
        template:
            '<div> \
                <input type="range" min="0" max="255" value="{{scope.color}}" ng-model=scope.color ng-change="displayNum()" /> \
                <input type="text" value="{{scope.color}}" ng-model=scope.color /> \
            </div>'
    };
}).directive('colorSquare', function(){
    return {
        restrict: 'E',
        scope: {
            color: '='
        },
        link: function (scope, element, attrs) {
            //Make an SVG Container
            var svgContainer = d3.select("#squares").append("svg")
                                .attr("width", 100)
                                .attr("height", 100);
             //Draw the Rectangle
            var rectangle = svgContainer.append("rect")
                            .attr("x", 50)
                            .attr("y", 0)
                            .attr("width", 30)
                            .attr("height", 30)
                            .attr("fill", "{{scope.color.name}}");
        }
    };
});