import React from 'react';

function SoftwareDeployment(props) {
	const title = props.title || "software deployment";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 55.2h-4.3v-24c0-3.2-2.6-5.9-5.9-5.9h-4.1c.4-1.5.7-3 .7-4.6 0-2.8-.7-5.5-2.1-7.8-2.8-4.7-7.6-7.5-13-7.6h-.5c-5.4.1-10.3 2.9-13 7.6-1.4 2.4-2.1 5.1-2.1 7.8 0 1.6.2 3.1.7 4.6h-4.1c-3.2 0-5.9 2.6-5.9 5.9v24H3c-1 0-1.8.8-1.8 1.8S2 58.7 3 58.7h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM42.3 14.7c.9 1.6 1.4 3.3 1.6 5.1L39 16.4c-2.5-1.7-4-4.4-4.4-7.3 3.2.7 6 2.7 7.7 5.6zm-20.6 0c2-3.4 5.4-5.5 9.4-5.8.3 4.2 2.4 8 5.9 10.4l6.5 4.5c-.4 1.4-1 2.8-1.9 4-.3.5-.7.9-1.1 1.3l-1-1.3c-2.3-2.9-6-4.5-9.7-4.4-1.1 0-2.1-.1-3.2-.5L20 20.5c.1-1.9.7-4 1.7-5.8zm16 16.5c-1.7.9-3.6 1.5-5.6 1.5H31.8c-3.8-.1-7.2-1.8-9.5-4.9-.7-1-1.3-2.1-1.7-3.2l4.8 1.7c1.4.5 2.9.7 4.5.7 2.6-.1 5.2 1 6.8 3.1l1 1.1zm-26.9 24v-24c0-1.3 1.1-2.4 2.4-2.4h5c.2 0 .4 0 .6-.1.2.4.5.8.8 1.2 2.9 4 7.4 6.3 12.2 6.3h.4c4.9-.1 9.3-2.4 12.2-6.3.3-.3.5-.7.7-1.1h5.6c1.3 0 2.4 1.1 2.4 2.4v24H33.8v-8.5l3.9 3.9c.3.3.8.5 1.3.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-6.9-7c-.3-.3-.8-.5-1.2-.5-.5 0-.9.2-1.2.5l-7 7c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0l4-4v8.6H10.8z"/>
	</g>
</svg>
	);
};

export default SoftwareDeployment;