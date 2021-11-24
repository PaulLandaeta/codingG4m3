# codingG4m3 Front-end Developer Assessment
To complete the assessment:
- clone this repository
- complete the tasks listed below
- create your own git repo using the name format \[your-name\]-codingG4m3
- email your repository link to rodrigo@processmaker.com
## Part 1: Find and Desdribe

### Question 1: Find the errors

Review the sample HTML in `Written/game-1/buggy.html`. Identify as many errors / mistakes as you can, related to HTML/CSS/Javascript. As this is part of the written assessment, we prefer you to describe the problems in plain English - and explain how they can be fixed.

**Submitting**

To submit this answer, create a file in the `Written/game-1` folder titled `answer.md` (.txt format is also acceptable).

### Question 2: 
The image above is a screenshot from our blog homepage. If you were given this design to turn into a coded HTML template, how would you approach it? _Without writing any CSS or HTML code_, explain your thinking process and approach to this design. 

What questions would you have? What considerations would you need to take to implement all of the features as seen in the design? What obstacles or challenges might you encounter when coding this design? How would you implement the small details in the design?

Remember that the code for this design will be implemented in a CMS with dynamically generated content, and is not just a flat layout. How does that affect your approach?
**Submitting**

To submit this answer, create a file in the `Written/question-1` folder titled `answer.md` (.txt format is also acceptable)



## Part 2: Coding

This part of the assessment will test your grasp of fundamental aspects of front-end development, and your competency with HTML, CSS, and Javascript. We will be looking at: 

- accuracy / completeness (did you meet all the requirements of the task?)
- code quality / format (is your code easy to read, written with best practices?)
- browser compatibility (how well does your code work on different devices and browsers?)

**Submitting Exercises**

Although we provide Submitting instructions for each exercise, we understand if you wish to create your own folder structure/build environment for the coding exercises. This is fine as long as they are well-organized and clearly documented.

**Preprocessors and Frameworks**

All of the exercises can be completed without build tools or environment setup.

All javascript should be written in plain vanilla javascript syntax (no jQuery).

CSS can be written as basic CSS, or using preprocessors like SASS, SCSS, or PostCSS

### Exercise 1: PokeFetch

In this assignment you will use javascript to fetch data from the [PokeAPI](https://pokeapi.co/) and display it to the user. 

Using the simple HTML boilerplate in `Coding/exercise-1/pokefetch.html` as a starting point, write javascript that will return a pokemon's **sprite, types, and base stats** to the user when searched in the text field.

A basic example is demonstrated in the screenshot below: 

![screenshot](/Coding/exercise-1/pokefetch-screenshot.png?raw=true)

**Requirements**

- the Types (if there are more than one) should all be presented in one comma-separated string within a single HTML tag.
- the Stats must be displayed in an unordered list, one `li` tag per entry
- No jQuery
- Your code should be able to run on a local development server like [http-server](https://www.npmjs.com/package/http-server)

**Other notes**

- If you use other build tools, please provide documentation and place it in the `Coding/exercise-1` folder as `poke-readme.md` (.txt format also acceptable)
- For this exercise you don't need to worry about CSS or styling
- It is up to you to determine how to handle issues like client-side validation and error handling.

**Submitting** 

Any files you create for this project should be placed into the `Coding/exercise-1` folder along with any readme or instructions you wish to provide.

---