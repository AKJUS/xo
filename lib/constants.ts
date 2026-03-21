import {type TsConfigJsonResolved} from 'get-tsconfig';

export {
	tsExtensions,
	jsExtensions,
	frameworkExtensions,
	allExtensions,
	jsFilesGlob,
	tsFilesGlob,
	allFilesGlob,
	defaultIgnores,
} from 'eslint-config-xo';

/**
List of options that values will be concatenanted during option merge.

Only applies to options defined as an Array.
*/

export const moduleName = 'xo';

export const tsconfigDefaults: TsConfigJsonResolved = {
	compilerOptions: {
		target: 'es2022',
		strict: true,
		noImplicitReturns: true,
		noImplicitOverride: true,
		noUnusedLocals: true,
		noUnusedParameters: true,
		noFallthroughCasesInSwitch: true,
		noUncheckedIndexedAccess: true,
		noPropertyAccessFromIndexSignature: true,
		noUncheckedSideEffectImports: true,
	},
};

export const cacheDirName = 'xo-linter';
