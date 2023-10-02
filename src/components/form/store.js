import { atom } from 'nanostores'

export const formIndex = atom(0)

export function formPrev(index) {
	formIndex.set(index == 0 ? 0 : index - 1)
}

export function formNext(index) {
	formIndex.set(index == 13 ? 13 : index + 1)
}
