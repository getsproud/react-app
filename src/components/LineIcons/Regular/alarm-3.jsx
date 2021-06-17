import React from 'react';

function Alarm3(props) {
	const title = props.title || "alarm 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.3 55.3L56.2 52c-.5-.7-.7-1.5-.7-2.3V28c0-6-2.6-11.6-7.2-15.8-4-3.6-9.2-5.7-14.6-6.1V3c0-1-.8-1.8-1.8-1.8S30.2 2 30.2 3v3.2c-.4 0-.8.1-1.1.1C17.2 7.6 8.3 17.1 8.3 28.4v21.4c-.1.9-.3 1.6-.6 2.1l-2 3.4c-.5.9-.6 1.9 0 2.7.5.9 1.3 1.3 2.3 1.3h22.2V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1.7H56c1 0 1.8-.5 2.3-1.3.5-.8.5-1.9 0-2.7zM29.4 9.7c6.1-.7 12.2 1.2 16.5 5.1C49.9 18.3 52 23 52 28v16.9H11.8V28.4c0-9.5 7.6-17.5 17.6-18.7zM9.5 55.8l1.3-2.2c.6-1 .9-2.1 1-3.6v-1.7H52v1.4c0 1.5.4 2.8 1.2 4.1l1.2 1.9H9.5z"/>
	</g>
</svg>
	);
};

export default Alarm3;