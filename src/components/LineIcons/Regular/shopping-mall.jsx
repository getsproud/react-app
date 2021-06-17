import React from 'react';

function ShoppingMall(props) {
	const title = props.title || "shopping mall";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 20.6H44.6v-4.3C44.6 10.7 39.9 6 34.2 6h-4.5C24 6 19.4 10.6 19.4 16.3v4.3H6c-2.6 0-4.8 2.1-4.8 4.8v27.8C1.3 55.8 3.4 58 6 58h52c2.6 0 4.8-2.1 4.8-4.8V25.4c0-2.6-2.2-4.8-4.8-4.8zm-35.1-4.2c0-3.8 3.1-6.8 6.8-6.8h4.5c3.8 0 6.8 3.1 6.8 6.8V29H22.9V16.4zM4.8 53.2V25.4c0-.7.6-1.3 1.3-1.3h13.4v30.3H6c-.7.1-1.2-.5-1.2-1.2zm18.1-20.7H41v22h-2.8v-8.7c0-2.6-2.1-4.8-4.8-4.8h-3c-2.6 0-4.8 2.1-4.8 4.8v8.7h-2.8v-22zm6.4 22v-8.7c0-.7.6-1.3 1.3-1.3h3c.7 0 1.3.6 1.3 1.3v8.7h-5.6zm30-1.3c0 .7-.6 1.3-1.3 1.3H44.6V24.1H58c.7 0 1.3.6 1.3 1.3v27.8z"/>
	</g>
</svg>
	);
};

export default ShoppingMall;