
function Product(prop) {
    function myfunction()
    {
        //alert()
        prop.price=5000
    }
    console.log(prop);
    return (
        <div className="border p-2">
            <h2>{prop.price}</h2>
            <p>{prop.name}</p>
            <p><button onClick={myfunction}>Add to cart</button></p>
    </div>    
    );
}
export default Product;