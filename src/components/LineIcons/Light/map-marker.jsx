import React from 'react';

function MapMarker(props) {
	const title = props.title || "map marker";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C17.8 0 6.2 11.2 6.2 25c0 12 18.5 32.4 24.2 38.3.4.5 1 .7 1.7.7.6 0 1.2-.3 1.7-.7C39.5 57.3 58 37 58 25 57.8 11.2 46.2 0 32 0zm0 60.7C21.3 49.4 9.2 33.5 9.2 25 9.2 12.8 19.4 3 32 3c12.6 0 22.8 9.8 22.8 22 0 8.5-12.1 24.4-22.8 35.7z"/>
		<path d="M32 15.2c-6 0-10.9 4.7-10.9 10.5S26 36.2 32 36.2s10.9-4.7 10.9-10.5C42.9 20 38 15.2 32 15.2zm0 18.1c-4.3 0-7.9-3.4-7.9-7.5s3.5-7.5 7.9-7.5 7.9 3.4 7.9 7.5-3.6 7.5-7.9 7.5z"/>
	</g>
</svg>
	);
};

export default MapMarker;