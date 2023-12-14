
# Next.js App

Abicall is application to upload your ABI JSON files and call the functions instantly

## Installation

To get started, clone this repository and install the necessary dependencies:

```bash
git clone git@github.com:corlys/abicall-monorepo.git
cd abicall-monorepo 
pnpm install
```

## Usage

To run the development server, use the following command:

```bash
pnpm dev
```

## Migrate Prisma Schema

To migrate schema using Prisma to a Postgres database, use the following command:
```bash
pnpx prisma migrate dev --name init
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Features

- Upload ABI in JSON format (Work in progress)
- Generate correct functions based on the given ABI. (Work in Progress)
- ...

## Dependencies

- Next.js
- Nest
- TRPC
- ...

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

This project is licensed under the [License Name] License - see the [LICENSE](LICENSE) file for details.

