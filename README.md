# StudyLink
## Key Features
- **Google Authentication**: Secure login and registration system using Google OAuth for seamless user authentication.
- **Real-Time Chatting**: Real-time messaging powered by **Socket.IO**, enabling instant communication between users.
- **File Uploads**: Ability to upload images and other files using **Multer** middleware, which handles file storage efficiently.
- **Abstract Conversation Management**: The system maintains an abstract conversation model, ensuring an organized and efficient structure for chats between users.
- **Online/Offline Status Tracking**: The app tracks users' online/offline status, allowing real-time updates on user availability.
- **Timestamp for Messages**: Every message sent in the chat has an associated timestamp, making it easier to track the conversation timeline.
- **Latest Message Display**: The latest message is displayed under the name of the sender in the chat dialog, with automatic scrolling to the newest message for a smooth user experience.
- **Responsiveness**: The application is fully responsive, ensuring that it works seamlessly on different screen sizes, from mobile to desktop, using **CSS media queries** and responsive design techniques.
- **React Components, Hooks, and Context**: The frontend leverages **React components**, **hooks** for state management, and **React Context** to deal with shared data across the application.

## Technologies Used
- **MongoDB**: NoSQL database for storing user data, photos, and messages.
- **Express.js**: Web application framework for Node.js used to handle routing and server-side logic.
- **React**: Frontend JavaScript library for building user interfaces.
- **Node.js**: JavaScript runtime for the backend server.
- **Socket.IO**: Library for enabling real-time communication between users.
- **Multer**: Middleware for handling file uploads.
- **Google OAuth**: For secure authentication via Google.

## Setup and Installation

To set the project up and run it locally, follow these setup steps for both the frontend and backend:

### 1. **Setting up the Frontend**

The frontend of the application is built using React. To begin, ensure you have React and other necessary dependencies set up.

- Install React by running the necessary commands in the `task` directory. This will set up the development environment for React.
- The React app will handle the frontend UI, including the authentication, chat system, and file uploads.

### 2. **Setting up the Backend**

For the backend, the server is built using Node.js with **Express**, **Mongoose**, **Socket.IO**, and **Multer**.

- **Express** is used to create the web server and handle the API routes for file uploads, messaging, and user authentication.
- **Mongoose** connects the app to a MongoDB database where user data and messages are stored.
- **Socket.IO** is used to implement the real-time messaging feature, enabling communication between users without needing to refresh the page.
- **Multer** middleware is used to handle file uploads from users, supporting image and other file types.

### 3. **Backend Configuration**
To configure the backend, follow these steps:

- Set up the server with **Express** to listen for requests.
- Set up **Mongoose** to connect to a MongoDB database for storing user and message data.
- Implement **Socket.IO** for real-time messaging and communication.
- Use **Multer** middleware to handle file uploads, ensuring files are stored in the right location on the server.

### 4. **Setting Up Google Authentication**

To enable Google authentication, follow these steps:

- Register your application on the [Google Developer Console](https://console.developers.google.com/).
- Obtain your Google Client ID and Client Secret.
- Set up the Google OAuth flow in your backend to authenticate users with their Google accounts.

### 5. **Multer Middleware for File Uploads**

- Set up **Multer** to handle file uploads from users. Configure it to save uploaded files (e.g., images) in a specific directory on your server.
- Implement routes for users to upload files securely.

### 6. **Responsiveness and UI**

The frontend is designed to be fully responsive using **CSS** and **React components**. This ensures that the application adapts to various screen sizes, from mobile to desktop. Use **React hooks** for managing state and **React Context** for shared data across components.

### 7. **Real-Time Chat System with Socket.IO**

Set up **Socket.IO** for the real-time messaging feature:

- Handle real-time communication by listening to messages and sending them between connected clients.
- Implement a system for managing online and offline users, displaying timestamps for messages, and scrolling to the latest message in the chat interface.

### 8. **Running the Application Locally**

Once the setup is complete, you can run the project locally:

- Start the backend server on **port 5000** to handle API requests and socket connections.
- Start the React frontend on **port 3000** to run the client-side application.

Ensure both the frontend and backend are running to enable full functionality of the application, including real-time messaging, file uploads, and authentication.

## Contributing
If you'd like to contribute to the project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your branch (`git push origin feature-name`).
6. Create a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
