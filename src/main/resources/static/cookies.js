function findValueCookie(key){

	var keyCookie = document.cookie
	    .split(';')
	    .find(row => row.trim().startsWith(key+"="));
	if (keyCookie !=null){
	    return keyCookie.split('=')[1];
	    }
	}

function chargeinfomonstre()
{
document.getElementById("nameValueM").innerHTML = findValueCookie("nameM");
document.getElementById("attackValueM").innerHTML = findValueCookie("attackM");
document.getElementById("HPValueM").innerHTML = findValueCookie("HPM");
document.getElementById("dodgeValueM").innerHTML = findValueCookie("dodgeM");
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
document.getElementById("spanname").innerHTML = findValueCookie("name");
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
}

async function start()
 {
    var hpmaxM=parseFloat(findValueCookie("HPM"));
    var doodgeM=parseFloat(findValueCookie("dodgeM"));
    var attackM=parseFloat(findValueCookie("attackM"));
    var randproba=0;


   while(hpmax>0 && hpmaxM>0)
   { await new Promise(r => setTimeout(r, 1000));
     randproba=Math.random();
     if(doodge<randproba)
     {
      hpmax-=attackM;
      hpmax<0?hpmax=0:hpmax=hpmax;
      voyantP(1);
      document.getElementById("HPValue").innerHTML = hpmax;
     }else{voyantP(0);}
     if(doodgeM<randproba)
     {
      hpmaxM-=attack;
      hpmaxM<0?hpmaxM=0:hpmaxM=hpmaxM;
      voyantM(1);
      document.getElementById("HPValueM").innerHTML = hpmaxM;
     }else{voyantM(0);}

   }

   if(hpmax==0){
    document.getElementById("spanmon").innerHTML = nbtue;
    document.getElementById("defeat").style.display = "initial";
    document.getElementById("fightb").disabled=true;
    document.getElementById("nextbtn").disabled=true;

    }
    else
    {
     nbtue++;
     document.getElementById("nextbtn").style.display = "initial";

    }



 }

function loadnext()
{

  var ajax = new XMLHttpRequest();
  ajax.open('POST', 'netfighter');
  ajax.onload=function()
  { if(ajax.status===200)
    {
    var reponse=ajax.responseText;
    console.log(ajax.responseText);
    if(reponse=="Au Suivant!")
    {
    chargeinfomonstre();
    document.getElementById("nextbtn").style.display = "none";
    }
    else
    {
    document.getElementById("fightb").disabled=true;
    document.getElementById("nextbtn").disabled=true;
    document.getElementById("spanmon").innerHTML = nbtue;
    document.getElementById("defeat").style.display = "initial";
    }

    alert(ajax.responseText);

    }
    else
    {
    console.log('ajax failed');
    }
  };
  ajax.send();
};





	