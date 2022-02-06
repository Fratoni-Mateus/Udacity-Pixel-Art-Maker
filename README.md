# Pixel Art Maker 

A simple website to create 8-bit style pixel art using DOM manipulation.

The idea of this project is to deepen and practice the knowledge acquired during the course.
Although the site seems simple, there are some important fundamentals applied to it.


## Technologies Used
In this project I used HTML5, CSS3, Javascript and DOM manipulation to listen to events and respond accordingly.


## Challenges faced
The main challenges I faced were:

 - Creating the grid
 - Painting one cell per click

### Creating the grid
As the grid element needs to first remove the old grid, if present, and then create a new one with a varible size, the process needs to identify what already exists in the page and act accordingly. The creation function uses a series of DOM element queries with Javascript to identify the elements and iterate the individual grid squares.

### Painting one cell per click
In order to create an event listener for an element that can have a variable size and element numbers, it was necessary to get information from the clicked area and verify if the space was valid. Using this process it was possible to paint on cell at a time disregarding what size the grid has using a single event listener, thus improving the website performance.

## Additional information
### Credits:
Some parts of the base code were extracted from Udacity's repository at:
https://github.com/udacity/project-pixel-art-maker-starter.git

### Thank you for checking out my work.
