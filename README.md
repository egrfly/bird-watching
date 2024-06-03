# Bird Watching

This project consists of starter code to get a bird watching React app up and running.

Minimal configuration is required, but you will need to obtain and set an API key as detailed below.

## eBird API Key

First, sign up for an eBird account at https://secure.birds.cornell.edu/cassso/account/create.

Once you have verified your account, you can obtain an API key at https://ebird.org/api/keygen, ensuring you are logged in.

Finally, create a file called `.env.local` at the root of the project and copy in the following, replacing `ebird-api-key` with the API key you just obtained:

```text
VITE_EBIRD_API_KEY=ebird-api-key
```

Once you're all set up, you can view the API documentation at https://documenter.getpostman.com/view/664302/S1ENwy59 and start developing.

## Running the app in development

First, you'll need to get the app's dependencies via an `npm install`.

Then, you should be able to run the app straight away using `npm run dev`.
