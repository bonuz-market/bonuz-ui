# Bonuz UI

A UI library for [Bonuz](https://bonuz.market).

## Setup

Set URL for your scoped packages.\
For example package with name `@bonuz/bonuz-ui` will use this URL for download
```bash
npm config set @bonuz:registry https://code.bonuz.team/api/v4/packages/npm/
```

Add the token for the scoped packages URL. This will allow you to download `@bonuz/` packages from private projects.
```bash
npm config set -- '//code.bonuz.team/api/v4/packages/npm/:_authToken' "<your_gitlab_access_token>"
```

## Tools

- [Stylelint VScode Extenstion](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint).

## Available Scripts

In the project directory, you can run:

### `yarn stroybook`

Runs the storybook app
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn publish:build`

Runs the build script using rollup.

### `npm publish`

Publishes the package to our private registry(gitlab).
