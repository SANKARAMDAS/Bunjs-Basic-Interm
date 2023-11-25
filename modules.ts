import path from 'path';

const filePath = path.join('foo', 'bar', 'image.png');
const filename = path.basename(filePath);

console.log(filename);