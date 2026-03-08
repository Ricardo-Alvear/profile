import React from 'react';
import { motion } from 'framer-motion';
import {
	Github,
	Linkedin,
	Mail,
	Phone,
	ChevronRight,
	Code2,
	Briefcase,
	GraduationCap,
	Building2,
	ExternalLink,
} from 'lucide-react';

// Data Arrays for Clean Rendering
const salesAttributes = [
	{
		title: 'Emotional Intelligence',
		desc: "Understanding core concerns over just 'selling'.",
	},
	{ title: 'Resilience', desc: 'Treating denial as performance feedback.' },
	{
		title: 'Active Listening',
		desc: 'Aligning product pitches with specific customer requirements.',
	},
	{
		title: 'Persuasion',
		desc: 'Storytelling that solves problems in real-time.',
	},
	{
		title: 'Adaptability',
		desc: 'Altering communication styles to fit the individual.',
	},
];

const devAttributes = [
	{
		title: 'Systems Thinking',
		desc: 'Understanding the ripple effects between Frontend and Backend.',
	},
	{
		title: 'Problem Solving',
		desc: 'An obsessive drive to maintain robust, error-free systems.',
	},
	{
		title: 'Growth Mindset',
		desc: 'Integrating modern features for efficiency and security.',
	},
	{
		title: 'Attention to Detail',
		desc: 'Maintaining a clean, professional codebase.',
	},
	{
		title: 'Abstract Reasoning',
		desc: 'Translating API flows into functional, scalable code.',
	},
];

