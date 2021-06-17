import React from 'react';

function HouseAlt4(props) {
	const title = props.title || "house alt 4";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.9 59.3h-5.6V35.2c0-2.8-1.9-5.2-4.6-5.9l-11.1-2.8V14.6c0-2.4-1.4-4.6-3.6-5.6L18.2 1.8c-1.9-.8-4-.6-5.7.5-1.7 1.1-2.7 3-2.7 5.1v51.9H4.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h55.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.7-1.8zm-46.7-52c0-.9.4-1.7 1.2-2.1.7-.5 1.6-.6 2.4-.2l16.8 7.2c.9.4 1.5 1.3 1.5 2.3v11L33 25c-1.8-.5-3.7-.1-5.2 1.1-1.5 1.2-2.3 2.9-2.3 4.8v28.4H13.2v-52zm23.6 52h-7.9V30.9c0-.8.4-1.5 1-2s1.4-.7 2.2-.5l16.8 4.3c1.1.3 1.9 1.3 1.9 2.5v24.1h-14z"/>
	</g>
</svg>
	);
};

export default HouseAlt4;