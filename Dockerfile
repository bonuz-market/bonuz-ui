# Set base image
FROM node:alpine3.15
# Labels
LABEL cicd_maintainer="yuriko.martino@bonuz.market"
# Inject env vars
ENV PATH="./node_modules/.BIN:$PATH"
ENV PORT=6006
WORKDIR /app
COPY . .
RUN rm -rf package-lock.json
# Install and adding additional dependencies
RUN yarn install --frozen-lockfile
RUN yarn add rimraf
RUN yarn add rollup
# Build package
RUN yarn publish:build
# Publish port
EXPOSE $PORT
# Build storybook
RUN yarn build-storybook
# RUN storybook
CMD [ "yarn", "storybook" ]