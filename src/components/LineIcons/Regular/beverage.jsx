import React from 'react';

function Beverage(props) {
	const title = props.title || "beverage";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.1 22.8L48.5 13c-.3-.5-.9-.9-1.5-.9h-5.3l4.9-8.2c.5-.8.3-1.9-.6-2.4-.8-.5-1.9-.2-2.4.6l-6 10H17c-.6 0-1.2.3-1.5.9l-5.6 9.8c-.3.5-.3 1.2 0 1.7s.9.9 1.5.9h3.3l2.7 35.7c.1.9.8 1.6 1.7 1.6h25.8c.9 0 1.7-.7 1.7-1.6l2.7-35.7h3.3c.6 0 1.2-.3 1.5-.9.3-.5.3-1.1 0-1.7zM43.3 59.3H20.7l-2.5-33.8h27.6l-2.5 33.8zm4.4-37.4H14.4l3.6-6.3h28l3.6 6.3h-1.9z"/>
	</g>
</svg>
	);
};

export default Beverage;