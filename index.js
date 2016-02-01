'use strict';

const fs = require('fs');
const path = require('path');

const shouldIgnore = require('./lib/ignore-files');

const watcher = fs.watch(__dirname, { recursive: true });

watcher.on('change', (event, filename) => {
  let file = path.parse(filename);

  if (shouldIgnore(filename)) { return; }

  console.log(event, file);
});
