import { useForm } from "react-hook-form";
import { formData, formDataAdd, formNext } from "../store";
import FormButtons from "../FormButtons";

export default function Message({ index }) {

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ defaultValues: { message: formData.value.message || "" } }
	);

	const onSubmit = (data) => {
		formDataAdd("message", data.message)
		formNext(index)
	}

	return (
		<form className="flex flex-col justify-center md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
			<p className="text-xl text-slate-700 font-semibold">Anything you wish to add or share?</p>
			<div className="flex flex-col mb-2 select-none">
				<textarea					
					rows="4"
					{...register("message", {
						minLength: {
							value: 10,
							message: "Please enter at least 10 characters."
						},
					})
					}
					className={`form-textarea p-3 sm:min-w-[420px] text-xl rounded-xl ${errors.message ? "border-hot-pink-500 focus:border-hot-pink-500" : "border-aquamarine-500 focus:border-aquamarine-500"}`}
					placeholder="Share your idea here..."
				/>
				{errors.message && <p className="text-sm text-hot-pink-500">{errors.message.message}</p>}
			</div>
			<FormButtons index={index} />
		</form>
	)
}