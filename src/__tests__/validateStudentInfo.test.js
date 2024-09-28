const fs = require('fs');
const path = require('path');

// Path to the directory where the student data files are located
const dataDirectory = path.join(__dirname, '../../public/data');

// List of required fields that each JSON file should have
const requiredFields = ["nombre", "edad", "carrera", "semestre", "gustos", "noGustos", "foto"];

describe('Validation of student info.json files', () => {
  // Read the directories inside the 'data' folder
  const studentDirectories = fs.readdirSync(dataDirectory);

  studentDirectories.forEach(studentFolder => {
    const infoPath = path.join(dataDirectory, studentFolder, 'info.json');

    it(`Should validate that the info.json file in the ${studentFolder} folder contains all the required fields`, () => {
      // Read the content of the JSON file
      const studentInfo = JSON.parse(fs.readFileSync(infoPath, 'utf-8'));

      // Verify that all required fields are present
      requiredFields.forEach(field => {
        expect(studentInfo).toHaveProperty(field);
      });
    });
  });
});
