// Import required libraries and classes
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const Triangle = require('./shapes/Triangle');
const Square = require('./shapes/Square');
const Circle = require('./shapes/Circle');


// Function to prompt user input using Inquirer
const promptUser = async () => {
  // Define the questions for Inquirer
  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3 || 'Please enter up to three characters.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Choose a color:',
      },
      {
        type: 'input',
        name: 'filename',
        message: 'Enter the filename to save the SVG:',
        default: 'logo.svg',
      },
    ];
  
  
    // Wait for the user to answer the questions
    const answers = await inquirer.prompt(questions);
    const { text, textColor, shape, shapeColor, filename } = answers;
    let shapeObj;
  
  
    // Create a shape object based on the user's choice
    switch (shape) {
      case 'Triangle':
        shapeObj = new Triangle();
        break;
      case 'Square':
        shapeObj = new Square();
        break;
      case 'Circle':
        shapeObj = new Circle();
        break;
    }
  
  
    // Set the color of the shape
    shapeObj.setColor(shapeColor);
  
  
    // Generate the SVG content
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${shapeObj.render()}
    <text x="50%" y="50%" font-size="24" text-anchor="middle" dominant-baseline="central" fill="${textColor}">${text}</text> </svg>`;
  
  
    // Save the SVG content to a file
    fs.writeFileSync(filename, svg);
  
  
    // Print a success message
    console.log(chalk.green(`SVG saved to ${filename}`));
  };
  
  
  // Call the promptUser function to start the application
  promptUser();
  
  
  