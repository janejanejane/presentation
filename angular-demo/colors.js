var colorsApp = angular.module('colorsApp', []);

colorsApp.controller('ColorController', function ($scope) {
    $scope.colors = [
        {name:'red', amount: 0},
        {name:'green', amount: 0.3},
        {name:'blue', amount: 0.6}
    ];
}).directive('colorData', function(){
    return {
        restrict: 'E',
        scope: {
            color: '=',
            changeColor: '&'
        },
        link: function (scope, element, attrs) {
        },
        transclude: true,
        template:
            '<div> \
                <input type="range" min="0" max="1" step="0.1" value={{color.amount}} ng-model="color.amount" /> \
                <input type="text" value={{color.amount}} ng-model="color.amount" id="txt-field" /> \
                <color-square color="color"></color-square> \
            </div>'
    };
}).directive('colorSquare', function(){
    return {
        restrict: 'E',
        scope: {
            color: '='
        },
        link: function(scope, element, attrs) {
            // create container
            var svgContainer = d3.select("#squares").append("svg")
                                    .attr("width", 100)
                                    .attr("height", 100);
            // draw rectangle
            var rect = svgContainer.append("rect")
                                    .attr("x", 50)
                                    .attr("y", 0)
                                    .attr("width", 30)
                                    .attr("height", 30)
                                    .attr("fill", "#000000");
            scope.$watch('color.amount', function(newVal, oldVal) {
            // update rectangle
                rect.attr("x", 50)
                    .attr("y", 0)
                    .attr("width", 30)
                    .attr("height", 30)
                    .attr("fill", scope.color.name)
                    .attr("fill-opacity", scope.color.amount);
            });
        },
        template:
            '<div> \
                {{color}} \
            </div>'
    };
});