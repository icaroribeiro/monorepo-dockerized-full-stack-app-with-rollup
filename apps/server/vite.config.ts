import { defineConfig, loadEnv } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
// import MagicString from "magic-string";
// import { Plugin } from "vite";

// function shims(): Plugin {
// 	return {
// 		name: "node-shims",
// 		renderChunk(code, chunk) {
// 			if (!chunk.fileName.endsWith(".js")) {
// 				return null;
// 			}
// 			const s = new MagicString(code);
// 			s.prepend(`
//    import __path from 'path';
//    import { fileURLToPath as __fileURLToPath } from 'url';
//    import { createRequire as __createRequire } from 'module';

//    const __getFilename = () => __fileURLToPath(import.meta.url);
//    const __getDirname = () => __path.dirname(__getFilename());
//    const __dirname = __getDirname();
//    const __filename = __getFilename();
//    const self = globalThis;
//    const require = __createRequire(import.meta.url);
//    `);
// 			return {
// 				code: s.toString(),
// 				map: s.generateMap({ hires: true }),
// 			};
// 		},
// 		apply: "build",
// 	};
// }

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd());

	const isProductionBuild = () => command === "build" && mode === "production";

	return {
		build: {
			ssr: true,
			target: "node20",
			// commonjsOptions: { transformMixedEsModules: true },
			outDir: "dist",
			rollupOptions: {
				input: "src/index.ts",
			},
		},
		ssr: {
			target: "node",
			noExternal: isProductionBuild() ? true : undefined,
		},
		plugins: [
			// shims(),
			// commonjs(),
			// nodePolyfills(),
			// requireTransform(),
			// vitePluginRequireTransform(),
			// vitePluginRequire({ translateType: 'import' }),
			// replaceCodePlugin({
			//   replacements: [
			//     {
			//       from: '__dirname',
			//       to: JSON.stringify('./dist'),
			//     },
			//     {
			//       from: '__filename.',
			//       to: `"${fileURLToPath(import.meta.url)}".`,
			//     },
			//     {
			//       from: '__filename',
			//       to: `"${fileURLToPath(import.meta.url)}"`,
			//     },
			//     {
			//       from: '__filename',
			//       to: `"${fileURLToPath(import.meta.url)}"`,
			//     },
			//     {
			//       from: '__filename',
			//       to: `"${fileURLToPath(import.meta.url)}"`,
			//     },
			//     {
			//       from: '__filename',
			//       to: `"${fileURLToPath(import.meta.url)}"`,
			//     },
			//     {
			//       from: '__filename',
			//       to: `"${fileURLToPath(import.meta.url)}"`,
			//     },
			//     {
			//       from: '__filename',
			//       to: `"${fileURLToPath(import.meta.url)}"`,
			//     },
			//     {
			//       from: '__filename',
			//       to: `"${fileURLToPath(import.meta.url)}"`,
			//     },
			//   ],
			// }),
			// replace([
			//   {
			//     filter: /\.js$/,
			//     replace: [
			//       {
			//         from: '__dirname',
			//         to: JSON.stringify('./dist'),
			//       },
			//       {
			//         from: '__filename',
			//         to: JSON.stringify(fileURLToPath(import.meta.url)),
			//       },
			//     ],
			//   },
			// ]),
			viteStaticCopy({
				targets: [
					{
						src: "./node_modules/swagger-ui-dist/swagger-ui.css",
						dest: ".",
					},
					{
						src: "./node_modules/swagger-ui-dist/favicon-16x16.png",
						dest: ".",
					},
					{
						src: "./node_modules/swagger-ui-dist/favicon-32x32.png",
						dest: ".",
					},
					{
						src: "./node_modules/swagger-ui-dist/swagger-ui-bundle.js",
						dest: ".",
					},
					{
						src: "./node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js",
						dest: ".",
					},
				],
			}),
		],
		define: {
			"process.env": {
				PORT: env.VITE_PORT,
				DATABASE_URL: env.VITE_DATABASE_URL,
			},
		},
	};
});

// export default defineConfig(({ command, mode }) => {
//   const isProductionBuild = () => command === 'build' && mode === 'production'
//   const isDevelopmentBuild = () => command === 'build' && mode === 'development'

//   return {
//     plugins: [
//       node(),
//       checker({
//         typescript: true,
//         eslint: {
//           useFlatConfig: true,
//           lintCommand: 'eslint ./src',
//         },
//       }),
//     ],
//     ssr: {
//       noExternal: isProductionBuild() ? true : undefined,
//       targer: 'node',
//     },
//     build: {
//       ssr: true,
//       target: 'node20',
//       outDir: 'dist',
//       minify: isProductionBuild() ? 'terser' : false,
//       sourcemap: isDevelopmentBuild() ? 'inline' : false,
//       rollupOptions: {
//         input: {
//           bundle: 'src/index.ts',
//         },
//       },
//     },
//     test: {
//       include: ['./src/**/*.test.ts'],
//       coverage: {
//         reporter: ['lcov', 'text'],
//       },
//     },
//   }
// })
