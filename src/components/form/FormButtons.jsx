import { formPrev } from "./store"

export default function FormButtons({ index, loading }) {
	return (
		<div className="max-w-xs flex flex-col-reverse sm:flex-row mx-auto sm:max-w-none sm:inline-flex sm:justify-center gap-y-4 sm:gap-y-0 sm:gap-x-4 select-none">
			{index > 0 && (
				<div>
					<button className="btn text-slate-700 bg-white hover:bg-slate-100 w-full group" type="button" onClick={() => formPrev(index)}>
						Back
					</button>
				</div>
			)}
			<div>
				{index < 12 ? (
					<button className="btn text-white bg-slate-700 hover:bg-slate-600 border-slate-600 w-full" type="submit">
						Continue to next step&nbsp;
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
						</svg>
					</button>
				) : (
					<button className={`btn text-white bg-malibu-500 hover:bg-malibu-600 border-malibu-600 w-full min-w-[180px]`} type="submit" disabled={loading}>
						{loading ? (
							<>
								<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
									<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
									<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
								Sending...
							</>
						) : (
							<>
								Send&nbsp;
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
								</svg>
							</>
						)}
					</button>
				)}
			</div>
		</div>
	)
}