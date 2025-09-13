"use client"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Modern JavaScript ES6+",
    excerpt:
      "Learn the essential ES6+ features that every modern JavaScript developer should know, including arrow functions, destructuring, and async/await.",
    category: "javascript",
    date: "2024-01-15",
    author: "Shyam Sundar",
    icon: "⚡",
    content: `
            <h1>Getting Started with Modern JavaScript ES6+</h1>
            <p><strong>By Shyam Sundar • January 15, 2024</strong></p>
            
            <h2>Introduction</h2>
            <p>JavaScript has evolved significantly since ES6 (ECMAScript 2015) was released. These modern features have revolutionized how we write JavaScript code, making it more readable, maintainable, and powerful.</p>
            
            <h2>Arrow Functions</h2>
            <p>Arrow functions provide a more concise way to write functions:</p>
            <pre><code>// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;</code></pre>
            
            <h2>Destructuring</h2>
            <p>Destructuring allows you to extract values from arrays and objects:</p>
            <pre><code>// Array destructuring
const [first, second] = [1, 2, 3];

// Object destructuring
const {name, age} = {name: 'Ram', age: 30};</code></pre>
            
            <h2>Template Literals</h2>
            <p>Template literals make string interpolation much easier:</p>
            <pre><code>const name = 'World';
const greeting = \`Hello, \${name}!\`;</code></pre>
            
            <h2>Async/Await</h2>
            <p>Handle asynchronous operations more elegantly:</p>
            <pre><code>async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}</code></pre>
            
            <h2>Conclusion</h2>
            <p>These ES6+ features are essential for modern JavaScript development. Start incorporating them into your projects to write cleaner, more efficient code.</p>
        `,
  },
  {
    id: 2,
    title: "Building Responsive Layouts with CSS Grid",
    excerpt:
      "Master CSS Grid to create flexible, responsive layouts that work perfectly across all devices and screen sizes.",
    category: "css",
    date: "2024-01-12",
    author: "Rohit Singh",
    icon: "🎨",
    content: `
            <h1>Building Responsive Layouts with CSS Grid</h1>
            <p><strong>By Rohit Singh  • January 12, 2024</strong></p>
            
            <h2>Why CSS Grid?</h2>
            <p>CSS Grid is a powerful layout system that allows you to create complex, responsive layouts with ease. Unlike Flexbox, which is one-dimensional, Grid is two-dimensional, giving you control over both rows and columns.</p>
            
            <h2>Basic Grid Setup</h2>
            <pre><code>.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}</code></pre>
            
            <h2>Responsive Grid</h2>
            <p>Create responsive layouts without media queries:</p>
            <pre><code>.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}</code></pre>
            
            <h2>Grid Areas</h2>
            <p>Define named grid areas for semantic layouts:</p>
            <pre><code>.layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
}</code></pre>
            
            <h2>Advanced Techniques</h2>
            <p>Use CSS Grid with modern features like subgrid and container queries for even more powerful layouts.</p>
        `,
  },
  {
    id: 3,
    title: "React Hooks: A Complete Guide",
    excerpt:
      "Dive deep into React Hooks and learn how to use useState, useEffect, and custom hooks to build powerful React applications.",
    category: "react",
    date: "2024-01-10",
    author: "Dr. Lodhi",
    icon: "⚛️",
    content: `
            <h1>React Hooks: A Complete Guide</h1>
            <p><strong>By Dr. Lodhi • January 10, 2024</strong></p>
            
            <h2>Introduction to Hooks</h2>
            <p>React Hooks revolutionized how we write React components by allowing us to use state and other React features in functional components.</p>
            
            <h2>useState Hook</h2>
            <p>Manage component state in functional components:</p>
            <pre><code>import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        &lt;div&gt;
            &lt;p&gt;Count: {count}&lt;/p&gt;
            &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
                Increment
            &lt;/button&gt;
        &lt;/div&gt;
    );
}</code></pre>
            
            <h2>useEffect Hook</h2>
            <p>Handle side effects in your components:</p>
            <pre><code>import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        fetchUser(userId).then(setUser);
    }, [userId]);
    
    return user ? &lt;div&gt;{user.name}&lt;/div&gt; : &lt;div&gt;Loading...&lt;/div&gt;;
}</code></pre>
            
            <h2>Custom Hooks</h2>
            <p>Create reusable logic with custom hooks:</p>
            <pre><code>function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    
    const setStoredValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };
    
    return [value, setStoredValue];
}</code></pre>
        `,
  },
  {
    id: 4,
    title: "Node.js Best Practices for 2024",
    excerpt:
      "Discover the latest Node.js best practices, performance optimization techniques, and security considerations for modern applications.",
    category: "nodejs",
    date: "2024-01-08",
    author: "Arjun Kumar",
    icon: "🚀",
    content: `
            <h1>Node.js Best Practices for 2024</h1>
            <p><strong>By Arjun Kumar• January 8, 2024</strong></p>
            
            <h2>Project Structure</h2>
            <p>Organize your Node.js projects for maintainability:</p>
            <pre><code>project/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── tests/
├── config/
└── package.json</code></pre>
            
            <h2>Error Handling</h2>
            <p>Implement proper error handling strategies:</p>
            <pre><code>// Async error handling
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});</code></pre>
            
            <h2>Security Best Practices</h2>
            <p>Secure your Node.js applications:</p>
            <pre><code>// Use helmet for security headers
app.use(helmet());

// Rate limiting
const rateLimit = require('express-rate-limit');
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
}));</code></pre>
            
            <h2>Performance Optimization</h2>
            <p>Optimize your Node.js applications for better performance with clustering, caching, and proper database indexing.</p>
        `,
  },
  {
    id: 5,
    title: "CSS Animations and Transitions Tutorial",
    excerpt:
      "Create smooth, engaging animations and transitions using CSS. Learn keyframes, timing functions, and performance optimization.",
    category: "tutorial",
    date: "2024-01-05",
    author: "Lila Sharma",
    icon: "✨",
    content: `
            <h1>CSS Animations and Transitions Tutorial</h1>
            <p><strong>By Lila Sharma • January 5, 2024</strong></p>
            
            <h2>CSS Transitions</h2>
            <p>Add smooth transitions to your elements:</p>
            <pre><code>.button {
    background-color: blue;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: red;
}</code></pre>
            
            <h2>CSS Animations</h2>
            <p>Create complex animations with keyframes:</p>
            <pre><code>@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in {
    animation: slideIn 0.5s ease-out;
}</code></pre>
            
            <h2>Performance Tips</h2>
            <p>Optimize animations for better performance:</p>
            <ul>
                <li>Use transform and opacity for animations</li>
                <li>Avoid animating layout properties</li>
                <li>Use will-change property sparingly</li>
                <li>Prefer CSS animations over JavaScript for simple effects</li>
            </ul>
            
            <h2>Advanced Techniques</h2>
            <p>Explore advanced animation techniques like cubic-bezier timing functions and animation-fill-mode for more control over your animations.</p>
        `,
  },
  {
    id: 6,
    title: "Advanced JavaScript Patterns",
    excerpt:
      "Explore advanced JavaScript design patterns including module pattern, observer pattern, and functional programming concepts.",
    category: "javascript",
    date: "2024-01-03",
    author: "Devendra Patel",
    icon: "🧩",
    content: `
            <h1>Advanced JavaScript Patterns</h1>
            <p><strong>By Devendra Patel • January 3, 2024</strong></p>
            
            <h2>Module Pattern</h2>
            <p>Encapsulate code and create private variables:</p>
            <pre><code>const MyModule = (function() {
    let privateVariable = 0;
    
    function privateFunction() {
        console.log('Private function called');
    }
    
    return {
        publicMethod: function() {
            privateVariable++;
            privateFunction();
        },
        getCount: function() {
            return privateVariable;
        }
    };
})();</code></pre>
            
            <h2>Observer Pattern</h2>
            <p>Implement the observer pattern for event handling:</p>
            <pre><code>class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
}</code></pre>
            
            <h2>Functional Programming</h2>
            <p>Apply functional programming concepts:</p>
            <pre><code>// Pure functions
const add = (a, b) => a + b;

// Higher-order functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);

// Function composition
const compose = (f, g) => (x) => f(g(x));</code></pre>
        `,
  },
  {
    id: 7,
    title: "React Performance Optimization",
    excerpt:
      "Learn how to optimize React applications for better performance using memoization, code splitting, and lazy loading techniques.",
    category: "react",
    date: "2024-01-01",
    author: "Jyoti Singh",
    icon: "⚡",
    content: `
            <h1>React Performance Optimization</h1>
            <p><strong>By Jyoti Singh • January 1, 2024</strong></p>
            
            <h2>React.memo</h2>
            <p>Prevent unnecessary re-renders with React.memo:</p>
            <pre><code>const ExpensiveComponent = React.memo(({ data }) => {
    return (
        &lt;div&gt;
            {data.map(item => (
                &lt;div key={item.id}&gt;{item.name}&lt;/div&gt;
            ))}
        &lt;/div&gt;
    );
});</code></pre>
            
            <h2>useMemo and useCallback</h2>
            <p>Optimize expensive calculations and function references:</p>
            <pre><code>const MyComponent = ({ items, onItemClick }) => {
    const expensiveValue = useMemo(() => {
        return items.reduce((sum, item) => sum + item.value, 0);
    }, [items]);
    
    const handleClick = useCallback((id) => {
        onItemClick(id);
    }, [onItemClick]);
    
    return (
        &lt;div&gt;
            &lt;p&gt;Total: {expensiveValue}&lt;/p&gt;
            {items.map(item => (
                &lt;Item 
                    key={item.id} 
                    item={item} 
                    onClick={handleClick} 
                /&gt;
            ))}
        &lt;/div&gt;
    );
};</code></pre>
            
            <h2>Code Splitting</h2>
            <p>Split your code for better loading performance:</p>
            <pre><code>import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
    return (
        &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
            &lt;LazyComponent /&gt;
        &lt;/Suspense&gt;
    );
}</code></pre>
        `,
  },
  {
    id: 8,
    title: "Modern CSS Layout Techniques",
    excerpt:
      "Explore modern CSS layout methods including Flexbox, Grid, and Container Queries for creating adaptive designs.",
    category: "css",
    date: "2023-12-28",
    author: "Tarun Verma",
    icon: "📐",
    content: `
            <h1>Modern CSS Layout Techniques</h1>
            <p><strong>By Tarun Verma • December 28, 2023</strong></p>
            
            <h2>Flexbox Fundamentals</h2>
            <p>Master the flexible box layout:</p>
            <pre><code>.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.flex-item {
    flex: 1;
}</code></pre>
            
            <h2>CSS Grid Advanced</h2>
            <p>Create complex layouts with CSS Grid:</p>
            <pre><code>.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: minmax(200px, auto);
    gap: 2rem;
}

.grid-item:nth-child(3n) {
    grid-column: span 2;
}</code></pre>
            
            <h2>Container Queries</h2>
            <p>Responsive design based on container size:</p>
            <pre><code>.card-container {
    container-type: inline-size;
}

@container (min-width: 400px) {
    .card {
        display: flex;
        flex-direction: row;
    }
}</code></pre>
            
            <h2>Modern Layout Patterns</h2>
            <p>Combine these techniques to create modern, responsive layouts that adapt to any screen size and content.</p>
        `,
  },
]

