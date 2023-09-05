import React from "react";

import Nav from "./nav.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

const Home = () => {
	return (
		<div>
		
			<Nav/>
		<div className= "d-flex justify-content-center p-5">
			<Jumbotron/>
		</div>
		<div className= "d-inline-flex p-5">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
		</div>
	);
};

export default Home;
