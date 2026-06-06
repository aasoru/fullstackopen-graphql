# Full Stack Open — GraphQL

Exercises for the Full Stack Open GraphQL course

https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-graphql

## Backend

```bash
cd library-backend
npm install
npm run dev
```

Requires a `.env` file with:

```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

Server runs at `http://localhost:4000`.

## Frontend

```bash
cd library-frontend
npm install
npm run dev
```

App runs at `http://localhost:5173`. Requires the backend to be running.

## Tests (chapter 4)

```bash
cd tests-chapter4
npm install
npm test
```
