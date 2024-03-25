

# LifeLink 

LifeLink is a comprehensive blood bank management system designed to streamline blood donation, inventory management, and distribution processes. Built using Tailwind CSS, Vite.js, React, and other modern technologies, LifeLink aims to provide a user-friendly and efficient platform for blood banks to manage their operations effectively.

## Features

- **User Authentication**: Secure login and registration system for blood donors, recipients, and administrators.
- **Donor Management**: Easy registration for blood donors, including profile management and donation history.
- **Recipient Management**: Registration and management of blood recipients, including requests for blood units.
- **Inventory Management**: Tracking and management of blood inventory, including blood type, quantity, and expiration dates.
- **Blood Request Handling**: Facilitate blood requests from hospitals and other medical facilities, matching them with available blood units.
- **Dashboard**: Comprehensive dashboard for administrators to monitor donation statistics, inventory levels, and overall system activity.

## Technologies Used
- **Tailwind CSS**: A utility-first CSS framework for building custom designs with ease.
- **Vite.js**: A fast and lightweight build tool for modern web development.
- **React**: A popular JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications, enabling navigation between different views.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **MySQL**: Open-source relational database management system.


## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js and npm (Node Package Manager)
- MySQL database server
- Git (for cloning the repository)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/lifelink.git
   ```

2. Navigate to the project directory:

   ```bash
   cd lifelink
   ```

3. Install dependencies for both the server and client:

   ```bash
   npm run install-all
   ```

4. Set up the MySQL database by importing the provided SQL schema and sample data located in the `database` directory.

### Configuration

1. Configure the database connection details in the `server/config/db.config.js` file.

   ```javascript
   module.exports = {
     HOST: "localhost",
     USER: "your_mysql_username",
     PASSWORD: "your_mysql_password",
     DB: "lifelink_db",
   };
   ```

### Usage

1. Start the Express server:

   ```bash
   npm run server
   ```

2. Start the React development server:

   ```bash
   npm run client
   ```

3. Open your web browser and navigate to `http://localhost:3000` to access the LifeLink application.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.



 



