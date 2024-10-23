let product = [
    {
        id: 0,
        image: 'picture/food1.jpg',
        title:'AiroSoft Company',
        price:500,
    },
    {
        id:1,
        image:'picture/food2.jpg',
        title:'Shoes Company',
        price:700,
    },
    {
        id:2,
        image:'picture/food3.jpg',
        title:'Amazon Company',
        price:800,
    },
    {
        id:3,
        image:'picture/food4.jpg',
        title:'Amazon Company',
        price:900,
    },
    {
        id:4,
        image:'picture/food5.jpg',
        title:'Amazon Company',
        price:1000,
    },
    {
        id:5,
        image:'picture/food6.jpg',
        title:'Amazon Company',
        price:1100,
    },
]

let categories =[...new Set(product.map((item)=>{
     return item}))]

     let i = 0;
     document.getElementById('root').innerHTML = categories.map((item)=>{
        var {image,title,price,} =item;
        return(
            `
            <div class ='box'>
                <div class = "img-box">
                 <img class= "images" src=${image}></img>
                </div>
                <div class = "bottom">
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>`+
                    "<button onclick ='addtocard("+(i++)+")'>add To Card</button>"+
                `</div>
            </div>`

        )
     }).join('')

var cart =[];

    function addtocard(a){
        cart.push({...categories[a]});
        displaycart();
    }

    function delElement(a){
        cart.splice(a,1);
        displaycart();
    }


function displaycart(a){
    let j = 0, total=0;
    document.getElementById('count').innerHTML = cart.length;
    if(cart.length == 0){
        document.getElementById('cartitem').innerHTML = 'Your cart is Empty';
        document.getElementById('total').innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById('cartitem').innerHTML = cart.map((item)=>{
            var {image,title,price} = item;
            total = total+price;
            document.getElementById('total').innerHTML = "$ " + total+ ".00";
            
            return(
                `<div class ='cartitem'>
                    <div class = 'row-img'>
                    <img class= "rowimg" src = ${image}>
                    </div>
                    <p style = 'font-size:12px;'>${title}</p>
                    <h2 style = 'font-size :12px;'>$ ${price}.00</h2>`+
                    "<i class = 'fa-solid fa-trash' onclick ='delElement("+ (j++) +")'></i></div>"
            )
        }).join('');
    }


}



