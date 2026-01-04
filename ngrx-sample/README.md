# NgrxSample
This project is sample of usage of ngRx with angular framework

### Project structure
```
└── 📁src
    └── 📁app
        └── 📁core
            └── 📁model
                ├── index.ts
        └── 📁features
            └── 📁products
                └── 📁product-list
                    ├── product-list.html
                    ├── product-list.scss
                    ├── product-list.ts
                └── 📁store
                    ├── product.action.ts
                    ├── product.reducer.ts
                    ├── product.selector.ts
                    ├── product.state.ts
                ├── products.routes.ts
        ├── app.config.ts
        ├── app.html
        ├── app.routes.ts
        ├── app.scss
        ├── app.spec.ts
        ├── app.ts
    ├── index.html
    ├── main.ts
    └── styles.scss
```

## Development server

To start a local development server, run:

```bash
npm i && npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
