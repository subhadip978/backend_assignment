const path = require('path');
// Get the root directory using process.mainModule.filename
const rootDir = path.dirname(process.mainModule.filename);
module.exports = rootDir;
