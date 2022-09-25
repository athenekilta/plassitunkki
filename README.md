# plassitunkki
## Development setup
### Frontend
In `frontend` directory:
```bash
npm install
npm run serve
```

### Backend
In `server` directory:
```bash
npm install
npm run dev
```

## API documentation
API base (root) can be set on `config`.
Default value is `/api/v1/`.
```
GET /:accessToken
Returns the information of the Seating

POST /new_seating
Parameters: `name`
Creates a new Seating object and returns its data
```
