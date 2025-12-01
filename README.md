# 🌍 Wanderlust Tours - Full Stack Travel Website

A complete full-stack tour and travels booking platform built with React and Node.js.

## 🚀 Features

### Frontend (React)
- **Home Page** - Hero section with featured destinations
- **Destinations** - Browse all available tour packages with search
- **Destination Details** - Detailed view with booking option
- **Booking System** - Complete booking form with validation
- **Contact Page** - Contact form for inquiries
- **Responsive Design** - Mobile-friendly UI

### Backend (Node.js + Express + MongoDB)
- RESTful API architecture
- MongoDB database integration
- CRUD operations for destinations, bookings, and contacts
- Search functionality
- Error handling and validation

## 📦 Tech Stack

**Frontend:**
- React 18
- React Router DOM
- Axios
- React Icons
- CSS3

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tour-travels
NODE_ENV=development
```

4. Start the server:
```bash
npm start
# or for development with nodemon
npm run dev
```

Server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## 📡 API Endpoints

### Destinations
- `GET /api/destinations` - Get all destinations
- `GET /api/destinations/:id` - Get single destination
- `POST /api/destinations` - Create destination (Admin)
- `GET /api/destinations/search/:query` - Search destinations

### Bookings
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/:id` - Get single booking
- `POST /api/bookings` - Create new booking
- `PATCH /api/bookings/:id` - Update booking status

### Contact
- `GET /api/contacts` - Get all contact messages
- `POST /api/contact` - Submit contact form

### Health
- `GET /api/health` - Server health check

## 📁 Project Structure

```
tour-travels-fullstack/
├── backend/
│   ├── server.js           # Express server & API routes
│   ├── package.json        # Backend dependencies
│   └── .env.example        # Environment variables template
│
└── frontend/
    ├── public/
    │   └── index.html      # HTML template
    ├── src/
    │   ├── components/     # Reusable components
    │   │   ├── Navbar.js
    │   │   └── Footer.js
    │   ├── pages/          # Page components
    │   │   ├── Home.js
    │   │   ├── Destinations.js
    │   │   ├── DestinationDetail.js
    │   │   ├── Booking.js
    │   │   └── Contact.js
    │   ├── App.js          # Main app component
    │   ├── index.js        # React entry point
    │   └── index.css       # Global styles
    └── package.json        # Frontend dependencies
```

## 🎨 Features in Detail

### Destination Management
- View all destinations with images, prices, and ratings
- Search destinations by name, description, or category
- Detailed destination pages with highlights
- Category-based filtering

### Booking System
- User-friendly booking form
- Date selection with validation
- Traveler count selection
- Additional message field
- Success/error notifications

### Contact System
- Contact form with validation
- Business hours display
- Contact information display
- Email and phone integration

## 🔐 Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/Render)
1. Set environment variables
2. Deploy backend code
3. Update MongoDB URI

### Frontend Deployment (Vercel/Netlify)
1. Build the React app: `npm run build`
2. Deploy the build folder
3. Update API endpoint URLs

## 📝 Sample Data

To populate the database with sample destinations, you can use the POST endpoint:

```javascript
POST /api/destinations
{
  "name": "Maldives Paradise",
  "description": "Experience crystal-clear waters and luxury resorts",
  "price": 1299,
  "duration": "7 Days / 6 Nights",
  "image": "https://example.com/maldives.jpg",
  "rating": 4.8,
  "category": "Beach",
  "highlights": [
    "Luxury resort accommodation",
    "Water sports activities",
    "Spa treatments",
    "Island hopping tours"
  ]
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created with ❤️ by Wanderlust Tours Team

## 📞 Support

For support, email info@wanderlusttours.com or join our Slack channel.
