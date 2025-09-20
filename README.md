# DataEngineer Hub - React Frontend

This is the React frontend for DataEngineer Hub, a comprehensive blog about data engineering technologies including AWS, Snowflake, Azure, dbt, Airflow, and more.

## Architecture

- **Main Domain**: `https://dataengineerhub.blog` - WordPress backend with content management
- **Frontend Subdomain**: `https://api.dataengineerhub.blog` - React application (this project)

## WordPress Integration

The React app connects to the WordPress REST API to fetch:
- Blog posts and articles
- Categories and tags
- Newsletter subscriptions
- Contact form submissions

## Technologies Used

- **Frontend**: React 18, Vite, TailwindCSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Routing**: React Router DOM
- **Backend**: WordPress REST API

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## WordPress Configuration

Make sure your WordPress site has the following:

1. **Custom Fields**: Add `featured` and `trending` meta fields to posts
2. **CORS Headers**: Enable CORS for your subdomain
3. **Custom Endpoints**: Newsletter and contact form endpoints
4. **Featured Images**: Enable post thumbnails

## Content Categories

The blog covers these main data engineering topics:
- AWS (Cloud services, S3, Redshift, Glue)
- Snowflake (Data warehouse, analytics)
- Azure (Microsoft cloud platform)
- SQL (Advanced queries, optimization)
- Airflow (Workflow orchestration)
- dbt (Data transformation)
- Python (Data engineering libraries)
- Analytics (Visualization, BI tools)

## Deployment

This React app should be deployed to your subdomain `api.dataengineerhub.blog` while your WordPress installation remains on the main domain `dataengineerhub.blog`.

## API Endpoints

The app connects to these WordPress REST API endpoints:
- `GET /wp-json/wp/v2/posts` - Fetch blog posts
- `GET /wp-json/wp/v2/categories` - Fetch categories
- `POST /wp-json/wp/v2/newsletter/subscribe` - Newsletter subscription
- `POST /wp-json/wp/v2/contact/submit` - Contact form submission