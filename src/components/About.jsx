import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'
import { aboutLists } from '../../constants'

const About = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create('#about h2', { type: 'words' })

		const scrollTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#about',
				start: 'top center',
			},
		})

		scrollTimeline
			.from(titleSplit.words, {
				opacity: 0,
				duration: 1,
				yPercent: 100,
				ease: 'expo.out',
				stagger: 0.02,
			})
			.from(
				'.top-grid div, .bottom-grid div',
				{
					opacity: 0,
					duration: 1,
					ease: 'power1.inOut',
					stagger: 0.04,
				},
				'-=0.5'
			)
	})

	return (
		<div id='about'>
			<div className='mb-16 md:px-0 px-5'>
				<div className='content'>
					<div className='md:col-span-8'>
						<p className='badge'>Best Cocktails</p>
						<h2>
							Where every detail matters <span className='text-white '>- </span>
							from muddle to garnish
						</h2>
					</div>
					<div className='sub-content'>
						<p>
							Every cocktail we serve is a reflection of our obsession with
							detail — from the first muddle to the final garnish. That care is
							what turns a simple drink into something truly memorable.
						</p>

						<div className='grid grid-cols-13'>
							<div className='col-span-6'>
								<ul className='flex gap-1 items-center'>
									{Array(5)
										.fill('null')
										.map((_, i) => (
											<li key={i}>
												<img
													src='/images/star.png'
													alt='star'
													className='size-[18px]'
												/>
											</li>
										))}
								</ul>
								<p className='md:text-3xl text-xl font-bold '>4.5/5</p>
								<p className='text-sm text-white-100'>
									More than +12000 customers
								</p>
							</div>
							<div className='border-l border-gray-400 col-span-1' />
							<div className='col-span-6'>
								<div className='mt-5 grid grid-cols-4 gap-0'>
									<img
										src='/images/profile1.png'
										alt='profile-1'
										className='size-[50px]'
									/>
									<img
										src='/images/profile2.png'
										alt='profile-2'
										className='size-[50px] -ml-4'
									/>
									<img
										src='/images/profile3.png'
										alt='profile-3'
										className='size-[50px] -ml-8'
									/>
									<img
										src='/images/profile4.png'
										alt='profile-4'
										className='size-[50px] -ml-12'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='top-grid'>
				<div className='md:col-span-3'>
					<div className='noisy' />
					<img src='/images/abt1.png' alt='grid-img-1' />
				</div>
				<div className='md:col-span-3 p-8 '>
					<div className='noisy' />
					<h1 className='text-3xl text-center mt-5 font-modern-negra'>
						Crafted to Impress
					</h1>
					<div className='bg-gray-500 my-3 h-0.5' />
					<div className='contents'>
						<ul className='space-y-4'>
							{aboutLists.map((feature, index) => (
								<li key={index} className='flex items-center gap-2'>
									<img
										src='/images/check.png'
										alt='check'
										className='w-[10px]'
									/>
									<p>{feature}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='md:col-span-6'>
					<div className='noisy' />
					<img src='/images/abt2.png' alt='grid-img-2' />
				</div>
			</div>
			<div className='bottom-grid'>
				<div className='md:col-span-8'>
					<div className='noisy' />
					<img src='/images/abt3.png' alt='grid-img-3' />
				</div>
				<div className='md:col-span-4'>
					<div className='noisy' />
					<img src='/images/abt4.png' alt='grid-img-4' />
				</div>
			</div>
		</div>
	)
}

export default About
