# Lens indexing

This squid indexes the [Lens protocol data](https://lens.xyz) and sends the text-based content (posts, comments) to a [Sepana](https://sepana.io) text search engine.


## Prerequisites

- Node v16.x
- Docker
- Squid CLI
- [Sepana](https://sepana.io) engine
- [Aquarium](https://app.subsquid.io) account (for deploying to Aquarium)

To install the Squid CLI, run 

```
npm i -g @subsquid/cli
```


## Local run

- Update `SEPANA_API_KEY` and `SEPANA_ENGINE_ID` in `.env`
- Run in a terminal:
```bash
npm ci
sqd build
# start the database
sqd up
# starts a long-running ETL and blocks the terminal
sqd process

# starts the GraphQL API server at localhost:4350/graphql
sqd serve
```

## Deploy to Aquarium

To deploy the squid to Aquarium:

- Authenticate Squid CLI with
```bash
sqd auth -k <AQUARIUM KEY>
```
- Set `SEPANA_API_KEY` and `SEPANA_ENGINE_ID` secrets with 
```
sqd secrets set
```
- Change the squid name in `squid.yaml` to make sure it's globally unique
- Deploy with

```bash
sqd deploy .
```
