import React from 'react';

function Diagnosis(props) {
	const title = props.title || "diagnosis";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.3 10.3h-4.9V7.4c0-.8-.7-1.5-1.5-1.5H33.5V1.5C33.5.7 32.8 0 32 0s-1.5.7-1.5 1.5v4.4H20.2c-.8 0-1.5.7-1.5 1.5v2.9h-4.9c-.8 0-1.5.7-1.5 1.5v50.7c0 .8.7 1.5 1.5 1.5h36.5c.8 0 1.5-.7 1.5-1.5V11.8c0-.8-.7-1.5-1.5-1.5zM21.7 8.9h20.6v5.7H21.7V8.9zM48.8 61H15.2V13.3h3.4v2.9c0 .8.7 1.5 1.5 1.5h23.6c.8 0 1.5-.7 1.5-1.5v-2.9h3.4V61z"/>
		<path d="M39.1 33.7h-5.6v-5.6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.6h-5.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.6v5.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.6h5.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Diagnosis;