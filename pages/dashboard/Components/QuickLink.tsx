import React from 'react';

function QuickLink({ title, href }) {
	return (
		<>
			<a className="bg-rh-sunset hover:bg-[#bf412e] hover:text-rh-white rounded-md p-3" href={href}>
				{title}
			</a>
		</>
	);
}

export default QuickLink;