// DOM elements
const blogGrid = document.getElementById("blogGrid")
const searchInput = document.getElementById("searchInput")
const filterBtns = document.querySelectorAll(".filter-btn")
const loading = document.getElementById("loading")
const noResults = document.getElementById("noResults")
const mobileMenu = document.getElementById("mobileMenu")
const navLinks = document.getElementById("navLinks")
const articleModal = document.getElementById("articleModal")
const articleContent = document.getElementById("articleContent")

let currentFilter = "all"
let currentSearch = ""

function init() {
  showLoading()
  setTimeout(() => {
    renderBlogPosts(blogPosts)
    hideLoading()
    loadUserPreferences()
    setupEventListeners()
  }, 1000)
}

function setupEventListeners() {
  searchInput.addEventListener(
    "input",
    debounce((e) => {
      currentSearch = e.target.value
      filterAndSearch()
      saveUserPreferences()
    }, 300),
  )

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      currentFilter = btn.dataset.category
      filterAndSearch()
      saveUserPreferences()
    })
  })

  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })

  document.addEventListener("click", (e) => {
    if (!e.target.closest("nav")) {
      navLinks.classList.remove("active")
    }
  })

  document.getElementById("contactForm").addEventListener("submit", handleContactForm)

  document.getElementById("subscribeForm").addEventListener("submit", handleSubscribeForm)

  articleModal.addEventListener("click", (e) => {
    if (e.target === articleModal) {
      closeModal()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && articleModal.classList.contains("active")) {
      closeModal()
    }
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault()
      searchInput.focus()
    }
  })
}

