const searchParams = new URLSearchParams(location.search);
const params = Object.fromEntries(searchParams.entries());

// phase_temp
const phase_num = document.getElementById("phase_num");
const span = document.getElementById("span");
const event = document.getElementById("event");
const char = document.getElementById("char");
const movie = document.getElementById("movie");
const prev_page = document.getElementById("prev_page");
const next_page = document.getElementById("next_page");


item = temp[params["id"]];

phase_num.innerHTML = item["phase_num"];
span.innerHTML = item["span"];
event.innerHTML = item["event"];
char.innerHTML = item["char"];
movie.innerHTML = item["movie"]
prev_page.href = item["prev_page"];
next_page.href = item["next_page"];