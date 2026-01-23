document.getElementById("tempahanForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const harga = 65;

    let nama= document.getElementById("nama").value;
    let email= document.getElementById("email").value;
    let telefon= document.getElementById("telefon").value;
    let kategori= document.getElementById("kategori").value;
    let slot= document.getElementById("slot").value;

    let jumlah= harga * slot;

    document.getElementById("output").innerHTML =`
    <p><b>Nama:</b> ${nama}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Telefon:</b> ${telefon}</p>
    <p><b>Kategori Peserta:</b> ${kategori}</p>
    <p><b>Bilangan Slot:</b> ${slot}</p>
    <p><b>Jumlah Yuran:</b> RM ${jumlah}</p>
    `;

    document.getElementById("pengesahan").classList.remove("hidden");
});