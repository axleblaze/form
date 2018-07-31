var fruits = [{
        name: "Mango",
        MRP: 10 ,
        category: "Fruit",
     
    },
    {
        name: "Apple",
        MRP: 15,
        category: "Fruit",

    },
    {
        name: "Guava",
        MRP: 5,
        category: "Fruit",


    }, {
        name: "WaterMelon",
        MRP: 15,
        category: "Fruit",

    },
    {
        name: "Grapes",
        MRP: 15,
        category: "Fruit",

    },
    {
        name: "Raspberries",
        MRP: 15,
        category: "Fruit",

    },
    {
        name: "Lychee",
        MRP: 20,
        category: "Fruit",

    },
    {
        name: "Oranges",
        MRP: 20,
        category: "Fruit",
    },
    {
        name: "Banana",
        MRP: 20,
        category: "Fruit",
    },
    {
        name: "Pineapple",
        MRP: 20,
        category: "Fruit",
    }
];

var vegetables = [{
        name: "Potato",
        MRP: 10,
        category: "Vegetable",
    },
    {
        name: "Cauliflower",
        MRP: 30,
        category: "Vegetable",
    },
    {
        name: "Tomato",
        MRP: 20,
        category: "Vegetable",
    },
    {
        name: "Broccoli",
        MRP: 40,
        category: "Vegetable",
    },
    {
        name: "Cabbage",
        MRP: 10,
        category: "Vegetable",
    },
    {
        name: "Carrot",
        MRP: 35,
        category: "Vegetable",
    },
    {
        name: "Mushrooms",
        MRP: 20,
        category: "Vegetable",
    },
    {
        name: "Onion",
        MRP: 50,
        category: "Vegetable",
    }

];

var dairy = [{
        name: "Milk",
        MRP: 45,
        category: "Dairy",

    },
    {
        name: "Curd",
        MRP: 55,
        category: "Dairy",

    },
    {
        name: "Cheese",
        MRP: 65,
        category: "Dairy",

    },
    {
        name: "Butter",
        MRP: 10,
        category: "Dairy",

    },
    {
        name: "Milkshake",
        MRP: 25,
        category: "Dairy",

    },
    {
        name: "ProteinPowder",
        MRP: 500,
        category: "Dairy",

    },
    {
        name: "Paneer",
        MRP: 250,
        category: "Dairy",

    },
    {
        name: "IceCream",
        MRP: 10,
        category: "Dairy",

    }
];
var biscuits = [{

        name: "ParleG",
        MRP: 5,
        category: "Biscuit",

    },
    {

        name: "KrackJack",
        MRP: 10,
        category: "Biscuit",

    },
    {

        name: "20-20",
        MRP: 10,
        category: "Biscuit",

    },
    {

        name: "Salted",
        MRP: 10,
        category: "Biscuit",

    },
    {

        name: "Festo",
        MRP: 20,
        category: "Biscuit",

    },
    {

        name: "Happy Happy",
        MRP: 10,
        category: "Biscuit",

    },
    {

        name: "Hide and Seek",
        MRP: 30,
        category: "Biscuit",

    },
    {

        name: "Magix",
        MRP: 10,
        category: "Biscuit",

    }
];
//console.log(grocery);

var totalitems=[];
//taken as global variable
totalitems = [fruits , vegetables , dairy , biscuits];

//console.log(totalitems);


function finding(){
    inputarray=[];
    var userinput = document.getElementById("ip").value;

    if(userinput.length > 0){
        regularexpression = new RegExp(userinput , "ig")
    
        totalitems.forEach(innerarray => {
                innerarray.forEach(element => {
                    if (regularexpression.test(element.name)) {
                        inputarray.push(element);
                    }
                    
                });
            
        });
    if (inputarray.length>0) {
        var table = "<tr><th> Name </th><th> MRP </th><th> Category </th><th> Quantity </th></tr>";
        inputarray.forEach((element) => {
            table = table + "<tr><td>" + element.name + "</td><td>" + element.MRP + "</td><td>" + element.category +
            "</td><td>" + '<input type="number" min="0" max="5" id="' + element.name + '"/></td></tr>';
            });
          
            document.getElementById("demo").innerHTML = table;
            }
            }
           }
           
           function reset1() {
            document.getElementById("demo").innerHTML = "";
            document.getElementById("ip").value = "";
           }
           var bill=0;
           var newtable = '<tr><th> Name</th><th>Quantity</th></tr>';
           var count = 0;
           var additemtocart = () => {
           
            totalitems.forEach(innerarray => {
            innerarray.forEach(element => {
            if (document.getElementById(element.name) != null) {
            var num = document.getElementById(element.name).value;
            if (num > 0) {
            count++;
            newtable += '<tr><td>' + element.name + '</td><td>' + num + '</td></tr>'
            bill += element.MRP*num;

            }
            }
            });
            });
            document.getElementById("addtable").innerHTML = newtable;
            document.getElementById("bill").innerHTML ="Your Bill is =" + bill + "Rs.";
}

function billgeneration() {
   
  sessionStorage.setItem("bill",bill);
  window.open("checkout.html");
}
function checkout(){

    var newtable=sessionStorage.getItem("bill");
    //console.log(newtable);

    document.getElementById("parag").innerHTML = newtable;
}