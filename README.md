# React without Redux, with jest testing setting

## Run Application

```bash
cd path/to/folder
cp ./.env.example ./.env
yarn install
yarn watch
```

Once done, you can open up http://localhost:1234 to check out the app.

## Run Unit Tests

```bash
yarn test
```

## Build Application

```bash
yarn build
```

After run this command line, there is a folder, named `./dist`. please put all
css files and javaScript files into `public` folder in the back-end server
project, and let root router return `index.html`.

## Security Considerations

Since I stored the `API_KEY` in the `.env.example` file, this means that this
key is exposed to the public. I understand that this is bad practice - this was
simply to make setting up the project easier for the purposes of this tech
challenge.

## Other Consideration

In this project,since there is nothing about sharing data between components I
did not introduce any React state management. Including state management is a
great idea once the project became complex.
