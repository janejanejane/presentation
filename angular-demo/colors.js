var colorsApp = angular.module('colorsApp', []);

colorsApp.controller('ColorController', function ($scope) {
    $scope.colors = [
        {name:'red', amount: 30},
        {name:'green', amount: 50},
        {name:'blue', amount: 69}
    ];

    $scope.setColor = function(){
        console.log('this is color>>>', color);
    };

    $scope.$watch($scope.colors, function(newVal, oldVal){
        console.log(newVal, oldVal);
    });
}).directive('colorData', function(){
    return {
        restrict: 'E',
        scope: {
            color: '=',
            changeColor: '&'
        },
        link: function (scope, element, attrs) {
            scope.$watch(scope.color, function(newVal, oldVal){
                console.log(newVal);
            });

            var input;
            scope.change = function(color){
                input = element.find('#txt-field').val();
                console.log('triggered!', color, input);
                scope.changeColor(color);
            };
        },
        transclude: true,
        template:
            '<div> \
                <input type="range" value={{color.amount}} ng-model="color.amount" /> \
                <input type="text" value={{color.amount}} ng-model="color.amount" id="txt-field" /> \
                <input type="submit" value="change color" ng-click="change(color)"> \
            </div>'
    };
}).directive('colorSquare', function(){
    return {
        restrict: 'E',
        scope: {
            color: '='
        },
        link: function (scope, element, attrs) {
            scope.$watch(scope.color, function(newVal, oldVal){
                console.log('newVal', newVal, oldVal);
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
                                .attr("fill", "{{color.name}}");
            });
        }
    };
});