import React from 'react'
import Home from '../Pages/Home.js/Home'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/*" element={<Home />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes