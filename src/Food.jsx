
function Food () {

    const food1 = "pizza";
    const food2 = "garlic bread";

    return(
        <ul>
            <li>Pepsi</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
  
export default Food