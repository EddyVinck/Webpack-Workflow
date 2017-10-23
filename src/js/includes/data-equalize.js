// get data-equalize-container
// look for all elements with data-equalize
	// take the height of the tallest one
	// apply that height to all the data-equalize elements

export function dataEqualize(dataEqualizeContainer) {
	let container = getAllElementsWithAttribute(dataEqualizeContainer);
	// let children = getAllChildElementsWithAttribute(container);
	return 1;

	function getAllChildElementsWithAttribute(parentsArray, attribute) {
		let matchingElements = [];
		let allElements = parentsArray.getElementsByTagName('*');

		for (let i = 0, n = allElements.length; i < n; i++)
		{
			if (allElements[i].getAttribute(attribute) !== null) {
			  // Element exists with attribute. Add to array.
			  matchingElements.push(allElements[i]);
			}
		}		
		return matchingElements;
	}

	function getAllElementsWithAttribute(attribute) {
		let matchingElements = [];
		let allElements = document.getElementsByTagName('*');
		for (let i = 0, n = allElements.length; i < n; i++)
		{
			if (allElements[i].getAttribute(attribute) !== null) {
				console.log(allElements[i]);
				console.log(allElements[i].hasAttribute('data-equalize'));
			  // Element exists with attribute. Add to array.
			  // matchingElements.push(allElements[i]);
			}
		}
		// console.log();
		// console.log(matchingElements);
		// return matchingElements;
	}
}