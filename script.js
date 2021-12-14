let quotes = [
	"باور داشته باشید، برای هر مشکلی راهی هست",
	"باور داشته باشید، اگر به هدفی نرسیدیم، آخر دنیا نیست",
	"موفقیت بدون تلاش امکان پذیر نیست",
	"هیچ پدیده ای اخلاقی نیست بلکه ما آن را اخلاقی تفسیر می کنیم",
	"آدمی را آزمودن به کردار باید کرد نه به گفتار؛ چه بیشتر مردم، زشت کردار و نیکو گفتارند",
	"ما به ندرت درباره آن چه که داریم فکر می کنیم ، در حالی که پیوسته در اندیشه چیز هایی هستیم که نداریم ",
	"به من بگو قبل از آمدن به این دنیا کجا بودی؟ تا بگویم بعد از مرگ کجا می‌روی",
];

function setDay(day) {
	document.getElementById("day").innerHTML = `امروز ${day} است`;
}

function setRandomQuote() {
	document.getElementById("quote").innerHTML =
		quotes[Math.floor(Math.random() * quotes.length)];
}

switch (new Date().getDay()) {
	case 0:
		setDay("یکشنبه");
		break;
	case 1:
		setDay("دوشنبه");
		break;
	case 2:
		setDay("سه شنبه");
		break;
	case 3:
		setDay("چهارشنبه");
		break;
	case 4:
		setDay("پنجشنبه");
		break;
	case 5:
		setDay("جمعه");
		break;
	case 6:
		setDay("شنبه");
		break;
}

setRandomQuote();
