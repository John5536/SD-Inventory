// let css_room_inventory = ["dog","cat"];

// for (let i=0; i<css_room_inventory.length; i++)
//     { document.write(`
//      <tr>
        
//             <td>${i+1}</td>
//             <td>${css_room_inventory[i]}</td>
            
        
//     </tr>
//     `)
    

//     }
// let School_invetory = [""];

// for (let i=0; i<School_invetory.length; i++){
//     document.getElementById (`
        
//         <tr>
//             <td>${i +1}</td>
//             <td>${School_invetory[i]}</td>
//         </tr>
//         `)


// }
let intke_1 = document.getElementById("submit_1");
let btn_1 = document.getElementById("input_button");
let usbc_1 = document.getElementById("usb-C_chargers");
let charger_USBC = []
function add_to_chargers_1(){
    charger_USBC.push(document.getElementById("submit_1").value);
    
}
for ( let i=0; i<charger_USBC.length; i++){(`
    
    <div>
        <p>${i+1} ${charger_USBC[1]}</p>
    </div>
    
`)
}

    btn_1.addEventListener('click', add_to_chargers_1);

