# React + Redux

## Task

Our blog going to have next pages:

Latest Posts / -- List of all Posts, Post short description, author and publish date
View Post /posts/:postId -- Post page
Features:

View list of latest Posts
View specific Post
Create new comment under Post
Create / Edit Post * Optional

## Workflow

- Fork the repository with task
- Clone forked repository
    ```bash
    git clone git@github.com:<user_name>>/<task_repository>.git
    ```
- Run `npm install` to install dependencies.

## Development mode

  Run `npm run start` to start `http-server` on `http://localhost:3000`
    When you run server the command line window will no longer be available for
    writing commands until you stop server (`ctrl + c`). All other commands you
    need to run in new command line window.

## Deploy on gh-pages

- Build the project
  ```bash
  $ npm run build
  ```
- Commit and push all recent changes
  ```bash
  $ git add .
  $ git commit -m 'commit message'
  $ git push origin master
  ```
- Execute `npm run deploy`. This command will push the `/build` folder to branch
  `gh-pages` in your remote repository.

## Project structure

- `src/` - directory for css, js, image, fonts files
- `build/` - directory for built pages

You should be writing code in `src/` directory.

### Demo link

Add link here: `[DEMO LINK](https://mariyahubko04.github.io/DevelopsToday-test)`
