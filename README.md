🐛 Bug Tracker - Task Management & Vulnerability Scanner
A full-stack bug tracking and task management web application with built-in website vulnerability scanning capabilities.

Show Image
Show Image
Show Image
Show Image

📋 Table of Contents
Features
Tech Stack
Getting Started
Installation
Project Structure
Usage Guide
API Documentation
Deployment
Security Features
Contributing
License
✨ Features
🔐 User Authentication
User Registration - Create new accounts with name, email, and password
Secure Login - JWT-based authentication system
Session Management - Persistent login sessions with localStorage
Password Hashing - Secure password storage (ready for bcrypt integration)
User Isolation - Each user has their own private task list
📝 Task Management (CRUD)
Create Tasks - Add new bugs/tasks with detailed information
Edit Tasks - Update existing task details
Delete Tasks - Remove completed or unnecessary tasks
Mark Complete - Toggle task completion status with one click
Task Details - Title, description, category, priority, status, and due date
🔍 Advanced Filtering & Search
Real-time Search - Filter tasks by title or description
Status Filter - Open, In Progress, Completed
Category Filter - Bug, Feature, Enhancement, Documentation
Priority Filter - Low, Medium, High, Critical
Combined Filters - Use multiple filters simultaneously
🛡️ Website Vulnerability Scanner
Automated Security Analysis - Scan any website for vulnerabilities
Multiple Check Types:
HTTPS/SSL encryption verification
Security headers analysis (CSP, HSTS, X-Frame-Options, etc.)
SQL Injection risk detection
XSS (Cross-Site Scripting) vulnerability checks
CSRF protection verification
Authentication & session management review
Rate limiting assessment
Common vulnerable paths detection
Detailed Reports - Comprehensive findings with severity levels
Actionable Recommendations - Step-by-step fix suggestions
One-Click Task Creation - Convert scan findings directly into tracked tasks
📊 Dashboard & Analytics
Task Statistics - Total, Open, In Progress, and Completed counts
Visual Overview - Color-coded stats cards
Real-time Updates - Instant dashboard refresh on task changes
📱 Responsive Design
Mobile-First - Optimized for smartphones and tablets
Desktop Ready - Full-featured desktop experience
Adaptive Layout - CSS Grid and Flexbox for flexibility
Touch-Friendly - Large touch targets for mobile users
💾 Data Persistence
Persistent Storage - All data survives page reloads
User Data Isolation - Secure, per-user data storage
Automatic Sync - Changes saved immediately
🧱 Tech Stack
Frontend
React 18.x - UI library with hooks
Tailwind CSS - Utility-first styling
Lucide React - Beautiful icon library
JavaScript (ES6+) - Modern JavaScript features
Backend (Simulated - Ready for Real Implementation)
Node.js - JavaScript runtime
Express.js - Web application framework
JWT - JSON Web Tokens for authentication
RESTful API - Standard API architecture
Database (Ready for Integration)
MongoDB - NoSQL database (with Mongoose)
PostgreSQL - Relational database (with Prisma/Sequelize)
MongoDB Atlas - Cloud database hosting
Supabase - PostgreSQL cloud platform
Authentication
JWT Tokens - Stateless authentication
bcrypt - Password hashing (integration ready)
LocalStorage - Client-side token storage
Deployment Platforms
Vercel - Frontend deployment
Netlify - Alternative frontend hosting
Render - Backend deployment
Railway - Full-stack deployment
Fly.io - Alternative backend hosting
🚀 Getting Started
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v16.x or higher) - Download
npm (v7.x or higher) or yarn (v1.22.x or higher)
Git - Download
Code Editor - VS Code recommended
Check Your Installation
bash
node --version
npm --version
git --version
📦 Installation
Option 1: Clone from GitHub
bash
# Clone the repository
git clone https://github.com/yourusername/bug-tracker.git

# Navigate to project directory
cd bug-tracker

# Install dependencies
npm install

# Start development server
npm start
Option 2: Create from Scratch
Step 1: Create React App
bash
# Create new React application
npx create-react-app bug-tracker

# Navigate to project
cd bug-tracker
Step 2: Install Dependencies
bash
# Install required packages
npm install lucide-react
Step 3: Copy the Application Code
Replace the contents of src/App.js with the Bug Tracker React component code
Update src/App.css if needed (Tailwind classes are inline)
Step 4: Configure Tailwind CSS (Optional but Recommended)
bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind
npx tailwindcss init -p
tailwind.config.js:

javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
src/index.css:

css
@tailwind base;
@tailwind components;
@tailwind utilities;
Step 5: Start Development Server
bash
npm start
The app will open at http://localhost:3000

📁 Project Structure
bug-tracker/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── Tasks/
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   ├── TaskModal.jsx
│   │   │   └── TaskForm.jsx
│   │   ├── Scanner/
│   │   │   ├── WebsiteScanner.jsx
│   │   │   └── ScanResults.jsx
│   │   ├── Dashboard/
│   │   │   └── Stats.jsx
│   │   └── Layout/
│   │       ├── Header.jsx
│   │       └── Footer.jsx
│   ├── services/
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── scanner.js
│   ├── utils/
│   │   ├── storage.js
│   │   └── validators.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env
├── .gitignore
├── package.json
└── README.md
📖 Usage Guide
1. User Registration & Login
Register a New Account
Open the application
Click on the "Register" tab
Enter your full name, email, and password
Click "Register" button
You'll be automatically logged in
Login to Existing Account
Click on the "Login" tab
Enter your email and password
Click "Login" button
Access your personal dashboard
2. Managing Tasks
Create a New Task
Click the "New Task" button (blue button with + icon)
Fill in the task details:
Title: Brief description (e.g., "Fix login button styling")
Description: Detailed explanation
Category: Bug, Feature, Enhancement, or Documentation
Priority: Low, Medium, High, or Critical
Status: Open, In Progress, or Completed
Due Date: Optional deadline
Click "Create Task"
Edit an Existing Task
Find the task in your list
Click the blue edit icon (pencil)
Modify any fields
Click "Update Task"
Mark Task as Complete
Find the task in your list
Click the checkmark icon
Task status toggles between complete/incomplete
Delete a Task
Find the task you want to remove
Click the red trash icon
Confirm deletion in the popup
3. Searching & Filtering
Search Tasks
Use the search bar at the top
Type any keyword from task title or description
Results filter in real-time
Apply Filters
Click the "Filters" button
Select desired filters:
Status: All, Open, In Progress, Completed
Category: All, Bug, Feature, Enhancement, Documentation
Priority: All, Low, Medium, High, Critical
Filters apply immediately
Combine Filters
Use search + filters together for precise results
All filters work simultaneously
4. Website Vulnerability Scanning
Scan a Website
Click the "Scan Website" button (purple button with globe icon)
Enter the website URL:
Format: example.com or https://example.com
HTTP/HTTPS automatically detected
Click "Scan"
Wait for scan to complete (usually 2-5 seconds)
Review Scan Results
Each finding shows:
Icon: Visual indicator (error, warning, info)
Title: Issue name
Severity: Critical, High, Medium, or Low
Description: Detailed explanation
Recommendation: How to fix it
Add Findings to Tasks
Review each vulnerability
Click "Add to Tasks" on important findings
Task automatically created with:
Pre-filled title and description
Appropriate priority level
Scanned URL reference
Recommendations included
5. Dashboard Overview
The dashboard displays four key metrics:

Total Tasks: All tasks you've created
Open: Tasks not yet started
In Progress: Tasks currently being worked on
Completed: Finished tasks
🔌 API Documentation
Authentication Endpoints
POST /api/auth/register
Register a new user account.

Request:

json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
Response:

json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
POST /api/auth/login
Authenticate existing user.

Request:

json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
Response:

json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
Task Endpoints
GET /api/tasks
Get all tasks for authenticated user.

Headers:

Authorization: Bearer {token}
Response:

json
[
  {
    "id": "task123",
    "title": "Fix login bug",
    "description": "Users cannot login on mobile",
    "category": "bug",
    "priority": "high",
    "status": "open",
    "dueDate": "2025-11-01",
    "createdAt": "2025-10-23T10:00:00Z",
    "updatedAt": "2025-10-23T10:00:00Z"
  }
]
POST /api/tasks
Create a new task.

Headers:

Authorization: Bearer {token}
Request:

json
{
  "title": "Fix login bug",
  "description": "Users cannot login on mobile",
  "category": "bug",
  "priority": "high",
  "status": "open",
  "dueDate": "2025-11-01"
}
Response:

