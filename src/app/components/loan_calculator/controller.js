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
            vm.calculatedTotal = 333;
            vm.borrowAmount = 12.500;
            vm.interestRate = 3.56;
            vm.payOffMonths = 36;
            vm.loanRange = 6;

            triggerAPI();
        }

        function triggerAPI() {
            // lets do the calculations here :)
            loanService.calculateLoan();
        }
    }
}
