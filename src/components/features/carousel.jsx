import FeaturesIcon01 from '/src/images/features-icon-01.svg';
import FeaturesIcon02 from '/src/images/features-icon-02.svg';
import FeaturesIcon03 from '/src/images/features-icon-03.svg';
import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

export default function Carousel() {

	useEffect(() => {
		new Swiper('.carousel', {
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			},
			loop: false,
			centeredSlides: false,
			initialSlide: 0,
			spaceBetween: 24,
			simulateTouch: false,
		});

	}, []);

	return (
		<div className="carousel swiper-container">
			<div className="swiper-wrapper">
				<div className="swiper-slide h-auto flex flex-col bg-hot-pink-400 p-6 rounded-2xl">
					<img className="mb-3 select-none" src={FeaturesIcon01.src} width="56" height="56" alt="Icon 01" />
					<div className="grow">
						<div className="font-hkgrotesk font-bold text-xl text-white">Assembling</div>
						<div className="text-slate-100 mb-3">Disassembly and assembly of furniture, appliances, and other items.</div>
					</div>
				</div>
				<div className="swiper-slide h-auto flex flex-col bg-hot-pink-400 p-6 rounded-2xl">
					<img className="mb-3 select-none" src={FeaturesIcon02.src} width="56" height="56" alt="Icon 02" />
					<div className="grow">
						<div className="font-hkgrotesk font-bold text-xl text-white">Wrapping</div>
						<div className="text-slate-100 mb-3">Wrapping of furniture with protective film and blankets to prevent damage.</div>
					</div>
				</div>
				<div className="swiper-slide h-auto flex flex-col bg-hot-pink-400 p-6 rounded-2xl">
					<img className="mb-3 select-none" src={FeaturesIcon03.src} width="56" height="56" alt="Icon 03" />
					<div className="grow">
						<div className="font-hkgrotesk font-bold text-xl text-white">Packing</div>
						<div className="text-slate-100 mb-3">Packing and unpacking household items into moving boxes.</div>
					</div>
				</div>
			</div>
		</div>
	)
}