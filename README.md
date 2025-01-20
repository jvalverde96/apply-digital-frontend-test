# Apply Digital - Frontend Challenge

## Description

This project is a responsive web application built to demonstrate proficiency in React and Next.js, adhering to the provided design and functionality requirements. It includes a catalog of games fetched from a local API, with features like genre-based filtering, pagination, and a shopping cart. The app is deployed on Vercel and designed to be both functional and visually appealing while following best practices in frontend development.

Note: I implemented real pagination instead of the "see more" functionality, as the latter didn't align well with the concept of pagination. Additionally, the fetching logic was designed for a real pagination scenario, including support for total pages and the current page

## Features

### General

* Persistent Cart: Items added to the cart are stored in local storage to maintain state across sessions.
* Responsive Design: The UI adapts to various screen sizes for optimal usability.
* Custom Styling: Uses TailwindCSS for consistent design, adhering to the provided configuration file.
* Environment Variables: API URLs and other environment-specific settings are managed through .env files.
* Deployment: Fully deployed and accessible via Vercel.

### Catalog Page

* Game Listings: Displays a list of games with their details, such as name, description, price, and a "New" label for new items.
* Genre Filtering: Games can be filtered by genre using a dropdown selector, with the selected filter persisted in the URL.
* Pagination: Pagination functionality to load additional games using the page parameter.
* Add/Remove from Cart: Each game has an "Add to Cart" or "Remove" button based on its cart status.
* Loading Indicator: Displays a spinner while fetching data.

### Cart Page

* Cart Overview: Displays all items in the cart, including name, genre, price, and quantity.
* Remove Items: Each item in the cart has an "X" button to remove it.
* Order Summary: Shows the total number of items, individual item prices, and the overall total.
* Back to Catalog: A button redirects users back to the catalog page.

### Footer

* Apply Digital Logo: Redirects users to the home page (/ route) when clicked.

### Header

* Navigation Elements: Includes a logo that links to the home page and a cart icon linking to the cart page.

## Technical Highlights

* React & Next.js: Core technologies for building the app.
* API Integration: Fetches game data from a local API and implements filtering and pagination.
* Unit Testing: Ensures the app’s functionality through test cases written in TypeScript with Jest.
* Git History: Follows Conventional Commits for a clean and meaningful commit history.

## Getting Started

### Prerequisites

* Node.js and npm installed on your system.
* A local .env file in the root folder with the following variable: ```NEXT_PUBLIC_API_URL=http://localhost:3000/api/games```

### Installation

* Clone the repository: ```git clone https://github.com/jvalverde96/apply-digital-frontend-test.git```
* Navigate to the project folder: ```cd apply-digital-frontend-test```
* Install dependencies: ```npm install```
* Run the development server: ```npm run dev```

### Testing

* Run unit tests using: ```npm run tests```

### Deployment

The app is deployed on Vercel and accessible at:
[https://ad-frontend-test.vercel.app](https://apply-digital-frontend-test-three.vercel.app/)

## Contact

For any issues, please contact me at curly.dev.96@gmail.com
