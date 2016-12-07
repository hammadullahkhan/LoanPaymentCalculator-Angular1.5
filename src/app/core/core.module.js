'use strict';

const shared = angular.module('core.shared', []);

require('./services/loanService')(shared);

export default shared;
