module.exports = {
  apps: [
    {
      name: 'Express',
      script: 'node index.js',
      watch: ['build/assets.json', 'index.js'],
      watch_options: { followSymlinks: false },
    },
    {
      name: 'CSS',
      script: 'postcss styles --base styles --dir app/styles --ext css -w',
      ignore_watch: ['.'],
    },
    {
      name: 'Remix',
      script: 'remix run2',
      ignore_watch: ['.'],
    },
  ],
};
