'use strict';

export default function (app) {
    app
        .service('loanService', loanService);

        /** @ngInject */
        function loanService($log) {

            let service = {
                calculateLoan: calculateLoan
            };

            return service;


            function calculateLoan() {
              $log.debug('Hello from loan service!');
            }

        }
}
