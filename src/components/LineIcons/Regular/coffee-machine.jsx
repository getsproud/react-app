import React from 'react';

function CoffeeMachine(props) {
	const title = props.title || "coffee machine";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.2H19.4c-3.4 0-6.1 2.7-6.1 6.1v4.8c0 2.8 1.8 5.1 4.4 5.8v4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.7h20.5c1.4 0 2.6 1.2 2.6 2.6v22.4c0 1.4-1.2 2.6-2.6 2.6H25.6c2.7-2.1 4.4-5.4 4.4-9 0-1-.8-1.8-1.8-1.8H8.7c-1 0-1.8.8-1.8 1.8 0 3.6 1.7 6.9 4.4 9H8.8c-3.4 0-6.1 2.7-6.1 6.1v4.8c0 3.4 2.7 6.1 6.1 6.1h46.3c3.4 0 6.1-2.7 6.1-6.1V7.3c.1-3.3-2.7-6.1-6-6.1zm-29 37.3c-.8 3.6-4 6.2-7.8 6.2s-7-2.7-7.8-6.2h15.6zm31.6 18.2c0 1.4-1.2 2.6-2.6 2.6H8.8c-1.4 0-2.6-1.2-2.6-2.6v-4.8c0-1.4 1.2-2.6 2.6-2.6h32.8c3.4 0 6.1-2.7 6.1-6.1V20.8c0-3.4-2.7-6.1-6.1-6.1H19.4c-1.4 0-2.6-1.2-2.6-2.6V7.3c0-1.4 1.2-2.6 2.6-2.6h35.7c1.4 0 2.6 1.2 2.6 2.6v49.4z"/>
	</g>
</svg>
	);
};

export default CoffeeMachine;