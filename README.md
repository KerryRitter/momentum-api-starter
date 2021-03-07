# ![mv](https://github.com/momentumframework/momentum/raw/main/mv-logo.png) Momentum Framework

Momentum is an open-source framework for building enterprise server-side Deno
applications in TypeScript. It provides the paradigms and design patterns to
guide developers to create robust, scalable, and enterprise-grade applications.
By focusing on a batteries-optional approach, Momentum provides a strong core
that is easily extendable into a rich developer experience via dependency
injection modules. While the framework is opinionated by design, this modular
system aims to be unobtrusive and to allow developers to create abstraction
layers over any codebase or third-party modules.

# Getting Started

## Momentum CLI

See our documentation on the [official Momentum website](https://momentumframework.org/docs/getting-started.html) 
for installing the Momentum CLI and starting a new project.

# Scripts

## Velociraptor

The provided scripts use the [Velociraptor](https://github.com/jurassiscripts/velociraptor) script
runner. Install the `vr` command accordingly and the following scripts are ready for use. Alternatively,
the `scripts.yml` file may be used as reference. 

## Provided Scripts

* `vr start`: Executes the src/main.ts file to start the webserver.
* `vr start:dev`: Executes the src/main.ts file to start the webserver. Initializes a file watcher to check for file changes and trigger a webserver restart.
* `vr test`: Runs all Deno tests in the src folder.
* `vr format`: Runs Deno format in the src folder.
