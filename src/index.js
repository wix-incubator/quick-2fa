#!/usr/bin/env node
'use strict';

const speakeasy = require('speakeasy');
const notifier = require('node-notifier');
const ncp = require('copy-paste');

if (!process.argv[2]) {
  console.error('Usage: quick-2fa YOUR-KEY');
  process.exit(1);
}

const token = speakeasy.totp({
  secret: process.argv[2],
  encoding: 'base32'
});

ncp.copy(token);

notifier.notify({
  title: 'quick-2fa',
  message: token
});

console.log(token);
