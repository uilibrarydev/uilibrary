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
    5. Export the new icon component in the `src/components/SVGIcons/index.ts` file.

# How to create new component
    1. Add a folder with the component name in `src/components/` folder.
    2. Add a style file in the `assets/styles/components` fodler with the name `_componentName.scss`.
    3. Import the created style file in `assets/styles/styles.scss` file using @use syntax.
    4. Develop component based on the design.
    5. Add `coomponentName.stories.tsx` file in src/stories folder to test created component.
    6. Make sure you don't have type error and the component is matching with the design.
    7. If everything is ok you can create a pull request into the master branch with the updated package version.
    8. The new version will be published automatically after the pull request is reviewed and merged.
