import React from 'react';

function Capsules(props) {
	const title = props.title || "capsules";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M14.6 3.9c-7.4 0-13.4 6-13.4 13.4v29.5c0 7.4 6 13.4 13.4 13.4S28 54.2 28 46.8V17.3c0-7.4-6-13.4-13.4-13.4zm9.9 42.8c0 5.4-4.4 9.9-9.9 9.9s-9.9-4.4-9.9-9.9V33.8h19.7v12.9zm0-16.5H4.8V17.3c0-5.4 4.4-9.9 9.9-9.9s9.9 4.4 9.9 9.9v12.9z"/>
		<path d="M49.4 3.9C42 3.9 36 9.9 36 17.3v29.5c0 7.4 6 13.4 13.4 13.4s13.4-6 13.4-13.4V17.3c0-7.4-6-13.4-13.4-13.4zm9.9 42.8c0 5.4-4.4 9.9-9.9 9.9-5.4 0-9.9-4.4-9.9-9.9V33.8h19.7v12.9zM39.5 17.3c0-5.4 4.4-9.9 9.9-9.9 5.4 0 9.9 4.4 9.9 9.9v12.9H39.5V17.3z"/>
	</g>
</svg>
	);
};

export default Capsules;