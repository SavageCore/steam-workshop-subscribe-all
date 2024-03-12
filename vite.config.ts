import { defineConfig } from 'vite';
import monkey, { cdn } from 'vite-plugin-monkey';
import { version } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://savagecore.uk/img/userscript_icon.png',
        namespace: 'savagecore.uk',
        match: [
          'https://steamcommunity.com/sharedfiles/filedetails/?id=*',
        ],
        "run-at": "document-idle",
        version,
        license: 'Unlicense',
        author: 'SavageCore',
        description: 'Restore the missing subscribe to all button for Steam Workshop.',
        updateURL: 'https://github.com/SavageCore/steam-workshop-subscribe-all/releases/latest/download/steam-workshop-subscribe-all.meta.js',
        downloadURL: 'https://github.com/SavageCore/steam-workshop-subscribe-all/releases/latest/download/steam-workshop-subscribe-all.user.js',
        supportURL: 'https://github.com/SavageCore/steam-workshop-subscribe-all/issues',
        homepageURL: 'https://github.com/SavageCore/steam-workshop-subscribe-all',
      },
      build: {
        externalGlobals: {
          // jszip: cdn.unpkg('JSZip', 'dist/jszip.min.js'),
        },
        metaFileName: true,
      },
    }),
  ],
});
