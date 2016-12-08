import {EN, FR} from './i18n';


export default class LoanCalculatorCtrl {

    static get UID(){
        return "LoanCalculatorCtrl"
    }

    /* @ngInject */
    constructor(loanService, $log) {

        let vm = this;
        let LANG = {};
        init();

        function init() {
            // Set default values (if any)
            vm.TXT =  LANG === "FR" ? FR : EN;

            vm.calculatedTotal = 0.00;

            // input fields
            vm.input = {};
            vm.input.borrowAmount = null;
            vm.input.interestRate = null;
            vm.input.loanRange = {
              min: 6,
              max: 72,
              step: 6,
              val: 6
            };


            vm.calculateLoan = function() {
                triggerAPI(vm.input);
            };


        }

        function triggerAPI(input) {
            // lets do the calculations here :)
            vm.calculatedTotal = loanService.calculateLoan(input);
            //console.log('total', vm.calculatedTotal)
        }
    }
}
