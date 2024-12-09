list_gejala = [
'',
'abses',
'ambing bengkak',
'ambruk',
'anemia',
'anestrus',
'anorexia',
'atau luka yang sulit sembuh',
'batuk',
'bau busuk yang tidak sedap dari luka atau area terinfeksi',
'bau tidak sedap dari perdarahan vagina (baunya bisa menjadi busuk)',
'berat badan turun secara signifikan',
'bersisik',
'borok perkulitan',
'bulu kusam',
'bulu rontok',
'buta',
'dan keriput',
'darah dalam tinja (terkadang)',
'daun telinga keropeng',
'dehidrasi',
'demam',
'diare',
'durasi gejala biasanya 3-4 hari',
'gangguan otot',
'gangguan pada organ tubuh',
'gangguan pencernaan',
'gangguan pencernaan seperti diare atau sembelit',
'gangguan penglihatan',
'gangguan pertumbuhan pada anak hewan',
'gangguan pertumbuhan pada anak-anak',
'gangguan reproduksi',
'gangguan sistem kekebalan tubuh',
'gangguan sistem saraf',
'gangguan tulang',
'gangguan umum dalam perilaku atau kesehatan',
'gatal',
'gatal atau terasa seperti ada benda asing di mata',
'gejala flu',
'gelisah',
'gemetar',
'gusi yang bengkak',
'haid tidak teratur',
'hati atau ginjal',
'hernia abdominalis',
'hernia umbilicalis',
'hilangnya bulu atau rambut pada area yang terinfeksi',
'janin yang terlilit tali pusar',
'kaku pada otot-otot tubuh',
'kawin berulang',
'kebingungan',
'kegagalan hewan untuk makan atau minum',
'kegagalan organ tertentu karena kekurangan nutrisi tertentu',
'keguguran',
'keguguran muda',
'keguguran pada betina',
'kehilangan nafsu makan',
'kejang',
'kekukurusan',
'kekurusan',
'kelainan kulit',
'kelainan mata',
'kelainan mulut',
'kelelahan yang kronis',
'kelesuan',
'kelopak mata melekat saat bangun tidur (terutama pada konjungtivitis bakteri)',
'keluarnya cairan atau darah dalam jumlah yang tidak normal dari vulva',
'keluarnya sekresi',
'keluarnya sekresi atau mata berair',
'kemerahan',
'kemungkinan terjadinya kejang',
'kenaikan suhu tubuh (demam)',
'kepala atau anggota badan janin terlihat tidak normal atau terdistorsi',
'kerontokan bulu',
'kerontokan rambut',
'kesadaran menurun',
'kesulitan berdiri',
'kesulitan bergerak',
'kesulitan bergerak atau berdiri',
'kesulitan bernapas',
'kesulitan dalam perkawinan',
'kesulitan dalam proses persalinan',
'kesulitan kencing',
'keterlambatan dalam pengosongan perut',
'keterlambatan dalam proses persalinan',
'kornea mata keruh',
'kram perut atau nyeri perut',
'kualitas bulu atau kulit yang buruk',
'kulit kering',
'kulit kering dan bersisik',
'kurangnya urin',
'lahir mati',
'lahir normal',
'lama waktu persalinan yang tidak normal',
'lelah',
'lemah',
'lemas',
'liur berdarah',
'liur berlebihan',
'luka berdarah',
'luka penis',
'masalah gigi dan gusi',
'masalah kulit seperti kering',
'masalah pada perkembangan otak pada anak-anak',
'masalah pernapasan',
'masalah reproduksi pada wanita',
'mata berair',
'mata berdarah',
'mata cekung',
'mata iritasi',
'mata merah',
'mata terasa kering atau terasa pasir di mata',
'mencret',
'mengedipkan mata lebih sering dari biasanya',
'menggaruk atau menggosok bagian tubuh tertentu',
'mual',
'mulut kering',
'mungkin terjadi bisingan pada rongga dada atau pernapasan yang cepat',
'muntah',
'nyeri atau kram perut bagian bawah',
'patah tulang kaki',
'pembengkakan pada area terinfeksi',
'pembengkakan pada kelopak mata',
'pembengkakan pada sendi-sendi kaki',
'pembentukan benjolan atau lepuh pada kulit',
'pendarahan atau keluarnya cairan dari vulva',
'pengeluaran nanah dari mata',
'penglihatan kabur',
'penurunan berat badan',
'penurunan berat badan yang signifikan',
'penurunan produksi susu pada sapi perah',
'penurunan suhu tubuh setelah demam',
'peradangan kulit',
'perasaan penuh atau tertekan di perut bagian bawah',
'perdarahan vagina yang berkepanjangan setelah persalinan',
'perilaku gelisah atau gatal',
'perkulitan',
'pernapasan cepat',
'perubahan perilaku',
'perut kembung',
'perut yang membesar secara tiba-tiba',
'perut yang membuncit',
'pilek atau sakit tenggorokan',
'pincang',
'posisi atau presentasi janin yang tidak benar (misalnya kepala tersendat)',
'produksi air liur meningkat',
'produksi lendir atau nanah pada mata (terutama jika infeksi bakteri)',
'produksi ludah berlebihan',
'prolaps anus',
'radang mata',
'radang telinga',
'rahang bawah bengkak',
'rahim bernanah',
'rambut kering',
'rambut mudah rontok',
'rasa nyeri atau ketidaknyamanan di mata',
'rasa perih atau sakit di mata',
'retensi placenta',
'sakit otot',
'sakit sendi',
'sapi kesulitan untuk melahirkan',
'sapi menunjukkan tanda-tanda kesakitan yang tidak biasa',
'sapi merintih',
'sapi tampak tidak nyaman',
'sekresi cairan atau nanah dari area terinfeksi',
'sembelit',
'sempoyongan',
'sensasi panas di mata',
'sensitivitas terhadap cahaya (fotofobia)',
'sering mengunyah atau menggerogoti benda-benda di sekitarnya',
'suara perut yang berbunyi-bunyi',
'suhu tubuh yang meningkat',
'tanda lain',
'terjadi kejang-kejang',
'tidak sakit',
'tremor'
]

// Dynamically create 175 checkboxes
const container = document.getElementById('checkbox-container');
for (let i = 1; i <= 175; i++) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${i}`;
    checkbox.name = `checkbox`;

    const label = document.createElement('label');
    label.htmlFor = `checkbox-${i}`;
    label.innerText = list_gejala[i];

    const div = document.createElement('div');
    div.appendChild(checkbox);
    div.appendChild(label);

    container.appendChild(div);
}

// Handle form submission

document.getElementById('submit-button').addEventListener('click', () => {
    // Collect checkbox values
    const values = [];
    for (let i = 1; i <= 175; i++) {
        const checkbox = document.getElementById(`checkbox-${i}`);
        values.push(checkbox.checked ? 1 : 0); // Add 1 if checked, 0 if not
    }

    console.log('Checkbox Values:', values); // For debugging

    // Send the values to the ML model endpoint
    const endpointUrl = 'https://deployment-test-production-cad9.up.railway.app/diseasePrediction'; // Replace with your endpoint URL
    fetch(endpointUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'inputGejala': values }), // Wrap values in an object as JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Model Response:', data); // Debugging response

        // Display the prediction result
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<strong>Prediction Result:</strong> ${data.Penyakit}`;
    })
    .catch(error => {
        console.error('Error:', error); // Handle errors

        // Display error message
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<strong>Error:</strong> Unable to fetch prediction.`;
    });
});
