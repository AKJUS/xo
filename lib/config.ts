import eslintConfigXo from 'eslint-config-xo';
import {type Linter} from 'eslint';

/**
The base config that XO builds on top of from user options.
*/
export const config: Linter.Config[] = eslintConfigXo();
