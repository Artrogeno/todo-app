function TodoCtrl( TodoFactory ) {
    var vm = this;
    vm.pageTitle = 'Todo <small>subtitle</small>';
    vm.products = {
        Title: "Product Test",
        Sub: "Test",
        Price: 13.54
    };
    vm.product = {};


    _init();

    function _init() {
        vm.product = TodoFactory.mockToView( vm.products );
        console.log(vm.product);
    }
}

angular.module('todoApp')
    .controller('TodoCtrl', TodoCtrl);