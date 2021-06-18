import React from 'react';

function Hat1(props) {
	const title = props.title || "hat 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M13.4 62.8c-.3 0-.7-.1-.9-.3-.4-.3-.7-.7-.8-1.1L7.6 40C-1 31.1-.8 16.8 8 8c8.4-8.4 21.6-9 30.7-1.6.4.4.9.7 1.4 1.2l21.3 4.2c.5.1.9.4 1.1.8.3.4.3.9.2 1.4-3 11.7-9.1 22.5-17.7 31-8.6 8.6-19.4 14.8-31.1 17.7-.2 0-.4.1-.5.1zm-2.2-22.4l3.5 18.4c10.4-3 20-8.6 27.7-16.3 7.7-7.7 13.3-17.2 16.3-27.7l-18.3-3.6c-.4 1.3-1.1 3.1-2.2 5.8-2.4 5.5-5.2 9.9-8.2 13-6 6-14.8 9.3-18.8 10.4zm13-35.7c-5 0-10 1.9-13.8 5.7-3.6 3.7-5.6 8.6-5.6 13.8 0 4.9 1.8 9.5 5 13 2.9-.8 11.8-3.8 17.8-9.7 5.6-5.6 8.8-14.8 9.7-17.8-.2-.2-.4-.4-.6-.5l-.3-.3c-3.6-2.8-7.9-4.2-12.2-4.2zm4.6 24z"/>
	</g>
</svg>
	);
};

export default Hat1;