# Full Stack Learning Management System (LMS)

A complete Learning Management System built using the **MERN Stack** (MongoDB, Express, React, Node.js). This platform allows students to browse, purchase, and watch courses, while educators can create, manage, and publish their own content.

## 🚀 Features

### For Students
* **Browse & Search:** Explore a variety of courses with search and filtering capabilities.
* **Course Enrollment:** Secure payment integration via **Stripe** to purchase courses.
* **Progress Tracking:** Track completed lectures and course progress in real-time.
* **Course Player:** Dedicated video player interface to watch course content.
* **Ratings & Reviews:** Rate and review courses after enrollment.
* **My Enrollments:** A personal dashboard to manage and access purchased courses.

### For Educators
* **Educator Dashboard:** Analytics overview showing total earnings, total enrollments, and course statistics.
* **Course Management:** Create and publish new courses with rich text descriptions, thumbnail uploads, and structured chapters/lectures.
* **Student Insights:** View a list of enrolled students for each course.
* **Rich Text Editor:** Integrated Quill editor for detailed course descriptions.

### General
* **User Authentication:** Secure login and signup using **Clerk**.
* **Responsive Design:** Fully responsive UI built with **Tailwind CSS**.
* **Image Storage:** Efficient image management using **Cloudinary**.

## 🛠️ Tech Stack

**Frontend:**
* React.js (Vite)
* Tailwind CSS
* React Router DOM
* Context API
* Axios
* React Toastify
* Quill (Rich Text Editor)

**Backend:**
* Node.js
* Express.js
* MongoDB (Mongoose)
* Clerk SDK (Authentication)
* Stripe (Payments)
* Cloudinary (Media Storage)
* Multer (File Uploads)

## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your `.env` files.

### Client (`client/.env`)
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000
VITE_CURRENCY=USD
```

### Server (`server/.env`)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rushi-0369/smartprep-ai.git
   cd smartprep-ai
   ```
2. **Setup Backend**
   ```bash
   cd server
   npm install
   npm run server
   ```
   The backend server will start on port 5000.
3. **Setup Frontend** Open a new terminal window:
   ```bash
   cd client
   npm install
   npm run dev
   ```
   The frontend application will start on http://localhost:5173.

## 📂 Project Structure

```
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # App state management
│   │   ├── pages/          # Full page components (Home, CourseDetails, etc.)
│   │   └── ...
│   └── ...
├── server/                 # Node.js Backend
│   ├── configs/            # Database and Cloudinary configs
│   ├── controllers/        # Route logic
│   ├── models/             # Mongoose database models
│   ├── routes/             # API routes
│   └── server.js           # Entry point
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request

## 📝 License

This project is open source and available under the MIT License.
   
