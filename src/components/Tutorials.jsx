import React, { useState } from 'react';

const Tutorials = () => {
  const [activeTopic, setActiveTopic] = useState('html_intro');

  const contentData = {
    // HTML
    'html_intro': `
      <h1>HTML Introduction</h1>
      <p>HTML (HyperText Markup Language) is the standard markup language for creating Web pages. It describes the structure of a Web page and consists of a series of elements. These elements tell the browser how to display the content.</p>
      <hr>
      <h2>A Simple HTML Document</h2>
      <p>Below is an example of a basic HTML document. It defines a document type, a root html element, a head section with metadata, and a body section with the visible content.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;My First Heading&lt;/h1&gt;
&lt;p&gt;My first paragraph.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;
        </pre>
        <button className="try-btn">Try it Yourself >></button>
      </div>
      <hr>
      <h2>Breaking Down the Example</h2>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code>: This declaration defines that this document is an HTML5 document.</li>
        <li><code>&lt;html&gt;</code>: This is the root element of an HTML page.</li>
        <li><code>&lt;head&gt;</code>: This element contains meta information about the HTML page, like the title.</li>
        <li><code>&lt;title&gt;</code>: This specifies a title for the HTML page, which is shown in the browser's title bar or in the page's tab.</li>
        <li><code>&lt;body&gt;</code>: This defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
        <li><code>&lt;h1&gt;</code>: This defines a large heading.</li>
        <li><code>&lt;p&gt;</code>: This defines a paragraph.</li>
      </ul>
    `,
    'html_editors': `
      <h1>HTML Editors</h1>
      <p>To create and edit HTML, you don't need a fancy tool. A simple text editor is all you need to get started. However, using a specialized code editor can significantly improve your productivity.</p>
      <hr>
      <h2>Simple Text Editors</h2>
      <p>You can start with a basic text editor that comes with your operating system, such as:</p>
      <ul>
        <li><strong>Notepad</strong> on Windows</li>
        <li><strong>TextEdit</strong> on macOS</li>
      </ul>
      <p>Simply open the editor, write your HTML code, and save the file with a <code>.html</code> or <code>.htm</code> extension.</p>
      <hr>
      <h2>Modern Code Editors</h2>
      <p>For a better development experience, we recommend using a modern code editor. These editors offer features like syntax highlighting, code completion, and integrated terminals.</p>
      <div className="code-box">
        <h3>Popular Code Editors</h3>
        <ul>
          <li><strong>Visual Studio Code (VS Code)</strong> - Free, powerful, and highly extensible.</li>
          <li><strong>Sublime Text</strong> - A sophisticated text editor for code, markup, and prose.</li>
          <li><strong>Atom</strong> - A hackable text editor for the 21st Century.</li>
        </ul>
      </div>
      <p>These editors make it easier to write clean, organized code and manage larger projects.</p>
    `,
    'html_basic': `
      <h1>HTML Basic Tags</h1>
      <p>In this chapter, we will cover some of the most fundamental HTML elements you'll use in every project.</p>
      <hr>
      <h2>Headings</h2>
      <p>HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags. <code>&lt;h1&gt;</code> defines the most important heading, and <code>&lt;h6&gt;</code> defines the least important heading.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
&lt;h1&gt;This is Heading 1&lt;/h1&gt;
&lt;h2&gt;This is Heading 2&lt;/h2&gt;
&lt;h3&gt;This is Heading 3&lt;/h3&gt;
        </pre>
      </div>
      <hr>
      <h2>Paragraphs</h2>
      <p>HTML paragraphs are defined with the <code>&lt;p&gt;</code> tag.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;p&gt;This is another paragraph.&lt;/p&gt;
        </pre>
      </div>
      <hr>
      <h2>Links (Anchors)</h2>
      <p>HTML links are defined with the <code>&lt;a&gt;</code> tag. The link's destination is specified in the <code>href</code> attribute.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>&lt;a href="https://www.google.com"&gt;Visit Google&lt;/a&gt;</pre>
      </div>
      <hr>
      <h2>Images</h2>
      <p>HTML images are defined with the <code>&lt;img&gt;</code> tag. The source file (<code>src</code>), alternative text (<code>alt</code>), width, and height are provided as attributes.</p>
       <div className="code-box">
        <h3>Example</h3>
        <pre>&lt;img src="image.jpg" alt="An example image" width="104" height="142"&gt;</pre>
      </div>
    `,
    'html_elements': `
      <h1>HTML Elements</h1>
      <p>An HTML element is defined by a start tag, some content, and an end tag. The HTML element is everything from the start tag to the end tag.</p>
      <div className="code-box">
        <h3>Syntax</h3>
        <pre>&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</pre>
      </div>
      <hr>
      <h2>Nested HTML Elements</h2>
      <p>HTML elements can be nested, which means that elements can contain other elements. All HTML documents consist of nested HTML elements.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
&lt;body&gt;
  &lt;h1&gt;My Heading&lt;/h1&gt;
  &lt;p&gt;My paragraph.&lt;/p&gt;
&lt;/body&gt;
        </pre>
      </div>
      <hr>
      <h2>Empty HTML Elements</h2>
      <p>HTML elements with no content are called empty elements. These elements do not have an end tag. The <code>&lt;br&gt;</code> tag, which defines a line break, is an empty element.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>&lt;p&gt;This is a &lt;br&gt; paragraph with a line break.&lt;/p&gt;</pre>
      </div>
    `,
    'html_attributes': `
      <h1>HTML Attributes</h1>
      <p>HTML attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like <code>name="value"</code>.</p>
      <hr>
      <h2>The <code>href</code> Attribute</h2>
      <p>The <code>&lt;a&gt;</code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL of the page the link goes to.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>&lt;a href="https://www.diu.ac"&gt;Visit DIU&lt;/a&gt;</pre>
      </div>
      <hr>
      <h2>The <code>src</code> Attribute</h2>
      <p>The <code>&lt;img&gt;</code> tag is used to embed an image in an HTML page. The <code>src</code> attribute specifies the path to the image to be displayed.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>&lt;img src="images/logo.svg"&gt;</pre>
      </div>
      <hr>
      <h2>The <code>alt</code> Attribute</h2>
      <p>The required <code>alt</code> attribute for the <code>&lt;img&gt;</code> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This is also important for accessibility.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>&lt;img src="img_girl.jpg" alt="Girl with a jacket"&gt;</pre>
      </div>
      <hr>
      <h2>The <code>style</code> Attribute</h2>
      <p>The <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more.</p>
       <div className="code-box">
        <h3>Example</h3>
        <pre>&lt;p style="color:red;"&gt;This is a red paragraph.&lt;/p&gt;</pre>
      </div>
    `,
    
    // CSS
    'css_intro': `
      <h1>CSS Introduction</h1>
      <p>CSS (Cascading Style Sheets) is the language we use to style an HTML document. It describes how HTML elements should be displayed on screen, paper, or in other media.</p>
      <hr>
      <h2>Why Use CSS?</h2>
      <p>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes. It allows you to separate the presentation of your website from the HTML structure.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}
        </pre>
        <button className="try-btn">Try it Yourself >></button>
      </div>
      <p>In this example, we are setting the background color of the page to light blue, and styling the <code>&lt;h1&gt;</code> elements to be white and centered.</p>
    `,
    'css_syntax': `
      <h1>CSS Syntax</h1>
      <p>A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons.</p>
      <div className="code-box">
        <h3>CSS Rule</h3>
        <pre>
selector {
  property: value;
}
        </pre>
      </div>
      <p>Each declaration includes a CSS property name and a value, separated by a colon.</p>
      <hr>
      <h2>Example Explained</h2>
      <p>Let's look at a simple CSS rule:</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
h1 {
  color: blue;
  font-size: 12px;
}
        </pre>
      </div>
      <ul>
        <li><code>h1</code> is the selector. It selects all <code>&lt;h1&gt;</code> elements on the page.</li>
        <li><code>color</code> is a property, and <code>blue</code> is its value.</li>
        <li><code>font-size</code> is a property, and <code>12px</code> is its value.</li>
      </ul>
    `,
    'css_selectors': `
      <h1>CSS Selectors</h1>
      <p>CSS selectors are used to "find" (or select) the HTML elements you want to style. We can divide CSS selectors into five categories:</p>
      <ul>
        <li><strong>Simple selectors</strong> (select elements based on name, id, class)</li>
        <li><strong>Combinator selectors</strong> (select elements based on a specific relationship between them)</li>
        <li><strong>Pseudo-class selectors</strong> (select elements based on a certain state)</li>
        <li><strong>Pseudo-elements selectors</strong> (select and style a part of an element)</li>
        <li><strong>Attribute selectors</strong> (select elements based on an attribute or attribute value)</li>
      </ul>
      <hr>
      <h2>The CSS Element Selector</h2>
      <p>The element selector selects HTML elements based on the element name.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
p {
  text-align: center;
  color: red;
}
        </pre>
        <p>This will center-align and color all <code>&lt;p&gt;</code> elements red.</p>
      </div>
      <hr>
      <h2>The CSS <code>id</code> Selector</h2>
      <p>The id selector uses the id attribute of an HTML element to select a specific element. The id of an element is unique within a page, so the id selector is used to select one unique element.</p>
      <p>To select an element with a specific id, write a hash (#) character, followed by the id of the element.</p>
       <div className="code-box">
        <h3>Example</h3>
        <pre>
#para1 {
  text-align: center;
  color: red;
}
        </pre>
      </div>
    `,
    'css_colors': `
      <h1>CSS Colors</h1>
      <p>Colors are a fundamental part of web design. CSS provides several ways to specify colors for your elements.</p>
      <hr>
      <h2>Color Names</h2>
      <p>CSS supports 140+ standard color names. You can use these names directly in your stylesheets.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
h1 {
  color: Tomato;
}
p {
  color: DodgerBlue;
}
        </pre>
      </div>
      <hr>
      <h2>RGB and RGBA</h2>
      <p>RGB (Red, Green, Blue) values are specified with the <code>rgb()</code> function. Each parameter defines the intensity of the color between 0 and 255.</p>
      <p>RGBA extends RGB with an alpha channel (opacity). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
#p1 {
  background-color: rgb(255, 0, 0); /* Red */
}
#p2 {
  background-color: rgba(0, 255, 0, 0.5); /* Green with 50% opacity */
}
        </pre>
      </div>
      <hr>
      <h2>HEX Colors</h2>
      <p>A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color.</p>
       <div className="code-box">
        <h3>Example</h3>
        <pre>
#p1 {
  background-color: #ff0000; /* Red */
}
#p2 {
  background-color: #00ff00; /* Green */
}
        </pre>
      </div>
    `,
    'css_backgrounds': `
      <h1>CSS Backgrounds</h1>
      <p>The CSS background properties are used to add background effects to elements. In this chapter, you will learn about the most common background properties.</p>
      <hr>
      <h2>The <code>background-color</code> Property</h2>
      <p>The <code>background-color</code> property specifies the background color of an element.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
body {
  background-color: lightblue;
}
        </pre>
      </div>
      <hr>
      <h2>The <code>background-image</code> Property</h2>
      <p>The <code>background-image</code> property specifies an image to use as the background of an element. By default, the image is repeated so it covers the entire element.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
body {
  background-image: url("paper.gif");
}
        </pre>
      </div>
      <hr>
      <h2>The <code>background-repeat</code> Property</h2>
      <p>The <code>background-repeat</code> property controls how a background image is repeated. You can set it to <code>repeat-x</code> (repeat horizontally), <code>repeat-y</code> (repeat vertically), or <code>no-repeat</code>.</p>
       <div className="code-box">
        <h3>Example</h3>
        <pre>
body {
  background-image: url("gradient_bg.png");
  background-repeat: repeat-x;
}
        </pre>
      </div>
    `,

    // JS
    'js_intro': `
      <h1>JavaScript Introduction</h1>
      <p>JavaScript is the world's most popular programming language. It is the programming language of the Web. JavaScript can update and change both HTML and CSS and is used to control the behavior of web pages.</p>
      <hr>
      <h2>What can JavaScript do?</h2>
      <ul>
        <li>Manipulate HTML content and styles.</li>
        <li>React to user events (like clicks, form submissions, etc.).</li>
        <li>Send and retrieve data from servers (AJAX).</li>
        <li>Create animations and games.</li>
        <li>And much more!</li>
      </ul>
      <div className="code-box">
        <h3>Example: Changing HTML Content</h3>
        <pre>
&lt;p id="demo"&gt;JavaScript can change HTML content.&lt;/p&gt;
&lt;button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'&gt;Click Me!&lt;/button&gt;
        </pre>
        <button className="try-btn">Try it Yourself >></button>
      </div>
    `,
    'js_whereto': `
      <h1>Where To Put JavaScript</h1>
      <p>In HTML, JavaScript code is inserted between <code>&lt;script&gt;</code> and <code>&lt;/script&gt;</code> tags.</p>
      <p>You can place any number of scripts in an HTML document. Scripts can be placed in the <code>&lt;body&gt;</code>, or in the <code>&lt;head&gt;</code> section of an HTML page, or in both.</p>
      <hr>
      <h2>JavaScript in <code>&lt;head&gt;</code></h2>
      <p>Scripts to be executed when they are called, or when an event is triggered, are placed in functions. Put your functions in the head section to have them all in one place.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
&lt;head&gt;
  &lt;script&gt;
    function myFunction() {
      document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
  &lt;/script&gt;
&lt;/head&gt;
        </pre>
      </div>
      <hr>
      <h2>JavaScript in <code>&lt;body&gt;</code></h2>
      <p>Placing scripts at the bottom of the <code>&lt;body&gt;</code> element improves the display speed, because script compilation slows down the display.</p>
       <div className="code-box">
        <h3>Example</h3>
        <pre>
&lt;body&gt;
  &lt;h1&gt;A Web Page&lt;/h1&gt;
  &lt;p id="demo"&gt;A Paragraph&lt;/p&gt;
  &lt;script&gt;
    document.getElementById("demo").innerHTML = "My First JavaScript";
  &lt;/script&gt;
&lt;/body&gt;
        </pre>
      </div>
    `,
    'js_output': `
      <h1>JavaScript Output</h1>
      <p>JavaScript can "display" data in different ways:</p>
      <ul>
        <li>Writing into an HTML element, using <code>innerHTML</code>.</li>
        <li>Writing into the HTML output using <code>document.write()</code>.</li>
        <li>Writing into an alert box, using <code>window.alert()</code>.</li>
        <li>Writing into the browser console, using <code>console.log()</code>.</li>
      </ul>
      <hr>
      <h2>Using <code>innerHTML</code></h2>
      <p>To access an HTML element, JavaScript can use the <code>document.getElementById(id)</code> method.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>document.getElementById("demo").innerHTML = 5 + 6;</pre>
      </div>
      <hr>
      <h2>Using <code>console.log()</code></h2>
      <p>For debugging purposes, you can call the <code>console.log()</code> method in the browser to display data.</p>
       <div className="code-box">
        <h3>Example</h3>
        <pre>console.log(5 + 6);</pre>
      </div>
    `,
    'js_statements': `
      <h1>JavaScript Statements</h1>
      <p>A computer program is a list of "instructions" to be "executed" by a computer. In a programming language, these programming instructions are called statements.</p>
      <p>JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments. Most JavaScript programs contain many JavaScript statements. The statements are executed, one by one, in the same order as they are written.</p>
      <hr>
      <h2>Semicolons</h2>
      <p>Semicolons separate JavaScript statements. Add a semicolon at the end of each executable statement. Although in many cases semicolons are optional, it is considered good programming practice to always use them.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c
        </pre>
      </div>
    `,
    'js_variables': `
      <h1>JavaScript Variables</h1>
      <p>Variables are containers for storing data (storing data values). In this example, <code>x</code>, <code>y</code>, and <code>z</code>, are variables, declared with the <code>var</code> keyword:</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
var x = 5;
var y = 6;
var z = x + y;
        </pre>
      </div>
      <p>From the example above, you can expect: the value of z is 11.</p>
      <hr>
      <h2><code>let</code>, <code>const</code>, and <code>var</code></h2>
      <p>There are three keywords for declaring variables in JavaScript:</p>
      <ul>
        <li><code>var</code>: The historical way of declaring variables. It has function scope.</li>
        <li><code>let</code>: Introduced in ES6 (2015). It has block scope, and its value can be reassigned.</li>
        <li><code>const</code>: Also introduced in ES6. It has block scope, and its value cannot be reassigned after declaration (it's a constant).</li>
      </ul>
      <p>It is recommended to use <code>let</code> and <code>const</code> for new JavaScript code.</p>
       <div className="code-box">
        <h3>Example</h3>
        <pre>
let price1 = 5;
const price2 = 6;
let total = price1 + price2;
        </pre>
      </div>
    `,

    // PHP
    'php_intro': `
      <h1>PHP Introduction</h1>
      <p>PHP is a server-side scripting language, and a powerful tool for making dynamic and interactive Web pages. It is one of the most popular scripting languages for web development.</p>
      <hr>
      <h2>What is PHP?</h2>
      <ul>
        <li>PHP stands for "PHP: Hypertext Preprocessor".</li>
        <li>PHP is a widely-used, open source scripting language.</li>
        <li>PHP scripts are executed on the server.</li>
        <li>PHP is free to download and use.</li>
      </ul>
      <hr>
      <h2>What Can PHP Do?</h2>
      <ul>
        <li>PHP can generate dynamic page content.</li>
        <li>PHP can create, open, read, write, delete, and close files on the server.</li>
        <li>PHP can collect form data.</li>
        <li>PHP can send and receive cookies.</li>
        <li>PHP can add, delete, modify data in your database.</li>
      </ul>
    `,
    'php_install': `
      <h1>PHP Installation</h1>
      <p>To run PHP for web development, you will need a web server, PHP, and a database (like MySQL). While you can install these separately, it's much easier to use a pre-packaged software stack.</p>
      <hr>
      <h2>Local Development Environments</h2>
      <p>For beginners, we recommend installing a ready-to-use development environment that includes Apache, PHP, and MySQL.</p>
      <ul>
        <li><strong>XAMPP</strong>: A free and open-source cross-platform web server solution stack package developed by Apache Friends. (Recommended for Windows, macOS, and Linux).</li>
        <li><strong>WAMP</strong>: For Windows users, WAMP (Windows, Apache, MySQL, PHP) is a popular choice.</li>
        <li><strong>MAMP</strong>: For macOS users, MAMP (Macintosh, Apache, MySQL, PHP) provides a similar environment.</li>
      </ul>
      <p>After installing one of these, you can place your <code>.php</code> files in the web root directory (e.g., <code>htdocs</code> in XAMPP) and access them through your browser at <code>http://localhost/yourfile.php</code>.</p>
    `,
    'php_syntax': `
      <h1>PHP Syntax</h1>
      <p>A PHP script is executed on the server, and the plain HTML result is sent back to the browser. A PHP script can be placed anywhere in the document.</p>
      <p>A PHP script starts with <code>&lt;?php</code> and ends with <code>?&gt;</code>.</p>
      <div className="code-box">
        <h3>Basic PHP Script</h3>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h1&gt;My first PHP page&lt;/h1&gt;

&lt;?php
echo "Hello World!";
?&gt;

&lt;/body&gt;
&lt;/html&gt;
        </pre>
      </div>
      <p>The default file extension for PHP files is "<code>.php</code>".</p>
      <hr>
      <h2>Comments in PHP</h2>
      <p>Comments in PHP can be used to describe any part of the code and to hide parts of the code.</p>
       <div className="code-box">
        <h3>Example</h3>
        <pre>
// This is a single-line comment

# This is also a single-line comment

/*
This is a multiple-lines comment block
that spans over multiple
lines
*/
        </pre>
      </div>
    `,
    'php_variables': `
      <h1>PHP Variables</h1>
      <p>Variables are "containers" for storing information. In PHP, a variable starts with the <code>$</code> sign, followed by the name of the variable.</p>
      <div className="code-box">
        <h3>Declaring PHP Variables</h3>
        <pre>
&lt;?php
$txt = "Hello world!";
$x = 5;
$y = 10.5;
?&gt;
        </pre>
      </div>
      <p>After the execution of the statements above, the variable <code>$txt</code> will hold the value "Hello world!", the variable <code>$x</code> will hold the value 5, and the variable <code>$y</code> will hold the value 10.5.</p>
      <hr>
      <h2>Rules for PHP variables:</h2>
      <ul>
        <li>A variable starts with the <code>$</code> sign, followed by the name of the variable.</li>
        <li>A variable name must start with a letter or the underscore character.</li>
        <li>A variable name cannot start with a number.</li>
        <li>A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ ).</li>
        <li>Variable names are case-sensitive (<code>$age</code> and <code>$AGE</code> are two different variables).</li>
      </ul>
    `,
    'php_echo': `
      <h1>PHP <code>echo</code> and <code>print</code> Statements</h1>
      <p>With PHP, there are two basic ways to get output: <code>echo</code> and <code>print</code>. They are more or less the same. They are both used to output data to the screen.</p>
      <p>The differences are small: <code>echo</code> has no return value while <code>print</code> has a return value of 1 so it can be used in expressions. <code>echo</code> can take multiple parameters (although such usage is rare) while <code>print</code> can take one argument. <code>echo</code> is marginally faster than <code>print</code>.</p>
      <hr>
      <h2>The <code>echo</code> Statement</h2>
      <p>The <code>echo</code> statement can be used with or without parentheses: <code>echo</code> or <code>echo()</code>.</p>
      <div className="code-box">
        <h3>Example</h3>
        <pre>
&lt;?php
echo "&lt;h2&gt;PHP is Fun!&lt;/h2&gt;";
echo "Hello world!&lt;br&gt;";
echo "I'm about to learn PHP!&lt;br&gt;";
$x = 5;
$y = 4;
echo $x + $y;
?&gt;
        </pre>
      </div>
      <hr>
       <h2>The <code>print</code> Statement</h2>
      <p>The <code>print</code> statement can be used with or without parentheses: <code>print</code> or <code>print()</code>.</p>
       <div className="code-box">
        <h3>Example</h3>
        <pre>
&lt;?php
print "&lt;h2&gt;PHP is Fun!&lt;/h2&gt;";
print "Hello world!&lt;br&gt;";
$x = 5;
$y = 4;
print $x + $y;
?&gt;
        </pre>
      </div>
    `
  };

  const showTopic = (topic) => {
    setActiveTopic(topic);
  };

  return (
    <section id="tutorial">
      <div className="tut-container">
        <div className="tut-sidebar">
          
          <h3 className="tut-header">HTML Tutorial</h3>
          <ul>
            <li className={activeTopic === 'html_intro' ? 'active' : ''} onClick={() => showTopic('html_intro')}>HTML Introduction</li>
            <li className={activeTopic === 'html_editors' ? 'active' : ''} onClick={() => showTopic('html_editors')}>HTML Editors</li>
            <li className={activeTopic === 'html_basic' ? 'active' : ''} onClick={() => showTopic('html_basic')}>HTML Basic</li>
            <li className={activeTopic === 'html_elements' ? 'active' : ''} onClick={() => showTopic('html_elements')}>HTML Elements</li>
            <li className={activeTopic === 'html_attributes' ? 'active' : ''} onClick={() => showTopic('html_attributes')}>HTML Attributes</li>
          </ul>

          <h3 className="tut-header" style={{marginTop: '20px'}}>CSS Tutorial</h3>
          <ul>
            <li className={activeTopic === 'css_intro' ? 'active' : ''} onClick={() => showTopic('css_intro')}>CSS Introduction</li>
            <li className={activeTopic === 'css_syntax' ? 'active' : ''} onClick={() => showTopic('css_syntax')}>CSS Syntax</li>
            <li className={activeTopic === 'css_selectors' ? 'active' : ''} onClick={() => showTopic('css_selectors')}>CSS Selectors</li>
            <li className={activeTopic === 'css_colors' ? 'active' : ''} onClick={() => showTopic('css_colors')}>CSS Colors</li>
            <li className={activeTopic === 'css_backgrounds' ? 'active' : ''} onClick={() => showTopic('css_backgrounds')}>CSS Backgrounds</li>
          </ul>

          <h3 className="tut-header" style={{marginTop: '20px'}}>JavaScript Tutorial</h3>
          <ul>
            <li className={activeTopic === 'js_intro' ? 'active' : ''} onClick={() => showTopic('js_intro')}>JS Introduction</li>
            <li className={activeTopic === 'js_whereto' ? 'active' : ''} onClick={() => showTopic('js_whereto')}>JS Where To</li>
            <li className={activeTopic === 'js_output' ? 'active' : ''} onClick={() => showTopic('js_output')}>JS Output</li>
            <li className={activeTopic === 'js_statements' ? 'active' : ''} onClick={() => showTopic('js_statements')}>JS Statements</li>
            <li className={activeTopic === 'js_variables' ? 'active' : ''} onClick={() => showTopic('js_variables')}>JS Variables</li>
          </ul>

          <h3 className="tut-header" style={{marginTop: '20px'}}>PHP Tutorial</h3>
          <ul>
            <li className={activeTopic === 'php_intro' ? 'active' : ''} onClick={() => showTopic('php_intro')}>PHP Introduction</li>
            <li className={activeTopic === 'php_install' ? 'active' : ''} onClick={() => showTopic('php_install')}>PHP Installation</li>
            <li className={activeTopic === 'php_syntax' ? 'active' : ''} onClick={() => showTopic('php_syntax')}>PHP Syntax</li>
            <li className={activeTopic === 'php_variables' ? 'active' : ''} onClick={() => showTopic('php_variables')}>PHP Variables</li>
            <li className={activeTopic === 'php_echo' ? 'active' : ''} onClick={() => showTopic('php_echo')}>PHP Echo / Print</li>
          </ul>

        </div>

        <div className="tut-content" id="main-content" dangerouslySetInnerHTML={{ __html: contentData[activeTopic] }}>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;