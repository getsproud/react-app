import React from 'react';

function Backpack(props) {
	const title = props.title || "backpack";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.1 32.3H54v-15c0-4.5-3.6-8.2-8.1-8.2h-1.8V6.9c0-3.1-2.5-5.7-5.5-5.7H25.3c-3.1 0-5.6 2.5-5.6 5.7V9H18c-4.5 0-8.1 3.7-8.1 8.2v15h-5c-1.7 0-3 1.4-3 3.1v12.9c0 1.5.6 2.9 1.6 3.9s2.5 1.6 3.9 1.6H10V57c0 3.1 2.5 5.7 5.6 5.7h33c3.1 0 5.6-2.5 5.6-5.7v-3.3h2.5c1.5 0 2.9-.6 3.9-1.6s1.6-2.4 1.6-3.9V35.4c-.1-1.7-1.4-3.1-3.1-3.1zM25.3 4.8h13.3c1.1 0 2 1 2 2.2v2H23.2V6.9c0-1.2 1-2.1 2.1-2.1zm-7.2 7.7H46c2.5 0 4.6 2.2 4.6 4.7v5.1l-18 5.9c-.4.1-.8.1-1.2 0l-17.9-5.9v-5.2c0-2.4 2.1-4.6 4.6-4.6zM7.4 50.3c-.5 0-1-.2-1.4-.6-.4-.4-.6-.9-.6-1.5V35.8H10v14.5H7.4zm18.2 9v-8.5c0-.7.6-1.3 1.3-1.3h10.4c.7 0 1.3.6 1.3 1.3v8.5h-13zm24.9-2.2c0 1.2-.9 2.2-2.1 2.2h-6.5v-8.5c0-2.6-2.1-4.8-4.8-4.8H26.8c-2.6 0-4.8 2.1-4.8 4.8v8.5h-6.5c-1.1 0-2.1-1-2.1-2.2v-31l16.8 5.5c.6.2 1.1.3 1.7.3.6 0 1.1-.1 1.7-.3l16.9-5.5v31zm8.1-8.9c0 .5-.2 1.1-.6 1.5-.4.4-.9.6-1.4.6H54V35.8h4.6v12.4z"/>
	</g>
</svg>
	);
};

export default Backpack;