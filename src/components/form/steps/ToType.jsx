import { useForm } from "react-hook-form";
import { useState } from "react"
import { formData, formDataAdd, formNext, formJump } from "../store";
import FormButtons from "../FormButtons";

export default function ToType({ index }) {

	const [toType, setToType] = useState(formData.value.toType || "")

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ defaultValues: { toType: formData.value.toType || "" } }
	);

	const onSubmit = (data) => {
		formDataAdd("toType", data.toType)
		formNext(index)
	}

	const handleChange = (e) => {
		setToType(e.target.value)
	}

	return (
		<form className="flex flex-col justify-center md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
			<p className="text-xl text-slate-700 font-semibold">
				What's the type of your new property in <span className="font-bold underline cursor-pointer" onClick={() => formJump(4)}>{formData.value.toCity}</span>?
			</p>
			<div className="px-4 min-w-[360px] grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6 gap-4 select-none">
				<div className={`border rounded-3xl ${toType == "Flat" ? "bg-white" : "hover:bg-white/30"} border-slate-800`}>
					<label htmlFor="toTypeFlat" className={`block sm:px-8 sm:py-6 p-4 font-medium rounded-3xl cursor-pointer transition-all duration-150`}>Flat</label>
					<input
						id="toTypeFlat"
						type="radio"
						{...register("toType", { required: "Please select an option." })}
						value="Flat"
						className="hidden"
						onClick={handleChange}
					/>
				</div>
				<div className={`border rounded-3xl ${toType == "House" ? "bg-white" : "hover:bg-white/30"} border-slate-800`}>
					<label htmlFor="toTypeHouse" className={`block sm:px-8 sm:py-6 p-4 font-medium rounded-3xl cursor-pointer transition-all duration-150`}>House</label>
					<input
						id="toTypeHouse"
						type="radio"
						{...register("toType", { required: "Please select an option." })}
						value="House"
						className="hidden"
						onClick={handleChange}
					/>
				</div>
			</div>
			{errors.toType && <p className="mt-4 text-xs bg-hot-pink-500 px-2 py-1 rounded-lg text-white font-semibold mx-auto max-w-[240px]">{errors.toType.message}</p>}
			<FormButtons index={index} />
		</form>
	)
}