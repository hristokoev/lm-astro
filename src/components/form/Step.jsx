import FromCity from "./steps/FromCity"
import Bedrooms from "./steps/Bedrooms"
import FromType from "./steps/FromType"
import FromFloors from "./steps/FromFloors"
import ToCity from "./steps/ToCity"
import ToType from "./steps/ToType"
import ToFloors from "./steps/ToFloors"
import When from "./steps/When"
import Message from "./steps/Message"
import FirstName from "./steps/FirstName"
import LastName from "./steps/LastName"
import PhoneNumber from "./steps/Phone"
import Email from "./steps/Email"
import Success from "./steps/Success"
import Error from "./steps/Error"
import { formIndex, formData } from "./store"
import { useStore } from "@nanostores/react"

function Step() {

	const index = useStore(formIndex)

	const StepDisplay = [
		<FromCity index={0} />,
		<Bedrooms index={1} />,
		<FromType index={2} />,
		<FromFloors index={3} />,
		<ToCity index={4} />,
		<ToType index={5} />,
		<ToFloors index={6} />,
		<When index={7} />,
		<Message index={8} />,
		<FirstName index={9} />,
		<LastName index={10} />,
		<PhoneNumber index={11} />,
		<Email index={12} />,
		<Success index={13} />,
		<Error index={14} />
	]
	return (
		StepDisplay[index]
	)
}

export default Step;