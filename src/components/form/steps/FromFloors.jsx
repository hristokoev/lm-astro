import Layout from "../Layout";

export default function FromFloors({ index }) {

	const formData = {
		fromType: "Flat",
		fromCity: "London"
	}

	return (
		<Layout index={index}>
			{formData.fromType === "Flat" && <p className="text-xl text-slate-700 font-semibold">On which floor is your flat in <span className="font-bold">{formData.fromCity}</span>?</p>}
			{formData.fromType === "House" && <p className="text-xl text-slate-700 font-semibold">How many floors does your house have in <span className="font-bold">{formData.fromCity}</span>?</p>}
			<div className="relative flex select-none">
				<input
					type="number"
					name="fromFloors"
					className="form-input md:p-6 md:min-w-[360px] text-center text-xl"
				/>
			</div>
			<div className="flex items-center mb-2">
				<label htmlFor="fromElevator" className="text-center font-medium cursor-pointer select-none">Is there an elevator?</label>
				<input
					id="fromElevator"
					type="checkbox"
					name="fromElevator"
					className="form-checkbox p-3 m-2 cursor-pointer"
				/>
			</div>
			
		</Layout>
	)
}