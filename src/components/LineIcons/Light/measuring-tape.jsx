import React from 'react';

function MeasuringTape(props) {
	const title = props.title || "measuring tape";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M37.5 18c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8c.1-5.4-4.3-9.8-9.8-9.8zm0 16.7c-3.8 0-6.8-3.1-6.8-6.8 0-3.8 3.1-6.8 6.8-6.8 3.8 0 6.8 3.1 6.8 6.8.1 3.7-3 6.8-6.8 6.8z"/>
		<path d="M38.9 1.4c-14.3 0-25.1 10.2-25.1 23.8v3.9H8c-1.4 0-2.5 1.1-2.5 2.5v9.1c0 1.4 1.1 2.5 2.5 2.5h5.8v5.3H4.3c-2.4 0-4.3 1.9-4.3 4.3v8.3c0 .8.7 1.5 1.5 1.5S3 61.9 3 61.1v-8.3c0-.7.6-1.3 1.3-1.3h35.9c13.6 0 23.8-10.8 23.8-25C64 12.6 52.8 1.4 38.9 1.4zM8.5 40.2v-8.1h5.3v8.1H8.5zm31.7 8.3H16.9V25.2c0-11.9 9.5-20.8 22.1-20.8 12.1 0 22 9.9 22 22.1 0 12.5-9 22-20.8 22z"/>
	</g>
</svg>
	);
};

export default MeasuringTape;