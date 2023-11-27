

Use `npm pack` to create a new bundle without publishing new versoin 
Bundle will be added in the main directory with name dino_ui_library-{version}.tgz


And in the module where you are using run
`npm install ../dino_ui_library/dino_ui_tools-${version}.tgz`
and you can see changes.

Please run `npm install` after every change you make.


# How to create new component

    1. Add a folder with the component name in 'src/components/ folder.
    2. Develop component based on the design.(use design tokens for styling)
    3. Add `coomponentName.stories.tsx` file in src/stories folder to testcreated components.
    4. Make sure you don't have type error and the component is matching with the design.
    5. If everything is ok you can test your created component with the method descibed above.
    6. After testing make a new bundle with the new changes by running the command 
        `npm run build`
    7. After updating the bundle publish a new version by the command
        `npm publish`

