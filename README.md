# The Task

Для выполнения тестового задания требуются: Vue.js после (допускается установка через CDN или
однофайловый компонент .vue + npm + Webpack)
1) На главной странице необходимо вывести форму входа с такими полями: Username,
Phone number и кнопку Login.
https://www.figma.com/file/CoAspt2CyD6g3kXdXHdUOL/Untitled?node-id=0%3A1
Поле username - буквенное (валидация ввода только буквы)
Поле Phone number - пропускает числа и символы.
После того как пользователь заполнил поля и нажал кнопку Login, происходит следующее:
перебираем массив по ссылке - https://jsonplaceholder.typicode.com/users и прорабатываем два
сценария :
1. Если введенные username и Phone number - совпадают у юзера - редиректим его на
следующую страницу описанную в пункте 2
2. Если введенные username и Phone number - не совпадают у юзера - выдаем ошибку (можно
просто login error )
2) Если регистрация прошла успешно , то пользователь попадает на страницу, на которой :
Вверху необходимо вывести персональные данные юзера из JSON файла -
https://jsonplaceholder.typicode.com/users
Далее на странице необходимо :
Продемонстрировать умение работать с массивом данных(Todo list), полученных с помощью REST
API в приложении на Vue.js
Ссылка на REST API (jsonplaceholder): https://jsonplaceholder.typicode.com
В приложении использовать url: https://jsonplaceholder.typicode.com/todos
Набор стилей CSS - адаптивный, желательно использовать Flexbox и/или CSS Grid
Расположение элементов на странице - произвольное
Нужно реализовать:
1.Получение данных (JSON) из REST API и вывод их всех на страницу в виде списка
2.Фильтрация данных полученных из API(данные выводятся согласно выбранных опций):
- Фильтр по статусу: select с 3 опциями (All, Completed, Uncompleted, Favorites cм.пункт 5)
- Фильтр по ID юзера:select с опциями в виде цифр (userId из списка задач) и опция All Users
3.Поиск по ключу title. input, в который при вводе текста, выполняется поиск задач согласно
выбранных фильтров и значения этого inputт
4.На странице добавить блок "Create todo", в нем: 2 поля input(User ID и Title) и кнопка Add (В
рамках задачи после успешного ответа от API - добавляем в массив)
5.Реализовать возможность добавить Todo в избранное, хранить его id в localStorage

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```