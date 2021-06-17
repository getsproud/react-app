import React from 'react';

function Notification2(props) {
	const title = props.title || "notification 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.9 2.7c-6.8 0-12.6 4.6-14.3 10.9-2.5-1.3-5.3-2.2-8.2-2.4.1-.2.1-.4.1-.6V7.1c0-1-.8-1.8-1.8-1.8S22 6.1 22 7.1v3.6c0 .2 0 .4.1.6-.3 0-.5 0-.8.1-10 1-17.5 9.1-17.5 18.6v17.8c-.1.9-.3 1.4-.5 1.7l-1.7 2.8c-.5.8-.6 1.7-.1 2.5l.1.2c.5.8 1.3 1.2 2.2 1.2H22v3.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.4h18.3c.9 0 1.7-.4 2.1-1.2.5-.8.5-1.9 0-2.6l-1.7-2.7c-.4-.6-.5-1.1-.5-1.8V31.8c1.3.4 2.8.6 4.2.6 8.2 0 14.9-6.7 14.9-14.9-.1-8.1-6.8-14.8-15-14.8zm-6.7 48.8l.7 1.1H23.8 5.5l.8-1.4c.5-.9.8-1.8.9-3.1V29.9c0-7.8 6.2-14.3 14.4-15.2 4.1-.5 8.1.5 11.4 2.6v.2c0 5.4 2.9 10 7.1 12.7v17.7c.1 1.3.4 2.4 1.1 3.6zm6.7-22.6c-6.3 0-11.4-5.1-11.4-11.4S41.6 6.2 47.9 6.2s11.4 5.1 11.4 11.4-5.1 11.3-11.4 11.3z"/>
		<path d="M49.2 13.7c-1-.6-2.2-.6-3.2 0L43.7 15c-.8.5-1.1 1.5-.7 2.4.5.8 1.5 1.1 2.4.7l1.9-1.1v5.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.8c-.1-1.3-.7-2.3-1.7-2.9z"/>
	</g>
</svg>
	);
};

export default Notification2;