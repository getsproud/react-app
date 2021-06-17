import React from 'react';

function DollarSymbol(props) {
	const title = props.title || "dollar symbol";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.6 38h-7.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.9V43c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1.7c2.5-.5 4.5-2.8 4.5-5.5 0-3.1-2.5-5.6-5.6-5.6h-3.3c-1.2 0-2.1-.9-2.1-2.1s1-2.1 2.1-2.1h7.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H38V21c0-1-.8-1.8-1.8-1.8s-1.9.8-1.9 1.8v1.6h-1c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6h3.3c1.2 0 2.1 1 2.1 2.1s-.9 2.1-2.1 2.1z"/>
		<path d="M34.3 3.9C26.5 3.9 19 7.2 13.7 13c-.7.7-.6 1.8.1 2.5s1.8.6 2.5-.1c4.6-5 11.2-7.9 18.1-7.9 13.5 0 24.6 11 24.6 24.6S48 56.7 34.4 56.7c-10.7 0-20.1-6.8-23.4-17 0-.1-.1-.2-.1-.2l5.7 2.3c.9.4 1.9-.1 2.3-1 .4-.9-.1-1.9-1-2.3l-7.1-2.9c-1.2-.5-2.4-.5-3.6 0-1.2.4-2.1 1.3-2.5 2.5l-2.9 7.1c-.4.9.1 1.9 1 2.3.2.1.4.1.7.1.7 0 1.3-.4 1.6-1.1l2.5-6.2c0 .1 0 .2.1.3C11.5 52.2 22.2 60 34.4 60c15.5 0 28.1-12.6 28.1-28.1-.1-15.4-12.7-28-28.2-28z"/>
	</g>
</svg>
	);
};

export default DollarSymbol;