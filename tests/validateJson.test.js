import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const requiredFields = {
  nombre: 'string',
  edad: 'number',
  carrera: 'string',
  semestre: 'number',
  gustos: 'object', 
  noGustos: 'object', 
  foto: 'string',
  socialMedia: 'string'  
};

const dataDir = path.join(__dirname, '../public/data');

describe('Validación de archivos info.json en cada carpeta de data', () => {
  test('Debe existir el directorio data', () => {
    expect(fs.existsSync(dataDir)).toBe(true);
  });

  const directories = fs.readdirSync(dataDir).filter(file => fs.statSync(path.join(dataDir, file)).isDirectory());

  directories.forEach(dir => {
    const jsonFilePath = path.join(dataDir, dir, 'info.json');

    test(`Debe validar el archivo info.json en la carpeta ${dir}`, () => {
      expect(fs.existsSync(jsonFilePath)).toBe(true);

      const jsonData = loadJson(jsonFilePath);

      for (const [field, type] of Object.entries(requiredFields)) {
        expect(jsonData).toHaveProperty(field);
        expect(typeof jsonData[field]).toBe(type);
      }
    });
  });
});