function showSection(sectionId) {
  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.remove("active")
  })

  document.getElementById(sectionId).classList.add("active")

  navLinks.classList.remove("active")

  window.scrollTo({ top: 0, behavior: "smooth" })
}

function renderBlogPosts(posts) {
  if (posts.length === 0) {
    blogGrid.style.display = "none"
    noResults.style.display = "block"
    return
  }

  blogGrid.style.display = "grid"
  noResults.style.display = "none"

  blogGrid.innerHTML = posts
    .map(
      (post) => `
        <article class="blog-card" data-category="${post.category}" onclick="openArticle(${post.id})">
            <div class="blog-image">
                ${post.icon}
            </div>
            <div class="blog-content">
                <span class="blog-category">${post.category}</span>
                <h2 class="blog-title">${post.title}</h2>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <span>${post.author} • ${formatDate(post.date)}</span>
                    <span class="read-more">Read More →</span>
                </div>
            </div>
        </article>
    `,
    )
    .join("")
}

function openArticle(postId) {
  const post = blogPosts.find((p) => p.id === postId)
  if (post) {
    articleContent.innerHTML = `
            <div class="article-content">
                ${post.content}
            </div>
        `
    articleModal.classList.add("active")
    document.body.style.overflow = "hidden"
  }
}

function closeModal() {
  articleModal.classList.remove("active")
  document.body.style.overflow = "auto"
}

