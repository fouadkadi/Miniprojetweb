function findValueCookie(key){

	var keyCookie = document.cookie
	    .split(';')
	    .find(row => row.trim().startsWith(key+"="));
	if (keyCookie !=null){
	    return keyCookie.split('=')[1];
	    }
	}
function chargeinfo()
{
//cherche et affiche le nom du personnage
document.getElementById("nameValue").innerHTML = findValueCookie("name");
document.getElementById("attackValue").innerHTML = findValueCookie("attack");
document.getElementById("HPValue").innerHTML = findValueCookie("HP");
document.getElementById("dodgeValue").innerHTML = findValueCookie("dodge");
//cherche et affiche le nom du monstre
document.getElementById("nameValueM").innerHTML = findValueCookie("nameM");
document.getElementById("attackValueM").innerHTML = findValueCookie("attackM");
document.getElementById("HPValueM").innerHTML = findValueCookie("HPM");
document.getElementById("dodgeValueM").innerHTML = findValueCookie("dodgeM");
document.getElementById("T").style.display = "none";
document.getElementById("E").style.display = "none";
document.getElementById("TM").style.display = "none";
document.getElementById("EM").style.display = "none";
}
function voyantP(ind)
 {if(ind==0)
    {document.getElementById("T").style.display = "none";
     document.getElementById("E").style.display = "initial";
    }else{
    document.getElementById("T").style.display = "initial";
    document.getElementById("E").style.display = "none";
    }
 }
 function voyantM(ind)
 {if(ind==0)
    {document.getElementById("TM").style.display = "none";
     document.getElementById("EM").style.display = "initial";
    }else{
    document.getElementById("TM").style.display = "initial";
    document.getElementById("EM").style.display = "none";
    }
};


	