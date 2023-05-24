FROM node:14.17.5

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/prisma

WORKDIR /usr/src/app/prisma

COPY package*.json .

COPY . .


# RUN npm run build
CMD ["npm", "run", "build"]