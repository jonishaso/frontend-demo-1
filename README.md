# Maxamation Tech Challenge

## Run Application

```bash
cd path/to/maxamation
cp ./.env.example ./.env
npm i
npm run watch
```

## Run Unit Tests

```bash
npm run test
```

## Build Application

```bash
npm run build
```

After run this command line, there is a folder, named `./dist`. please put all
css files and javaScript files into `public` folder in the back-end server
project, and let root router return `index.html`.

## Security Considerations

Since I stored the `API_KEY` in the `.env.example` file, this means that this
key is exposed to the public. I understand that this is bad practice - this was
simply to make setting up the project easier for the purposes of this tech
challenge.
