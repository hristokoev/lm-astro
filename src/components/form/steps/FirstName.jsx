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
		<form className="flex flex-col md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
		<p className="text-xl text-slate-700 font-semibold">Let's meet soon! But first, what's your name?</p>
		<div className="relative flex select-none">
			<input
				type="text"
				{...register("firstName", {
					required: "Please enter your first name",
					minLength: {
						value: 2,
						message: "Please enter a valid first name"
					},
				})}
				className={`form-input md:p-6 md:min-w-[360px] text-center text-xl ${errors.firstName && "border-hot-pink-500 focus:border-hot-pink-500"}`}
				placeholder="Jim"
				autoComplete="off"
			/>
		</div>
		<FormButtons index={index} />
	</form>
	)
}