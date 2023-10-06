import { useState } from "react"
import Layout from "../Layout";

export default function FromType({ index }) {

	const [fromType, setFromType] = useState("Flat");

	return (
		<Layout index={index}>
			<p className="text-xl text-slate-700 font-semibold">
				What's the type of your current property in <span className="font-bold"></span>?
			</p>
			<div className="px-4 min-w-[360px] grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6 gap-4 select-none">
				<div className={`border rounded-3xl ${fromType == "Flat" ? "bg-white" : "hover:bg-white/30"} border-slate-800`}>
					<label htmlFor="fromTypeFlat" className={`block sm:px-8 sm:py-6 p-4 font-medium rounded-3xl cursor-pointer transition-all duration-150`}>Flat</label>
					<input
						id="fromTypeFlat"
						type="radio"
						name="fromType"
						value="Flat"
						className="hidden"
						onClick={() => setFromType("Flat")}
					/>
				</div>
				<div className={`border rounded-3xl ${fromType == "House" ? "bg-white" : "hover:bg-white/30"} border-slate-800`}>
					<label htmlFor="fromTypeHouse" className={`block sm:px-8 sm:py-6 p-4 font-medium rounded-3xl cursor-pointer transition-all duration-150`}>House</label>
					<input
						id="fromTypeHouse"
						type="radio"
						name="fromType"
						value="House"
						className="hidden"
						onClick={() => setFromType("House")}
					/>
				</div>
			</div>
			
		</Layout>
	)
}