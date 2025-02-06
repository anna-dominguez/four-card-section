import React from 'react';

interface CardProps {
	title: string;
	description: string;
	image: string;
	border: string;
	gridPlacement: string;
}

const Card = ({
	title,
	description,
	image,
	border,
	gridPlacement,
}: CardProps) => {
	return (
		<article
			className={`bg-white rounded-lg max-w-[311px] md:max-w-[350px] p-7 border-t-4 ${border} ${gridPlacement} flex flex-col gap-6 shadow-lg`}
		>
			<section>
				<h2 className="text-[20px] font-semibold">{title}</h2>
				<p className="opacity-50 text-[13px] leading-[23px]">{description}</p>
			</section>
			<img
				src={image}
				alt={title}
				className="self-end h-[57px] w-[57px] md:h-[64px] md:w-[64px]"
			/>
		</article>
	);
};

export default Card;
