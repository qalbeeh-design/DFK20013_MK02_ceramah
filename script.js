document.getElementById("tempahanForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const hargaSeunit = 65;

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;
    let kategori = document.getElementById("kategori").value;
    let slot = document.getElementById("slot").value;

    let jumlahYuran = hargaSeunit * slot;

    let paparan = `
        <table border="1" cellpadding="8" cellspacing="0" width="100%">
            <tr>
                <th colspan="2">Pengesahan Pendaftaran</th>
            </tr>
            <tr>
                <td><b>Nama</b></td>
                <td>${nama}</td>
            </tr>
            <tr>
                <td><b>Email</b></td>
                <td>${email}</td>
            </tr>
            <tr>
                <td><b>Telefon</b></td>
                <td>${telefon}</td>
            </tr>
            <tr>
                <td><b>Kategori Peserta</b></td>
                <td>${kategori}</td>
            </tr>
            <tr>
                <td><b>Bilangan Slot</b></td>
                <td>${slot}</td>
            </tr>
            <tr>
                <td><b>Jumlah Yuran</b></td>
                <td>RM ${jumlahYuran}</td>
            </tr>
        </table>
    `;

    document.getElementById("output").innerHTML = paparan;
    document.getElementById("pengesahan").classList.remove("hidden");

    // SOROK BORANG
    document.querySelector(".borang").style.display = "none";
});