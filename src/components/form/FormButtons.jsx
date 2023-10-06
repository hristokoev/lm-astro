import { formPrev, formNext } from "./store"

export default function FormButtons({ index }) {
	return (
		<div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 select-none">
			{index > 0 && (
				<div>
					<button className="btn text-slate-700 bg-white hover:bg-slate-100 w-full group" type="button" onClick={() => formPrev(index)}>
						Back
					</button>
				</div>
			)}
			<div>
				<button className="btn text-white bg-slate-700 hover:bg-slate-600 border-slate-600 w-full" type="button" onClick={() => formNext(index)}>
					Continue to next step&nbsp;
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
					</svg>
				</button>
			</div>
		</div>
	)
}