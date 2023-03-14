# Teammates (Trilogy Skills Bootcamp: Week 12)

## Table of Contents
Design Prompt:
* [Description](#Description)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Mock-up](#Mock-up)

Deployment:
* [URL](#URL)
* [License](#license)

Installation and Use:
* [Install Git and clone the repository](#Install-Git-and-clone-the-repository)
* [Install Visual Studio Code](#Install-Visual-Studio-Code)
* [Install Node.js and dependencies](#Install-Node.js-and-dependencies)
* [Terminal Commands](#Terminal-Commands)

</br>

___
# Design Prompt
## Description
This week my task was to take a given starter code and convert it into a working Node.js command-line application. This application takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. I was provided with tests and made sure every part of my code passed each provided test.

User Story:
```
AS A user
I WANT to generate a webpage that displays my team's basic info 
SO THAT a user can have quick access to their emails and GitHub profiles
```
<a href="#references">*[1]*</a>

</br>

## Acceptance Criteria
Your project must fulfil the following requirements<a href="#references">*[1]*</a>:
* Create a command-line application that accepts accepts user input using the provided starter code.   
  * Create classes for each team member provided and export them. The tests for these classes (in the `_tests_` directory) must ALL pass.     
    * The first class is an `Employee` parent class with the following properties and methods:       
      * `name`
      * `id`
      * `email`
      * `getName()`
      * `getId()`
      * `getEmail()`
      * `getRole()`&mdash;returns `'Employee'`     
    * The other three classes will extend `Employee`.      
    * In addition to `Employee`'s properties and methods, `Manager` will also have the following:
      * `officeNumber`
      * `getRole()`&mdash;overridden to return `'Manager'`
    * In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
      * `github`&mdash;GitHub username
      * `getGithub()`
      * `getRole()`&mdash;overridden to return `'Engineer'`
    * In addition to `Employee`'s properties and methods, `Intern` will also have the following:
      * `school`
      * `getSchool()`
      * `getRole()`&mdash;overridden to return `'Intern'`
    * Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.   
  * Write code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
    * When a user starts the application then they are prompted to enter the **team manager**’s:
      * Name
      * Employee ID
      * Email address
      * Office number
    * When a user enters those requirements then the user is presented with a menu with the option to:
      * Add an engineer
      * Add an intern 
      * Finish building the team
    * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Engineer's Name
      * ID
      * Email
      * GitHub username
    * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Intern’s name
      * ID
      * Email
      * School
    * When a user decides to finish building their team then they exit the application, and the HTML is generated.
  * Call the `render` function (provided for you) and pass in an array containing all employee objects; 
    * The `render` function will generate and return a block of HTML including templated divs for each employee!
  * Create an HTML file using the HTML returned from the `render` function. 
    * Write it to a file named `team.html` in the `output` folder. 
    * You can use the provided variable `outputPath` to target this location

</br>

## Mock-Up
The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./assets/img/14-object-oriented-programming-challenge-demo.png)

The styling in the image is just an example, so feel free to add your own.<a href="#references">*[1]*</a>

</br>

___
# Deployment
## URL
* The URL of the GitHub Repository: https://github.com/daveheseltine/Teammates

</br>

## License
MIT License

Copyright (c) 2023 daveheseltine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</br>

___
# Installation and Use
## Install Git and clone the repository
* In your browser open https://git-scm.com/ and download the intaller.
* Run the `.exe` file and follow the instructions in the installer.
* In file-explorer navigate to your desired directory and run Git Bash by right-clicking and selecting the Git Bash Here option from the context menu.
* Type into Git Bash `git clone git@github.com:daveheseltine/teammates.git` and press enter.

## Install Visual Studio Code
* In your browser open https://code.visualstudio.com/ and download the intaller.
* Run the `.exe` file and follow the instructions in the installer.

## Install Node.js and dependencies
* In your browser open https://nodejs.org/en/ and download the intaller.
* Run the `.msi` file and follow the instructions in the installer.
* Open the cloned repository with Visual Studio Code.
* Open the Integrated Terminal by right-clicking in the explorer area and select the Open in Integrated Terminal option from the context menu.
* Type into the Integrated Terminal `npm i` to install the module dependencies, which will be installed at `./node_modules`.
* (Optional) Install the testing software Jest by typing into the Integrated Terminal `npm install --save-dev jest`

# Terminal Commands
  * `npm start` (*Node.js*) - Run the application, and answer the questions to create an HTML file. This will be created at `./output/team.html`.
  * `npm test` (*Jest*) - Test the application for errors using Jest.

</br>

___
# References
1. Trilogy Skills Bootcamp (2023) *UK-VIRT-FE-PT-12-2022-U-LOLC/12-object-oriented-programming-module/04-team-profile-generator-lesson/challenge/README.md*
