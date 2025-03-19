# Document Object Model (DOM) Functions

The Document Object Model (DOM) provides a structured representation of the document as a group of nodes and objects. This allows programs and scripts to dynamically access and update the content, structure, and style of documents. Below is a comprehensive list of commonly used DOM functions categorized by their purpose.

## Basic DOM Manipulation

- **getElementById(id)**: Selects an element by its ID.
  ```javascript
  const element = document.getElementById('example');


 - **getElementsByTagName(name)**: Selects all elements that have the specified tag name.

```javascript
const elements = document.getElementsByTagName('div');
createElement(tagName): Creates a new element with the specified tag name.
```

```javascript
const newElement = document.createElement('div');
createTextNode(data): Creates a new text node.
```

```javascript
const textNode = document.createTextNode('Hello World');
appendChild(node): Appends a node as the last child of a parent node.
```

```javascript
parentNode.appendChild(newElement);
innerHTML: Gets or sets the HTML or XML markup contained within the element.
```

javascript
Copy
element.innerHTML = '<span>New content</span>';
textContent: Sets or returns the text content of the specified node.

javascript
Copy
element.textContent = 'New text content';
Querying the DOM
querySelector(selector): Returns the first element that matches a specified CSS selector(s) in the document.

javascript
Copy
const element = document.querySelector('.class-name');
querySelectorAll(selector): Returns all elements that match a specified CSS selector(s) in the document.

javascript
Copy
const elements = document.querySelectorAll('.class-name');
Class and Attribute Manipulation
classList.add(className): Adds a class to an element.

javascript
Copy
element.classList.add('new-class');
classList.remove(className): Removes a class from an element.

javascript
Copy
element.classList.remove('old-class');
classList.toggle(className): Toggles a class on an element.

javascript
Copy
element.classList.toggle('toggle-class');
setAttribute(name, value): Adds a new attribute or changes the value of an existing attribute on an element.

javascript
Copy
element.setAttribute('type', 'button');
getAttribute(name): Returns the value of a specified attribute on the element.

javascript
Copy
const type = element.getAttribute('type');
removeAttribute(name): Removes a specified attribute from an element.

javascript
Copy
element.removeAttribute('type');
Event Handling
addEventListener(type, listener): Attaches an event handler to the specified element.

javascript
Copy
element.addEventListener('click', function() {
  console.log('Element clicked');
});
removeEventListener(type, listener): Removes an event handler that has been attached with the addEventListener() method.

javascript
Copy
element.removeEventListener('click', handleClick);
Style Manipulation
style: Changes the style of an element.
javascript
Copy
element.style.backgroundColor = 'blue';
Node Relationships
childNodes: Returns a NodeList of child nodes.

javascript
Copy
const childNodes = element.childNodes;
firstChild: Returns the first child node of an element.

javascript
Copy
const firstChild = element.firstChild;
lastChild: Returns the last child node of an element.

javascript
Copy
const lastChild = element.lastChild;
nextSibling: Returns the next node at the same tree level.

javascript
Copy
const nextSibling = element.nextSibling;
previousSibling: Returns the previous node at the same tree level.

javascript
Copy
const previousSibling = element.previousSibling;
parentNode: Returns the parent node of an element.

javascript
Copy
const parentNode = element.parentNode;
Miscellaneous
cloneNode(true|false): Clones an element and optionally all of its descendants.

javascript
Copy
const clone = element.cloneNode(true);
insertBefore(newNode, referenceNode): Inserts a node before the reference node as a child of a specified parent node.

javascript
Copy
parentNode.insertBefore(newNode, referenceNode);
removeChild(node): Removes a child node from the DOM.

javascript
Copy
parentNode.removeChild(childNode);
createDocumentFragment(): Creates a new, empty DocumentFragment.

javascript
Copy
const fragment = document.createDocumentFragment();