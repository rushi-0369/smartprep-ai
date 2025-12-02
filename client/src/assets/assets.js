import logo from './logo.png'
import logo_dark from './logo_dark.png'
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import upload_area from './upload_area.svg'
import sketch from './sktech.svg'
import microsoft_logo from './microsoft_logo.svg'
import walmart_logo from './walmart_logo.svg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'
import user_icon from './user_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import my_course_icon from './my_course_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import file_upload_icon from './file_upload_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import patients_icon from './patients_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'
import course_4 from './course_4.png'
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'
import lesson_icon from './lesson_icon.svg'


export const assets = {
    logo,
    search_icon,
    sketch,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    adobe_logo,
    paypal_logo,
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,
    star,
    star_blank,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    arrow_icon,
    dropdown_icon,
    cross_icon,
    upload_area,
    logo_dark,
    down_arrow_icon,
    time_left_clock_icon,
    time_clock_icon,
    user_icon,
    home_icon,
    add_icon,
    my_course_icon,
    person_tick_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    course_4,
    file_upload_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    profile_img,
    profile_img2,
    profile_img3,
    play_icon,
    blue_tick_icon,
    lesson_icon
}

export const dummyEducatorData = {
    "_id": "675ac1512100b91a6d9b8b99",
    "name": "CodeMaster Pro",
    "email": "instructor@codemaster.io",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
    "createdAt": "2025-01-01T10:00:00.000Z",
    "updatedAt": "2025-01-05T12:00:00.000Z",
    "__v": 0
}

export const dummyTestimonial = [
    {
        name: 'Sarah Connor',
        role: 'Frontend Dev @ Netflix',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        rating: 5,
        feedback: 'The course structure is fantastic. I went from knowing nothing about React to building full-scale applications in just weeks.',
    },
    {
        name: 'Mike Ross',
        role: 'Senior Dev @ Uber',
        image: 'https://randomuser.me/api/portraits/men/91.jpg',
        rating: 4.5,
        feedback: 'Detailed explanations and great real-world examples. Highly recommended for anyone looking to upskill in backend technologies.',
    },
    {
        name: 'Emily Blunt',
        role: 'Data Scientist @ Meta',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 5,
        feedback: 'The Python for Data Science module was exactly what I needed. Clear, concise, and packed with actionable insights.',
    },
];

