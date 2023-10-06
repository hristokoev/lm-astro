import Layout from "../Layout";
import { formData, formDataAdd } from "../store";

export default function ToFloors({ index }) {

	const handleInput = (e) => {
		formDataAdd(e.target.name, e.target.value)
	}

	const handleChange = (e) => {
		formDataAdd(e.target.name, e.target.checked)
	}

	return (
		<Layout index={index}>
			{formData.value.toType === "Flat" && <p className="text-xl text-slate-700 font-semibold">On which floor is your dream flat in <span className="font-bold">{formData.value.toCity}</span>?</p>}
			{formData.value.toType === "House" && <p className="text-xl text-slate-700 font-semibold">How many floors does your dream house have in <span className="font-bold">{formData.value.toCity}</span>?</p>}
			<div className="relative flex select-none">
				<input
					type="number"
					name="toFloors"
					className="form-input md:p-6 md:min-w-[360px] text-center text-xl"
					defaultValue={formData.value.toFloors}
					onChange={handleInput}
				/>
			</div>
			<div className="flex items-center mb-2">
				<label htmlFor="toElevator" className="text-center font-medium cursor-pointer select-none">Is there an elevator?</label>
				<input
					id="toElevator"
					type="checkbox"
					name="toElevator"
					className="form-checkbox p-3 m-2 cursor-pointer"
					defaultChecked={formData.value.toElevator ? true : false}
					onChange={handleChange}
				/>
			</div>
			
		</Layout>
	)
}