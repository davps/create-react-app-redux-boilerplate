# React/create-react-app/Redux/TravisCI/Heroku/VSCode boilerplate

Boilerplate code to quickly setup a project.

It is ready to use with TDD with the basic setup for unit, integration and end to end tests.

|            | Status                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CI service | [![Build Status](https://travis-ci.org/davps/create-react-app-redux-boilerplate.png?branch=master)](https://travis-ci.org/davps/create-react-app-redux-boilerplate)                                          |
| Tests      | [![Coverage Status](https://coveralls.io/repos/github/davps/create-react-app-redux-boilerplate/badge.png?branch=master)](https://coveralls.io/github/davps/create-react-app-redux-boilerplate?branch=master) |

## Live demo

[View the live demo on Heroku](https://react-redux-boilerplate-101.herokuapp.com/) or the [individual UI components](https://davps.github.io/create-react-app-redux-boilerplate) of my Storybook on Github Pages.

## Tech stack

- Create-react-app, which includes: React, JSX, ES6, Webpack, Babel and other amazing projects.
- Prettier Code Formatter + ESLint setup with Airbnb's style guide + VSCode integration
- Jest + Enzyme for tests, including `@storybook/addon-storyshots` to snapshot test my Storybook and puppeteer for e2e tests.
- Storybook of [my UI components](https://davps.github.io/create-react-app-redux-boilerplate)
- Travis CI to build the production bundles and deploy it to Heroku, run the tests, creating and publishing [the test coverage report](https://coveralls.io/github/davps/create-react-app-redux-boilerplate) and the [UI documentation as a Storybook](https://davps.github.io/create-react-app-redux-boilerplate) on Github Pages.

## Usage

- Setup your repository based on this boilerplate repository following the instructions provided on the next sections.

### Start the server

```
npm start
```

### Debug the tests

Open Visual Studio and debug. Run the tests by default.

If you want to run the integration tests too, type from the terminal:

```
npm test -- --coverage --no-cache
```

### Run the Storybook

```
npm run storybook
```

Then open http://localhost:9009/

## How to reuse this repository

Ensure requirements are met, then execute the following in a terminal.

### Conventions

- Replace `$REPOSITORY_NAME` with a name for your Github repository.
- Replace `$YOUR_GITHUB_USERNAME` with a name for your Github repository.
- Replace `$HEROKU_APP_NAME` with a name for your unique app on Heroku (don't create it, just use an app name that does not exist yet, maximum 30 characters).

### Steps

- Download this boilerplate repository as a zip:
  https://github.com/davps/create-react-app-redux-boilerplate/archive/master.zip
  unzip and rename its folder to `$REPOSITORY_NAME`. Move to the right location, if required.
- Create empty repository on Github with the name `$REPOSITORY_NAME`
- Access to the root folder of the repository from the terminal and type:

```
  git init
  git remote add origin https://github.com/davps/$REPOSITORY_NAME.git
```

- Replace `create-react-app-redux-boilerplate` with `$REPOSITORY_NAME` and `davps` with `$YOUR_GITHUB_USERNAME` on `package.json`
- Replace `create-react-app-redux-boilerplate` with `$REPOSITORY_NAME` on `README.md` (so the links will not be broken)
- Replace `create-react-app/redux boilerplate` with `$REPOSITORY_DESCRIPTION` on the `public/index.html` and `public.manifest.json` files
- Replace `react-redux-boilerplate-101` with `$HEROKU_APP_NAME`
- Login into Travis CI, go to my profile and activate the repository `$REPOSITORY_NAME`
- Go to https://coveralls.io/repos/new and activate the repository `$REPOSITORY_NAME`
- Create a Heroku repository

```
  heroku create $HEROKU_APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
```

- Setup the Github env variables on Travis CI. Go to
  https://travis-ci.org/davps/$REPOSITORY_NAME and add the env variable `GH_TOKEN`
  More instructions here:
  https://github.com/storybooks/storybook-deployer#deploying-storybook-as-part-of-a-ci-service

Here are the instructions to create your Github token
https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/

- Setup encription keys for travis

If travis is not installed yet, install it. For example, you can use these commands on a fresh installation of Ubuntu Server 16.04 LTS.

```
sudo apt-get update
sudo apt-get install rubygems-integration
sudo apt-get install bundler
sudo gem install travis
```

Then follow these instructions to create a encrypted private key of heroku:

- Read about encrypted private keys, what they are and how those are handled by Travis CI
- Read the instructions on how to create a encrypted private key to setup Heroku on Travis CI.

For example, you can use this command

```
travis setup heroku
```

and it will override the values from .travis.yml and you will be done with this step.

In my case I have issues installing travis on my macbook so I used a different machine with ubuntu, with something like this (but with )

```
travis encrypt MY_HEROKU_AUTH_TOKEN -r davps/create-react-app-redux-boilerplate
```

(nothe that you need to replace `MY_HEROKU_AUTH_TOKEN` with your actual token, which you can get with the command `$ heroku auth:token`)

which will output this

```
Please add the following to your .travis.yml file:

  secure: "UlgPPgLdeoiRI3w+ptiEmOg6jC0eMOrYqmG0anGRaCJgCNTZyXKZu/3jIaUsK3PNCciKxqpNgdTDX+LIX1cp4DKQhDJ/Ww6fC2rOMZGay5jy0KOcN8JTZCNk+MEsmCRPBYWceCy1m3IpZ9KhtKPKcJ9gaazEPZJ9ASatlomIoAYTJP4OHqG+tG5HmpIkh+Z5KXPrPXhLVPrPJ+TpIKj2tirvF/CBTqXaFCgdVMMPi7upLkCxrBG0bL2X0Kpv/zZvj/AG2E+LUSoktsJwoBkfKCLgzpOf5bHZaumPWH1PHafTlAp3PqMZFmvlNnD4x4ZhzktdQr9fmfVjGb16S6BTrMeRHXV8H+ngGNokiTjhFuBcNzMK00ZXpEs/BMnPYrW9HCMBQKForyYtLzGZe3bSZ8SNN5ro931ZLxmZmnplYtgwtGIAF3HkT3NbOvBZ9OPYSz6h/SmeEtj01A5R75SULupFoHe4uYILTcQoKsPh/n0fLrqKgZDDTebh/6bp6J72/6ViQg5eSJo3V0vlFbI/qQhoogZDqK1eVz6yRcYw6rgwfp+JJWceM9sDdlF2rb+auLCSuKhdgyFaIHsLVzsfoVyvQlQ1AS3eV3fHJzzMHR+SZgDoSQEJUCVV2/FpETEP3KjIaRDjP2Augej7wfkSicZntM8qvYM7B+orYAnaOO0="
```

and then manually replace the actual `secure:` line of the `.travis.yml` file.

- Install packages with

```
npm install
```

- Commit changes with:

```
git add --all
git commit -m 'First commit'
git push -u origin master
```
