import { useEffect, useState } from "react";
import { add, eachDayOfInterval, startOfWeek, endOfWeek, format, getDay, isEqual, isToday, parse, startOfToday } from 'date-fns'
import { formData, formDataAdd, formNext } from "../store";
import FormButtons from "../FormButtons";

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function When({ index }) {
	let today = startOfToday()
	let [selectedDay, setSelectedDay] = useState(add(today, { days: 1 }))
	let [currentWeek, setCurrentWeek] = useState(format(add(today, { days: 1 }), 'dd-MMM-yyyy'))
	let firstDayCurrentWeek = parse(currentWeek, 'dd-MMM-yyyy', new Date())
	let days = eachDayOfInterval({
		start: startOfWeek(firstDayCurrentWeek, { weekStartsOn: 1 }),
		end: endOfWeek(firstDayCurrentWeek, { weekStartsOn: 1 }),
	})
	const minDate = add(today, { days: 1 })
	const maxDate = add(today, { months: 2 })
	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

	function previousMonth() {
		let firstDayNextWeek = add(firstDayCurrentWeek, { weeks: -1 })
		if (minDate < firstDayCurrentWeek)
			setCurrentWeek(format(firstDayNextWeek, 'dd-MMM-yyyy'))
	}

	function nextMonth() {
		let firstDayNextWeek = add(firstDayCurrentWeek, { weeks: 1 })
		if (maxDate > firstDayCurrentWeek)
			setCurrentWeek(format(firstDayNextWeek, 'dd-MMM-yyyy'))
	}

	const onSubmit = (e) => {
		e.preventDefault()
		formNext(index)
	}

	useEffect(() => {
		formDataAdd('when', format(selectedDay, 'MMM dd, yyyy'))
	}, [selectedDay])

	return (
		<div className="flex flex-col md:justify-between items-center gap-8 min-h-[320px]">
			<p className="text-xl text-slate-700 font-semibold">When would you like to move?</p>
			<div className="mx-auto md:max-w-4xl z-10 select-none">
				<div className="flex items-center">
					<h2 className="flex-auto font-semibold text-gray-900">
						{format(firstDayCurrentWeek, 'MMMM yyyy')}
					</h2>
					<button
						type="button"
						onClick={previousMonth}
						className={`-my-1.5 flex flex-none items-center justify-center p-1.5 ${minDate < firstDayCurrentWeek ? "text-plantation-500" : "text-plantation-900"} ${minDate < firstDayCurrentWeek && "hover:text-plantation-400"}`}
					>
						<span className="sr-only">Previous month</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
						</svg>
					</button>
					<button
						onClick={nextMonth}
						type="button"
						className={`-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 ${maxDate > firstDayCurrentWeek ? "text-plantation-500" : "text-plantation-900"} ${maxDate > firstDayCurrentWeek && "hover:text-plantation-400"}`}>
						<span className="sr-only">Next month</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
						</svg>
					</button>
				</div>
				<div className="grid grid-cols-7 mt-2 text-sm">
					{days.map((day) => (
						<div
							key={day.toString()}
							className='flex justify-center'
						>
							<button
								type="button"
								onClick={() => {
									if (day > today) {
										setSelectedDay(day)
										formDataAdd('when', format(day, 'MMM dd, yyyy'))
									}
								}}
								className={classNames(
									!isEqual(day, selectedDay) &&
									!isToday(day) &&
									(day > today) &&
									'text-plantation-900 hover:bg-white/50 bg-plantation-200/50',

									(day <= today) &&
									'border bg-gray-300/50 border-gray-400/50 text-gray-900',

									isEqual(day, selectedDay) &&

									(day > today) &&
									'bg-white text-gray-900',
									(isEqual(day, selectedDay) || !isEqual(day, selectedDay)) &&
									(day > today) &&
									'border border-aquamarine-500',
									'sm:m-2 m-1 p-3 flex flex-col justify-center items-center sm:w-20 sm:h-20 w-12 h-12 rounded-3xl'

								)}
							>
								<div className="sm:uppercase sm:text-[0.75rem] text-[0.66rem] font-bold">
									{daysOfWeek[getDay(day)]}
								</div>
								<time dateTime={format(day, 'yyyy-MM-dd')} className="sm:text-xl text-md">
									{format(day, 'd')}
								</time>
							</button>
						</div>
					))}
				</div>
			</div>
			<form onSubmit={onSubmit}>
				<FormButtons index={index} />
			</form>
		</div>
	)
}