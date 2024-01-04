import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import mdPlugin  from 'vite-plugin-markdown'

export default defineConfig({
  plugins: [solidPlugin(), mdPlugin({
    mode : "HTML",
    markdown : (body) => `${body}`
  })],
  server: {
    port: 3500,
  },
  build: {
    target: 'esnext',
  },
  assetsInclude : [
    '**/*.md'
  ]
});
