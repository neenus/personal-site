# Personal Website

See: [neenus.com](https://neenus.com)

My Personal site. an MIT Licensed, very simple, easily modifiable and permission is herby granted, free of charge, to any person to obtain a copy of it to modify and use without limitation.

Built using modern javascript, based on [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) with [React-Router](https://reactrouter.com/), [Material UI](https://mui.com/) and many other technologies.

## The contact form:
The contact form in this site is built using a custom react hook with the following:

* Input validations.
* [Google Recaptcha](https://www.google.com/recaptcha/about/), setup with react is done using the [react-google-recaptcha](https://www.npmjs.com/package/react-google-recaptcha) package.
* Form submission utilizes [AWS API Gateway](https://aws.amazon.com/api-gateway/), [AWS Lambda](https://aws.amazon.com/lambda/) and [AWS SES](https://aws.amazon.com/ses/) to send emails 

*(I will include a link to the AWS setup at some point in the future if you need help setting it up before the link is live send me an email at hello@neenus.com)*.

___

## Setup
To download the repository and install dependencies, run the following commands:
```
git clone git@github.com:neenus/personal-site.git
cd personal-site
yarn install
```
Make sure to add a .env file in the root directory of the project and add the following env variables for Google Recaptcha and AWS API Gateway url:
```
REACT_APP_SITE_KEY = YOUR_RECAPTCHA_SITE_KEY
REACT_APP_AWS_API_GATEWAY_URL = YOUR_AWS_API_GATEWAY_URL_TO_INVOKE_LAMBDA

```
___
## Available Scripts 
#### *(as per create-react-app docs)*

In the project directory, you can run:

### `yarn start`

Runs the development server.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the `create-react-app` docs section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. *(currently no tests are setup for this site)*

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the `create-react-app` docs section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
