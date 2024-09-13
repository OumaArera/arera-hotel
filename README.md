# Hotel Management Application

## Overview

This application is a hotel management system built with NestJS and TypeORM. It provides a RESTful API to manage hotel data, including creating, reading, updating, and deleting hotel information. The application connects to a PostgreSQL database and supports TypeScript.

## Features

- **Create a Hotel**: Add a new hotel with details such as name, location, rating, and description.
- **Retrieve Hotels**: Fetch a list of all hotels or details of a specific hotel by ID.
- **Update a Hotel**: Modify details of an existing hotel.
- **Delete a Hotel**: Remove a hotel from the system.

## Prerequisites

- Node.js (v14 or later)
- PostgreSQL
- TypeScript

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/OumaArera/hotel-management.git
cd hotel-management
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root and add your database configuration:

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_NAME=hotel-db
```

### 4. Run Migrations

Generate a migration (if needed):

```bash
npm run typeorm migration:generate -- -n UpdateHotelEntity
```

Run migrations:

```bash
npm run typeorm migration:run
```

### 5. Start the Application

```bash
npm run start
```

The server will start on `http://localhost:3000` by default.

## API Endpoints

### Get All Hotels

**Endpoint:** `GET /hotels`

**Description:** Retrieves a list of all hotels.

**Response:**
```json
{
    "success": true,
    "message": "Hotels retrieved successfully",
    "statusCode": 200,
    "data": [
        {
            "id": 2,
            "name": "Ouma Hotel",
            "location": "Nairobi",
            "rating": 4,
            "description": "Update test"
        },
        {
            "id": 3,
            "name": "Arera Hotel",
            "location": "Nairobi",
            "rating": 3,
            "description": "Another test"
        },
        {
            "id": 5,
            "name": "Areraa Hotel",
            "location": "Nairobi",
            "rating": 3,
            "description": "Another test"
        }
    ]
}
```

### Get Hotel by ID

**Endpoint:** `GET /hotels/:id`

**Description:** Retrieves details of a hotel by its ID.

**Response:**
```json
{
    "success": true,
    "message": "Hotel retrieved successfully",
    "statusCode": 200,
    "data": {
        "id": 2,
        "name": "Ouma Hotel",
        "location": "Nairobi",
        "rating": 4,
        "description": "Update test"
    }
}
```

### Create a Hotel

**Endpoint:** `POST /hotels`

**Description:** Creates a new hotel.

**Request Body:**
```json
{
  "name": "New Hotel",
  "location": "Downtown",
  "rating": 4.7,
  "description": "A new hotel located downtown."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Hotel created successfully.",
  "statusCode": 201,
  "data": {
    "name": "Areraa Hotel",
    "location": "Nairobi",
    "rating": 3,
    "description": "Another test",
    "id": 5
  }
}
```

### Update a Hotel

**Endpoint:** `PUT /hotels/:id`

**Description:** Updates details of an existing hotel.

**Request Body:**
```json
{
  "location": "Uptown",
  "rating": 4.8,
  "description": "An updated description for the hotel."
}
```

**Response:**
```json
{
    "success": true,
    "message": "Hotel updated successfully",
    "statusCode": 200,
    "data": {
        "id": 3,
        "name": "Arera Hotel",
        "location": "Nairobi",
        "rating": 3,
        "description": "Updating description"
    }
}
```

### Delete a Hotel

**Endpoint:** `DELETE /hotels/:id`

**Description:** Deletes a hotel by its ID.

**Response:**
```json
{
    "success": true,
    "message": "Hotel with ID 3 deleted successfully",
    "statusCode": 200
}
```

## Development

To start the development server with auto-reloading, use:

```bash
npm start
```

## Testing


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Developer
This project has been developed by John Ouma alias Ouma Arera
