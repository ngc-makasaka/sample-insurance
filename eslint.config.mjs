import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'
import typescript from '@typescript-eslint/eslint-plugin'
import importPlugin from 'eslint-plugin-import'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
	{
		plugins: {
			'@typescript-eslint': typescript,
			import: importPlugin,
		},
		rules: {
			'import/order': [
				'error',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						['parent', 'sibling'],
						'index',
						'object',
						'type',
					],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
		},
	},
]

export default eslintConfig
