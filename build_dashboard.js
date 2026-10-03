const fs = require('fs');
const path = require('path');

// Read files using relative paths to __dirname to guarantee correctness wherever executed
const toolsPath = path.join(__dirname, 'strictly_classified_tools.json');
const templatePath = path.join(__dirname, 'template.html');
const outputPath = path.join(__dirname, 'index.html');

const tools = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));
let template = fs.readFileSync(templatePath, 'utf8');

const toolsJsonSafe = JSON.stringify(tools);

// Replace tools data in template
template = template.split('{{TOOLS_DATA}}').join(toolsJsonSafe);

fs.writeFileSync(outputPath, template, 'utf8');
console.log('Successfully generated index.html at:', outputPath);
console.log('Total tools included:', tools.length);
console.log('File size:', fs.statSync(outputPath).size, 'bytes');
