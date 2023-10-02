import FromCity from "./steps/FromCity"
import Bedrooms from "./steps/Bedrooms"
import FromType from "./steps/FromType"
import Success from "./steps/Success"
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
import { formIndex, formPrev, formNext } from "./store"
import { useStore } from "@nanostores/react"

function Step() {

	const index = useStore(formIndex)

	const StepDisplay = [		
		<FromCity />,
		<Bedrooms />,
		<FromType />,
		<FromFloors />,
		<ToCity />,
		<ToType />,
		<ToFloors />,
		<When />,
		<Message />,
		<FirstName />,
		<LastName />,
		<PhoneNumber />,
		<Email />,
		<Success />
	]
	return (
		<div>
			{StepDisplay[index]}
			<button onClick={() => formPrev(index)}>Prev</button>
			<button onClick={() => formNext(index)}>Next</button>
		</div>
	)
}

export default Step;