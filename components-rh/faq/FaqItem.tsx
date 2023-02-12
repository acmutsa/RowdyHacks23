import { type FunctionComponent, useState } from 'react';
import { RxDoubleArrowDown, RxDoubleArrowUp } from 'react-icons/rx';

interface FaqItemProps {
	question: string;
	answer: string;
	key: number;
}

const FaqItem: FunctionComponent<FaqItemProps> = ({ question, answer }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className={`faq-transtion ${open ? 'col-span-1' : 'col-span-1'}`}>
			<div
				className={`border-2 h-full rounded border-rh-sunset mb-4 p-4 flex flex-col justify-center gap-2 bg-rh-deep-purple cursor-pointer text-white ease-in-out w-full`}
				onClick={() => setOpen(!open)}
			>
				<div className="flex">
					<RxDoubleArrowDown size={'25px'} className="mt-1 text-rh-sunset" />
					<h1 className="text-[1.5rem] ml-[5px] font-permanent-marker">{question}</h1>
				</div>
				<div className={`${open ? 'block' : 'hidden'}`}>{answer}</div>
			</div>
		</div>
	);
};

export default FaqItem;
