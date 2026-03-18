# Halleyx Dashboard Builder

## Overview

This is a full-stack dashboard builder that allows users to dynamically create and manage dashboards with widgets such as KPI cards, charts, and tables.

Users can:

* Add widgets (KPI, Bar Chart, Pie Chart, Table)
* View real-time data from backend
* Save dashboard layout to database
* Load saved layouts dynamically
* Visualize product and order data

---

## Tech Stack

### Frontend

* React.js
* Recharts
* CSS

### Backend

* Spring Boot
* REST APIs

### Database

* MySQL

---

## Features

* Dynamic dashboard configuration
* Bar chart for orders by product
* Pie chart for product distribution
* Orders table view
* Save and load dashboard layout
* Real-time data rendering
* Clean and responsive UI

---

## Project Structure

```
halleyx-dashboard/

frontend/
  src/
    components/
    pages/
    services/
    styles/
    widgets/

backend/
  controller/
  service/
  repository/
  model/
  dto/
```

---

## How to Run

### Backend

```
cd backend
mvn spring-boot:run
```

Runs on: http://localhost:8080

---

### Frontend

```
cd frontend
npm install
npm run dev
```

Runs on: http://localhost:5173

---

## API Endpoints

| Method | Endpoint              | Description           |
| ------ | --------------------- | --------------------- |
| GET    | /api/orders           | Get all orders        |
| GET    | /api/dashboard/kpi    | Get KPI data          |
| GET    | /api/dashboard/layout | Load saved layout     |
| POST   | /api/dashboard/layout | Save dashboard layout |

---

## Author

Deepak
B.E Computer Science and Design

---

## Future Improvements

* Drag and drop widgets
* Dark mode
* Authentication system
* Real-time updates
* Mobile responsiveness

---

## Conclusion

This project demonstrates full-stack development, dynamic UI building, and data visualization. It is suitable for placements, internships, and hackathons.
