import React from 'react';

function Beachball(props) {
	const title = props.title || "beachball";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.4 0 0 14.4 0 32s14.3 32 32 32c17.6 0 32-14.3 32-32C64 14.4 49.6 0 32 0zM3 32C3 17.6 13.7 5.5 27.5 3.4c-5.2 7.9-8.1 17.9-8.1 28.6 0 10.7 2.9 20.8 8.1 28.6C13.7 58.5 3 46.4 3 32zm28.4 29c-5.7-7.5-9-18-9-29s3.3-21.4 9-29h1.2c5.7 7.5 9 18 9 29s-3.3 21.4-9 29h-1.2zm5.1-.4c5.2-7.9 8.1-17.9 8.1-28.6 0-10.7-2.9-20.8-8.1-28.6C50.3 5.5 61 17.6 61 32c0 14.4-10.7 26.5-24.5 28.6z"/>
	</g>
</svg>
	);
};

export default Beachball;