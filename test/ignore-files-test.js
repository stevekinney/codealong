'use strict';

const assert = require('assert');
const ignoreFile = require('../lib/ignore-files');

describe('ignoreFile', () => {

  it('should return false when given an unignored filename', () => {
    let filename = './valid.js';
    let isIgnored = ignoreFile(filename, [], []);

    assert.strictEqual(isIgnored, false);
  });

  it('should return true when given an ignored directory', () => {
    let filename = 'ignored/invalid.js';
    let isIgnored = ignoreFile(filename, ['ignored'], []);

    assert.strictEqual(isIgnored, true);
  });

  it('should return true when given an ignored filename', () => {
    let filename = './invalid.js';
    let isIgnored = ignoreFile(filename, [], ['invalid.js']);

    assert.strictEqual(isIgnored, true);
  });

  it('should accept a parsed path', () => {
    let file = { dir: 'legit', base: 'valid' };
    let isIgnored = ignoreFile(file, [], []);

    assert.strictEqual(isIgnored, false);
  });

});
