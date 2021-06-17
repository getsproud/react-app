import React from 'react';

function Cactus2(props) {
	const title = props.title || "cactus 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.9 7.3c-3.6 0-6.6 2.9-6.6 6.6v5.3h-4V8.6c0-4-3.3-7.3-7.3-7.3s-7.3 3.3-7.3 7.3v5.3h-4V8.6c0-3.6-3-6.6-6.6-6.6S7.5 5 7.5 8.6V16c0 6.1 5 11.1 11.1 11.1h6.1v9.8h-5.6c-2.6 0-4.8 2.1-4.8 4.8V44c0 1.7.9 3.2 2.3 4l2 10.1c.5 2.7 2.9 4.6 5.6 4.6h15.4c2.7 0 5.1-1.9 5.6-4.6l2-10.1c1.4-.8 2.3-2.3 2.3-4v-2.4c0-2.6-2.1-4.8-4.8-4.8h-5.6v-4.5h6.1c6.1 0 11.1-5 11.1-11.1v-7.4c.2-3.5-2.8-6.5-6.4-6.5zM18.6 23.5c-4.2 0-7.6-3.4-7.6-7.6V8.6c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1v5.7c0 1.7 1.4 3.1 3.1 3.1h4.4v6.1h-6.1zm21.1 35.8H24.3c-1.1 0-2-.8-2.2-1.8l-1.7-8.7h23.3L42 57.5c-.3 1-1.2 1.8-2.3 1.8zm6.4-17.7V44c0 .7-.6 1.3-1.3 1.3H19.1c-.7 0-1.3-.6-1.3-1.3v-2.4c0-.7.6-1.3 1.3-1.3h25.7c.8 0 1.3.6 1.3 1.3zm-17.9-4.8V8.6c0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8v28.3h-7.6zM53 21.3c0 4.2-3.4 7.6-7.6 7.6h-6.1v-6.1h4.4c1.7 0 3.1-1.4 3.1-3.1V14c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1v7.3z"/>
	</g>
</svg>
	);
};

export default Cactus2;