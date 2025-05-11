
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
