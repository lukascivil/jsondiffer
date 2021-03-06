import { JsonDiffer } from 'json-difference';
import * as fs from 'fs';
import * as path from 'path';

const oldJson = fs.readFileSync(path.join(__dirname, './assets/oldJson.json'), 'utf8');
const newJson = fs.readFileSync(path.join(__dirname, './assets/newJson.json'), 'utf8');

const start: any = new Date();
const jsondifference = new JsonDiffer();
jsondifference.getDiff(oldJson, newJson);
const end: any = new Date();
const diffTime = end - start;

console.info('Execution time: %dms', diffTime);
