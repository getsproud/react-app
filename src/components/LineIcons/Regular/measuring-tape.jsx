import React from 'react';

function MeasuringTape(props) {
	const title = props.title || "measuring tape";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M37.3 18.4c-5.3 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7c5.3 0 9.7-4.3 9.7-9.7s-4.4-9.7-9.7-9.7zm0 15.8c-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2c3.4 0 6.2 2.8 6.2 6.2s-2.8 6.2-6.2 6.2z"/>
		<path d="M38.6 2.6c-13.8 0-24.2 9.9-24.2 23V29H9.3c-1.5 0-2.8 1.2-2.8 2.8v8.5c0 1.5 1.2 2.8 2.8 2.8h5.2v4.4H5.6c-2.4 0-4.4 2-4.4 4.4v7.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-7.9c0-.5.4-.9.9-.9h34.2c13.1 0 23-10.4 23-24.2-.1-13.4-11-24.2-24.3-24.2zM10 39.5v-7h4.4v7H10zm29.8 7.9H17.9V25.6c0-11.1 8.9-19.5 20.7-19.5 11.4 0 20.7 9.3 20.7 20.7 0 11.7-8.4 20.6-19.5 20.6z"/>
	</g>
</svg>
	);
};

export default MeasuringTape;