// script.js

document.getElementById("kategori_outbound").addEventListener("change", updatePaketVisibility);
document.getElementById("paket_outbound_tanpa_menginap").addEventListener("change", updateWhatsappLink);
document.getElementById("paket_outbound_menginap").addEventListener("change", updateWhatsappLink);
document.getElementById("paket_makanan").addEventListener("change", updateWhatsappLink);
document.getElementById("lauk_pauk").addEventListener("change", updateWhatsappLink);
document.getElementById("olahan_ikan").addEventListener("change", updateWhatsappLink);
document.getElementById("sambal").addEventListener("change", updateWhatsappLink);
document.getElementById("minuman").addEventListener("change", updateWhatsappLink);
document.getElementById("makanan_kecil").addEventListener("change", updateWhatsappLink);

// Fungsi untuk memperbarui pilihan paket berdasarkan kategori
function updatePaketVisibility() {
    const kategori = document.getElementById("kategori_outbound").value;
    
    if (kategori === "tanpa_menginap") {
        document.getElementById("paket_tanpa_menginap").style.display = "block";
        document.getElementById("paket_menginap").style.display = "none";
    } else if (kategori === "menginap") {
        document.getElementById("paket_tanpa_menginap").style.display = "none";
        document.getElementById("paket_menginap").style.display = "block";
    }
}

// Fungsi untuk memperbarui link WhatsApp berdasarkan pilihan
function updateWhatsappLink() {
    const kategoriOutbound = document.getElementById("kategori_outbound").value;
    const paketOutbound = kategoriOutbound === "tanpa_menginap" 
                            ? document.getElementById("paket_outbound_tanpa_menginap").value
                            : document.getElementById("paket_outbound_menginap").value;
    
    const paketMakanan = document.getElementById("paket_makanan").value;
    const laukPauk = document.getElementById("lauk_pauk").value;
    const olahanIkan = document.getElementById("olahan_ikan").value;
    const sambal = document.getElementById("sambal").value;
    const minuman = document.getElementById("minuman").value;
    const makananKecil = document.getElementById("makanan_kecil").value;

    let message = `Halo%20saya%20ingin%20memesan%20paket%20outbound%0A`;

    message += `Kategori%20Paket%3A%20${kategoriOutbound}%0A`;
    message += `Paket%20Outbound%3A%20${paketOutbound}%0A`;

    if (paketMakanan) message += `Paket%20Makanan%3A%20${paketMakanan}%0A`;
    if (laukPauk) message += `Lauk%20Pauk%3A%20${laukPauk}%0A`;
    if (olahanIkan) message += `Olahan%20Ikan%3A%20${olahanIkan}%0A`;
    if (sambal) message += `Sambal%3A%20${sambal}%0A`;
    if (minuman) message += `Minuman%3A%20${minuman}%0A`;
    if (makananKecil) message += `Makanan%20Kecil%3A%20${makananKecil}%0A`;

    const whatsappLink = `https://wa.me/6281234567890?text=${message}`;
    
    // Update link WhatsApp
    document.getElementById("whatsapp-link").setAttribute("href", whatsappLink);
}

// Menjalankan fungsi updateWhatsappLink saat halaman dimuat
updateWhatsappLink();
