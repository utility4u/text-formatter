export default function formatText(font) {
	const paragraphs = Array.from(document.querySelectorAll("[class*='formattedText']"));
	const canvas = document.createElement('canvas').getContext('2d');
	canvas.font = font;
	
	paragraphs.forEach((par) => {
		const originalText = par.innerHTML;
		const maxWidth = par.clientWidth;
		const formatedText = format(originalText, maxWidth, canvas);
		par.innerHTML = formatedText;
	});

	function format(text, maxWidth, canvas) {
		text = text.trim();
		let newText = "";

		let wordIndex = 0;
		let prevWordIndex = 0;
		let newRow = "";
		do {
			prevWordIndex = wordIndex;
			wordIndex = text.indexOf(' ', prevWordIndex + 1);
			
			if(!newRow){
				newRow += text.substring(prevWordIndex, wordIndex !== -1 ? wordIndex : text.length).trimStart();
			}else{
				newRow += text.substring(prevWordIndex, wordIndex !== -1 ? wordIndex : text.length);
			}
			
			if (canvas.measureText(newRow).width >= maxWidth) {
				let newRowCopy = newRow;
				let endIndex = newRow.length;
				let middleIndex = newRow.lastIndexOf(' ');
				
				//if the word is not longer than the row
				if(middleIndex !== -1){
					//while the word is longer than possible (only first try) or the last word is too short and it is not the last word on the row 
					//(not needed, but I want not to rely on the return value of lastIndexOf() function
					while (canvas.measureText(newRow).width >= maxWidth || endIndex - middleIndex < 4 ) {
						endIndex = middleIndex;
						newRow = newRow.substring(0, endIndex);
						middleIndex = newRow.lastIndexOf(' ');
						
						if(middleIndex === -1){
							break;
						}
					}
					
					//if there are no long word on the row
					if(middleIndex === -1 && endIndex < 3){
						newRow = newRowCopy.substring(0, newRowCopy.lastIndexOf(' '));
						wordIndex = prevWordIndex;
						prevWordIndex = text.substring(0,wordIndex).lastIndexOf(' ');
					}else{
						//change the global string pointer, because of last word were cut and is needed on the next row
						wordIndex -= newRowCopy.length - endIndex;
						prevWordIndex = text.substring(0,wordIndex).lastIndexOf(' ');
					}
				}
				
				newText += newRow + '<br/>';
				newRow = '';
			}else if(wordIndex === -1){
				newText += newRow + '<br/>';
			}
		} while (wordIndex !== -1);

		return newText;
	}
}
