# Dino UI Tools

See [UI library](https://dinofrontend.github.io/dino_ui_library) for live demos and comprehensive docs.

# Installation and usage
```
npm install dino_ui_tools
```

Then use it in your app:
```jsx
import React from 'react';
import { Button } from 'dino_ui_tools/components/Button';
import 'dino_ui_tools/assets/styles/styles.scss'; 
// Or you can import the styles.css file
// import 'dino_ui_tools/assets/styles/styles.css';

const App = () => {
  return <Button>Click me</Button>;
};
```

How to use mixins:
```scss
@use "dino_ui_tools/assets/styles/helpers/mixin";

.divider {
    @include mixin.flexbox();
}
```

# How to create new icon
    1. Add a new svg file in `svg-icons` folder.
    2. Make sure the icon is matching with the design.
    3. Make sure the svg file name is matching with pattern like this `chevron-right.svg`.
    4. Run `npm run generate-svg-component` command to generate the new icon component.

# How to create new component
    1. Add a folder with the component name in `src/components/` folder.
    2. Add a style file in the `assets/styles/components` fodler with the name `_componentName.scss`.
    3. Import the created style file in `assets/styles/styles.scss` file using @use syntax.
    4. Develop component based on the design.
    5. Add `coomponentName.stories.tsx` file in src/stories folder to test created component.
    6. Make sure you don't have type error and the component is matching with the design.
    7. If everything is ok you can create a pull request into the master with correct commit message (you can read about it below).
    8. The new version will be published automatically after the pull request is reviewed and merged.

## Automated Releases with Semantic Release

This project uses [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) to automate versioning and releases. It follows [Semantic Versioning](https://semver.org/) (semver) and determines the next version number based on commit messages.

### How It Works

    Semantic Release automates:

    1. Version number updates.
    2. Release notes generation.
    3. Package publishing to npm.
    4. GitHub release creation.

### Commit Message Guidelines

Semantic Release uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to determine release types:

    `fix:` – for bug fixes (patch release)
    `feat:` – for new features (minor release)
    `BREAKING CHANGE:` – for breaking changes (major release)

### Releasing

To trigger a release:

    1. Commit your changes using the conventional commit format.
    2. Open a pull request and merge it into the `master` branch with the appropriate commit message.

Semantic Release will handle the rest, including publishing to npm and creating a GitHub release.