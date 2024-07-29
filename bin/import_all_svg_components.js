const path = require('path');
const fs = require('fs');

const root = process.cwd();

// Directory containing SVG components
const svgDirectory = `${root}/src/components/SVGIcons`;

fs.readdir(svgDirectory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    const outputPath = path.join(svgDirectory, 'index.ts');

    const content = files.reduce((acc, file) => {
        return file.includes('Icon') ? `${acc};export * from './${file.replace('.tsx', '')}';` : acc;
    }, '');

    fs.writeFile(outputPath, content, err => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('All SVG components imported successfully.');
    });
});

