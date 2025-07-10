# My Developer Portfolio

This is a responsive, modern software developer portfolio built with Next.js 15, React 19, and a Sanity.io headless CMS. It features a permanent dark theme with a radial gradient background, dynamic content management for projects and blog posts, and a secure, rate-limited contact form.

## Tech Stack:

* **Framework**: Next.js 15 (with React 19)
* **Styling**: Tailwind CSS v4\
* **CMS**: Sanity.io (Headless)
* **Language**: TypeScript
* **Data Fetching**: GraphQL
* **Contact Form**: Nodemailer with Gmail OAuth2
* **Rate Limiting**: Upstash (Serverless Redis)
* **Deployment**: Netlify (Frontend) & Sanity (CMS)

## Project Structure

This project is set up as a monorepo with two main packages:
```
/
├── frontend/    # The Next.js 15 application
└── studio/      # The Sanity.io CMS configuration
```

## Getting Started

Follow these steps to set up and run the project locally.
Prerequisites

* Node.js (Node 20 LTS or later)
* Yarn
* Sanity CLI: yarn global add @sanity/cli
* A Google Account for Nodemailer OAuth2 setup.
* An Upstash Account for the Redis database.

## Sanity Studio Setup (/studio):
The Sanity Studio in this repository comes pre-configured with all the necessary schemas and plugins. You just need to install its dependencies and link it to your own Sanity project.

1. **Install Dependencies**:
Navigate into the studio directory and install the required packages.
```
cd studio
yarn install

OR

yarn workspace studio install

```

2. **Connect to Your Sanity Project**:
You need to link this local studio to your own project on Sanity.io.
```
# Log in to your Sanity account
sanity login

# Link the studio to a new or existing Sanity project
sanity link
```
Follow the prompts to create a new project or connect to an existing one.

3. **Deploy GraphQL API**:
From the /studio directory, deploy the GraphQL endpoint that the frontend will use.

```
sanity graphql deploy
```



4. **Run the Studio**:
```
yarn sanity start
```

The Sanity Studio will be available at http://localhost:3333.




## Next.js Frontend Setup (`/frontend`)
The Next.js frontend in this repository is pre-configured. You just need to install its dependencies and set up your environment variables.

1. **Install Dependencies**:
Navigate into the frontend directory and install the required packages.
```
cd frontend
yarn install

OR

yarn workspace frontend install
```

2. **Environment Variables**:
In the `/frontend` directory, you will find a .env.example file. Make a copy of this file and name it .env.local. Now, fill in the values in your new .env.local file. This file stores all your secret keys and is ignored by Git.

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
SANITY_GRAPHQL_URL=

EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_SERVER_USER=
EMAIL_TO=
GMAIL_CLIENT_ID=
GMAIL_CLIENT_SECRET=
GMAIL_REFRESH_TOKEN=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

3. **Run the frontend**:
```
yarn dev
```


The portfolio website will be available at http://localhost:3000.

## Key Features
### Styling & Theme

* Permanent Dark Mode: The site uses a permanent dark theme with a radial gradient background.

* CSS Variables: The color palette is defined using semantic CSS variables in globals.css and referenced in tailwind.config.ts for a maintainable and consistent design system.

* Smooth Scrolling: The scroll-smooth utility is applied to the root layout for pleasant on-page navigation.

* Designed by me (non designer) with simplicity in mind. Inspired by other portfolio sites, speciallty Brittany Chiang's site.

### Responsive Navigation

* The Navbar component is fully responsive. It displays links inline on desktop screens and collapses into a functional hamburger menu on mobile, built using React hooks and Tailwind CSS utility classes.

### Contact Form & Rate Limiting

* Server Action: The contact form uses a Next.js Server Action (submitContactForm) to securely process submissions on the server.

* Nodemailer & OAuth2: Emails are sent via Nodemailer using the secure Google OAuth2 authentication method, keeping credentials safe.

* Persistent Rate Limiting: To prevent spam, form submissions are rate-limited per IP address. The submission count is stored in an Upstash Redis database, persisting the state even if the user reloads the page.
