# anthropic-streaming-error

A bare test for Anthropic on Cloudflare Workers

```sh
npm run dev
```

```sh
curl http://localhost:8787
```

## Getting started

First, run:

```sh
pnpm run setup
```

Running the server:

```sh
pnpm run dev
```

The API will be available at [http://localhost:8787](http://localhost:8787)

Since this is an API-only project, it is helpful to use a tool like [HTTPie](https://httpie.io/) for local testing.

## Environment variables

### Defining Values

Environment variables with CloudFlare workers are set up differently than a traditional node app.

Non-secret variables are defined in `wrangler.toml`. These variables are safe to commit to source control and share.

Secrets, on the other hand, require special treatment. Locally, secrets can be defined in `.dev.vars`, which is automatically created for you when you run the setup script.

For production and other environments, secrets should be set via the Cloudflare Dashboard or via `pnpm wrangler secret put SOME_KEY`

When you add a new secret to development, you should add it to the `bin/setup` script.

See the Cloudflare Documentation for more information:

- [Environment variables](https://developers.cloudflare.com/workers/configuration/environment-variables)
- [Secrets](https://developers.cloudflare.com/workers/configuration/secrets/)

### Type-Safety

All environment variables should be included in the Bindings defined in `src/env.d.ts`. This ensures the app knows about any variables that are bound to the Worker.

## Testing

This project is set up to use Eslint, Oxlint, and Jest for linting and testing.

To run all checks, simply run:

```sh
pnpm run check
```

This will run the following:

```sh
# eslint
pnpm run lint

# oxlint
pnpm run oxlint

# prettier format check
pnpm run format:check

# tests via jest
pnpm run test
```

## Production

### Deploying

To deploy to production, just run:

```sh
npm run deploy
```

### Logs

To tail the logs from your app, you can run

```sh
pnpm wrangler tail --format=pretty
```
