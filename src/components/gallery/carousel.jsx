import Image01 from '/src/images/1_800x.jpg'
import Image02 from '/src/images/2_800x.jpg'
import Image03 from '/src/images/3_800x.jpg'
import Image04 from '/src/images/4_800x.jpg'
import Image05 from '/src/images/5_800x.jpg'
import Image06 from '/src/images/6_800x.jpg'
import Image07 from '/src/images/7_800x.jpg'
import Image08 from '/src/images/8_800x.jpg'
import { useEffect } from 'react';
import Swiper from 'swiper';

export default function Carousel() {

	useEffect(() => {
		new Swiper('.gallery', {
			breakpoints: {
				320: {
					slidesPerView: 1.75,
				},
				640: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3.5,
				},
			},
			initialSlide: 0,
			spaceBetween: 12,
			simulateTouch: true,
		});

	}, []);

	return (
		<div class="gallery swiper-container select-none">
			<div class="swiper-wrapper cursor-grab">
				<div className="swiper-slide">
					<img class="rounded-2xl" src={Image01.src} alt="Icon 01" />
				</div>
				<div className="swiper-slide">
					<img class="rounded-2xl" src={Image02.src} alt="Icon 02" />
				</div>
				<div className="swiper-slide">
					<img class="rounded-2xl" src={Image03.src} alt="Icon 03" />
				</div>
				<div className="swiper-slide">
					<img class="rounded-2xl" src={Image04.src} alt="Icon 01" />
				</div>
				<div className="swiper-slide">
					<img class="rounded-2xl" src={Image05.src} alt="Icon 02" />
				</div>
				<div className="swiper-slide">
					<img class="rounded-2xl" src={Image06.src} alt="Icon 03" />
				</div>
				<div className="swiper-slide">
					<img class="rounded-2xl" src={Image07.src} alt="Icon 03" />
				</div>
				<div className="swiper-slide">
					<img class="rounded-2xl" src={Image08.src} alt="Icon 03" />
				</div>
				<div className="swiper-slide">
					<img class="rounded-2xl" src={Image06.src} alt="Icon 03" />
				</div>
			</div>
		</div>
	)
}