import { atom } from 'nanostores'

export const formIndex = atom(0)

export const formData = atom({
	fromCity: "",
	rooms: "",
	fromType: "",
	fromFloors: "",
	fromElevator: false,
	toCity: "",
	toType: "",
	toFloors: "",
	toElevator: false,
	when: "",
	message: "",
	firstName: "",
	lastName: "",
	phoneNumber: "",
	email: "",
})

export function formDataAdd(key, value) {
	formData.set({ ...formData.get(), [key]: value })
}

export function formJump(index) {
	formIndex.set(index)
}

export function formPrev(index) {
	formIndex.set(index == 0 ? 0 : index - 1)
}

export function formNext(index) {
	formIndex.set(index == 13 ? 13 : index + 1)
}
