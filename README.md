# AngularNabludenieBy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

- деплой делаем так:  
  \$ ng build --prod --build-optimizer --base-href ./

деплой - https://progtask.ru/deploy-angular-github-pages/
деплой как я делал

- проверить есть ли - ng -v  
  не помогло - bash: ng: command not found  
  решение ошибки - https://stackoverflow.com/questions/37227794/ng-command-not-found-while-creating-new-project-using-angular-cli  
  надо переустановить - angular-cli
- читаю тут про деплой  
  https://xsltdev.ru/angular/tutorial/angular-deployment/  
  https://github.com/angular-schule/angular-cli-ghpages  
  https://progtask.ru/deploy-angular-github-pages/
- запускаем - ng build --prod --build-optimizer

- ng add angular-cli-ghpages
- ng deploy - ждем, файлы будут на гите
  правильно сделать не получилось, белый экран  
  план Б нам нужна папка DIST в ней файлы проекта  
  .gitignore - удалить /DIST и закидываем
- опять делаем ветку gh-pages
- опять белый экран, возможно всё работает, просто надо подождать - гита...  
  https://domovikx.github.io/angular-nabludenie-by/dist/angular-nabludenie-by/  
  должно работать отсюда
- получилось запустить когда поставил вручную указал путь
  <base href="./"> в файле index.html   
  $ ng build --prod --build-optimizer --base-href ./
  теперь не работают картинки, всё остальное работает   
  нужно поменять пути во всех картинках с относительного на абсолютные !

ng build --prod --build-optimizer --base-href /test/

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
