import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

// TODO: Import the actual rules that we're using, don't need them all ;)

Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]);
});
