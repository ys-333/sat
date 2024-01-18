# FRONTEND
React application to display, create, delete, and many more features to get SAT scores of individual users.



## Getting Started

Follow the instructions below to start the project on your local machine.
- Navigate to the project directory:
- cd frontend
- npm install
- Run the development server - npm run dev
- Open http://localhost:3000 in your web browser to view the application.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/ys-333/sat.git
```

*********************************************************************************************************

# BACKEND

## Getting Started

Follow the instructions below to start the project on your local machine.
- Navigate to the project directory:
- cd backend
- npm install
- Run the development server - npm run dev
- Open http://localhost:3000 in your web browser to view the application.

### Prerequisites

- Node.js and npm installed on your machine.

## Project Architecture

backend/
| -- utils
| | -- validator.js
|-- middleware
| | -- validation-middleware.js
|-- models/
| |-- User.js
|-- routes/
  | -- User.js 
| 
|-- controllers/
| |-- User.js
|-- config/
| |-- db.js
|-- .env
|-- .gitignore
|-- index.js
|-- README.md

### ROUTES
  - POST /user/insert_data (To create a new User, and here validator.js to verify and sanitize the input before saving to the database.)
  - GET /user/get_data (To get all user's data from the database.)
  - POST /user/get_rank (To get the rank of user)
  - PATCH  /user/update_data (To update users data)
  - DELETE /user/delete_user (To delete user data from database)

### Further performance improvement scope
  - We could have cached the user's details, instead of making an API call every time.
    


