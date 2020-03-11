```bash
cd edit-ordering
```

Install dependencies via `npm`:

```bash
npm install
```

## Adding a connection string

Navigate to the [Azure Portal](https://portal.azure.com) and copy the connection string from your storage account (under **Settings** > **Access keys**) in to the `.env.example` file. Once you have pasted your connection string in to the file, rename the file from `.env.example` to `.env`.

## Running the sample

Start the server:

```bash
npm start
```