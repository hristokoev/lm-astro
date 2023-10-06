import Layout from "../Layout";

export default function Message({ index }) {
	return (
		<Layout index={index}>
			<p className="text-xl text-slate-700 font-semibold">Anything you wish to add or share?</p>
			<div className="flex flex-col items-start mb-2 select-none">
				<textarea					
					rows="4"
					name="message"
					className="form-textarea p-3 sm:min-w-[420px] text-xl rounded-xl"
					placeholder="Share your idea here..."
				/>
			</div>
			
		</Layout>
	)
}