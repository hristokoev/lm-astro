function convertData(data) {
	const transformedObject = {
		"name": data.firstName + ' ' + data.lastName,
		"email": data.email,
		"phone": data.phoneNumber,
		"display_name": data.firstName,
		"other_fields": {
			"From" : `${data.fromCity}, Type: ${data.fromType}, Floor: ${data.fromFloors}, ${data.fromElevator ? 'With elevator' : 'Without elevator'}`,
			"To" : `${data.toCity}, Type: ${data.toType}, Floor: ${data.toFloors}, ${data.toElevator ? 'With elevator' : 'Without elevator'}`,
			"Bedrooms" : `${data.rooms}`,
			"When" : `${data.when}`,
			"Message" : `${data.message}`,
		}
	};

	return transformedObject;
}

export const POST = async ({ request }) => {
  const data = await request.json();
	const response = await fetch(import.meta.env.PRIVYR_URL, {
		method: "POST",
		body: JSON.stringify(convertData(data)),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	});
  return new Response(
    JSON.stringify({
      message: response.ok ? "Success" : "Error",
    }),
    { status: response.ok ? 200 : 400 }
  );
};