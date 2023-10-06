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
		<form className="flex flex-col md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
			<p className="text-xl text-slate-700 font-semibold">
				Where would you like to move from?
			</p>
			<div className="relative select-none">
				<input
					type="text"
					{...register("fromCity", { 
						required: "Please enter a city name",
						minLength: {
							value: 4,
							message: "Please enter a valid city name"
						},
					 })}
					className={`form-input p-6 md:min-w-[360px] text-center text-xl ${errors.fromCity && "border-hot-pink-500 focus:border-hot-pink-500"}`}
					placeholder="Enter a city name"
					autoComplete="off"
				/>
			</div>
			<FormButtons index={index} />
		</form>
	)
}