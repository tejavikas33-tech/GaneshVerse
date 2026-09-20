import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    server: {
        port: 5175,
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                if (req.url && req.url.startsWith('/assets/audio/')) {
                    const fileName = req.url.replace('/assets/audio/', '').split('?')[0];
                    const publicPath = path.resolve(__dirname, 'public/assets/audio', fileName);
                    const rootPath = path.resolve(__dirname, 'assets/audio', fileName);
                    if (fs.existsSync(rootPath) && !fs.existsSync(publicPath)) {
                        const ext = path.extname(fileName).toLowerCase();
                        const mime = ext === '.mp3' ? 'audio/mpeg' : (ext === '.wav' ? 'audio/wav' : 'application/octet-stream');
                        res.setHeader('Content-Type', mime);
                        return fs.createReadStream(rootPath).pipe(res);
                    }
                }
                next();
            });
        }
    }
});
