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

// Accessing properties
console.log(person.firstName); // "John"
console.log(person["lastName"]); // "Doe"

// Adding/modifying properties
person.email = "john@example.com";
person.age = 31;
      </code></pre>
      
      <p>These fundamentals form the building blocks of JavaScript programming. As you get comfortable with these concepts, you can explore more advanced topics like asynchronous JavaScript, DOM manipulation, and modern JavaScript frameworks.</p>
    `
  },
  {
    id: 4,
    title: 'Responsive Design Tips',
    date: 'April 20, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    summary: 'Create websites that look great on all devices with these responsive design tips...',
    content: `
      <p>Responsive web design ensures that your website looks and functions well on all devices, from desktop computers to smartphones. Here are essential tips to create truly responsive websites.</p>
      
      <h3>Use a Mobile-First Approach</h3>
      <p>Start designing for the smallest screen first, then progressively enhance the experience for larger screens:</p>
      <pre><code>
/* Base styles for mobile */
.container {
  padding: 15px;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    padding: 30px;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }
}
      </code></pre>
      
      <h3>Flexible Grid Layouts</h3>
      <p>Use CSS Grid or Flexbox for creating flexible layouts:</p>
      <pre><code>
/* Using CSS Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

/* Using Flexbox */
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-item {
  flex: 1 1 250px;
  margin: 10px;
}
      </code></pre>
      
      <h3>Responsive Typography</h3>
      <p>Make your text scale smoothly across different screen sizes:</p>
      <pre><code>
/* Using viewport units */
h1 {
  font-size: calc(1.5rem + 1.5vw);
}

/* Using media queries */
p {
  font-size: 16px;
}

@media (min-width: 768px) {
  p {
    font-size: 18px;
  }
}
      </code></pre>
      
      <h3>Fluid Images</h3>
      <p>Ensure images scale properly within their containers:</p>
      <pre><code>
img {
  max-width: 100%;
  height: auto;
}

/* For background images */
.banner {
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
}
      </code></pre>
      
      <h3>Use Appropriate Input Types for Forms</h3>
      <p>Enhance the mobile experience with proper form input types:</p>
      <pre><code>
<input type="email" placeholder="Email">
<input type="tel" placeholder="Phone Number">
<input type="date">
<input type="number">
      </code></pre>
      
      <h3>Touch-Friendly Elements</h3>
      <p>Ensure interactive elements are large enough for touch interaction:</p>
      <pre><code>
button, 
.nav-link,
input[type="submit"] {
  min-height: 44px;
  min-width: 44px;
  padding: 10px 15px;
}
      </code></pre>
      
      <h3>Test on Real Devices</h3>
      <p>While browser dev tools are useful, nothing replaces testing on actual devices:</p>
      <ul>
        <li>Test on various screen sizes and orientations</li>
        <li>Check different browsers (Chrome, Safari, Firefox, etc.)</li>
        <li>Verify touch interactions work as expected</li>
        <li>Test loading performance on mobile networks</li>
      </ul>
      
      <h3>Consider Performance</h3>
      <p>Mobile users may have slower connections:</p>
      <ul>
        <li>Optimize images for different screen sizes</li>
        <li>Consider implementing lazy loading</li>
        <li>Minimize resource-heavy animations on mobile</li>
        <li>Reduce the number of HTTP requests</li>
      </ul>
      
      <h3>Use CSS Media Queries Strategically</h3>
      <p>Don't just create breakpoints at common device widths. Instead, let the content determine where designs need to adapt.</p>
      
      <p>By applying these responsive design principles, you'll create websites that provide an optimal viewing and interaction experience across a wide range of devices.</p>
    `
  },
    {
    id: 5,
    title: 'Introduction to Web Accessibility',
    date: 'April 15, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    summary: 'Learn how to make your websites accessible to all users, including those with disabilities...',
    content: `
      <p>Web accessibility ensures that websites and web applications are designed and developed so that people with disabilities can use them. Here's how to get started with implementing accessibility in your web projects.</p>
      
      <h3>Why Accessibility Matters</h3>
      <p>Accessibility is important because:</p>
      <ul>
        <li>It ensures equal access to information and functionality</li>
        <li>It improves usability for all users</li>
        <li>It's often a legal requirement</li>
        <li>It can improve SEO and reach a wider audience</li>
      </ul>
      
      <h3>Key Principles of Web Accessibility</h3>
      <p>The Web Content Accessibility Guidelines (WCAG) define four principles:</p>
      <ol>
        <li><strong>Perceivable</strong>: Information must be presentable to users in ways they can perceive.</li>
        <li><strong>Operable</strong>: User interface components must be operable.</li>
        <li><strong>Understandable</strong>: Information and operation must be understandable.</li>
        <li><strong>Robust</strong>: Content must be robust enough to be interpreted by various user agents.</li>
      </ol>
      
      <h3>Practical Implementation Tips</h3>
      
      <h4>Semantic HTML</h4>
      <p>Use appropriate HTML elements that convey meaning:</p>
      <pre><code>
<!-- Instead of -->
<div class="heading">My Page Title</div>

<!-- Use -->
<h1>My Page Title</h1>

<!-- For navigation -->
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
      </code></pre>
      
      <h4>Alternative Text for Images</h4>
      <p>Provide descriptive alt text for images:</p>
      <pre><code>
<!-- Informative image -->
<img src="chart.jpg" alt="Bar chart showing sales growth from 2020 to 2023">

<!-- Decorative image -->
<img src="decorative-line.jpg" alt="">
      </code></pre>
      
      <h4>Keyboard Navigation</h4>
      <p>Ensure all interactive elements are accessible via keyboard:</p>
      <pre><code>
