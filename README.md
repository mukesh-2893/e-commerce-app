# Awesome E-commerce App

Welcome to our Awesome E-commerce App, where shopping is made simple and delightful!

## Features

### Home Page

- **Product Showcase**: Browse through a wide range of products displayed beautifully.
- **Add to Cart**: Easily add products to your shopping bag with a single click.
- **Product Details**: Click on any product to view detailed information.

### Product Details Page

- **Comprehensive Details**: Explore all aspects of each product, including descriptions, pricing, and availability.
- **Add to Cart**: Directly add the product to your shopping bag from this page.

### My Cart

- **Shopping Bag Overview**: See all selected products with quantities and total amount.
- **Modify Cart**: Easily remove items or adjust quantities as needed.
- **Checkout**: Seamless checkout process to complete your purchase securely.

### Header

- **Navigation**: Navigate effortlessly between different pages.
- **Search Functionality**: Find products quickly using search by name or category.

## API Endpoints

### Product APIs

- **View All Products**: `GET /api/products`
  - Retrieves a list of all available products.

- **Get Product Details**: `GET /api/products/:productId`
  - Retrieves detailed information about a specific product.

### Cart APIs

- **Add to Cart**: `POST /api/my-cart`
  - Adds a product to the shopping cart.

- **Remove from Cart**: `DELETE /api/my-cart`
  - Removes a product from the shopping cart.

- **Proceed to Checkout**: `POST /api/cart/checkout`
  - Initiates the checkout process.

### Search APIs

- **Search Suggestions**: `GET /api/search/suggestions?q=<search_query>`
  - Provides suggestions based on the search query entered.

- **Search Products**: `GET /api/search`
  - Searches for products based on the search query.
### Optional APIs and components
- **Product Form**: if you use this from then you can add your products
- **add products api**: use this api to add products into mongoDB server

## Technologies Used

- Frontend: Nextjs, Redux, Tailwind CSS, Spinners
- Backend: Node.js(Nextjs API), MongoDB server
- Deployment: Netlify

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
