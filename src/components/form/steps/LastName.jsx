import Layout from "../Layout";
import { formData, formDataAdd } from "../store";

export default function LastName({ index }) {

	const handleChange = (e) => {
		formDataAdd(e.target.name, e.target.value)
	}

	return (
		<Layout index={index}>
		<p className="text-xl text-slate-700 font-semibold">What's your last name?</p>
		<div className="relative flex select-none">
			<input
				type="text"
				name="lastName"
				className="form-input md:p-6 md:min-w-[360px] text-center text-xl"
				placeholder="Halpert"
				defaultValue={formData.value.lastName || ""}
				onChange={handleChange}
			/>
		</div>
		
	</Layout>
	)
}