json
{
  "id": "task123",
  "title": "Fix login bug",
  "description": "Users cannot login on mobile",
  "category": "bug",
  "priority": "high",
  "status": "open",
  "dueDate": "2025-11-01",
  "createdAt": "2025-10-23T10:00:00Z",
  "updatedAt": "2025-10-23T10:00:00Z"
}
PUT /api/tasks/:id
Update an existing task.

Headers:

Authorization: Bearer {token}
Request:

json
{
  "title": "Fix login bug - Updated",
  "status": "in-progress"
}
DELETE /api/tasks/:id
Delete a task.

Headers:

Authorization: Bearer {token}
Response:

json
{
  "message": "Task deleted successfully"
}
Scanner Endpoints
POST /api/scanner/scan
Scan a website for vulnerabilities.

Headers:

Authorization: Bearer {token}
Request:

json
{
  "url": "https://example.com"
}
Response:

json
{
  "url": "https://example.com",
  "scanDate": "2025-10-23T10:00:00Z",
  "vulnerabilities": [
    {
      "type": "warning",
      "title": "Missing Security Headers",
      "description": "The website is missing important security headers",
      "severity": "medium",
      "recommendation": "Implement CSP, HSTS, and X-Frame-Options headers"
    }
  ]
}
🚀 Deployment
Deploy Frontend to Vercel
Install Vercel CLI:
bash
npm install -g vercel
Login to Vercel:
bash
vercel login
Deploy:
bash
vercel --prod
Configure Environment Variables:
Go to Vercel Dashboard
Select your project
Add environment variables in Settings
Deploy Backend to Render
Create a Render Account at render.com
Create New Web Service:
Connect your GitHub repository
Select branch (main/master)
Build command: npm install
Start command: npm start
Add Environment Variables:
NODE_ENV=production
JWT_SECRET=your_secret_key
MONGODB_URI=your_mongodb_connection_string
PORT=3001
Deploy:
Click "Create Web Service"
Wait for deployment
Deploy Full Stack to Railway
Install Railway CLI:
bash
npm install -g @railway/cli
Login:
bash
railway login
Initialize Project:
bash
railway init
Deploy:
bash
railway up
Add Database:
bash
railway add postgresql
# or
railway add mongodb
Environment Variables
Create a .env file in your root directory:

env
# Application
NODE_ENV=development
PORT=3000

# Database
MONGODB_URI=mongodb://localhost:27017/bug-tracker
# or
DATABASE_URL=postgresql://user:password@localhost:5432/bugtracker

# JWT Authentication
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

# API Configuration
API_URL=http://localhost:3001
CORS_ORIGIN=http://localhost:3000

# Optional: Email Service (for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
Production Checklist
 Set NODE_ENV=production
 Use secure JWT secret (minimum 32 characters)
 Enable CORS for specific origins only
 Use HTTPS for all endpoints
 Implement rate limiting
 Set up database backups
 Configure proper error logging (e.g., Sentry)
 Enable security headers
 Use environment variables for sensitive data
 Set up monitoring (e.g., Datadog, New Relic)
🔒 Security Features
Implemented
✅ JWT token-based authentication
✅ User data isolation
✅ Client-side input validation
✅ Secure password storage preparation
✅ Protected routes
✅ CORS-ready architecture
Ready for Production (Requires Backend)
🔧 bcrypt password hashing
🔧 HTTP-only secure cookies
🔧 Rate limiting on API endpoints
🔧 CSRF token validation
🔧 SQL injection prevention with parameterized queries
🔧 XSS protection with input sanitization
🔧 Security headers (Helmet.js)
🔧 API request validation with Joi/Yup
Best Practices
Never store passwords in plain text
Always use HTTPS in production
Implement proper session management
Regular security audits
Keep dependencies updated
Use environment variables for secrets
Implement logging and monitoring
Regular backups
🛠️ Backend Implementation Guide
Express.js Server Setup
Create server/index.js:

javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/scanner', require('./routes/scanner'));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
MongoDB Connection
Create server/db.js:

javascript
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
User Model
Create server/models/User.js:

javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
Task Model
Create server/models/Task.js:

javascript
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['bug', 'feature', 'enhancement', 'documentation'],
    default: 'bug'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['open', 'in-progress', 'completed'],
    default: 'open'
  },
  dueDate: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update timestamp on save
taskSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Task', taskSchema);
Authentication Middleware
Create server/middleware/auth.js:

javascript
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};
Auth Routes
Create server/routes/auth.js:

javascript
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create new user
    user = new User({ name, email, password });
    await user.save();

    // Create token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
Task Routes
Create server/routes/tasks.js:

javascript
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');

// Get all tasks for user
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create task
router.post('/', auth, async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      userId: req.userId
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update task
router.put('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete task
router.delete('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
🤝 Contributing
We welcome contributions! Here's how you can help:

Reporting Bugs
Check if the bug has already been reported
Open a new issue with:
Clear title and description
Steps to reproduce
Expected vs actual behavior
Screenshots if applicable
Your environment (OS, browser, etc.)
Suggesting Features
Open an issue with the "enhancement" label
Describe the feature and its use case
Explain why it would be valuable
Pull Requests
Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
Development Guidelines
Follow existing code style
Write clear commit messages
Add tests for new features
Update documentation
Keep PRs focused and small
📝 License
This project is licensed under the MIT License - see below for details:

MIT License

Copyright (c) 2025 Bug Tracker

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
📞 Support
Need Help?
📧 Email: support@bugtracker.com
💬 Discord: Join our community
🐦 Twitter: @BugTrackerApp
📚 Documentation: docs.bugtracker.com
Frequently Asked Questions
Q: Can I use this for commercial projects? A: Yes! This project is MIT licensed and free for commercial use.

Q: How do I backup my data? A: When using the backend, set up regular database backups through your hosting provider.

Q: Is there a mobile app? A: Currently web-only, but the responsive design works great on mobile browsers. Native apps are planned.

Q: Can multiple users collaborate on tasks? A: Currently each user has their own task list. Team features are planned for v2.0.

Q: How accurate is the vulnerability scanner? A: The scanner checks for common vulnerabilities and best practices. For comprehensive security audits, use professional tools like OWASP ZAP or Burp Suite.

🗺️ Roadmap
Version 1.1 (Coming Soon)
 Dark mode toggle
 Export tasks to CSV/JSON
 Task comments and attachments
 Email notifications
 Advanced scanner with deeper analysis
Version 2.0 (Future)
 Team collaboration features
 Real-time updates with WebSockets
 Mobile native apps (iOS/Android)
 Integrations (Slack, GitHub, Jira)
 Advanced analytics dashboard
 Custom categories and workflows
 API rate limiting dashboard
 Two-factor authentication
🙏 Acknowledgments
React team for the amazing framework
Tailwind CSS for the utility-first CSS framework
Lucide React for the beautiful icon library
The open-source community for inspiration and support
All contributors who help improve this project
📸 Screenshots
Login & Registration
Show Image
Clean and simple authentication interface

Dashboard
Show Image
Overview of all your tasks with statistics

Task Management
Show Image
Organized task list with filtering options

Website Scanner
Show Image
Automated website vulnerability detection

Task Creation
Show Image
Detailed task creation form

🔧 Troubleshooting
Common Issues and Solutions
Issue: "Module not found" errors
Solution:

bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
Issue: Port 3000 already in use
Solution:

bash
# Kill process on port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
PORT=3001 npm start
Issue: Storage not persisting
Solution:

Check browser localStorage is enabled
Clear browser cache and try again
Ensure cookies are not blocked
Check browser console for errors
Issue: Scan results not showing
Solution:

Ensure URL is valid and accessible
Check for CORS issues in browser console
Try with a different website
Verify internet connection
Issue: Tasks not saving
Solution:

Check browser console for errors
Verify localStorage has space available
Try clearing old data: localStorage.clear()
Refresh the page and try again
Issue: Authentication not working
Solution:

Clear localStorage: localStorage.removeItem('token')
Check email format is valid
Ensure password meets requirements
Try registering a new account
🧪 Testing
Manual Testing Checklist
Authentication Tests
 Register new user with valid credentials
 Register with duplicate email (should fail)
 Login with correct credentials
 Login with incorrect credentials (should fail)
 Session persists on page refresh
 Logout clears session
Task Management Tests
 Create task with all fields
 Create task with minimal fields
 Edit existing task
 Delete task
 Mark task as complete
 Mark task as incomplete
 Tasks persist after logout/login
Search and Filter Tests
 Search by task title
 Search by description
 Filter by status
 Filter by category
 Filter by priority
 Combine search and filters
 Clear all filters
Scanner Tests
 Scan valid HTTPS website
 Scan valid HTTP website
 Scan with invalid URL
 Review all vulnerability types
 Add scan result to tasks
 Scan different website types
Responsive Design Tests
 Test on mobile (320px - 767px)
 Test on tablet (768px - 1023px)
 Test on desktop (1024px+)
 Test in portrait and landscape
 All buttons are clickable
 Text is readable at all sizes
Automated Testing Setup
Install testing dependencies:

bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
Example test file src/App.test.js:

javascript
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Bug Tracker App', () => {
  test('renders login form', () => {
    render(<App />);
    expect(screen.getByText(/Bug Tracker/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  });

  test('switches between login and register', () => {
    render(<App />);
    const registerTab = screen.getByText(/Register/i);
    fireEvent.click(registerTab);
    expect(screen.getByPlaceholderText(/Full Name/i)).toBeInTheDocument();
  });
});
Run tests:

bash
npm test
🎨 Customization
Changing Colors
Modify the color scheme in your component:

javascript
// Primary color (Blue)
className="bg-blue-600" // Change to bg-purple-600, bg-green-600, etc.

// Status colors
Open: "bg-gray-100 text-gray-800"
In Progress: "bg-blue-100 text-blue-800"
Completed: "bg-green-100 text-green-800"

// Priority colors
Low: "bg-green-100 text-green-800"
Medium: "bg-yellow-100 text-yellow-800"
High: "bg-orange-100 text-orange-800"
Critical: "bg-red-100 text-red-800"
Adding Custom Categories
Update the category options:

javascript
const categories = ['bug', 'feature', 'enhancement', 'documentation', 'security', 'performance'];
Changing Date Format
Modify date display:

javascript
// Current format
new Date(task.dueDate).toLocaleDateString()

// Custom formats
new Date(task.dueDate).toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})
// Output: "October 23, 2025"

new Date(task.dueDate).toLocaleDateString('en-GB')
// Output: "23/10/2025"
Adding New Task Fields
Update taskForm state:
javascript
const [taskForm, setTaskForm] = useState({
  title: '',
  description: '',
  category: 'bug',
  priority: 'medium',
  status: 'open',
  dueDate: '',
  assignee: '',        // New field
  estimatedHours: 0    // New field
});
Add form inputs in the task modal
Update task display to show new fields
📊 Performance Optimization
Tips for Better Performance
Lazy Loading
javascript
import React, { lazy, Suspense } from 'react';

const TaskModal = lazy(() => import('./components/TaskModal'));

// Use with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <TaskModal />
</Suspense>
Memoization
javascript
import { useMemo } from 'react';

const filteredTasks = useMemo(() => {
  return tasks.filter(task => {
    // filtering logic
  });
}, [tasks, searchTerm, filterStatus]);
Virtual Scrolling for large task lists
bash
npm install react-virtual
Debounce Search Input
javascript
import { debounce } from 'lodash';

const debouncedSearch = debounce((value) => {
  setSearchTerm(value);
}, 300);
🔐 Security Best Practices
Frontend Security
Input Sanitization
bash
npm install dompurify
javascript
import DOMPurify from 'dompurify';

const cleanInput = DOMPurify.sanitize(userInput);
XSS Prevention
Never use dangerouslySetInnerHTML with user input
Escape all user-generated content
Use Content Security Policy headers
CSRF Protection
javascript
// Add CSRF token to requests
headers: {
  'X-CSRF-Token': csrfToken
}
Backend Security
Rate Limiting
javascript
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many login attempts'
});

