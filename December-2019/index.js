// Jeremy Anderson 12:26 PM

// Write a function that returns the position or positions of the lowest valued integer and can handle these arrays or any other array 

// No High Order functions
// Only Length and push()

let figures1 = [-1, -7, 1, 5, -7, 0];
let figures2 = [4,5,6];
let figures3 = [5, 4, 3, 2, 1];

function lowValue (array)
{
	lowNum = array[0];
	let lowPos = [];
	for(let i = 0; i < array.length; i++)
	{
		if(array[i] > array[i+1] && lowNum > array[i+1])
		{
			lowNum = array[i+1];
      console.log("New Low Number: " + lowNum);
		}
		else if(array[i] < array[i+1] && lowNum > array[i])
		{
			lowNum = array[i];
      console.log("New Low Number: " + lowNum);
		}

		if(array[i] === lowNum)
		{
      if(lowPos.length > 0 && lowPos[0] != lowNum)
      {
        lowPos.length = 0;
      }
      console.log(array[i] + " : " + lowNum);
      console.log("Pushing Position: " + i);
			lowPos.push(i);
		}
	}
  return lowPos;
}
lowValue(figures2);