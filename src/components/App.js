import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Welcome from "./Welcome";
import Signup from "./auth/Signup";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={Welcome} />
				<Route path="/signup" exact component={Signup} />
			</BrowserRouter>
		</div>
	);
}

export default App;
