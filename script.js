async function disease() {
  try {
    let input = document.querySelector("#inp").value;

    let v = await fetch(`https://disease.sh/v3/covid-19/countries/${input}`);

    let a = await v.json();

    document.querySelector("#country").value = a.country;
    document.querySelector("#continent").value = a.continent;
    document.querySelector("#latitude").value = a.countryInfo.lat;
    document.querySelector("#longitude").value = a.countryInfo.long;
    document.querySelector("#population").value = a.population;
    document.querySelector("#cases").value = a.cases;
    document.querySelector("#death").value = a.deaths;
    document.querySelector("#today-death").value = a.todayDeaths;
    document.querySelector("#recovered").value = a.recovered;
    document.querySelector("#test").value = a.tests;
    document.querySelector("#critical").value = a.critical;
    document.querySelector("#today-recovered").value = a.recoveredPerOneMillion;
  } catch {
    console.log("error");
  }
}
disease();
