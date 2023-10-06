import Layout from "../Layout";
import { useState } from "react"
import { formData, formDataAdd } from "../store";

export default function ToType({ index }) {

	const [toType, setToType] = useState(formData.value.toType || "")

	const handleChange = (e) => {
		setToType(e.target.value)
		formDataAdd(e.target.name, e.target.value)
	}

	return (
		<Layout index={index}>
			<p className="text-xl text-slate-700 font-semibold">
				What's the type of your new property in <span className="font-bold"></span>?
			</p>
			<div className="px-4 min-w-[360px] grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6 gap-4 select-none">
				<div className={`border rounded-3xl ${toType == "Flat" ? "bg-white" : "hover:bg-white/30"} border-slate-800`}>
					<label htmlFor="toTypeFlat" className={`block sm:px-8 sm:py-6 p-4 font-medium rounded-3xl cursor-pointer transition-all duration-150`}>Flat</label>
					<input
						id="toTypeFlat"
						type="radio"
						name="toType"
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
						name="toType"
						value="House"
						className="hidden"
						onClick={handleChange}
					/>
				</div>
			</div>
			
		</Layout>
	)
}