gql-schema-tools
================

Tools to work with graphql schemas

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gql-schema-tools.svg)](https://npmjs.org/package/gql-schema-tools)
[![Downloads/week](https://img.shields.io/npm/dw/gql-schema-tools.svg)](https://npmjs.org/package/gql-schema-tools)
[![License](https://img.shields.io/npm/l/gql-schema-tools.svg)](https://github.com/drg-adaptive/gql-schema-tools/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gql-schema-tools
$ gql COMMAND
running command...
$ gql (-v|--version|version)
gql-schema-tools/0.0.0 darwin-x64 node-v12.13.1
$ gql --help [COMMAND]
USAGE
  $ gql COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gql hello [FILE]`](#gql-hello-file)
* [`gql help [COMMAND]`](#gql-help-command)
* [`gql merge [FILE]`](#gql-merge-file)

## `gql hello [FILE]`

describe the command here

```
USAGE
  $ gql hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ gql hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/drg-adaptive/gql-schema-tools/blob/v0.0.0/src/commands/hello.ts)_

## `gql help [COMMAND]`

display help for gql

```
USAGE
  $ gql help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `gql merge [FILE]`

describe the command here

```
USAGE
  $ gql merge [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/merge.ts](https://github.com/drg-adaptive/gql-schema-tools/blob/v0.0.0/src/commands/merge.ts)_
<!-- commandsstop -->
