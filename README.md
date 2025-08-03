# InsightGrid Analytics

A modern data consultancy website built with React and vanilla JavaScript.

## About

InsightGrid Analytics specializes in transforming raw data into actionable business intelligence. We provide comprehensive data analytics solutions including:

- Business Intelligence & Dashboards
- Data Engineering & Pipeline Development  
- Analytics Strategy & Implementation
- Predictive Modeling & Forecasting

## Features

- Responsive single-page application (SPA)
- Modern UI with Tailwind CSS
- Client-side routing with React Router
- Contact forms and newsletter subscription
- Blog with category filtering
- Portfolio showcase
- Service offerings display

## Running the Application

### Option 1: Using Python (Recommended)
```bash
# Start the SPA-compatible server
python3 server.py 8000

# Or use npm scripts
npm start
```

### Option 2: Using Python's built-in server (Basic)
```bash
python3 -m http.server 8000
```

**Note:** Option 1 is recommended as it properly handles SPA routing. With Option 2, direct URL access (like `/blog` or `/contact`) will show 404 errors, but navigation through the UI will work.

## Accessing the Website

Once the server is running, visit:
- **Home:** http://localhost:8000/
- **About:** http://localhost:8000/about  
- **Services:** http://localhost:8000/services
- **Portfolio:** http://localhost:8000/portfolio
- **Blog:** http://localhost:8000/blog
- **Contact:** http://localhost:8000/contact

All routes now support direct access and page refresh when using the SPA server.

## Project Structure

```
/
├── index.html          # Main HTML file
├── App.js             # Main React application component
├── main.js            # Application entry point
├── server.py          # SPA-compatible development server
├── css/
│   └── styles.css     # Tailwind CSS and custom styles
├── components/        # React components
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Footer.js
│   ├── ContactForm.js
│   ├── BlogCard.js
│   ├── ServiceCard.js
│   ├── PortfolioCard.js
│   ├── TestimonialCard.js
│   └── NewsletterForm.js
└── pages/            # Page components
    ├── Home.js
    ├── About.js
    ├── Services.js
    ├── Portfolio.js
    ├── Blog.js
    └── Contact.js
```

## Technologies Used

- **Frontend:** React (via CDN), HTML5, CSS3
- **Styling:** Tailwind CSS
- **Icons:** Font Awesome
- **Routing:** React Router
- **Server:** Python HTTP Server with SPA support

## Contact

- **Email:** hello@insightgridanalytic.com
- **Website:** [InsightGrid Analytics](http://localhost:8000)

---

*Transforming data into insights, insights into action.*