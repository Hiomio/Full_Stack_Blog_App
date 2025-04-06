# Full-Stack Blog Application

<div align="center">
  <img src="/api/placeholder/800/400" alt="Blog App Banner" />
  <p>A modern, responsive, and feature-rich blogging platform built with MERN stack</p>
  
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-green.svg)](https://www.mongodb.com/)
  [![Express](https://img.shields.io/badge/Express-4.17+-lightgrey.svg)](https://expressjs.com/)
  [![React](https://img.shields.io/badge/React-17.0+-61DAFB.svg)](https://reactjs.org/)
  [![Node](https://img.shields.io/badge/Node-14.0+-339933.svg)](https://nodejs.org/)
</div>

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design optimized for all devices
- **User Authentication**: Secure signup/login with Firebase
- **Content Management**: Create, edit, and delete blog posts
- **Rich Text Editor**: Format your content with a powerful WYSIWYG editor
- **Image Uploads**: Add images to your posts with cloud storage integration
- **Comments**: Engage with readers through a threaded comment system
- **Categories & Tags**: Organize content for better discoverability
- **Search Functionality**: Find posts quickly with full-text search
- **User Profiles**: Personalized author pages with bio and post history
- **Admin Dashboard**: Manage your blog with comprehensive analytics

## 📋 Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB (local or Atlas)
- Firebase account (for authentication)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Hiomio/Full_Stack_Blog_App.git
cd Full_Stack_Blog_App
```

### 2. Install Dependencies

For the backend:

```bash
cd api
npm install
```

For the frontend:

```bash
cd client
npm install
```

### 3. Environment Variables

#### Backend (.env in api directory)

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
FIREBASE_API_KEY=your_firebase_api_key
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

#### Frontend (.env in client directory)

```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
```

### 4. Start Development Servers

For the backend:

```bash
cd api
npm run dev
```

For the frontend:

```bash
cd client
npm start
```

Visit `http://localhost:3000` to see your application running!

## 📂 Project Structure

```
Full_Stack_Blog_App/
│
├── api/                    # Backend
│   ├── models/             # Database schemas
│   ├── routes/             # API endpoints
│   
│   └── index.js            # Entry point
│
├── client/                 # Frontend
│   ├── public/             # Static files
│   └── src/
│       ├── components/     # Reusable components
│       ├── context/        # React context
│       ├── pages/          # Page components
│       ├── firbase.js      # Authentication
│       └── App.js          # Main component
│
└── README.md               # Project documentation
```

## 🔧 Technologies Used

### Backend
- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- Firebase Admin SDK
- Multer & Cloudinary

### Frontend
- React.js & React Router
- Context API & Hooks
- Axios
- React (rich text editor)
- Firebase Authentication
- Styled Components


## 📊 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|--------------|
| POST | /api/auth/register | Register new user | No |
| POST | /api/auth/login | User login | No |
| GET | /api/posts | Get all posts | No |
| GET | /api/posts/:id | Get single post | No |
| POST | /api/posts | Create new post | Yes |
| PUT | /api/posts/:id | Update post | Yes |
| DELETE | /api/posts/:id | Delete post | Yes |
| GET | /api/categories | Get all categories | No |
| POST | /api/categories | Create category | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Firebase Documentation](https://firebase.google.com/docs)
- All open source packages used in this project

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/Hiomio">Hiomio</a></p>
</div>
