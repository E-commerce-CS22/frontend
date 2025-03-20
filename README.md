## Getting Started

First, run the development server:

```bash
git clone https://github.com/E-commerce-CS22/frontend.git

npm install
# For now if npm install doesn't work use
npm install --force

npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# dev env variables

## create .env.local file and inside it paste the following

```bash

SERVER_URI=http://127.0.0.1:8000
NEXT_PUBLIC_URI=${SERVER_URI}

```
