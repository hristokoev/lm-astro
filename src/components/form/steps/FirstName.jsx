import { useForm } from "react-hook-form";
import { formData, formDataAdd, formNext } from "../store";
import FormButtons from "../FormButtons";

export default function FirstName({ index }) {

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ defaultValues: { firstName: formData.value.firstName || "" } }
	);

	const onSubmit = (data) => {
		formDataAdd("firstName", data.firstName)
		formNext(index)
	}

	return (
		<form className="flex flex-col justify-center md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
		<p className="text-xl text-slate-700 font-semibold">Let's meet soon! But first, what's your name?</p>
		<div className="relative select-none">
			<input
				type="text"
				{...register("firstName", {
					required: "Please enter your first name.",
					minLength: {
						value: 2,
						message: "Please enter a valid first name."
					},
					pattern: {
						value: /^[A-Za-z]+$/,
						message: "Please enter a valid first name."
					},
				})}
				className={`form-input p-6 md:min-w-[360px] text-center text-xl ${errors.firstName ? "border-hot-pink-500 focus:border-hot-pink-500" : "border-aquamarine-500 focus:border-aquamarine-500"}`}
				placeholder="Jim"
				autoComplete="off"
				autoFocus="on"
			/>
			{errors.firstName && <div className="flex w-full justify-center"><p className="mt-4 text-xs bg-hot-pink-500 px-2 py-1 rounded-lg text-white font-semibold max-w-[240px]">{errors.firstName.message}</p></div>}
		</div>
		<FormButtons index={index} />
	</form>
	)
}