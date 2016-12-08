'use strict';

export default function (app) {

    app.directive('formOnChange', formOnChange);

    function formOnChange ($parse) {
        'ngInject';

        return {
            link: linkFn,
            require: 'form'
        };

        function linkFn (scope, elem, attrs, ngModelCtrl) {

            let cb = $parse(attrs.formOnChange);

            elem.on("change", function() {
                cb(scope);

                scope.$apply();
            });
        }
    }
}
