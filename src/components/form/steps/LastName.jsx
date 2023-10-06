import Layout from "../Layout";

export default function LastName({ index }) {
	return (
		<Layout index={index}>
		<p className="text-xl text-slate-700 font-semibold">What's your last name?</p>
		<div className="relative flex select-none">
			<input
				type="text"
				name="lastName"
				className="form-input md:p-6 md:min-w-[360px] text-center text-xl"
				placeholder="Halpert"
				autoFocus={true}
			/>
		</div>
		
	</Layout>
	)
}