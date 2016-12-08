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


            function calculateLoan(input) {
                let result = (input.borrowAmount * input.interestRate) / input.loanRange.val;
                //$log.debug('new total:' + result);
                return result;
            }

        }
}
