import React from 'react';

function Box2(props) {
	const title = props.title || "box 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.2 39.2c-.7-.7-1.9-.7-2.5 0l-4.4 4.7c-.7.7-.6 1.8.1 2.5s1.8.6 2.5-.1l1.4-1.5v7.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-7.7l1.4 1.5c.3.4.8.5 1.3.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8.1-2.5l-4.7-4.6z"/>
		<path d="M53 31.2V20.1c0-1.6-.6-3.1-1.7-4.3l-10-11.2c-1.2-1.4-3-2.2-4.8-2.2H17.8c-1.8 0-3.6.8-4.8 2.2L3 15.8c-1.1 1.2-1.6 2.7-1.6 4.3v29.7c0 3.6 2.9 6.5 6.5 6.5h27.3c2.9 3.3 7.1 5.4 11.9 5.4 8.7 0 15.8-7.1 15.8-15.8-.2-6.7-4.2-12.3-9.9-14.7zM38.7 6.9l8.6 9.7H28.9V5.9h7.6c.8 0 1.6.3 2.2 1zm-23.2 0c.6-.6 1.4-1 2.2-1h7.6v10.6H6.9l8.6-9.6zM7.7 52.7c-1.6 0-3-1.3-3-3V20.1 20h44.7v10.2c-.8-.1-1.7-.2-2.6-.2C38.1 30 31 37.1 31 45.8c0 2.5.6 4.8 1.6 7H7.7zm39.2 5.4c-6.8 0-12.3-5.5-12.3-12.3s5.5-12.3 12.3-12.3S59.2 39 59.2 45.8s-5.5 12.3-12.3 12.3z"/>
	</g>
</svg>
	);
};

export default Box2;