<!-- Make sure custom components are keyboard accessible -->
<div 
  role="button" 
  tabindex="0" 
  onclick="toggleMenu()"
  onkeydown="if(event.key==='Enter' || event.key===' ') toggleMenu()"
>
  Menu
</div>
      </code></pre>
      
      <h4>Color Contrast</h4>
      <p>Ensure sufficient contrast between text and background:</p>
      <pre><code>
/* Bad contrast */
.low-contrast {
  color: #aaa;
  background-color: #999;
}

/* Good contrast */
.good-contrast {
  color: #222;
  background-color: #fff;
}
      </code></pre>
      
      <h4>Form Labels and Instructions</h4>
      <p>Provide clear labels for form controls:</p>
      <pre><code>
<label for="username">Username:</label>
<input id="username" type="text" aria-describedby="username-help">
<p id="username-help">Create a username with at least 5 characters</p>
      </code></pre>
      
      <h4>ARIA Attributes</h4>
      <p>Use ARIA when necessary to enhance accessibility:</p>
      <pre><code>
<div role="alert" aria-live="assertive">
  Form submitted successfully!
</div>

<button aria-expanded="false" aria-controls="dropdown1">
  Options
</button>
<ul id="dropdown1" hidden>
  <li><a href="#">Option 1</a></li>
  <li><a href="#">Option 2</a></li>
</ul>
      </code></pre>
      
      <h3>Testing for Accessibility</h3>
      <p>Use these methods to test your site's accessibility:</p>
      <ul>
        <li>Automated tools like Lighthouse, WAVE, or axe</li>
        <li>Keyboard-only navigation testing</li>
        <li>Screen reader testing (VoiceOver, NVDA, JAWS)</li>
        <li>Manual checks using accessibility checklists</li>
      </ul>
      
      <p>Remember that accessibility is not a one-time effort but an ongoing process. By incorporating these practices into your development workflow, you'll create more inclusive web experiences for all users.</p>
    `
  },

  {
    id: 6,
    title: 'Version Control with Git',
    date: 'April 5, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    summary: 'Master the essentials of Git for effective version control in your projects...',
    content: `
      <p>Git is a powerful version control system that helps you track changes, collaborate with others, and manage your codebase efficiently. Let's explore the key concepts and commands you need to know.</p>
      
      <h3>Getting Started with Git</h3>
      <p>To begin using Git, you'll need to set it up and create a repository:</p>
      <pre><code>
# Configure Git with your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Create a new repository
git init my-project
cd my-project

# Or clone an existing repository
git clone https://github.com/username/repository.git
      </code></pre>
      
      <h3>Basic Git Workflow</h3>
      <p>The core Git workflow involves three main areas:</p>
      <ol>
        <li><strong>Working Directory</strong>: Where you edit files</li>
        <li><strong>Staging Area</strong>: Where you prepare changes for committing</li>
        <li><strong>Repository</strong>: Where changes are permanently stored</li>
      </ol>
      
      <pre><code>
# Check status of your files
git status

# Add files to staging area
git add filename.js           # Add specific file
git add .                     # Add all files

# Commit staged changes
git commit -m "Add new feature"

# View commit history
git log
      </code></pre>
      
      <h3>Branching and Merging</h3>
      <p>Branches allow you to develop features, fix bugs, or experiment without affecting the main codebase:</p>
      <pre><code>
# Create and switch to a new branch
git branch feature-login
git checkout feature-login

# Or in one command (Git 2.23+)
git switch -c feature-login

# List branches
git branch

# Switch between branches
git checkout main
# Or
git switch main

# Merge a branch into current branch
git merge feature-login

# Delete a branch after merging
git branch -d feature-login
      </code></pre>
      
      <h3>Remote Repositories</h3>
      <p>Work with remote repositories for collaboration:</p>
      <pre><code>
# Add a remote repository
git remote add origin https://github.com/username/repo.git

# Push local branch to remote
git push -u origin main

# Get updates from remote
git fetch origin

# Download and merge changes
git pull origin main
      </code></pre>
      
      <h3>Handling Conflicts</h3>
      <p>When Git can't automatically merge changes, you'll need to resolve conflicts:</p>
      <pre><code>
# After a merge conflict occurs:
# 1. Open the conflicted files
# 2. Look for the conflict markers: <<<<<<< HEAD, =======, >>>>>>>
# 3. Edit the file to resolve the conflict
# 4. Save the file
git add resolved-file.js
git commit -m "Resolve merge conflict"
      </code></pre>
      
      <h3>Useful Git Commands</h3>
      <p>Additional commands to enhance your Git workflow:</p>
      <pre><code>
# Discard changes in working directory
git restore file.txt
# Or (older syntax)
git checkout -- file.txt

# Unstage a file
git restore --staged file.txt
# Or (older syntax)
git reset HEAD file.txt

# Amend the last commit
git commit --amend -m "Updated commit message"

# Stash changes temporarily
git stash
git stash pop

# Create a tag
git tag v1.0.0
      </code></pre>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Commit early and often with clear messages</li>
        <li>Pull before you push to avoid conflicts</li>
        <li>Use branches for new features and bug fixes</li>
        <li>Write descriptive commit messages in the imperative ("Add feature" not "Added feature")</li>
        <li>Keep your repositories organized with a .gitignore file</li>
      </ul>
      
      <p>By mastering these Git fundamentals, you'll streamline your development process and collaborate more effectively with other developers.</p>
    `
  }
];
