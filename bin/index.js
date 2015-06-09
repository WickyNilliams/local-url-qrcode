#!/usr/bin/env node

var port = process.argv[2];
var lib = require('../lib');

lib.print(port);