# myportifolio

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Generate a PDF from HTML
```
npm run cv:pdf
```
This converts `cv/index.html` to `public/portifolio.pdf`. To convert another local HTML file, pass input and output paths relative to the project root:
```
npm run cv:pdf -- path/to/input.html path/to/output.pdf
```
Install the Playwright Chromium browser once before generating PDFs:
```
npx playwright install chromium
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
