
# SpaceX API Handling 

This is Assignment Project  .
To fetch api data an use it as require .
API method used are Fetch and GET .


# Page 
 main page is App.js
 React router dom is installed in it ;

# Components
 data flow in component is

 Hello.js {prop} >> Main.js {/:id }  >> MissionDetails.js   >> end 

 Landing.js is act as Navbar component .





## Tech Stack

**Client:** React, Redux-toolkit , bootstrap , Axios, React-router-dom, react-infinite-scroll-component,redux-thunk.



## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## 
Process of this Project 

1. Install React app with require dependencies .
2. Install React-toolkit and create Stroe and Slice- reducer .
3. Store fetch (get) data from API and Provide it to the           Application   
4. Use the Data in Diffrent component as require .



create a store in app folder with file name store.js

import { configureStore } from "@reduxjs/toolkit";
import getSpaceXData from "../features/createSlice";

export const store = configureStore({
    reducer: {
        app: getSpaceXData
    }
})



createSlice to store data in Redux-store using ract-redux-toolkit 

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const showdata = createAsyncThunk("showdata", async () => {
    const respoce = await fetch("https://api.spacexdata.com/v3/launches");
    return respoce.json();
})

export const getSpaceXData = createSlice({
    name: "spacexdata",
    initialState: {
        data: null,
        loading: false,
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(showdata.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(showdata.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(showdata.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.error = "Error"
        })
    }

})

export default getSpaceXData.reducer



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
