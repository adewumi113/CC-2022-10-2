//Function to return descending order of a given number

function descendingOrder(n){
  
  n = [...n.toString()]; //convert the number to string
  
  return Number(  //perform the operation below and return number
            n
            .sort() //use sort method to turn to array and sort the number in ascending order
            .reverse() //convert to descending order by using reverse method
            .join('')  // join together and convert back to string
          );
}
descendingOrder(7022837)