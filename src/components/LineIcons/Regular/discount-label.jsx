import React from 'react';

function DiscountLabel(props) {
	const title = props.title || "discount label";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M31.8 32.8c-1 0-1.8.8-1.8 1.8v11.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V34.6c-.1-1-.8-1.8-1.8-1.8z"/>
		<path d="M24.1 38.4l-.4-.1c-1-.2-1.9.5-2 1.4-.2 1 .5 1.9 1.4 2l.4.1h.3c.8 0 1.6-.6 1.7-1.4.2-.9-.4-1.8-1.4-2z"/>
		<path d="M40.6 38.6l-.4.1c-1 .2-1.6 1.1-1.4 2 .1.9.9 1.5 1.7 1.5h.3l.4-.1c1-.2 1.6-1.1 1.4-2-.1-1-1-1.6-2-1.5z"/>
		<path d="M53 37.1l-18-18c-1.6-1.6-4-2.1-6.2-1.3l-10.1 3.9c-1.7-6-.3-12.7 4.4-17.4.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0c-5.7 5.7-7.5 13.9-5.2 21.2-.3.2-.6.5-.7.9L9.7 37c-.8 2-.3 4.4 1.3 6l18 18c1.1 1.1 2.6 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7L53 45.3c1.1-1.1 1.7-2.6 1.7-4.1s-.6-3-1.7-4.1zm-2.5 5.7L34.7 58.6c-.9.9-2.4.9-3.3 0l-18-18c-.6-.6-.8-1.6-.5-2.5L17.2 27c.9 1.6 2 3.1 3.4 4.5v.1l.2.2c.1 0 .1.1.2.1l.1.1c.1 0 .2.1.3.1h.3c.2 0 .5 0 .7-.1.2-.1.4-.2.6-.4.2-.2.3-.4.4-.6v-.2-.2-.5-.2c0-.1-.1-.2-.1-.3-.1-.1-.1-.2-.2-.3-.1-.1-.1-.2-.2-.3-1.3-1.3-2.3-2.7-3.1-4.2l10-3.9c.8-.3 1.8-.1 2.5.5l18 18c1.1 1.1 1.1 2.5.2 3.4z"/>
	</g>
</svg>
	);
};

export default DiscountLabel;