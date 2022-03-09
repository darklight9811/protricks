module.exports = {
	extends: ["next", "eslint:recommended", "plugin:@typescript-eslint/recommended"],
	settings: {
		next: {
			rootDir: ["apps/*/", "packages/*/"],
		},
	},
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint",
	],
	ignorePatterns: ["stubs/**/*", "**/*.html", "**/logs/*", "*.lock", "LICENSE", "**/*.md", "**/*.map", "**/*.txt", "dist/**/*", "**/*.log"],
	rules: {
		"@next/next/no-html-link-for-pages": "off",

		// Eslint
		"import/no-anonymous-default-export": 0,
		"no-empty": 0,
		"semi": ["error", "never"],
		"quotes": ["error", "double"],
		"no-mixed-spaces-and-tabs": "error",
		"no-tabs": 0,
		"no-prototype-builtins": 0,
		"no-trailing-spaces": "error",
		"comma-dangle": ["error", "always-multiline"],
		"indent": 0,

		// Typescript eslint
		"@typescript-eslint/no-var-requires": 0,
		"@typescript-eslint/explicit-module-boundary-types": 0,
		"@typescript-eslint/no-misused-new": 0,
		"@typescript-eslint/no-empty-function": 0,
		"@typescript-eslint/member-delimiter-style": ["error"],
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/no-non-null-assertion": 0,
		"@typescript-eslint/indent": [
			"error",
			"tab", {
				SwitchCase: 1,
			},
		],
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				varsIgnorePattern: "(^_|^h$|^Fragment$)",
				argsIgnorePattern: "^_",
				args: "all",
			},
		],
	},
}
