var jelFogy = document.getElementById("jelFogy").value.replace(",", ".");
		var megtak = document.getElementById("megtak").value.replace(",", ".");
		var keletkezo = document.querySelector("#keletkezo");
		var osszMegtak = document.querySelector("#osszMegtak");
		var kibocsCsok = document.querySelector("#kibocsCsok");
		var erdoTer = document.querySelector("#erdoTer");
		var erdoDb = document.querySelector("#erdoDb");
		var m2Db = document.querySelector("#m2Db");

		keletkezo = 0.55;
		keletkezo.textContent = keletkezo;

		static();

		function static() {
			jelFogy = document.getElementById("jelFogy").value;
			megtak = document.getElementById("megtak").value;
			var vegOsszMegtak = (jelFogy * megtak / 100).toPrecision(3);
			var vegKibocsCsok = (megtak * keletkezo).toPrecision(3);
			var vegErdoTer = (vegOsszMegtak / 9.3).toPrecision(3);
			var vegErdoDb = (vegOsszMegtak * 1000 / 68.75).toPrecision(3);
			var vegM2Db = (vegOsszMegtak * 19.7).toPrecision(3);

			osszMegtak.textContent = vegOsszMegtak;
			kibocsCsok.textContent = vegKibocsCsok;
			erdoTer.textContent = vegErdoTer;
			erdoDb.textContent = vegErdoDb;
			m2Db.textContent = vegM2Db;

			osszMegtak.classList.add("result");
			kibocsCsok.classList.add("result");
			erdoTer.classList.add("result");
			erdoDb.classList.add("result");
			m2Db.classList.add("result");

		}