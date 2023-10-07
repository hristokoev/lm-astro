import { useForm } from "react-hook-form";
import { formData, formDataAdd, formNext } from "../store";
import FormButtons from "../FormButtons";

export default function FromCity({ index }) {

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ defaultValues: { fromCity: formData.value.fromCity || "" } }
	);

	const onSubmit = (data) => {
		formDataAdd("fromCity", data.fromCity)
		formNext(index)
	}

	return (
		<form className="flex flex-col justify-center md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
			<p className="text-xl text-slate-700 font-semibold">
				Where would you like to move from?
			</p>
			<div className="relative select-none">
				<input
					type="text"
					{...register("fromCity", { 
						required: "Please enter the address you'll be moving out from.",
						minLength: {
							value: 4,
							message: "Please enter a valid address."
						},
					 })}
					className={`form-input p-6 md:min-w-[360px] text-center text-xl ${errors.fromCity ? "border-hot-pink-500 focus:border-hot-pink-500" : "border-aquamarine-500 focus:border-aquamarine-500"}`}
					placeholder="City and/or address"
					autoComplete="off"
					/>
					{errors.fromCity && <p className="text-sm text-hot-pink-500 mx-auto max-w-[300px]">{errors.fromCity.message}</p>}
			</div>
			<FormButtons index={index} />
		</form>
	)
}