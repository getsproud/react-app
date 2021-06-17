import React from 'react';

function MessageInfo(props) {
	const title = props.title || "message info";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.8 42c-1 0-1.8.8-1.8 1.8v8.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-8.8c0-1.1-.8-1.8-1.8-1.8z"/>
		<path d="M56.9 10.8H7.1c-3.2 0-5.8 2.6-5.8 5.8V48c0 3.2 2.6 5.8 5.8 5.8h31.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H7.1c-1.3 0-2.3-1-2.3-2.3V16.8l24.1 14.6c1 .6 2.1.9 3.2.9s2.2-.3 3.2-.9l24.1-14.6V31c0 1 .8 1.8 1.8 1.8S63 32 63 31V16.6c-.2-3.2-2.9-5.8-6.1-5.8zM33.4 28.4c-.8.5-1.9.5-2.7 0l-23.2-14h49.1l-23.2 14z"/>
		<path d="M51.8 33.1c-1.6 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8c1.6 0 2.8-1.3 2.8-2.8s-1.2-2.8-2.8-2.8z"/>
	</g>
</svg>
	);
};

export default MessageInfo;