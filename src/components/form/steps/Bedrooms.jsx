import { useForm } from "react-hook-form";
import { useState } from "react";
import { formData, formDataAdd, formNext } from "../store";
import FormButtons from "../FormButtons";

export default function Bedrooms({ index }) {

	const [rooms, setRooms] = useState(formData.value.rooms || "")

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ defaultValues: { rooms: formData.value.rooms || "" } }
	);

	const onSubmit = (data) => {
		formDataAdd("rooms", data.rooms)
		formNext(index)
	}

	const handleChange = (e) => {
		setRooms(e.target.value)
	}

	return (
		<form className="flex flex-col justify-center md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
			<p className="text-xl text-slate-700 font-semibold">
				How many bedrooms? Or office(s)?
			</p>
			<div className="px-4 min-w-[360px] grid sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 sm:gap-x-4 sm:gap-y-4 gap-4 select-none">
				<div className={`border rounded-3xl ${rooms == "1 Bedroom" ? "bg-white" : "hover:bg-white/30"} border-slate-800`}>
					<label htmlFor="form1Bedroom" className={`block sm:px-8 sm:py-6 p-4 font-medium rounded-3xl cursor-pointer transition-all duration-150`}>1 Bedroom</label>
					<input
						id="form1Bedroom"
						type="radio"
						{...register("rooms", { required: "Please select a number of bedrooms" })}
						value="1 Bedroom"
						className="hidden"
						onClick={handleChange}
					/>
				</div>
				<div className={`border rounded-3xl ${rooms == "2 Bedrooms" ? "bg-white" : "hover:bg-white/30"} border-slate-800`}>
					<label htmlFor="form2Bedrooms" className={`block sm:px-8 sm:py-6 p-4 font-medium rounded-3xl cursor-pointer transition-all duration-150`}>2 Bedrooms</label>
					<input
						id="form2Bedrooms"
						type="radio"
						{...register("rooms", { required: "Please select a number of bedrooms" })}
						value="2 Bedrooms"
						className="hidden"
						onClick={handleChange}
					/>
				</div>
				<div className={`border rounded-3xl ${rooms == "3 Bedrooms" ? "bg-white" : "hover:bg-white/30"} border-slate-800`}>
					<label htmlFor="form3Bedrooms" className={`block sm:px-8 sm:py-6 p-4 font-medium rounded-3xl cursor-pointer transition-all duration-150`}>3 Bedrooms</label>
					<input
						id="form3Bedrooms"
						type="radio"
						{...register("rooms", { required: "Please select a number of bedrooms" })}
						value="3 Bedrooms"
						className="hidden"
						onClick={() => setRooms("3 Bedrooms")}
					/>
				</div>
				<div className={`border rounded-3xl ${rooms == "4 Bedrooms" ? "bg-white" : "hover:bg-white/30"} border-slate-800`}>
					<label htmlFor="form4Bedrooms" className={`block sm:px-8 sm:py-6 p-4 last:font-medium rounded-3xl cursor-pointer transition-all duration-150`}>4 Bedrooms</label>
					<input
						id="form4Bedrooms"
						type="radio"
						{...register("rooms", { required: "Please select a number of bedrooms" })}
						value="4 Bedrooms"
						className="hidden"
						onClick={handleChange}
					/>
				</div>
				<div className={`border rounded-3xl ${rooms == "5+ Bedrooms" ? "bg-white" : "hover:bg-white/30"} border-slate-800`}>
					<label htmlFor="form5Bedrooms" className={`block sm:px-8 sm:py-6 p-4 font-medium rounded-3xl cursor-pointer transition-all duration-150`}>5+ Bedrooms</label>
					<input
						id="form5Bedrooms"
						type="radio"
						{...register("rooms", { required: "Please select a number of bedrooms" })}
						value="5+ Bedrooms"
						className="hidden"
						onClick={handleChange}
					/>
				</div>
				<div className={`border rounded-3xl ${rooms == "Office" ? "bg-malibu-300" : "hover:bg-malibu-300/30"} border-slate-800`}>
					<label htmlFor="formOffice" className={`block sm:px-8 sm:py-6 p-4 font-mediumrounded-3xl cursor-pointer transition-all duration-150`}>Office(s)</label>
					<input
						id="formOffice"
						type="radio"
						{...register("rooms", { required: "Please select a number of bedrooms" })}
						value="Office"
						className="hidden"
						onClick={handleChange}
					/>
				</div>
			</div>
			<FormButtons index={index} />
		</form>
	)
}