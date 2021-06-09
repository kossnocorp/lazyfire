# Lazy Fire

This is a tiny Firebase wrapper that improves your web app performance by delaying importing the Firebase Web SDK modules.

## Installation

The library is available as an [npm package](https://www.npmjs.com/package/lazyfire).
To install Lazy Fire run:

```sh
npm install lazyfire --save
# Or using Yarn:
yarn add lazyfire
```

## Using

First, import `lazyfire` in your entry point and assign Firebase app configuration, as you would do with `firebase.initializeApp`:

```js
import { configureApp } from "lazyfire";

configureApp({
  // Firebase app configuration
});
```

This will store the Firebase app configuration for later use.

When you would need Firebase functionality:

```js
const { app } = await ensureApp();
await import("firebase/storage");
await app.storage().ref(path).delete();
```

This will import `firebase/app` and run `firebase.initializeApp` with stored configuration if needed.

## Changelog

See [the changelog](./CHANGELOG.md).

## License

[MIT © Sasha Koss](https://kossnocorp.mit-license.org/)d