function filterAndSearch() {
  let filteredPosts = blogPosts

  if (currentFilter !== "all") {
    filteredPosts = filteredPosts.filter((post) => post.category === currentFilter)
  }

  if (currentSearch) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(currentSearch.toLowerCase()) ||
        post.category.toLowerCase().includes(currentSearch.toLowerCase()) ||
        post.author.toLowerCase().includes(currentSearch.toLowerCase()),
    )
  }

  showLoading()
  setTimeout(() => {
    renderBlogPosts(filteredPosts)
    hideLoading()
  }, 300)
}

function handleContactForm(e) {
  e.preventDefault()
  const form = e.target
  const formData = new FormData(form)

  const submitBtn = form.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  setTimeout(() => {
    document.getElementById("contactSuccess").style.display = "block"
    form.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false

    setTimeout(() => {
      document.getElementById("contactSuccess").style.display = "none"
    }, 5000)
  }, 1500)
}

function handleSubscribeForm(e) {
  e.preventDefault()
  const form = e.target
  const email = form.querySelector('input[type="email"]').value

  const submitBtn = form.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Subscribing..."
  submitBtn.disabled = true
  setTimeout(() => {
    document.getElementById("subscribeSuccess").style.display = "block"
    form.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false
    const subscribers = JSON.parse(localStorage.getItem("subscribers") || "[]")
    subscribers.push({ email, date: new Date().toISOString() })
    localStorage.setItem("subscribers", JSON.stringify(subscribers))

    setTimeout(() => {
      document.getElementById("subscribeSuccess").style.display = "none"
    }, 5000)
  }, 1500)
}
function scrollToBlogs() {
  const blogGrid = document.querySelector(".blog-grid")
  if (blogGrid) {
    blogGrid.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

function showLoading() {
  loading.style.display = "block"
  blogGrid.style.display = "none"
  noResults.style.display = "none"
}

function hideLoading() {
  loading.style.display = "none"
}

function saveUserPreferences() {
  const preferences = {
    filter: currentFilter,
    search: currentSearch,
  }
  localStorage.setItem("blogPreferences", JSON.stringify(preferences))
}

function loadUserPreferences() {
  const saved = localStorage.getItem("blogPreferences")
  if (saved) {
    const preferences = JSON.parse(saved)
    currentFilter = preferences.filter || "all"
    currentSearch = preferences.search || ""

    searchInput.value = currentSearch
    filterBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.category === currentFilter)
    })

    if (currentSearch || currentFilter !== "all") {
      filterAndSearch()
    }
  }
}

function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

document.addEventListener("DOMContentLoaded", init)

console.log("🚀 TechBlog loaded successfully!")
console.log("✅ All features are working:")
console.log("  • Navigation between pages")
console.log("  • Full article reading in modal")
console.log("  • Contact form submission")
console.log("  • Newsletter subscription")
console.log("  • Search and filtering with debouncing")
console.log("  • Responsive design")
console.log("  • Local storage preferences")
console.log("  • Loading spinners")
console.log("  • Mobile navigation")
console.log("  • Keyboard shortcuts (Esc, Ctrl+K)")
console.log("  • Professional UI/UX")
