## Getting Started

First, run the development server:

```bash
git clone https://github.com/E-commerce-CS22/frontend.git

npm install
# For now if npm install doesn't work use
npm install --force
# to run the dev version
npm run dev
# to build the app
npm run build
# to run the prd (build) version
npm start
```

# dev env variables

## create .env.local file in the main directory (beside the README.md file) and inside it paste the following

```bash

SERVER_URI=http://127.0.0.1:8000
NEXT_PUBLIC_URI=${SERVER_URI}

GOOGLE_API_KEY=AIzaSyDqGrvZLvUuMRTLbcdC0ScKsAuVwPZnf0c

```

Open [http://localhost:3000](http://localhost:3000) with your browser to open the project.
