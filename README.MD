# How to build project with lerna

## Init with lerna

```
lerna init
```

## Create re-useable package

```
lerna create library
```

### Add dependencies to package

```
lerna add lodash packages/library
```

## Create main package (using react)

```
cd packages
npx create-react-app webapp
```

### Add re-useable package to main package

```
// packages/webapp/package.json

{
  "dependencies": {
    "@my-project/library": "1.0.0",
  },
}
```

### inform lerna about new dependency

```
lerna bootstrap
```
