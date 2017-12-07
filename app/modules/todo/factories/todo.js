function TodoFactory(){
    var factory = {
        mockToView : _mockToView
    };

    return factory;

    function _mockToView( item ){
        var result = {};

        if( angular.isUndefined(item) ){
            return;
        }
        if( angular.isDefined(item.Title) && typeof item.Title === String ){
            result.titulo = item.Title;
        }
        if( angular.isDefined(item.Sub) && typeof item.Sub === String ){
            result.descricao = item.Sub;
        }
        if( angular.isDefined(item.Price) && typeof item.Price === Number ){
            result.valor = item.Price;
        }
        return result;
    }

}

angular.module("todoApp").factory("TodoFactory", TodoFactory);