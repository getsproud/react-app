import React from 'react';

function Drill(props) {
	const title = props.title || "drill";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.1 8.5H27.3c-.2 0-.3 0-.5.1L17.2 11c-.9.2-1.5 1-1.5 1.9v5.5H1.5c-.8 0-1.5.6-1.5 1.5s.7 1.5 1.5 1.5h14.2v5.5c0 .9.6 1.7 1.5 1.9l9.7 2.4c.2 0 .3.1.5.1H37c0 .2 0 .3.1.5l2.8 8.5c.2.6.8 1 1.4 1h4.2v9.9c0 .7.5 1.3 1.1 1.5L58 55.5h.4c.3 0 .7-.1.9-.3.4-.3.6-.7.6-1.2V31.3h2.2c1.1 0 1.9-.9 1.9-2V10.5c0-1.1-.9-2-1.9-2zm-43.4 5.2l6.9-1.7v15.8l-6.9-1.7V13.7zm38.1 38.4L48.5 50V39.8c0-.8-.7-1.5-1.5-1.5h-4.6l-2.3-7h16.8v20.8zM61 28.3H28.6V11.5H61v16.8z"/>
	</g>
</svg>
	);
};

export default Drill;