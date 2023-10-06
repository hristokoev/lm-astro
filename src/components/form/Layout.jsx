import FormButtons from "./FormButtons";

export default function Layout({ children, index }) {
	return (
		<form className="flex flex-col justify-between items-center gap-8 h-[320px]">
			{children}
			<FormButtons index={index} />
		</form>
	)
}