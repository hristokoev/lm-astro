import Layout from "../Layout";

export default function Email({ index }) {
	return (
		<Layout index={index}>
		<p className="text-xl text-slate-700 font-semibold">Lastly, what's your email address?</p>
		<div className="relative flex sekect-none">
			<input
				type="email"
				name="email"
				className="form-input md:p-6 md:min-w-[360px] text-center text-xl"
				placeholder="jimhalpert@gmail.com"
				autoFocus={true}
			/>
		</div>
		
	</Layout>
	)
}