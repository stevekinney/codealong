const path = require('path');
const includes = require('lodash/includes');
const isString = require('lodash/isString');
const ignored = require('../config').ignored;

module.exports = (file, ignoredDirectories, ignoredFiles) => {
  if (isString(file)) { file = path.parse(file); }

  ignoredFiles = ignoredFiles || ignored.files;
  ignoredDirectories = ignoredDirectories || ignored.directories;

  if (includes(ignoredDirectories, file.dir)) { return true; }
  if (includes(ignoredFiles, file.base)) { return true; }

  return false;
};
