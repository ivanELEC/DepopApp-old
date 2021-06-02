# Introduction from Ivan 

Thank you for giving me the opportunity to apply to the Web Engineer role at Depop. 
Apologies for the lack of personal touch on the readme, just thought that the Create React App template already has all the information 

If you are to run the development version of course remember to install Node onto your device [Here](https://nodejs.org/en/download/)

You can run a production version of the app by:
1. Ensuring you have the serve NPM library installed by running: npm install -g serve
2. in my-app run serve -s build

Frameworks and libraries used: 
1. Axios for HTTP Requests
2. Material UI for basic components, flexible grid framework and icons


The only part of the app that I didn't get time to do was the list of liked items that opened from the like button on the header (this is due to having work commitments on my current job as I worked some of the weekend also). I would have mapped an array of strings to over a "List Element" component or using a modified version of the Simple Menu Modal implementation in Material UI - organised into a column via Material UI GRID. The logic would've been an extended version of the use of the React Context API that I used to handle the count of "liked" products 

If I had more time, I would also ARIA label the app so that it was more accessible.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
