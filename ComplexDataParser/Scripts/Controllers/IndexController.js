eventsApp.controller('ComplexDataParserController', ['$scope', function ComplexDataParserController($scope, $http){
    // This is the angular controller for the complex data parser page.
    var vm = this;

    vm.test = "This is a test";
    vm.inputFile = "";
    vm.inputText = "";
    vm.objectFocus = false;
    vm.objectMode = 0;

    // Input Object Section
    vm.inputObjectBeginning = "";
    vm.inputObjectEnding = "";
    vm.inputBeginType = 0;
    vm.inputEndType = 0;

    vm.inputBeginTypeText = ['None', 'Text', 'Regex'];

    vm.GetInputBeginText = function () {
        return ' - ' + vm.inputBeginTypeText[vm.inputBeginType];
    };

    vm.ValidateInputBegin = function () {
        return (vm.inputObjectBeginning != "" && vm.inputBeginType > 0);
    };

    $scope.$watch('vm.inputFile', function () {
        $scope.vm.inputText = $scope.vm.inputFile;
    }, true);
}]);