#!/usr/bin/env node
'use strict';

const speakeasy = require('speakeasy');
const notifier = require('node-notifier');
const keytar = require('keytar');
const ncp = require('copy-paste');

if (!process.argv[2]) {
  console.error('Usage: quick-2fa --save KEY-NAME YOUR-KEY');
  console.error('Usage: quick-2fa KEY-NAME');
  process.exit(1);
}

if (process.argv[2] === '--save') {
  const [, , , account, password] = process.argv;
  const done = keytar.replacePassword('quick-2fa', account, password);
  if (done) {
    console.log('Key stored!', 'Now you can retrieve your two-factor authentication token by running:');
    console.log(`$ quick-2fa ${account}`);
    process.exit(0);
  } else {
    console.error('Failed to store your key!');
    process.exit(1);
  }
}

const key = process.argv[2] === '--key' ? process.argv[3] : keytar.getPassword('quick-2fa', process.argv[2]);
if (!key) {
  console.error('Sorry, could not find your key...');
  process.exit(1);
}

const token = speakeasy.totp({
  secret: key,
  encoding: 'base32'
});

ncp.copy(token);

notifier.notify({
  title: 'quick-2fa',
  message: token
});

console.log(token);
