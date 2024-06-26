import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    define: {
        __CWD__: JSON.stringify(process.cwd()),
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@schemas': path.resolve(__dirname, 'src/schemas'),
            '@type': path.resolve(__dirname, 'src/type'),
            '@api': path.resolve(__dirname, 'src/api'),
        },
    },
});
