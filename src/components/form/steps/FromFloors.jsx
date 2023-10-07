import { useForm } from "react-hook-form";
import { formData, formDataAdd, formNext, formJump } from "../store";
import FormButtons from "../FormButtons";
import { useState } from "react";

export default function FromFloors({ index }) {

	const [checked, setChecked] = useState(formData.value.fromElevator || false)

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ defaultValues: { fromFloors: formData.value.fromFloors || "" } }
	);

	const onSubmit = (data) => {
		formDataAdd("fromFloors", data.fromFloors)
		formDataAdd("fromElevator", checked)
		formNext(index)
	}

	return (
		<form className="flex flex-col justify-center md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
			{formData.value.fromType === "Flat" && <p className="text-xl text-slate-700 font-semibold">On which floor is your flat in <span className="font-bold underline cursor-pointer" onClick={() => formJump(0)}>{formData.value.fromCity}</span>?</p>}
			{formData.value.fromType === "House" && <p className="text-xl text-slate-700 font-semibold">How many floors does your house have in <span className="font-bold underline cursor-pointer" onClick={() => formJump(0)}>{formData.value.fromCity}</span>?</p>}
			<div className="relative select-none">
				<input
					type="number"
					{...register("fromFloors", {
						required: "Please enter the number of your floor.",
						min: {
							value: -1,
							message: "Please enter a valid floor number."
						},
						max: {
							value: 66,
							message: "Please enter a valid floor number."
						}
					})
					}
					className={`form-input p-6 md:min-w-[360px] text-center text-xl ${errors.fromFloors ? "border-hot-pink-500 focus:border-hot-pink-500" : "border-aquamarine-500 focus:border-aquamarine-500"}`}
					defaultValue={formData.value.fromFloors}
					autoComplete="off"
				/>
				{errors.fromFloors && <p className="text-sm text-hot-pink-500">{errors.fromFloors.message}</p>}
			</div>
			<div className="flex items-center mb-2">
				<label htmlFor="fromElevator" className="text-center font-medium cursor-pointer select-none">Is there an elevator?</label>
				<input
					id="fromElevator"
					type="checkbox"
					{...register("fromElevator")}
					className="hidden"
					onChange={() => setChecked(!checked)}
				/>
				<span className="bg-white rounded-full m-2 cursor-pointer overflow-hidden" onClick={() => setChecked(!checked)}>
					{checked ? (
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 p-2 bg-malibu-500 text-white">
							<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					) : (
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 bg-white hover:bg-slate-100 text-malibu-500">
							<circle cx="12" cy="12" r="12" />
						</svg>
					)}
				</span>
			</div>
			<FormButtons index={index} />
		</form>
	)
}