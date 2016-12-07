'use strict';

export default function (app) {
    app
        .service('loanService', loanService);

        /** @ngInject */
        function loanService($log) {

        }
}
