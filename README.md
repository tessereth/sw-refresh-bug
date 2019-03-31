Reproduction for bug in gatsby-plugin-offline.

To test:

```sh
GATSBY_VERSION=one gatsby build && gatsby serve
```

Note webpage shows version `one`. Restart server with:

```sh
GATSBY_VERSION=two gatsby build && gatsby serve
```

Do NOT refresh the browser. Note navigating between pages does not change the version from one to two.

Refresh the page. Note service worker update in console and navigation now does update the version.

**One solution**

```sh
git checkout fixed
GATSBY_VERSION=three gatsby build && gatsby serve
```

Assuming you were just running the old service worker, this will require a refresh. Then if we update the version one more time

```sh
GATSBY_VERSION=four gatsby build && gatsby serve
```

We can see the service worker now updates without having to refresh.
