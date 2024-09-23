# js-submodule

## How to use this demo

```sh
npm pack . # packs this module into package
cd ./client-app

npm install --omit=optional ../js-submodule-1.0.1.tgz
node index.js
```

client app uses only node-fetch subpackage, though js-submodule depends on both `node-fetch` and `axios`. In this case, `axios` is never loaded, so client-app defacto does not depend on it. But if it's also possible to depend on both, for this client-app just needs to add `axios` to its dependencies and import `js-submodule` module.


## General details

A package which contains 2 submodules:
* request based on node-fetch
* request based on axios

Both dependencies are listed as optional dependencies. To ensure that optional dependencies are not installed on app level, app level `npm install` should look like this:

```
npm install --omit=optional
```

Previously it was possible to use optional peerDependencies (still possible) but now npm has a bug, it installs optional peer dependencies automatically (https://github.com/npm/cli/issues/2744). It doesn't hurt much, it still properly resolves version (relies on client-app version if it's in specified range) but we will cache all of those in our CI caches and it's just a waste of disk space and time during installation. So, instead of optional dependencies it's possible to define them via peerDependencies this way:

```json
{
    "name": "js-submodule",
    "peerDependencies": {
        "axios": "^1.0.0",
        "node-fetch": "^3.0.0"
    },
    "peerDependenciesMeta": {
        "node-fetch": {
            "optional": true
        },
        "axios": {
            "optional": true
        }
    }
}
```
