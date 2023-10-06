import Layout from "../Layout";

export default function ToFloors({ index }) {

	const formData = {
		toType: "Flat",
		toCity: "London"
	}

	return (
		<Layout index={index}>
			{formData.toType === "Flat" && <p className="text-xl text-slate-700 font-semibold">On which floor is your dream flat in <span className="font-bold">{formData.toCity}</span>?</p>}
			{formData.toType === "House" && <p className="text-xl text-slate-700 font-semibold">How many floors does your dream house have in <span className="font-bold">{formData.toCity}</span>?</p>}
			<div className="relative flex select-none">
				<input
					type="number"
					name="toFloors"
					className="form-input md:p-6 md:min-w-[360px] text-center text-xl"
				/>
			</div>
			<div className="flex items-center mb-2">
				<label htmlFor="toElevator" className="text-center font-medium cursor-pointer select-none">Is there an elevator?</label>
				<input
					id="toElevator"
					type="checkbox"
					name="toElevator"
					className="form-checkbox p-3 m-2 cursor-pointer"
				/>
			</div>
			
		</Layout>
	)
}