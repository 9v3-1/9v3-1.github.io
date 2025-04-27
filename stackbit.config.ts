import { defineStackbitConfig } from '@stackbit/sdk'; 

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    nodeVersion: '18',
    ssgName: 'custom',
    devCommand: 'npm run dev', 
    postInstallCommand: 'npm i --no-save @stackbit/types',
    contentSource: {
        type: 'git',
        models: [
            {
                name: 'page',
                label: 'Page',
                isPage: true,
                urlPath: '/{slug}',
                fields: [
                    { name: 'title', type: 'string' },
                    { name: 'slug', type: 'string' },
                    { name: 'body', type: 'markdown' }
                ]
            }
        ]
    }
});
