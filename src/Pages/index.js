import React from 'react'

const Login = React.lazy(() => import('./LogInPage'))
const SignUp = React.lazy(() => import('./SignUpPage'))
const Weather = React.lazy(() => import('./WeatherPage'))

const Pages ={
Login,
SignUp,
Weather
}

export default Pages