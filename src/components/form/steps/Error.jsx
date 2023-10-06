export default function Error() {
	return (
		<div className="flex flex-col justify-center items-center gap-y-8">
			<div className="mb-12"></div>
			<div className="px-16 py-12 bg-white rounded-3xl">
				<p className="text-center text-2xl text-slate-700">Oh no, something went wrong! 😢<br />Please try filling the form again or contact us.</p>
			</div>
		</div>
	)
}