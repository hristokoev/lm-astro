import { useForm } from "react-hook-form";
import { formData, formDataAdd, formNext } from "../store";
import FormButtons from "../FormButtons";

export default function LastName({ index }) {

	const { register, handleSubmit, formState: { errors } } = useForm(
		{ defaultValues: { lastName: formData.value.lastName || "" } }
	);

	const onSubmit = (data) => {
		formDataAdd("lastName", data.lastName)
		formNext(index)
	}

	return (
		<form className="flex flex-col md:justify-between items-center gap-8 min-h-[320px] select-none" onSubmit={handleSubmit(onSubmit)}>
		<p className="text-xl text-slate-700 font-semibold">What's your last name?</p>
		<div className="relative flex select-none">
			<input
				type="text"
				{...register("lastName", {
					required: "Please enter your last name",
					minLength: {
						value: 2,
						message: "Please enter a valid last name"
					},
				})}
				className={`form-input md:p-6 md:min-w-[360px] text-center text-xl ${errors.lastName && "border-hot-pink-500 focus:border-hot-pink-500"}`}
				placeholder="Halpert"
				autoComplete="off"
			/>
		</div>
		<FormButtons index={index} />
	</form>
	)
}