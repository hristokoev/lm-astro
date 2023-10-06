import { useForm } from "react-hook-form";
import { formData, formDataAdd, formNext, formJump } from "../store";
import FormButtons from "../FormButtons";
import { useState } from "react";

export default function ToFloors({ index }) {

	const [checked, setChecked] = useState(formData.value.toElevator || false)

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ defaultValues: { toFloors: formData.value.toFloors || "" } }
	);

	const onSubmit = (data) => {
		formDataAdd("toFloors", data.toFloors)
		formDataAdd("toElevator", checked)
		formNext(index)
	}

	return (
		<form className="flex flex-col md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
			{formData.value.toType === "Flat" && <p className="text-xl text-slate-700 font-semibold">On which floor is your dream flat in <span className="font-bold underline cursor-pointer" onClick={() => formJump(4)}>{formData.value.toCity}</span>?</p>}
			{formData.value.toType === "House" && <p className="text-xl text-slate-700 font-semibold">How many floors does your dream house have in <span className="font-bold underline cursor-pointer" onClick={() => formJump(4)}>{formData.value.toCity}</span>?</p>}
			<div className="relative flex select-none">
				<input
					type="number"
					{...register("toFloors", {
						required: "Please enter a number",
						min: {
							value: -1,
							message: "Please enter a valid number"
						},
						max: {
							value: 66,
							message: "Please enter a valid number"
						}
					})
					}
					className={`form-input md:p-6 md:min-w-[360px] text-center text-xl ${errors.toFloors && "border-hot-pink-500 focus:border-hot-pink-500"}`}
					defaultValue={formData.value.toFloors}
					autoComplete="off"
				/>
			</div>
			<div className="flex items-center mb-2">
				<label htmlFor="toElevator" className="text-center font-medium cursor-pointer select-none">Is there an elevator?</label>
				<input
					id="toElevator"
					type="checkbox"
					{...register("toElevator")}
					className="hidden"
					onChange={() => setChecked(!checked)}
				/>
				<span className="bg-white rounded-full m-2 cursor-pointer overflow-hidden" onClick={() => setChecked(!checked)}>
					{checked ? (
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 p-2 bg-malibu-500 text-white">
							<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					) : (
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 p-2 bg-hot-pink-500 text-white">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					)}
				</span>
			</div>
			<FormButtons index={index} />
		</form>
	)
}