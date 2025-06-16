function weather() {
    const input = document.querySelector(".input");
    const btn = document.querySelector(".btn");

    function getWeather() {
        document.querySelector(".weatherinformation").style.display = "block";
        const city = input.value.trim();

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=96b947a45d33d7dc1c49af3203966408`)
            .then(res => res.json())
            .then(data => {
                document.querySelector(".name").innerHTML = `Shahar: ${data.name}`;
                document.querySelector(".sofligi").innerHTML = `Davlat: ${data.sys.country}`;
                document.querySelector(".gradus").innerHTML = `Harorat: ${data.main.temp}°C`;
            })
            .catch(err => {
                document.querySelector(".weatherinformation").style.display = "none";
                alert("Xatolik yuz berdi yoki shahar topilmadi!");
                console.error(err);
            });
    }

    // 🔘 Button bosilganda
    btn.addEventListener("click", getWeather);

    // ⌨️ Enter bosilganda (input ichida)
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            getWeather();
        }
    });
}

weather();
