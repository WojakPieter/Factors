function wypisz_dzielniki()
{
	let text="Dzielniki liczby to: ";
	l = parseInt(document.getElementById("liczba").value);
	for(i=1; i<=l; i++)
	{
		if(l % i == 0)
		{
			if(l == i) text = text + i.toString() + ".";
			else text = text + i.toString() + ", ";
		}
	
	}	
		document.getElementById("wynik").innerHTML = text;
	
}

function sprawdz()
{
	let li = parseFloat(document.getElementById("liczba").value);
	if(Number.isInteger(li))
	{
		if(li > 0) {	wypisz_dzielniki(); document.getElementById("wynik").style.color = "cyan";}
		else
		{
			document.getElementById("wynik").innerHTML = "Liczba nie jest dodatnia! Wpisz inną wartość!";
			document.getElementById("wynik").style.color = "red";
		}
	}
	else
	{
		document.getElementById("wynik").innerHTML = "Wyrażenie nie jest liczbą całkowitą! Wpisz inną wartość!";
		document.getElementById("wynik").style.color = "red";
	}
}