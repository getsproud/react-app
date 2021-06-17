import React from 'react';

function Diamond(props) {
	const title = props.title || "diamond";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.1 16L56.4 4.7c-1-2-3-3.3-5.3-3.3H12.9c-2.2 0-4.3 1.2-5.3 3.2L1.9 16c-.9 1.9-.8 4.1.3 5.9l24.4 38c1.1 1.7 2.9 2.7 4.9 2.7 2 0 3.8-1 4.9-2.6l25.3-38c1.2-1.9 1.4-4.2.4-6zm-8.8-9.8l5.4 10.7H43.5l-3.6-12h11.2c1 0 1.8.5 2.2 1.3zM31.6 52l-8.4-31.6h17.1L31.6 52zm4.7-47.1l3.6 12H23.3l3.6-12h9.4zM10.7 6.2c.4-.8 1.2-1.3 2.2-1.3h10.3l-3.6 12H5.3l5.4-10.7zM5.4 20.4h14.1l9.9 37.4-24-37.4zM33.6 58s-.1.1 0 0l10.3-37.6h14.6L33.6 58z"/>
	</g>
</svg>
	);
};

export default Diamond;