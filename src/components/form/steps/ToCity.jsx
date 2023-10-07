import { useForm } from "react-hook-form";
import { formData, formDataAdd, formNext } from "../store";
import FormButtons from "../FormButtons";

export default function ToCity({ index }) {

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ defaultValues: { toCity: formData.value.toCity || "" } }
	);

	const onSubmit = (data) => {
		formDataAdd("toCity", data.toCity)
		formNext(index)
	}

	return (
		<form className="flex flex-col justify-center md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
			<p className="text-xl text-slate-700 font-semibold">
				Where would you like to move to?
			</p>
			<div className="relative select-none">
				<input
					type="text"
					{...register("toCity", {
						required: "Please enter the address you'll be moving to.",
						minLength: {
							value: 4,
							message: "Please enter a valid city address."
						},
					})}
					className={`form-input p-6 md:min-w-[360px] text-center text-xl ${errors.toCity ? "border-hot-pink-500 focus:border-hot-pink-500" : "border-aquamarine-500 focus:border-aquamarine-500"}`}
					placeholder="City and/or address"
					autoComplete="off"
				/>
				{errors.toCity && <p className="text-sm text-hot-pink-500">{errors.toCity.message}</p>}
			</div>
			<FormButtons index={index} />
		</form>
	)
}