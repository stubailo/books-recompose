## Medium Article
[Keeping Apollo and Recompose in Check](https://medium.com/@idkjs/keeping-apollo-and-recompose-in-check-d52962c5308a)

## Running It
`git clone git@github.com:idkjs/books-recompose.git`

`npm install`

`npm start`

## Deploying It
`npm install -g now`

`npm run deploy`

## WHY?
I love functional style programming and GraphQL. I had to see how the demo code from 
[this 
article](https://dev-blog.apollodata.com/simplify-your-react-components-with-apollo-and-recompose-8b9e302dea51) 
worked so I worked backwards from the example to add a backend to it. Below are the steps I took.

Important Points: 
- Only way I know how to run a search with graphql is to use MongoDB on
 the backend and use the ReGex operator there. So I had to be put up a quick sandbox on [mLab]
 (www.mlab.com)
 
- For a functioning graphql endpoint to test against that I could connect to MongoDB, I
 went  with Apollo's awesome [Launchpad](https://dev-blog.apollodata.com/introducing-launchpad-the-graphql-server-demo-platform-cc4e7481fcba). My first run at this 
 was with [GraphCool](www.graph.cool) but you don't have control of the resolvers as I 
 understand it so I could not really get at the Regex thing. They do have an [Algolia](www.algolia.com) 
 integration that seems worth checking out.
 
- For fake data, I used [Mockeroo](www.mockeroo.com) because there regex functionality 
is super cool and makes it easy to create nested objects which the demo schema required.

- deploying the demo was pretty easy with create-react-app-now. It was my first time using it so it wasnt so clear but if you just follow the instructions, it apparently works! [deployed](https://books-recompose.now.sh)

## Setup MongoDB on Mlab.com
- Go to [mlab](www.mlab.com) and get you a sandbox. Create a user for the db. Note the 
user's login and password. (NOT THE SAME AS WHAT YOU LOGGED INTO MLAB WITH)
- Also note your connection string.
- connection string: `mongodb://<dbuser>:<dbuserpassword>@ds0305555.mlab
.com:305555/books-recompose`
- books.json is a json array so add --jsonArray flag to mongoimport command
`mongoimport -h ds0305555.mlab.com:305555 -d books-recompose -c books -u <dbuser> -p 
<dbuserpasswrod> --file ./books.json --jsonArray`

## Setup an endpoint on Launchpad
Get [Launchpad MongoDB example](https://github.com/apollographql/launchpad), click fork.

Add your [mLab sandbox](https://mlab.com/) connection string.

Change Launchpad schema to conform to apollo-recompose example

Get fake data that conforms to the example from [www.mockeroo.com](www.mockeroo.com)

Import fake data to mLab sandbox MongoDB instance.

Get generated Launchpad Endpoint: https://k7mmlwwl7.lp.gql.zone/graphql at bottom of 
screen.

Add endpoint to Apollo's networkInterface object in app.js.

Create a boilerplate app with create-react-app-now, instead of create-react-app to ease deployment later on.

Drop in refactored demo code from the article. The refactor in the article not expected to run so I had to clean it up just a bit.

Put some minimum css in it so it doesn't hurt the eyes (even if you don't know css)

Deploye with [Now-CLI](www.now.sh)

## The rest is from the create-react-app-now [repo](https://github.com/xkawi/create-react-app-now)

## [create-react-app-now](https://medium.com/@kawixiao/zero-configuration-deployment-for-react-apps-with-zeits-now-4f002be98c)

Deploy React.js Static Web Apps generated with [facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app) to Zeit's awesome [Now.sh](https://zeit.co/now/) service.

I wrote an article about this project here: [Zero Configuration Deployment for React app with Zeit Now](https://medium.com/@kawixiao/zero-configuration-deployment-for-react-apps-with-zeits-now-4f002be98c#.eyvj3mjdb)

# Important

I personally and strongly recommend you to check out [Next.js](https://zeit.co/blog/next) by Zeit team.
That will be my personal go to choice as well when creating new React project, and deploy to now seamlessly.

Though create-react-app-now can serves as an example on how you can use create-react-app and zeit's now together.  

Having said that, it is likely that I will not actively maintain this repo anymore (e.g. update the dependencies). I will still accept PR though.

# Why

create-react-app-now is created using [facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app).
Although it supports deployment to github pages and heroku, it does not feel intuitive just yet, as we need to run lots of commands.

This project is specifically to solve just that, with just 1 command: `npm run deploy`

This is achieved by using Zeit's awesome [Now.sh](https://zeit.co/now/) service.
It is fast, easy, and intuitive way of deploying your React app.

# How

Simply follow this step from getting started to deployment:

```
$ npm install -g now
$ git clone https://github.com/xkawi/create-react-app-now
$ npm install
$ npm run deploy
```

First command installs the `now` cli globally as npm package. Another (or suggested) approach is to install [Now Desktop](https://zeit.co/desktop) to ensure automatic updates of `now` cli.

Subsequent commands simply clone this repo, install necessary npm packages and deploy it to Now.

Whenever you want to deploy new changes, just run `npm run deploy` again to get new public link, for free! :smile:

You will enjoy all the benefits that Now offers out-of-the-box: real-time and immutable deployments all within 1 command.

## Note

You might see some red text appears or warnings in the log. You can safely ignore this, because your project will still be deployed successfully.

# Alternatives Deployment

If you prefer something else, please refer to create-react-app documentation [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment).

# More

Read more about create-react-app [here](https://github.com/facebookincubator/create-react-app)

Read more about Zeit's Now.sh [here](https://zeit.co/now)
