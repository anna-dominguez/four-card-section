import Card from '@/components/Card';

export default function Home() {
	return (
		<div className="flex min-h-screen justify-center py-20 px-6 bg-[#f7f7f7] text-[#4D4F62]">
			<main className="flex flex-col gap-16">
				<section className="text-center flex flex-col gap-4">
					<h1 className="tracking-[0.17px] font-extralight text-2xl md:tracking-[0.25px] md:text-[36px] flex flex-col">
						Reliable, efficient delivery
						<br />
						<span className="font-semibold mt-4">Powered by Technology</span>
					</h1>
					<p className="leading-[25px] text-[15px] opacity-50 tracking-[0.1px] max-w-[540px] mx-auto">
						Our Artificial Intelligence powered tools use millions of project
						data points to ensure that your project is successful
					</p>
				</section>
				<section className="grid md:grid-cols-3 md:grid-rows-4 gap-6 mx-auto">
					<Card
						title="Supervisor"
						description="Monitors activity to identify project roadblocks"
						image="/images/icon-supervisor.svg"
						border="border-t-[#44D3D2]"
						gridPlacement="md:col-start-1 md:row-start-2 md:row-span-2"
					/>
					<Card
						title="Team Builder"
						description="Scans our talent network to create the optimal team for your project"
						image="/images/icon-team-builder.svg"
						border="border-t-[#EA7C69]"
						gridPlacement="md:col-start-2 md:row-start-1 md:row-span-2"
					/>
					<Card
						title="Karma"
						description="Regularly evaluates our talent to ensure quality"
						image="/images/icon-karma.svg"
						border="border-t-[#FFB428]"
						gridPlacement="md:col-start-2 md:row-start-3 md:row-span-2"
					/>
					<Card
						title="Calculator"
						description="Uses data from past projects to provide better delivery estimates"
						image="/images/icon-calculator.svg"
						border="border-t-[#549EF2]"
						gridPlacement="md:col-start-3 md:row-start-2 md:row-span-2"
					/>
				</section>
			</main>
		</div>
	);
}
