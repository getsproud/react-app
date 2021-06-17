import React from 'react';

function QuarterMoon1(props) {
	const title = props.title || "quarter moon 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm1.8 3.5c5.4.3 10.5 2.3 14.6 5.4l-14.6 8.2V4.8zm0 31.4l23.9-13.5c1 2.8 1.6 5.8 1.6 8.9L33.8 46v-9.8zm22.4-16.6L33.8 32.2v-9.8l17.4-9.8c2 2 3.7 4.4 5 7zM4.8 32C4.8 17.6 16 5.7 30.3 4.8v54.4C16 58.3 4.8 46.4 4.8 32zm29 27.2v-9.1L59 35.8c-1.8 12.7-12.3 22.6-25.2 23.4z"/>
	</g>
</svg>
	);
};

export default QuarterMoon1;