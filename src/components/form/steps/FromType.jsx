import { useForm } from "react-hook-form";
import { useState } from "react"
import { formData, formDataAdd, formNext, formJump } from "../store";
import FormButtons from "../FormButtons";

export default function FromType({ index }) {

	const [fromType, setFromType] = useState(formData.value.fromType || "")

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ defaultValues: { fromType: formData.value.fromType || "" } }
	);

	const onSubmit = (data) => {
		formDataAdd("fromType", data.fromType)
		formNext(index)
	}

	const handleChange = (e) => {
		setFromType(e.target.value)
	}

	return (
		<form className="flex flex-col md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
			<p className="text-xl text-slate-700 font-semibold">
				What's the type of your current property in <span className="font-bold underline cursor-pointer" onClick={() => formJump(0)}>{formData.value.fromCity}</span>?
			</p>
			<div className="px-4 min-w-[360px] grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6 gap-4 select-none">
				<div className={`border rounded-3xl ${fromType == "Flat" ? "bg-white" : "hover:bg-white/30"} border-slate-800`}>
					<label htmlFor="fromTypeFlat" className={`block sm:px-8 sm:py-6 p-4 font-medium rounded-3xl cursor-pointer transition-all duration-150`}>Flat</label>
					<input
						id="fromTypeFlat"
						type="radio"
						{...register("fromType", { required: "Please select a type of property" })}
						value="Flat"
						className="hidden"
						onClick={handleChange}
					/>
				</div>
				<div className={`border rounded-3xl ${fromType == "House" ? "bg-white" : "hover:bg-white/30"} border-slate-800`}>
					<label htmlFor="fromTypeHouse" className={`block sm:px-8 sm:py-6 p-4 font-medium rounded-3xl cursor-pointer transition-all duration-150`}>House</label>
					<input
						id="fromTypeHouse"
						type="radio"
						{...register("fromType", { required: "Please select a type of property" })}
						value="House"
						className="hidden"
						onClick={handleChange}
					/>
				</div>
			</div>
			<FormButtons index={index} />
		</form>
	)
}