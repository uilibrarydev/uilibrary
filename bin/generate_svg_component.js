const fs = require('fs');
const path = require('path');

const root = process.cwd();

// Directory containing SVG files
const svgDirectory = `${root}/svg-icons`;

// Output directory for React components
const outputDirectory = `${root}/src/components/SVGIcons`;

function extractPathFromSvg(svgContent) {
    const pattern = /<svg[^>]*>([\s\S]*?)<\/svg>/;
    const match = svgContent.match(pattern);
    if (match && match[1]) {
        return match[1];
    }
    return null;
}

// Function to generate a valid React component name from SVG file name
function generateComponentName(fileName) {
    // Remove file extension (.svg)
    const componentName = fileName.replace('.svg', '');

    // Split the remaining string into words using hyphen as delimiter
    const words = componentName.split('-');

    // Capitalize the first letter of each word and join them
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Concatenate the capitalized words to form the component name
    const finalComponentName = capitalizedWords.join('');

    // Add "Icon" prefix
    return 'Icon' + finalComponentName;
}


// Function to generate React component code
function generateReactComponent(componentName, svgPath) {
    // Generate React component code using the provided SVG path
    // You can use a template string or any templating library to generate the component
    return `import React, { ReactElement } from 'react'
import {ISVGIconProps} from './types';
import classNames from 'classnames'

export const ${componentName} = ({size, type, className = '', onClick, refHandler, id, dataId }: ISVGIconProps): ReactElement => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('svg-icon', {
          [\`svg-icon__size-\${size}\`]: size,
          [\`svg-icon__type-\${type}\`]: type,
          [className]: className
      })}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      ref={refHandler}
      id={id}
      data-id={dataId ? \`\${dataId}-svg-icon\` : ''}
  >
      ${svgPath}
  </svg>
);

export default ${componentName};`;
}

// Read SVG files from the directory
fs.readdir(svgDirectory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Process each SVG file
    files.forEach(file => {
        const filePath = path.join(svgDirectory, file);

        // Read SVG content
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }

            // Parse SVG content and extract path
            const svgPath = extractPathFromSvg(data);

            // Function to generate a valid React component name from SVG file name
            const componentName = generateComponentName(file);

            const outputPath = path.join(outputDirectory, `${componentName}.tsx`);

            if (fs.existsSync(outputPath)) {
                return;
            }
            const reactComponent = generateReactComponent(componentName, svgPath);

            // Write React component to file
            fs.writeFile(outputPath, reactComponent, err => {
                if (err) {
                    console.error('Error writing file:', err);
                    return;
                }
                console.log(`React component ${componentName} created successfully.`);
            });
        });
    });
});

