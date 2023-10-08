import { useForm } from "react-hook-form";
import { formData, formDataAdd, formNext } from "../store";
import FormButtons from "../FormButtons";

export default function Phone({ index }) {

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ defaultValues: { phoneNumber: formData.value.phoneNumber || "" } }
	);

	const onSubmit = (data) => {
		formDataAdd("phoneNumber", data.phoneNumber)
		formNext(index)
	}
	
	return (
		<form className="flex flex-col justify-center md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
		<p className="text-xl text-slate-700 font-semibold">Do you have a phone number where we can reach you?</p>
		<div className="relative select-none">
			<input
				type="text"
				{...register("phoneNumber", {
					required: "Please enter your phone number.",
					pattern: {
						value: /^[0-9-+]+$/,
						message: "Please enter a valid phone number."
					},
				})}
				className={`form-input p-6 md:min-w-[360px] text-center text-xl ${errors.phoneNumber ? "border-hot-pink-500 focus:border-hot-pink-500" : "border-aquamarine-500 focus:border-aquamarine-500"}`}
				placeholder="06-12345678"
				autoComplete="off"
				autoFocus="on"
			/>
			{errors.phoneNumber && <p className="text-sm text-hot-pink-500 mx-auto max-w-[300px]">{errors.phoneNumber.message}</p>}
		</div>
		<FormButtons index={index} />
	</form>
	)
}