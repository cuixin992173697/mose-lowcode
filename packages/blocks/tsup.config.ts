import { defineConfig} from 'tsup';

export default defineConfig({
	entry: ['./src'],
	format: ['iife'],
	outDir: 'dist',
	target: 'es5'
});
