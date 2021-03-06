﻿angular.module("ComplexDataParserApp")
.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {

                element.bind('hover', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                });

                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsText(changeEvent.target.files[0]);
            })
        }
    }
}]);