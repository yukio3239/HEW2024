const searchParams = new URLSearchParams(location.search);
const params = Object.fromEntries(searchParams.entries());


// movie_temp
const main_image = document.getElementById("main_image");
const title_image = document.getElementById("title_image");
const about_text = document.getElementById("about_text");
const director = document.getElementById("director");
const script = document.getElementById("script")
const release = document.getElementById("release");
const time = document.getElementById("time");
const next = document.getElementById("next");
const prev_page = document.getElementById("prev_page");
const next_page = document.getElementById("next_page");

item = temp[params["id"]];

main_image.src = item["main_image"];
title_image.src = item["title_image"];
about_text.innerText = item["about_text"];
director.innerText = item["director"];
script.innerHTML = item["script"];
release.innerText = item["release"];
time.innerHTML = item["time"];
next.innerHTML = item["next"];
prev_page.href = item["prev_page"];
next_page.href = item["next_page"];