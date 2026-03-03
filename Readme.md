# Disaster Relief Frontend

A modern, responsive web application built with React that facilitates disaster relief operations by helping reunite missing people, manage donations, and coordinate community relief efforts during disasters.

**Live URL:** https://disaster-relief-frontend-silk.vercel.app

## 🌟 Features

### Core Features
- **Report Missing People** - Post detailed reports of missing persons with photos, location, and personal details
- **View Missing Reports** - Browse all active missing person reports with detailed information
- **Report Found Persons** - Help reunite families by reporting found persons matching missing reports
- **Real-time Updates** - Socket.io integration for real-time notifications and updates across the platform
- **Donation Management** - Pledge monetary donations or donate essential supplies (food, clothes)
- **Location Mapping** - Interactive map showing last seen locations of missing persons

### User Features
- **User Authentication** - Secure login and signup with email/password
- **OAuth Integration** - Third-party authentication support for faster login
- **User Dashboard** - Track your reports and donation history
- **Community Participation** - Volunteer and help locate missing persons

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd Disaster_relief_frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```
VITE_API_BASE_URL=http://localhost:5000
# Or use the deployed backend URL:
# VITE_API_BASE_URL=https://disaster-relief-backend-x5uo.onrender.com
```

4. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

5. **Build for production**
```bash
npm run build
```

6. **Preview production build**
```bash
npm run preview
```

## 🚀 Key Pages & Features

### Home Page
- Overview of the platform
- Quick statistics of active reports
- Links to key features
- Call-to-action buttons for reporting

### Missing Persons
- **View Missing Reports** - Browse all active missing person reports with filters
- **Report Details** - Click on any report to see full details, location, and photos
- **Real-time Status** - Automatic updates when someone is marked as found

### Report Missing
- Submit a detailed report with:
  - Full name and age
  - Photos
  - Last seen location
  - Physical description
  - Contact information
- Instant broadcasting to volunteers and community

### Report Found
- Help reunite families by reporting found persons
- Match found persons with missing reports
- Restricted to registered volunteers/rescue workers

### Donations
- Pledge monetary donations for disaster relief
- Contribute essential supplies (food, clothes)
- View donation history and impact
- Real-time donation feed

### User Authentication
- **Signup** - Create new account with email and password
- **Login** - Secure login with credentials
- **OAuth** - Quick login with third-party providers
- **User Profile** - Manage account settings

## 💻 Technologies Used

### Frontend Framework
- **React 18.2.0** - UI library
- **Vite** - Modern build tool and dev server
- **React Router DOM** - Client-side routing

### State Management & Communication
- **Axios** - HTTP client for API requests
- **Socket.io Client** - Real-time bidirectional communication

### UI & Icons
- **React Icons** - Icon library (Font Awesome, Feather, etc.)

### Development Tools
- **Vite** - Lightning-fast build tool
- **Vite React Plugin** - React-specific optimizations

## 📡 API Integration

The frontend communicates with the backend API for:
- User authentication
- Missing person reports (CRUD operations)
- Found person reports
- Donation management
- Real-time updates via WebSocket

**Backend API URL:** https://disaster-relief-backend-x5uo.onrender.com

## 🔐 Authentication

- Token-based JWT authentication
- Secure localStorage token management
- Protected routes requiring authentication
- OAuth support for social authentication

## 🗺️ Real-time Features

### Socket.io Integration
- Real-time notifications about new missing reports
- Live updates when persons are found
- Instant donation feed updates
- Live volunteer status updates

## 🎨 UI/UX Features

- Responsive design that works on mobile, tablet, and desktop
- Dark/light mode support (CSS custom properties)
- Interactive map for location visualization
- Smooth animations and transitions
- Accessibility-friendly components
