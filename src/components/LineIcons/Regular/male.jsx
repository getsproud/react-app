import React from 'react';

function Male(props) {
	const title = props.title || "male";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.8 25.2V6.6l4.2 4.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-6.1-6.1c-1.2-1.2-3.2-1.2-4.5 0l-6.1 6.1c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0l4.2-4.1v18.5c-9.6.9-17.1 9-17.1 18.8 0 10.4 8.5 18.8 18.9 18.8 10.4 0 18.9-8.5 18.9-18.8-.2-9.8-7.8-17.9-17.3-18.7zM32 59.3c-8.5 0-15.4-6.9-15.4-15.3S23.5 28.6 32 28.6s15.4 6.9 15.4 15.3S40.5 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default Male;