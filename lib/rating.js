export default function getRating(record) {
	// console.log(getData)
	let rating =
		(record.review_scores_accuracy +
			record.review_scores_cleanliness +
			record.review_scores_checkin +
			record.review_scores_communication +
			record.review_scores_location +
			record.review_scores_value) /
		6;

	return rating;
}
