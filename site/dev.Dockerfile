#syntax=docker/dockerfile:1.4
FROM node:18-alpine

# Create app directory
WORKDIR /var/www/rigby/site

# Install dependencies based on the preferred package manager
COPY --link package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  # Allow install without lockfile, so example works even without Node.js installed locally
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

COPY --link app ./app
COPY --link components ./components
COPY --link configs ./configs
COPY --link helpers ./helpers
COPY --link locales ./locales
COPY --link public/images ./public/images
COPY --link public/manifest.json ./public/manifest.json
COPY --link styles ./styles
COPY --link types ./types
COPY --link utils ./utils
COPY --link .eslintignore .
COPY --link .eslintrc .
COPY --link .prettierignore .
COPY --link .prettierrc .
COPY --link .stylelintignore .
COPY --link .stylelintrc .
COPY --link middleware.ts .
COPY --link next-env.d.ts .
COPY --link next.config.js .
COPY --link tsconfig.json .

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

# Start Next.js in development mode based on the preferred package manager
CMD \
  if [ -f yarn.lock ]; then yarn dev; \
  elif [ -f package-lock.json ]; then npm run dev; \
  elif [ -f pnpm-lock.yaml ]; then pnpm dev; \
  else yarn dev; \
  fi
