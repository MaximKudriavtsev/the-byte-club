# The Byte Club

## Open as a workspace

Нужно открыть в vscode, как workspace. После этого IDE подтянет расширения - нужно скачать

## Install

Устанавливаем зависимости

```
npm i
```

## Run

Режим разработки, запросы будут блокироваться CORS.
Для этого режима следует задать переменную `REMOTE_HOST`. Чтобы запросы шли на реальный сервер

```
npm run start
```

Режим продакшн. Собираем бандл.

```
npm run build:prod
```

## Storybook

Для запуска сторибука

```
npm run storybook
```
