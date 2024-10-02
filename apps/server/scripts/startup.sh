#! /bin/bash

tsx ./scripts/migrate.ts -- --dir=./db/migrations
vite-node ./dist/index.js
