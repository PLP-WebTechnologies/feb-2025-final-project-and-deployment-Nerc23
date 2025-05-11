// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Web Development',
    date: 'May 10, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    summary: 'Web development is an exciting field that combines creativity and technical skills. In this article, we\'ll explore the basics of HTML, CSS, and JavaScript...',
    content: `
      <p>Web development is an exciting field that combines creativity and technical skills. Whether you're starting your journey as a developer or just curious about how websites are built, understanding the fundamentals is crucial.</p>
      
      <h3>The Three Core Technologies</h3>
      <p>Web development primarily revolves around three core technologies:</p>
      <ul>
        <li><strong>HTML (HyperText Markup Language)</strong> - The structure of web pages</li>
        <li><strong>CSS (Cascading Style Sheets)</strong> - The presentation and styling</li>
        <li><strong>JavaScript</strong> - The functionality and interactivity</li>
      </ul>
      
      <h3>HTML: The Building Blocks</h3>
      <p>HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the structure of your web content using elements like headings, paragraphs, links, images, and more.</p>
      <p>Here's a simple HTML example:</p>
      <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My First Webpage&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello, World!&lt;/h1&gt;
  &lt;p&gt;This is my first web page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
      </code></pre>
      
      <h3>CSS: Making It Look Good</h3>
      <p>CSS is responsible for the presentation of web pages, including layout, colors, fonts, and animations. It allows you to create visually appealing websites that provide a great user experience.</p>
      <p>A basic CSS example:</p>
      <pre><code>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  line-height: 1.6;
  color: #666;
}
      </code></pre>
      
      <h3>JavaScript: Adding Interactivity</h3>
      <p>JavaScript is a programming language that enables interactive web pages. It allows you to create dynamic content, control multimedia, animate images, and much more.</p>
      <p>A simple JavaScript example:</p>
      <pre><code>
document.getElementById('myButton').addEventListener('click', function() {
  alert('Button was clicked!');
});
      </code></pre>
      
      <h3>Getting Started</h3>
      <p>To start learning web development:</p>
      <ol>
        <li>Learn HTML basics and understand document structure</li>
        <li>Study CSS for styling and layout</li>
        <li>Practice JavaScript for interactivity</li>
        <li>Build simple projects to apply what you've learned</li>
        <li>Learn about responsive design for mobile devices</li>
        <li>Explore frameworks and libraries like React, Angular, or Vue</li>
      </ol>
      
      <p>Remember, the best way to learn web development is by doing. Start small, be consistent, and don't be afraid to make mistakes. Happy coding!</p>
    `
  },
  {
    id: 2,
    title: 'CSS Best Practices',
    date: 'May 5, 2023',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    summary: 'Learn the best practices for writing clean and maintainable CSS code...',
    content: `
      <p>Writing CSS might seem straightforward, but creating clean, efficient, and maintainable stylesheets requires thought and planning. Here are some best practices that will help you write better CSS.</p>
      
      <h3>1. Use a Consistent Naming Convention</h3>
      <p>Adopt a naming convention like BEM (Block, Element, Modifier) to create more predictable and organized class names:</p>
      <pre><code>
/* Block component */
.card {}

/* Element that depends on the block */
.card__title {}
.card__image {}

/* Modifier that changes the style of the block */
.card--featured {}
      </code></pre>
      
      <h3>2. Organize CSS with a Methodology</h3>
      <p>Use methodologies like ITCSS (Inverted Triangle CSS) or SMACSS (Scalable and Modular Architecture for CSS) to organize your stylesheets in a logical way.</p>
      
      <h3>3. Keep Selectors Simple</h3>
      <p>Avoid deeply nested selectors as they increase specificity and make your CSS harder to maintain:</p>
      <pre><code>


/* Better */
.nav-link {...}
      </code></pre>
      
      <h3>4. Use CSS Variables for Consistency</h3>
      <p>Take advantage of CSS custom properties (variables) to maintain consistency and make site-wide changes easier:</p>
      <pre><code>
:root {
  --primary-color: #3a86ff;
  --text-color: #333;
}

.button {
  background-color: var(--primary-color);
  color: white;
}
      </code></pre>
      
      <h3>5. Write Mobile-First Media Queries</h3>
      <p>Start with styles for small screens and then add styles for larger screens with media queries:</p>
      <pre><code>
/* Base styles for all screen sizes */
.container {
  padding: 15px;
}

/* Styles for screens wider than 768px */
@media (min-width: 768px) {
  .container {
    padding: 30px;
  }
}
      </code></pre>
      
      <h3>6. Comment Your Code</h3>
      <p>Add meaningful comments to explain complex parts of your CSS, especially for large projects:</p>
      <pre><code>
/* Main navigation styles
   - Uses flexbox for layout
   - Includes dropdown functionality
   ----------------------------------------- */
      </code></pre>
      
      <h3>7. Avoid !important</h3>
      <p>Use !important sparingly, as it breaks the natural cascading behavior of CSS and can lead to specificity wars.</p>
      
      <h3>8. Optimize for Performance</h3>
      <p>Consider performance by:</p>
      <ul>
        <li>Using efficient selectors</li>
        <li>Minimizing redundant code</li>
        <li>Compressing your CSS files</li>
        <li>Considering critical CSS techniques</li>
      </ul>
      
      <p>By following these best practices, you'll create CSS that's easier to maintain, more efficient, and more scalable as your projects grow.</p>
    `
  },
  {
    id: 3,
    title: 'JavaScript Fundamentals',
    date: 'April 28, 2023',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    summary: 'Master the core concepts of JavaScript programming language...',
    content: `
      <p>JavaScript is the programming language of the web, enabling interactive and dynamic content. Understanding its fundamentals is essential for any web developer.</p>
      
      <h3>Variables and Data Types</h3>
      <p>JavaScript has several ways to declare variables:</p>
      <pre><code>
// Using let (block-scoped, can be reassigned)
let age = 25;

// Using const (block-scoped, cannot be reassigned)
const PI = 3.14159;

// Using var (function-scoped, older way)
var name = "John";
      </code></pre>
      
      <p>Common data types include:</p>
      <ul>
        <li><strong>String</strong>: "Hello, world!"</li>
        <li><strong>Number</strong>: 42, 3.14</li>
        <li><strong>Boolean</strong>: true, false</li>
        <li><strong>Object</strong>: {name: "John", age: 30}</li>
        <li><strong>Array</strong>: [1, 2, 3, 4]</li>
        <li><strong>Null</strong>: null</li>
        <li><strong>Undefined</strong>: undefined</li>
      </ul>
      
      <h3>Functions</h3>
      <p>Functions are blocks of code designed to perform specific tasks:</p>
      <pre><code>
// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function (ES6)
const greet = (name) => {
  return "Hello, " + name + "!";
};

// Function expression
const greet = function(name) {
  return "Hello, " + name + "!";
};
      </code></pre>
      
      <h3>Control Flow</h3>
      <p>JavaScript provides several structures to control the flow of execution:</p>
      <pre><code>
// If-else statement
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// Switch statement
switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("End of work week");
    break;
  default:
    console.log("Another day");
}

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i); }

// While loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++; }
      </code></pre>
      
      <h3>Working with Arrays</h3>
      <p>Arrays are ordered collections that can store multiple values:</p>
      <pre><code>
// Creating an array
const fruits = ["Apple", "Banana", "Orange"];

// Accessing elements
console.log(fruits[0]); 

// Array methods
fruits.push("Mango"); 
fruits.pop(); 
fruits.unshift("Strawberry"); 
fruits.shift();

// Higher-order array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0); 
      </code></pre>
      <h3>Objects</h3>
      <p>Objects store collections of data as key-value pairs:</p>
      <pre><code>
// Creating an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function() {
    return "Hello, I'm " + this.firstName;
  }
};
