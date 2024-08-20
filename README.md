This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# AI Content Generator

AI Content Generator is a powerful web application that leverages the Gemini API to generate content based on user-selected templates and topics. Users can easily generate, edit, and save their content, with all generated content stored in a database for future reference.

## Features

- **Template-Based Content Generation**: Users can choose from various templates and topics to generate tailored content using the Gemini API. The generated content is displayed in a rich text editor for further customization.
- **Content Management**: All generated content is automatically saved to a PostgreSQL database, allowing users to revisit and modify their past creations.
- **User Activity History**: Users can view a history of their content generation activities, complete with details of the templates used and the content generated.
- **Error Handling**: Robust error handling ensures smooth operation, providing informative feedback to users in case of issues during content generation or saving.

## Tech Stack

- **Next.js**: React framework for server-side rendering and generating static websites.
- **TypeScript**: Typed JavaScript to enhance code quality and maintainability.
- **PostgreSQL**: Relational database management system for storing user-generated content.
- **Drizzle ORM**: Lightweight TypeScript ORM for database operations.
- **Gemini API**: API for AI-based content generation.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/Ai_Content_Generator.git

2. **Navigate to the project directory:**
   ```bash
   cd Ai_Content_Generator

3. **Install Dependencies:**
   ```bash
   npm install

## Hosted Link:
Check out the live version of the app: [GenieWriter](https://ai-content-generator-delta.vercel.app/)

