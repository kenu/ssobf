# Social Sign On Backend Frontend (SSOBF)

A full-stack application demonstrating OAuth2 authentication with Google using Spring Boot and React.

## Features

- Google OAuth2 Authentication
- Spring Boot Backend (Port: 8080)
- React Frontend with Vite (Port: 5173)
- Protected Profile Page
- Sample Data Display
- Responsive Design

## Tech Stack

### Backend
- Java 17
- Spring Boot 3.2.1
- Spring Security
- OAuth2 Client
- Maven

### Frontend
- React 18
- Vite
- React Router v6
- CSS Modules
- ESLint

## Prerequisites

- Java 17 or higher
- Node.js 16 or higher
- npm or yarn
- Google OAuth2 credentials

## Configuration

### Google OAuth2 Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Create OAuth2 credentials
5. Set the authorized redirect URI to: `http://localhost:8080/login/oauth2/code/google`

### Environment Variables

Backend (application.yml):
```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: ${GOOGLE_CLIENT_ID}
            client-secret: ${GOOGLE_CLIENT_SECRET}
```

## Getting Started

### Backend

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Set environment variables:
   ```bash
   export GOOGLE_CLIENT_ID=your_client_id
   export GOOGLE_CLIENT_SECRET=your_client_secret
   ```

3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open `http://localhost:5173` in your browser
2. Click "Sign in with Google" button
3. Complete Google authentication
4. View your profile and sample data

## Project Structure

```
ssobf/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/example/ssobf/
│   │   │   │       ├── config/
│   │   │   │       ├── controller/
│   │   │   │       └── SsobfApplication.java
│   │   │   └── resources/
│   │   │       └── application.yml
│   └── pom.xml
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   └── Profile.jsx
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## Security

- OAuth2 for secure authentication
- CORS configuration for frontend-backend communication
- Environment variables for sensitive data


### prompt: backend frontend google sso
```
backend:
8080, spring boot, google callback url: http://localhost:8080/login/oauth2/code/google
frontend:
5173, vite react.js, login page and profile page, sample data array
```
