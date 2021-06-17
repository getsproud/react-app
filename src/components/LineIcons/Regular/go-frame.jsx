import React from 'react';

function GoFrame(props) {
	const title = props.title || "go frame";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.8 1.3c-1 0-1.8.8-1.8 1.8v5.6H9.9V3c0-1-.8-1.8-1.8-1.8S6.4 2 6.4 3v58c0 1 .8 1.8 1.8 1.8S9.9 62 9.9 61V43.1H54V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V3c0-1-.8-1.7-1.8-1.7zM9.9 39.6V12.1H54v27.5H9.9z"/>
		<path d="M23 19.3h6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6c-3.3 0-5.9 2.7-5.9 5.9v8c0 3.3 2.7 5.9 5.9 5.9h1.8c3.3 0 5.9-2.7 5.9-5.9v-4.1c0-1-.8-1.8-1.8-1.8h-3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.2v2.4c0 1.3-1.1 2.4-2.4 2.4H23c-1.3 0-2.4-1.1-2.4-2.4v-8c0-1.4 1-2.4 2.4-2.4z"/>
		<path d="M41 15.7h-.4c-3.3 0-5.9 2.7-5.9 5.9v8c0 3.3 2.7 5.9 5.9 5.9h.4c3.3 0 5.9-2.7 5.9-5.9v-8c0-3.2-2.6-5.9-5.9-5.9zm2.4 13.9c0 1.3-1.1 2.4-2.4 2.4h-.4c-1.3 0-2.4-1.1-2.4-2.4v-8c0-1.3 1.1-2.4 2.4-2.4h.4c1.3 0 2.4 1.1 2.4 2.4v8z"/>
	</g>
</svg>
	);
};

export default GoFrame;