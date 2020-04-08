const randomQuote = document.getElementById("randomQuote")

const searchQuote = () => {
    const quote = [{
        nama: "Enggar Septrinas",
        quote: "Air dingin nggak bisa membunuh kenangan. Demikian pula dengan pisau, pistol, parang, celurit, api, granat ataupun rasa benci."
    },
    {
        nama: "Ismed Sofyan",
        quote: "Hujan dan kenangan bukan perpaduan yang sehat untuk seseorang yang sedang berjuang melupakan."
    },
    {
        nama: "Bambang Pamungkas",
        quote: "Berani menjalin hubungan berarti berani menyerahkan sebagian kendali atas perasaan kita kepada orang lain. Menerima fakta bahwa sebagian dari rasa kita ditentukan oleh orang yang menjadi pasangan kita."    
    },
    {
        nama: "Markus Horison",
        quote: "Kalau kita sudah memilih yang terbaik, seperti Ayah memilih Ibu dan kamu memilih istri kamu, seperti kita memilih biji kopi yang terbaik, bukan salah mereka kalau rasanya kurang enak. Salah kita yang belum bisa melakukan yang terbaik sehingga mereka juga menunjukkan yang terbaik buat kita."    
    },
    {
        nama: "Jendri Pitoy",
        quote: "Dalam hal berurusan dengan duka, waktu justru sering menjadi penjahat kejam yang menyiksa tanpa ampun, ketika kita terus menemukan dan menyadari hal baru yang kita rindukan dari seseorang yang telah pergi itu, setiap hari, setiap jam, setiap menit."
    },
    {
        nama: "Bio Paolin",
        quote: "Kalau memang benar-benar sayang dan cinta sama perempuan, jangan bilang rela mati buat dia. Justru harusnya kuat hidup buat dia. Rela mati sih gampang, dan bego."
    },
    {
        nama: "Victor Igbonefo",
        quote: "Orang yang membuat kita paling terluka biasanya adalah orang yang memegang kunci kesembuhan kita."
    },
    {
        nama: "Maman Abdurrahman",
        quote: "Ingatan itu sesuatu yang liar ya? Apa adanya kita sekarang, apa yang kita lakukan, reaksi kita terhadap sesuatu, semua produk dari kumpulan ingatan-ingatan kita."
    }
    ]
    let angka = quote.length;
    let posisi = mathRandom(angka);
    console.log(quote[posisi]);
    let namaPenulis = document.getElementById("nama");
    let kalimat = document.getElementById("quotes")

    namaPenulis.innerHTML = `<h2>${quote[posisi].nama}</h2>`
    kalimat.innerHTML = `<h5 class="card-text text-align-center">" ${quote[posisi].quote} "</h5>`
}
function mathRandom(angka) {
    let random = Math.floor(Math.random() * (angka))
    return random;

}

randomQuote.addEventListener('click', searchQuote)