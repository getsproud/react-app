import React from 'react';

function Juicer(props) {
	const title = props.title || "juicer";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.8 56.1l-.1-2.3c-.2-3.3-2.9-5.9-6.3-5.9H35.8l-6.2-9.3L31 15.3h5.7c1.5 0 2.8 1.2 2.8 2.8v16.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V18.1c0-3.5-2.8-6.3-6.3-6.3h-5.7c-.5-5.9-5.4-10.6-11.4-10.6-6.3 0-11.4 5.1-11.4 11.4 0 .2 0 .3.1.4 0 .2-.1.4-.1.5l1.5 25.4L8.6 56c-.1 1.7.5 3.5 1.7 4.7 1.2 1.3 2.9 2 4.6 2h34.7c1.7 0 3.4-.7 4.6-2 1-1.2 1.7-2.9 1.6-4.6zM13.1 37.4l-1.3-22h15.7l-1.3 22H13.1zm6.6-32.7c4.1 0 7.5 3.1 7.9 7.1H11.8c.4-3.9 3.8-7.1 7.9-7.1zm31.8 53.7c-.5.6-1.2.9-2 .9H14.8c-.8 0-1.5-.3-2-.9-.5-.6-.8-1.3-.7-2.1l1.1-15.4H27l6.5 9.8c.3.5.9.8 1.5.8h14.5c1.5 0 2.7 1.2 2.8 2.6l.1 2.3c-.1.7-.3 1.4-.9 2z"/>
		<path d="M24.5 46.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Juicer;