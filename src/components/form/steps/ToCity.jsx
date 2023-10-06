import Layout from '../Layout'
import { formData, formDataAdd } from "../store";

export default function ToCity({ index }) {

	const handleChange = (e) => {
		formDataAdd(e.target.name, e.target.value)
	}

	return (
		<Layout index={index}>
			<p className="text-xl text-slate-700 font-semibold">
				Where would you like to move to?
			</p>
			<div className="relative select-none">
				<input
					type="text"
					name="toCity"
					className="form-input md:p-6 md:min-w-[360px] text-center text-xl"
					placeholder="Enter a city name"
					defaultValue={formData.value.toCity || ""}
					onChange={handleChange}
				/>
			</div>
			
		</Layout>
	)
}