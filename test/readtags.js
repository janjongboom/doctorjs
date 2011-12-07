#!/usr/bin/env node

var argv = process.argv;
var ctags = require('jsctags/ctags'), fs = require('fs'), util = require('util');

var tags = new ctags.Tags();
var str = fs.readFileSync(argv[2]);
tags.readString(str);

var result = (argv.length >= 4) ? tags.stem(argv[3]) : tags.tags;
util.puts(util.inspect(result));

