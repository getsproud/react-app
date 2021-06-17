import React from 'react';

function HomeDocuments(props) {
	const title = props.title || "home documents";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M35.2 18.9l-9.4-7.2c-.6-.5-1.5-.5-2.1 0l-9.4 7.2c-.8.6-.9 1.7-.3 2.5.3.5.9.7 1.4.7.4 0 .7-.1 1.1-.4l1.4-1.1v6.2c0 1 .8 1.8 1.8 1.8H30c1 0 1.8-.8 1.8-1.8v-6.2l1.4 1.1c.8.6 1.9.4 2.5-.3.4-.9.3-2-.5-2.5zm-7-.9v7h-6.8v-7-.1l3.4-2.6 3.4 2.7c0-.1 0-.1 0 0z"/>
		<path d="M17.8 41.5H27c1 0 1.8-.8 1.8-1.8S28 38 27 38h-9.3c-1 0-1.8.8-1.8 1.8s.9 1.7 1.9 1.7z"/>
		<path d="M31.7 47.4H17.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h13.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M56.8 34h-8.2V7.7c0-3.6-2.9-6.4-6.4-6.4H8.9c-3.6 0-6.4 2.9-6.4 6.4v48.6c0 3.6 2.9 6.4 6.4 6.4h46.7c3.2 0 5.9-2.6 5.9-5.9v-18c0-2.7-2.1-4.8-4.7-4.8zM6 56.3V7.7c0-1.6 1.3-2.9 2.9-2.9h33.2c1.6 0 2.9 1.3 2.9 2.9V57c0 .8.2 1.6.5 2.4H8.9C7.3 59.3 6 57.9 6 56.3zm52 .6c0 1.3-1.1 2.4-2.4 2.4H51c-1.3 0-2.4-1.1-2.4-2.4V37.5h8.2c.7 0 1.3.6 1.3 1.3v18.1z"/>
	</g>
</svg>
	);
};

export default HomeDocuments;