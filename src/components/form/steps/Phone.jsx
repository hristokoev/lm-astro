import Layout from "../Layout";

export default function Phone({ index }) {
	return (
		<Layout index={index}>
		<p className="text-xl text-slate-700 font-semibold">Do you have a phone number where we can reach you?</p>
		<div className="relative flex select-none">
			<input
				type="text"
				name="phoneNumber"
				className="form-input md:p-6 md:min-w-[360px] text-center text-xl"
				placeholder="06-12345678"
				autoFocus={true}
			/>
		</div>
		
	</Layout>
	)
}