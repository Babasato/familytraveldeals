import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: 'main', // Replace with your GitHub branch (e.g., "main" or "master")
  clientId: 'fc4de72e-08e4-450f-b7e1-de8f872ab5c1', // Will be obtained from TinaCMS later
  token: '5c242c1fd9af0caad7429baa5082afd383b66c73', // Will be obtained from TinaCMS later
  build: {
    outputFolder: 'admin',
    publicFolder: 'static',
  },
  collections: [
    {
      name: 'blog',
      label: 'Blog',
      path: 'content/blog',
      fields: [
        { name: 'title', label: 'Title', type: 'string' },
        { name: 'body', label: 'Body', type: 'rich-text' },
      ],
    },
  ],
});
