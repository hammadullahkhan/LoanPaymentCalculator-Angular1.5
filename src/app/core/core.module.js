'use strict';

const shared = angular.module('core.shared', []);

require('./directives/form-on-change.directive')(shared);
require('./services/loanService')(shared);

export default shared;