app.use('/api/auth/login', loginLimiter);
Helmet.js for Headers
javascript
const helmet = require('helmet');
app.use(helmet());
Input Validation
javascript
const Joi = require('joi');

const taskSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(1000).required(),
  priority: Joi.string().valid('low', 'medium', 'high', 'critical')
});
📦 Package.json Reference
Complete package.json for the project:

json
{
  "name": "bug-tracker",
  "version": "1.0.0",
  "description": "Bug tracking and task management system with vulnerability scanner",
  "author": "Your Name",
  "license": "MIT",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint src/**/*.{js,jsx}",
    "format": "prettier --write src/**/*.{js,jsx,css,md}"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
🌐 Browser Support
Browser	Minimum Version	Status
Chrome	90+	✅ Fully Supported
Firefox	88+	✅ Fully Supported
Safari	14+	✅ Fully Supported
Edge	90+	✅ Fully Supported
Opera	76+	✅ Fully Supported
IE	N/A	❌ Not Supported
📱 Mobile Support
Platform	Status	Notes
iOS Safari	✅ Supported	iOS 14+
Chrome Android	✅ Supported	Android 8+
Samsung Internet	✅ Supported	Latest version
Firefox Mobile	✅ Supported	Latest version
🎯 Use Cases
For Developers
Track bugs in your projects
Manage feature requests
Document issues and solutions
Scan websites for vulnerabilities
Personal project management
For QA Teams
Bug reporting and tracking
Test case management
Regression tracking
Security audit tracking
Sprint planning
For Security Professionals
Website vulnerability scanning
Security audit tracking
Penetration testing notes
Compliance tracking
Incident management
For Small Teams
Lightweight project management
No complex setup required
Self-hosted option available
Free and open-source
Easy to customize
🔄 Migration Guide
From Other Tools
From Trello
Export Trello board to JSON
Convert cards to tasks format
Import using bulk task creation
From Jira
Export issues to CSV
Map Jira fields to task fields
Use CSV import feature (coming soon)
From GitHub Issues
Use GitHub API to fetch issues
Convert to task format
Import programmatically
💡 Tips & Tricks
Keyboard Shortcuts (Future Feature)
Ctrl/Cmd + N - New task
Ctrl/Cmd + F - Focus search
Ctrl/Cmd + K - Open command palette
Esc - Close modals
Productivity Tips
Use priority levels effectively
Set realistic due dates
Break large tasks into smaller ones
Review completed tasks weekly
Use categories to organize work
Best Practices
Write clear, descriptive titles
Include steps to reproduce bugs
Add recommendations from scans
Update task status regularly
Archive completed tasks monthly
🐛 Known Issues
Current Limitations
No real-time collaboration
Limited to browser storage (unless backend added)
Scanner has CORS limitations
No file attachments yet
No email notifications yet
Working On
Backend API implementation
Real-time updates via WebSockets
Enhanced scanner capabilities
Mobile native apps
Team collaboration features
📖 Additional Resources
Tutorials
Building RESTful APIs with Express
React Hooks Documentation
MongoDB Tutorial
JWT Authentication Guide
Tools & Libraries
Postman - API testing
MongoDB Compass - Database GUI
React DevTools - Debugging
Lighthouse - Performance audit
Community
Stack Overflow
Reddit r/reactjs
Dev.to React Community
📈 Analytics & Monitoring
Recommended Tools
Google Analytics - User behavior tracking
Sentry - Error tracking and monitoring
LogRocket - Session replay and debugging
Datadog - Performance monitoring
New Relic - Application performance monitoring
Setup Example (Sentry)
bash
npm install @sentry/react
javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});
🎓 Learning Resources
For Beginners
React Official Tutorial
JavaScript.info
MDN Web Docs
freeCodeCamp
For Advanced Users
React Patterns
Node.js Best Practices
System Design Primer
🏆 Credits
Created By
Your Name - GitHub | Twitter | LinkedIn

Contributors
See CONTRIBUTORS.md for a list of contributors.

Special Thanks
Everyone who reported bugs
All feature request contributors
The amazing open-source community
📄 Changelog
Version 1.0.0 (2025-10-23)
✨ Initial release
✅ User authentication system
✅ Complete CRUD operations for tasks
✅ Advanced filtering and search
✅ Website vulnerability scanner
✅ Responsive design
✅ Data persistence
✅ Dashboard with statistics
🚀 Quick Start Summary
bash
# 1. Clone the repository
git clone https://github.com/yourusername/bug-tracker.git

# 2. Install dependencies
cd bug-tracker
npm install

# 3. Start development server
npm start

# 4. Open browser
# Navigate to http://localhost:3000

# 5. Register account and start tracking!
Made with ❤️ by the Bug Tracker Team

If you find this project helpful, please consider giving it a ⭐ on GitHub!

Last Updated: October 23, 2025

Version: 1.0.0

Status: Active Development

Issues: Report a bug

Pull Requests: Contribute