export const dummyDashboardData = {
    "totalEarnings": 1250.50,
    "enrolledStudentsData": [
        {
            "courseTitle": "Mastering JavaScript ES6+",
            "student": {
                "_id": "user_101",
                "name": "John Doe",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Python for Professionals",
            "student": {
                "_id": "user_102",
                "name": "Alice Wonderland",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Full-Stack Web Dev Bootcamp",
            "student": {
                "_id": "user_103",
                "name": "Bob Builder",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Data Analysis with Pandas",
            "student": {
                "_id": "user_104",
                "name": "Charlie Brown",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        }
    ],
    "totalCourses": 6
}

export const dummyStudentEnrolled = [
    {
        "student": {
            "_id": "user_101",
            "name": "John Doe",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Mastering JavaScript ES6+",
        "purchaseDate": "2025-01-05T09:00:00.000Z"
    },
    {
        "student": {
            "_id": "user_102",
            "name": "Alice Wonderland",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Python for Professionals",
        "purchaseDate": "2025-01-06T10:15:30.000Z"
    },
    {
        "student": {
            "_id": "user_103",
            "name": "Bob Builder",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Full-Stack Web Dev Bootcamp",
        "purchaseDate": "2025-01-07T14:45:00.000Z"
    }
]

export const dummyCourses = [
    {
        "_id": "course_001",
        "courseTitle": "Mastering JavaScript ES6+",
        "courseDescription": "<h2>Unlock the Modern Web</h2><p>JavaScript has evolved. This course takes you deep into ES6+ features, asynchronous programming with Promises and Async/Await, and functional programming patterns.</p><p>Ideal for developers moving from basic jQuery or legacy JS to modern frontend frameworks.</p><ul><li>Deep dive into Closures and Scope</li><li>Master Async/Await patterns</li><li>Modern Tooling: Webpack and Babel</li></ul>",
        "coursePrice": 59.99,
        "isPublished": true,
        "discount": 10,
        "courseContent": [
            {
                "chapterId": "ch_js_01",
                "chapterOrder": 1,
                "chapterTitle": "Modern Syntax",
                "chapterContent": [
                    {
                        "lectureId": "lec_js_01",
                        "lectureTitle": "Arrow Functions & 'this'",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink_js1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lec_js_02",
                        "lectureTitle": "Destructuring & Spread Operator",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink_js2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b99",
        "enrolledStudents": ["user_101", "user_105"],
        "courseRatings": [
            { "userId": "user_105", "rating": 4.5, "_id": "rating_001" }
        ],
        "createdAt": "2025-01-01T08:00:00.000Z",
        "updatedAt": "2025-01-10T09:00:00.000Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/W6NZfCO5SIk/maxresdefault.jpg"
    },
    {
        "_id": "course_002",
        "courseTitle": "Python for Professionals: AI & ML Focus",
        "courseDescription": "<h2>From Scripting to Intelligence</h2><p>Go beyond basic scripts. Learn how to structure professional Python applications and dive into the libraries that power Artificial Intelligence.</p><p>We cover advanced OOP, Decorators, and an intro to TensorFlow.</p><ul><li>Advanced Python Design Patterns</li><li>Data Manipulation with Pandas</li><li>Intro to Neural Networks</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "ch_py_01",
                "chapterOrder": 1,
                "chapterTitle": "Professional Python",
                "chapterContent": [
                    {
                        "lectureId": "lec_py_01",
                        "lectureTitle": "Decorators and Generators",
                        "lectureDuration": 45,
                        "lectureUrl": "https://youtu.be/samplelink_py1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b99",
        "enrolledStudents": ["user_102"],
        "courseRatings": [],
        "createdAt": "2025-01-02T10:00:00.000Z",
        "updatedAt": "2025-01-02T10:00:00.000Z",
        "__v": 0,
        "courseThumbnail": "https://img.youtube.com/vi/_uQrJ0TkZlc/maxresdefault.jpg"
    },
    {
        "_id": "course_003",
        "courseTitle": "Full-Stack Web Dev Bootcamp 2025",
        "courseDescription": "<h2>Build Complete Apps</h2><p>The updated 2025 edition of our best-selling bootcamp. Learn MERN stack (MongoDB, Express, React, Node) from scratch.</p><p>Build a real-world E-commerce application by the end of this course.</p><ul><li>React 19 & Server Components</li><li>Node.js Performance Optimization</li><li>Database Design with MongoDB</li></ul>",
        "coursePrice": 129.99,
        "isPublished": true,
        "discount": 30,
        "courseContent": [
            {
                "chapterId": "ch_web_01",
                "chapterOrder": 1,
                "chapterTitle": "Frontend Mastery",
                "chapterContent": [
                    {
                        "lectureId": "lec_web_01",
                        "lectureTitle": "React Hooks Deep Dive",
                        "lectureDuration": 60,
                        "lectureUrl": "https://youtu.be/samplelink_web1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b99",
        "enrolledStudents": ["user_103", "user_106"],
        "courseRatings": [
            { "userId": "user_106", "rating": 5, "_id": "rating_002" }
        ],
        "createdAt": "2025-01-03T11:00:00.000Z",
        "updatedAt": "2025-01-03T11:00:00.000Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/nu_pCVPKzTk/maxresdefault.jpg"
    },
    {
        "_id": "course_004",
        "courseTitle": "Ethical Hacking & Cyber Security Masterclass",
        "courseDescription": "<h2>Secure the Future</h2><p>Learn to think like a hacker to defeat them. This course covers penetration testing, network security, and social engineering defenses.</p><ul><li>Kali Linux for Beginners</li><li>Wireless Network Attacks</li><li>Web Application Security (OWASP Top 10)</li></ul>",
        "coursePrice": 99.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "ch_sec_01",
                "chapterOrder": 1,
                "chapterTitle": "Reconnaissance",
                "chapterContent": [
                    {
                        "lectureId": "lec_sec_01",
                        "lectureTitle": "Passive vs Active Recon",
                        "lectureDuration": 40,
                        "lectureUrl": "https://youtu.be/samplelink_sec1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b99",
        "enrolledStudents": [],
        "courseRatings": [],
        "createdAt": "2025-01-04T12:00:00.000Z",
        "updatedAt": "2025-01-04T12:00:00.000Z",
        "__v": 0,
        "courseThumbnail": "https://img.youtube.com/vi/3Kq1MIfTWCE/maxresdefault.jpg"
    }
]