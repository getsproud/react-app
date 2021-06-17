import React from 'react';

function Old(props) {
	const title = props.title || "old";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.8 46.9l-.9-.9c-1.5-1.5-4.3-3.2-6.3-3.8l-5.1-1.6c4-2.7 6.6-7.3 6.6-12.5 4.3-1.7 7.1-5.4 7.1-9.6 0-3.8-2.3-7.3-6.1-9.2l-4.1-2c-2.8-3.6-7.1-6-12-6s-9.2 2.3-12 6l-4.1 2c-3.8 1.9-6.1 5.4-6.1 9.2 0 4.2 2.8 7.9 7.1 9.6 0 5.2 2.6 9.8 6.6 12.5l-4.6 1.5c-3.4 1.1-6.2 2.9-8.3 5.3-2.8 3.2-4.2 7.1-4.2 11.4v.8c0 1.8 1.4 3.2 3.2 3.2h44.9c1.8 0 3.2-1.4 3.2-3.2v-.8c0-4.5-1.8-8.7-4.9-11.9zM21.7 33.6l7.3-2.9c1.7-.6 3.5-.6 5.1 0l7.9 3.1c-2 3.5-5.8 5.9-10.1 5.9-4.3.1-8.2-2.4-10.2-6.1zm29.1-15.2c0 2.3-1.4 4.4-3.6 5.7v-7.7c0-1.4-.2-2.7-.6-4 2.6 1.3 4.2 3.6 4.2 6zM32 4.8c6.4 0 11.7 5.2 11.7 11.7v11.7c0 .9-.1 1.7-.3 2.5l-7.9-3.1c-2.5-1-5.2-1-7.7 0l-7.2 2.8c-.1-.7-.2-1.5-.2-2.2V16.4C20.3 10 25.6 4.8 32 4.8zM13.2 18.4c0-2.5 1.6-4.8 4.2-6.1-.4 1.3-.6 2.6-.6 4V24c-2.2-1.1-3.6-3.2-3.6-5.6zm41 40.9H9.8v-.5c0-3.4 1.2-6.5 3.4-9.1 1.7-1.9 4-3.4 6.7-4.3l5.6-1.8c.6-.2 1.1-.8 1.2-1.4 1.7.6 3.5 1 5.3 1 1.9 0 3.7-.4 5.3-1 .1.6.5 1.2 1.2 1.4l6 1.9c1.5.5 3.8 1.9 4.9 3l.9.9c2.5 2.5 3.9 5.8 3.9 9.4v.5z"/>
		<path d="M26.1 17.8h.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
		<path d="M37.8 17.8h.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
	</g>
</svg>
	);
};

export default Old;