const PortfolioPage: React.FC = () => {
	return (
		<div className='min-h-screen w-screen overflow-x-hidden bg-[#FDFDFD] text-slate-900 font-sans'>
			{/* LAYER 1: HEADER */}
			<header className='w-full pt-16 pb-12 px-8 text-center bg-white border-b border-slate-100'>
				<motion.h1
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					className='text-5xl md:text-8xl font-serif font-black tracking-tighter text-slate-900 mb-6'
				>
					Ricardo Alvear
				</motion.h1>
				<div className='flex items-center justify-center gap-4 text-slate-500 uppercase tracking-[0.4em] text-xs font-medium'>
					<span>Full-Stack Developer</span>
					<span className='w-2 h-2 rounded-full bg-blue-600' />
					<span>Sales Specialist</span>
				</div>
			</header>

			{/* LAYER 2: CORE ATTRIBUTES & CONTACT */}
			<main className='w-full p-4 md:p-8 lg:p-12'>
				<div className='flex flex-col lg:flex-row items-stretch gap-8 w-full mb-12'>
					{/* Left: Sales & Profile */}
					<div className='flex-1 lg:w-1/2 flex flex-col gap-8'>
						<section className='bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col items-center text-center'>
							<div className='w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-slate-50 bg-slate-100 mb-6 shadow-inner'>
								<img
									src='/profile.jpg'
									alt='Ricardo Alvear'
									className='w-full h-full object-cover'
								/>
							</div>
							<h2 className='text-2xl font-serif font-bold mb-4'>
								Strategic Communication
							</h2>
							<p className='text-slate-500 leading-relaxed max-w-2xl'>
								Leveraging years of high-stakes sales experience
								to build software that actually solves human
								problems.
							</p>
						</section>

						<section className='bg-white border border-slate-200 rounded-3xl p-10 shadow-sm flex-grow'>
							<div className='flex items-center gap-4 mb-8 border-b border-slate-100 pb-6'>
								<Briefcase
									className='text-blue-600'
									size={28}
								/>
								<h3 className='text-2xl font-serif font-bold uppercase tracking-tight'>
									Sales Expertise
								</h3>
							</div>
							<div className='space-y-6'>
								{salesAttributes.map((attr, i) => (
									<div key={i}>
										<h4 className='text-lg font-bold text-slate-800'>
											0{i + 1} {attr.title}
										</h4>
										<p className='text-slate-500 mt-1 text-sm'>
											{attr.desc}
										</p>
									</div>
								))}
							</div>
						</section>
					</div>

					{/* Right: Technical & Social */}
					<div className='flex-1 lg:w-1/2 flex flex-col gap-8'>
						<section className='bg-slate-900 text-white rounded-3xl p-10 shadow-xl flex flex-col justify-between'>
							<div>
								<h3 className='text-2xl font-serif font-bold mb-8 uppercase tracking-tight'>
									Connect
								</h3>
								<div className='grid grid-cols-1 xl:grid-cols-2 gap-4 mb-8'>
									<a
										href='mailto:ricardo.alvear@gmail.com'
										className='flex items-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-all group'
									>
										<Mail size={20} />{' '}
										<span className='text-sm truncate'>
											ricardo.alvear@gmail.com
										</span>
									</a>
									<a
										href='tel:6473330941'
										className='flex items-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-all'
									>
										<Phone size={20} />{' '}
										<span className='text-sm'>
											(647) 333-0941
										</span>
									</a>
								</div>
							</div>
							<div className='flex items-center justify-around pt-6 border-t border-white/10'>
								<motion.a
									whileHover={{ y: -8 }}
									href='#'
									className='flex flex-col items-center gap-2'
								>
									<div className='p-6 bg-white text-slate-900 rounded-3xl'>
										<Github size={32} />
									</div>
									<span className='text-[10px] uppercase tracking-widest opacity-50'>
										GitHub
									</span>
								</motion.a>
								<motion.a
									whileHover={{ y: -8 }}
									href='#'
									className='flex flex-col items-center gap-2'
								>
									<div className='p-6 bg-[#0077B5] text-white rounded-3xl'>
										<Linkedin size={32} />
									</div>
									<span className='text-[10px] uppercase tracking-widest opacity-50'>
										LinkedIn
									</span>
								</motion.a>
							</div>
						</section>

						<section className='bg-white border border-slate-200 rounded-3xl p-10 shadow-sm flex-grow'>
							<div className='flex items-center gap-4 mb-8 border-b border-slate-100 pb-6'>
								<Code2 className='text-cyan-500' size={28} />
								<h3 className='text-2xl font-serif font-bold uppercase tracking-tight'>
									Technical Core
								</h3>
							</div>
							<div className='space-y-6'>
								{devAttributes.map((attr, i) => (
									<div key={i} className='flex gap-4'>
										<ChevronRight
											size={18}
											className='text-cyan-500 mt-1'
										/>
										<div>
											<h4 className='text-lg font-bold text-slate-800'>
												{attr.title}
											</h4>
											<p className='text-slate-500 text-sm mt-1'>
												{attr.desc}
											</p>
										</div>
									</div>
								))}
							</div>
						</section>
					</div>
				</div>

				{/* LAYER 3: EDUCATION & EXPERIENCE (New Section) */}
				<div className='flex flex-col lg:flex-row items-stretch gap-8 w-full'>
					{/* Left: Detailed Experience Timeline */}
					<div className='flex-1 lg:w-2/3'>
						<section className='bg-white border border-slate-200 rounded-3xl p-10 shadow-sm h-full'>
							<h3 className='text-3xl font-serif font-bold mb-10 border-b border-slate-100 pb-6'>
								Education & Work Experience
							</h3>

							<div className='space-y-12'>
								{/* Education */}
								<div className='relative pl-8 border-l-2 border-slate-100'>
									<div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm' />
									<h4 className='text-sm font-bold uppercase tracking-widest text-blue-600 mb-2'>
										Education
									</h4>
									<div className='flex justify-between items-start mb-2'>
										<p className='font-bold text-xl'>
											George Brown Polytechnic
										</p>
										<span className='text-sm text-slate-400 font-medium italic'>
											Sept 2024 - June 2027
										</span>
									</div>
									<p className='text-slate-500 text-sm leading-relaxed'>
										Participated in various coding
										competitions and gained significant
										knowledge on professional collaboration
										and methodologies.
									</p>
								</div>

								{/* Employment - Developer */}
								<div className='relative pl-8 border-l-2 border-slate-100'>
									<div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white shadow-sm' />
									<h4 className='text-sm font-bold uppercase tracking-widest text-cyan-500 mb-2'>
										Current Role
									</h4>
									<div className='flex justify-between items-start mb-2'>
										<p className='font-bold text-xl'>
											Junior Full-Stack Developer
										</p>
										<span className='text-sm text-slate-400 font-medium italic'>
											May 2026 - Present
										</span>
									</div>
									<p className='text-slate-500 text-sm leading-relaxed mb-4'>
										Collaborated on financial systems for
										banking companies using Scrum
										methodology. Responsible for the
										business logic section and ensuring
										transactions are completed with client
										satisfaction.
									</p>
								</div>

								{/* Employment - Sales */}
								<div className='relative pl-8 border-l-2 border-slate-100'>
									<div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 border-4 border-white shadow-sm' />
									<h4 className='text-sm font-bold uppercase tracking-widest text-slate-400 mb-2'>
										Professional History
									</h4>
									<div className='mb-6'>
										<div className='flex justify-between items-start mb-1'>
											<p className='font-bold text-lg'>
												JD Sports — Sales Associate
											</p>
											<span className='text-xs text-slate-400 font-medium italic'>
												July 2024 - April 2026
											</span>
										</div>
										<p className='text-slate-500 text-sm'>
											Promoted to supervisor to organize
											day-to-day operations for sales
											employees.
										</p>
									</div>
									<div>
										<div className='flex justify-between items-start mb-1'>
											<p className='font-bold text-lg'>
												Lowe's — Sales Associate
											</p>
											<span className='text-xs text-slate-400 font-medium italic'>
												July - Sept 2023
											</span>
										</div>
										<p className='text-slate-500 text-sm'>
											Assisted customers with product
											selection and maintained an
											organized environment.
										</p>
									</div>
								</div>
							</div>
						</section>
					</div>

					{/* Right: Partner Logos & Stack */}
					<div className='flex-1 lg:w-1/3 flex flex-col gap-8'>
						<section className='bg-white border border-slate-200 rounded-3xl p-10 shadow-sm flex flex-col items-center justify-between'>
							<h4 className='text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-8'>
								Affiliations
							</h4>
							<div className='flex flex-col gap-10 items-center w-full'>
								<div className='flex items-center gap-4 group cursor-help'>
									<div className='w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold p-3'>
										<Building2 />
									</div>
									<span className='font-bold text-slate-700'>
										George Brown
									</span>
								</div>
								<div className='flex items-center gap-4 group opacity-60'>
									<div className='w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold p-3 uppercase'>
										Lowe's
									</div>
									<span className='font-bold text-slate-700'>
										Lowe's Home
									</span>
								</div>
								<div className='flex items-center gap-4 group opacity-60'>
									<div className='w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold p-3 text-2xl italic'>
										JD
									</div>
									<span className='font-bold text-slate-700'>
										JD Sports
									</span>
								</div>
							</div>
						</section>

						<section className='bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-10 shadow-sm text-center'>
							<h4 className='text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-6'>
								Tech Stack
							</h4>
							<div className='flex flex-wrap justify-center gap-4'>
								{[
									'React',
									'Next.js',
									'Node',
									'TypeScript',
									'Tailwind',
									'MongoDB',
								].map((tech) => (
									<span
										key={tech}
										className='px-4 py-2 bg-white border border-slate-100 rounded-full text-xs font-bold shadow-sm'
									>
										{tech}
									</span>
								))}
							</div>
						</section>
					</div>
				</div>
			</main>

			<footer className='w-full py-12 text-center border-t border-slate-100 bg-white'>
				<p className='text-slate-400 text-[10px] uppercase tracking-[0.8em] font-bold'>
					Ricardo Alvear — Portfolio 2026
				</p>
			</footer>
		</div>
	);
};

export default PortfolioPage;
