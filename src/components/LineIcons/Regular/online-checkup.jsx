import React from 'react';

function OnlineCheckup(props) {
	const title = props.title || "online checkup";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55 3.7H9c-4.3 0-7.8 3.5-7.8 7.8v41.2c0 4.3 3.5 7.8 7.8 7.8h46c4.3 0 7.8-3.5 7.8-7.8V11.4c0-4.3-3.5-7.7-7.8-7.7zM9 7.2h46c2.3 0 4.3 1.9 4.3 4.3v5.9H4.8v-5.9c0-2.4 1.9-4.3 4.2-4.3zm46 49.6H9c-2.3 0-4.3-1.9-4.3-4.3V20.8h54.5v31.8c.1 2.3-1.9 4.2-4.2 4.2z"/>
		<path d="M48.3 40.5h-5.8l-5.2-10.4c-.5-1.1-1.6-1.8-2.9-1.7-1.2 0-2.3.7-2.8 1.8L27 40.4l-2.3-4.7c-.5-1.1-1.6-1.7-2.8-1.7h-6.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5.9l2.6 5.2c.5 1.1 1.6 1.7 2.8 1.7h.1c1.2 0 2.3-.7 2.8-1.8l4.6-10.2 5 9.9c.5 1.1 1.6 1.7 2.8 1.7h6c1 0 1.8-.8 1.8-1.8s-1-1.8-1.9-1.8z"/>
	</g>
</svg>
	);
};

export default OnlineCheckup;