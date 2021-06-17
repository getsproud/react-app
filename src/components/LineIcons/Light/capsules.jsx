import React from 'react';

function Capsules(props) {
	const title = props.title || "capsules";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M15.4 0h-.9C6.5 0 0 6.5 0 14.5v34.9C0 57.5 6.5 64 14.5 64h.9c8 0 14.5-6.5 14.5-14.5V14.6C29.9 6.5 23.4 0 15.4 0zm11.5 49.5c0 6.3-5.2 11.5-11.5 11.5h-.9C8.2 61 3 55.8 3 49.5v-16h23.9v16zm0-19H3v-16C3 8.2 8.2 3 14.5 3h.9c6.3 0 11.5 5.2 11.5 11.5v16z"/>
		<path d="M49.5 0h-.9c-8 0-14.5 6.5-14.5 14.5v34.9c0 8 6.5 14.5 14.5 14.5h.9c8 0 14.5-6.5 14.5-14.5V14.5C64 6.5 57.5 0 49.5 0zM61 49.5C61 55.8 55.8 61 49.5 61h-.9c-6.3 0-11.5-5.2-11.5-11.5v-16H61v16zm-23.9-35C37.1 8.2 42.3 3 48.6 3h.9C55.8 3 61 8.2 61 14.5v16H37.1v-16z"/>
	</g>
</svg>
	);
};

export default Capsules;