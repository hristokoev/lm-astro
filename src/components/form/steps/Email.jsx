import Layout from "../Layout";
import { formData, formDataAdd } from "../store";

export default function Email({ index }) {

	const handleChange = (e) => {
		formDataAdd(e.target.name, e.target.value)
	}

	return (
		<Layout index={index}>
		<p className="text-xl text-slate-700 font-semibold">Lastly, what's your email address?</p>
		<div className="relative flex sekect-none">
			<input
				type="email"
				name="email"
				className="form-input md:p-6 md:min-w-[360px] text-center text-xl"
				placeholder="jimhalpert@gmail.com"
				defaultValue={formData.value.email || ""}
				onChange={handleChange}
			/>
		</div>
		
	</Layout>
	)
}