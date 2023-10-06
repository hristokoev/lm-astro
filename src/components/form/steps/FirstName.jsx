import Layout from "../Layout";

export default function FirstName({ index }) {
	return (
		<Layout index={index}>
		<p className="text-xl text-slate-700 font-semibold">Let's meet soon! But first, what's your name?</p>
		<div className="relative flex select-none">
			<input
				type="text"
				name="firstName"
				className="form-input md:p-6 md:min-w-[360px] text-center text-xl"
				placeholder="Jim"
				autoFocus={true}
			/>
		</div>
		
	</Layout>
	)
}