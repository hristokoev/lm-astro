import { useForm } from "react-hook-form";
import { formData, formDataAdd, formJump } from "../store";
import FormButtons from "../FormButtons";
import { useState } from "react";

export default function Email({ index }) {

	const [loading, setLoading] = useState(false)

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ defaultValues: { email: formData.value.email || "" } }
	);

	const onSubmit = async (data) => {
		setLoading(true)
		formDataAdd("email", data.email)
		await fetch("/api/form", {
			method: "POST",
			body: JSON.stringify(formData.value),
		}).then((res) => {
			if (res.status === 200) {
				setLoading(false)
				formJump(13)
			} else {
				setLoading(false)
				formJump(14)
			}
		})
	}

	return (
		<form className="flex flex-col md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
		<p className="text-xl text-slate-700 font-semibold">Lastly, what's your email address?</p>
		<div className="relative flex sekect-none">
			<input
				type="text"
				{...register("email", {
					required: "Please enter your email address",
					pattern: {
						value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
						message: "Please enter a valid email address"
					},
				})}
				className={`form-input md:p-6 md:min-w-[360px] text-center text-xl ${errors.email && "border-hot-pink-500 focus:border-hot-pink-500"}`}
				placeholder="jimhalpert@gmail.com"
				autoComplete="off"
			/>
		</div>
		<FormButtons index={index} loading={loading} />
	</form>
	)
}