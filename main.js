//n th smallest number 
let array=[7,4,3,9,2,1,6];
let n=parseInt(prompt("enter the value"));
function nsmall(array,n)
{
	for(i=0;i<array.length;i++)
	{
		for(j=i+1;j<array.length;j++)
		{
			if(array[i]>array[j])
			{
				temp=array[j];
				array[j]=array[i];
				array[i]=temp;
			}
		}	
		
	}
	let small=array[n-1];
	return small;
}
console.log(nsmall(array,n));