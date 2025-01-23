export interface NewsItem {
  id: string
  image: string
  title: string
  description: string
  content: string
  date: string
}

export interface Vacancy {
  id: string
  position: string
  department: string
  requiredQualifications: string[]
  educationLevel: 'Bachelor' | 'Master' | 'PhD'
  salaryRange: {
    min: number
    max: number
  }
  employmentType: 'Full-time' | 'Part-time' | 'Contract'
  openDate: Date
  closingDate: Date
  location: string
  imageUrl: string
}

export const emptyNewsData: NewsItem = {
  id: '',
  image: '',
  title: '',
  description: '',
  date: '',
  content: '',
}

export const emptyVacancyData: Vacancy = {
  id: '',
  position: '',
  department: '',
  requiredQualifications: [],
  educationLevel: 'Bachelor',
  salaryRange: { min: 0, max: 0 },
  employmentType: 'Contract',
  openDate: new Date(),
  closingDate: new Date(),
  location: '',
  imageUrl: '',
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    image: 'https://dummyimage.com/600x400/000/fff.png',
    title: 'Prestasi Gemilang Siswa dalam Olimpiade Sains',
    description:
      'Para siswa berhasil meraih medali emas dalam kompetisi sains tingkat nasional.',
    date: '2024-01-15',
    content: `Dalam sebuah prestasi luar biasa yang membanggakan, tim siswa dari SMA Negeri Terpadu Nusantara berhasil meraih medali emas dalam Olimpiade Sains Nasional 2024. Kompetisi bergengsi yang diikuti oleh lebih dari 500 peserta dari seluruh Indonesia ini membuktikan kualitas pendidikan dan potensi generasi muda dalam bidang sains.

Tim yang terdiri dari lima siswa pilihan ini telah mempersiapkan diri selama beberapa bulan melalui serangkaian pelatihan intensif dan bimbingan dari para guru senior. Mereka menghadapi tantangan dalam berbagai cabang ilmu pengetahuan, mulai dari fisika, kimia, biologi, hingga matematika, dengan menunjukkan kemampuan analitis dan kreativitas yang luar biasa.

Ketua tim, Ayu Widiastuti, siswa kelas XII dengan prestasi cemerlang, menceritakan perjalanan panjang tim dalam mempersiapkan olimpiade ini. "Kami tidak hanya belajar tentang rumus dan teori, tetapi juga belajar bekerja sama, berpikir kritis, dan memecahkan masalah kompleks," ungkapnya. Pendekatan holistik dalam persiapan ini terbukti efektif dalam menghadapi berbagai tantangan kompetisi.

Kepala Sekolah, Dr. Hendro Susanto, sangat bangga dengan prestasi gemilang tim. "Ini bukan sekadar tentang medali, tetapi tentang membuktikan bahwa generasi muda Indonesia memiliki potensi luar biasa dalam bidang sains dan teknologi," tegasnya. Prestasi ini diharapkan dapat menginspirasi siswa lain untuk terus mengembangkan minat dan bakat mereka di bidang sains.

Proses seleksi untuk olimpiade ini sangatlah ketat. Dari ratusan siswa yang mengikuti tahap awal, hanya lima siswa terbaik yang lolos untuk mewakili sekolah. Mereka mengikuti serangkaian tes tulis, praktikum, dan ujian lisan yang menguji kemampuan mereka secara komprehensif.

Salah satu anggota tim, Rafi Firmansyah, menorehkan prestasi individual dengan meraih nilai tertinggi dalam cabang fisika. "Saya selalu tertarik dengan fenomena alam dan bagaimana hukum-hukum fisika dapat menjelaskan berbagai peristiwa di sekitar kita," jelasnya. Semangat dan keingintahuan inilah yang mendorong para siswa untuk terus belajar dan berkembang.

Prestasi ini tidak hanya membanggakan sekolah, tetapi juga memberikan kontribusi nyata bagi pengembangan pendidikan sains di Indonesia. Para siswa ini membuktikan bahwa dengan dedikasi, kerja keras, dan bimbingan yang tepat, generasi muda dapat mencapai prestasi tertinggi.

Pemerintah daerah pun turut memberikan apresiasi. Kepala Dinas Pendidikan setempat menyatakan, "Prestasi ini menunjukkan bahwa investasi dalam pendidikan sains sangatlah penting. Kami akan terus mendukung program-program yang dapat mengembangkan potensi siswa dalam bidang sains dan teknologi."

Para orangtua pun tak kalah bangga. Mereka melihat bahwa pendidikan tidak sekadar tentang nilai akademis, tetapi juga tentang pengembangan karakter, kerja sama tim, dan kemampuan berpikir kritis. "Kami sangat senang melihat anak-anak kami tidak hanya cerdas, tetapi juga memiliki semangat juang yang tinggi," tutur salah seorang orangtua.

Ke depan, sekolah berencana untuk terus mengembangkan program-program yang dapat memfasilitasi potensi siswa dalam bidang sains. Rencana kerja sama dengan berbagai perguruan tinggi dan lembaga penelitian sedang dipersiapkan untuk memberikan kesempatan lebih luas bagi siswa berbakat.

Prestasi gemilang ini adalah bukti nyata bahwa generasi muda Indonesia siap bersaing di kancah nasional dan internasional. Dengan semangat inovasi, kerja keras, dan dedikasi tinggi, mereka telah memperlihatkan bahwa masa depan Indonesia ada di tangan mereka.`,
  },
  {
    id: '2',
    image: 'https://dummyimage.com/600x400/000/fff.png',
    title: 'Workshop Teknologi untuk Guru',
    description: 'Program pengembangan kompetensi digital untuk para pengajar.',
    date: '2024-01-12',
    content: `Workshop Teknologi untuk Guru merupakan program komprehensif yang dirancang untuk meningkatkan kemampuan digital para pendidik dalam menghadapi era transformasi digital. Acara yang berlangsung selama tiga hari ini diikuti oleh lebih dari 200 guru dari berbagai jenjang pendidikan di wilayah tersebut.

Program ini bertujuan untuk membekali para guru dengan keterampilan teknologi terkini yang dapat diintegrasikan ke dalam proses belajar mengajar. Materi workshop mencakup berbagai topik mulai dari penggunaan platform e-learning, pemanfaatan media digital, hingga strategi pengajaran berbasis teknologi.

Salah satu fokus utama workshop adalah memperkenalkan berbagai alat teknologi yang dapat meningkatkan interaktivitas dalam proses pembelajaran. Para peserta dilatih menggunakan platform seperti Google Classroom, Microsoft Teams, dan berbagai aplikasi pendidikan inovatif lainnya. Mereka tidak hanya mempelajari cara menggunakan teknologi, tetapi juga bagaimana mengintegrasikannya secara efektif dalam kurikulum.

Dr. Maya Kurniawati, koordinator workshop, menekankan pentingnya transformasi digital dalam pendidikan. "Guru bukan sekadar pengajar, tetapi juga fasilitator yang harus mampu mengadaptasi teknologi untuk menciptakan pengalaman belajar yang lebih dinamis dan bermakna," tegasnya.

Sesi praktikum menjadi bagian penting dalam workshop ini. Para guru langsung mempraktikkan berbagai metode pengajaran digital, mulai dari membuat konten multimedia, merancang kuis interaktif, hingga mengelola kelas virtual. Mereka dibimbing oleh para ahli teknologi pendidikan yang berpengalaman.

Salah satu peserta, Pak Budi Santoso, guru SMA berusia 45 tahun, mengungkapkan antusiasmenya. "Awalnya saya merasa canggung dengan teknologi, tetapi workshop ini membuka mata saya betapa pentingnya kita beradaptasi," ujarnya. Pengalaman Pak Budi mencerminkan semangat para guru untuk terus belajar dan berkembang.

Workshop tidak hanya fokus pada aspek teknis, tetapi juga membahas isu-isu kritis seperti keamanan digital, etika penggunaan teknologi, dan strategi mengatasi tantangan dalam pengajaran digital. Para peserta diajak untuk berpikir kritis tentang peran teknologi dalam pendidikan.

Perwakilan dari Kementerian Pendidikan turut hadir dan memberikan apresiasi terhadap inisiatif ini. "Upaya pengembangan kompetensi digital guru adalah investasi penting dalam meningkatkan kualitas pendidikan nasional," kata narasumber dari kementerian.

Para peserta juga mendapatkan sertifikasi kompetensi digital yang dapat mendukung pengembangan karier mereka. Sertifikasi ini diakui secara nasional dan menjadi nilai tambah bagi para guru dalam mengembangkan profesi.

Diskusi panel dengan para ahli teknologi pendidikan menjadi salah satu momen paling dinantikan. Mereka berbagi insight tentang tren teknologi pendidikan global, potensi kecerdasan buatan dalam pengajaran, dan tantangan yang dihadapi dalam transformasi digital pendidikan.

Di akhir workshop, para guru tidak hanya mendapatkan pengetahuan baru, tetapi juga membangun jejaring professional. Mereka saling berbagi pengalaman, strategi, dan inspirasi untuk terus mengembangkan metode pengajaran yang inovatif.

Kesuksesan workshop ini menandakan komitmen untuk terus meningkatkan kualitas pendidikan melalui pengembangan kompetensi digital para guru. Dengan bekal teknologi dan semangat inovasi, para pendidik siap membawa pendidikan Indonesia menuju era digital yang lebih maju.`,
  },
  {
    id: '3',
    image: 'https://dummyimage.com/600x400/000/fff.png',
    title: 'Perayaan Hari Pendidikan Nasional',
    description:
      'Rangkaian kegiatan memperingati hari pendidikan nasional dengan berbagai lomba.',
    date: '2024-01-10',
    content: `Perayaan Hari Pendidikan Nasional tahun ini menampilkan serangkaian kegiatan yang menginspirasi, mengangkat tema "Pendidikan Berkualitas, Generasi Unggul". Acara yang berlangsung selama satu minggu ini menghadirkan berbagai lomba, diskusi, dan kegiatan yang bertujuan merayakan dan merefleksikan pentingnya pendidikan bagi pembangunan bangsa.

Pembukaan perayaan ditandai dengan upacara bendera yang khidmat di lapangan utama. Kepala Dinas Pendidikan memberikan sambutan yang menekankan peran strategis pendidikan dalam membentuk karakter dan masa depan generasi muda. "Pendidikan bukan sekadar transfer pengetahuan, tetapi proses transformasi yang membentuk manusia seutuhnya," tegasnya.

Lomba-lomba yang diselenggarakan mencakup berbagai bidang, mulai dari akademik hingga seni dan olahraga. Olimpiade sains, kompetisi menulis esai, lomba debat, pameran karya seni, dan turnamen olahraga menjadi wahana bagi siswa untuk menunjukkan bakat dan kreativitas mereka.

Salah satu highlight acara adalah kompetisi inovasi teknologi yang diikuti oleh tim dari berbagai sekolah. Para siswa menampilkan karya-karya teknologi yang mencengangkan, mulai dari robot sederhana hingga aplikasi yang memecahkan masalah sosial. Juri terdiri dari para akademisi dan praktisi teknologi yang memberikan penilaian komprehensif.

Diskusi panel dengan tema "Pendidikan di Era Digital" menghadirkan para pakar pendidikan, teknologi, dan pemimpin muda. Mereka mendiskusikan tantangan dan peluang pendidikan di tengah pesatnya transformasi digital, serta peran strategis pendidikan dalam mempersiapkan generasi yang adaptif dan inovatif.

Workshop kreativitas untuk guru menjadi bagian penting dari rangkaian acara. Para pendidik diajak untuk berpikir di luar kebiasaan, merancang metode pengajaran inovatif, dan berbagi praktik terbaik dalam mendidik generasi milenial dan Z.

Pameran pendidikan yang digelar menampilkan berbagai inovasi dan teknologi pendidikan terkini. Mulai dari platform e-learning, alat bantu pengajaran berbasis augmented reality, hingga program pertukaran pelajar internasional menjadi daya tarik tersendiri.

Lomba menulis esai bertema "Pendidikan dan Masa Depan Bangsa" mendapat respons luar biasa. Ratusan siswa mengirimkan karya yang menunjukkan kedalaman pemikiran dan kepedulian mereka terhadap isu-isu pendidikan nasional. Karya terbaik akan dipublikasikan dan mendapatkan beasiswa.

Kegiatan sosial menjadi bagian tak terpisahkan dari perayaan. Tim relawan melakukan kunjungan ke sekolah-sekolah di daerah terpencil, memberikan bantuan buku, alat tulis, dan berbagi inspirasi dengan siswa-siswa yang kurang beruntung.

Malam puncak perayaan digelar dengan semarak pertunjukan seni yang menampilkan bakat-bakat luar biasa dari para siswa. Tari tradisional, musik kontemporer, teater, dan berbagai performa seni lainnya menjadi bukti bahwa pendidikan tidak hanya tentang akademis, tetapi juga pengembangan kreativitas.

Pemerintah daerah memberikan penghargaan kepada guru-guru berprestasi, kepala sekolah inovatif, dan siswa berprestasi. Penghargaan ini tidak sekadar pengakuan, tetapi juga bentuk apresiasi dan motivasi bagi para pelaku pendidikan.

Perayaan Hari Pendidikan Nasional tahun ini bukan sekadar momen ceremonial, tetapi refleksi mendalam tentang peran pendidikan dalam membentuk masa depan bangsa. Dengan semangat inovasi, kreativitas, dan dedikasi, para pelaku pendidikan terus berkomitmen untuk mencerdaskan kehidupan bangsa.`,
  },
  {
    id: '4',
    image: 'https://dummyimage.com/600x400/000/fff.png',
    title: 'Kunjungan Industri ke Perusahaan Teknologi',
    description:
      'Siswa mendapat pengalaman langsung di industri teknologi terkemuka.',
    date: '2024-01-08',
    content: `(Continuing from previous part)

Di laboratorium kecerdasan buatan, para siswa diperkenalkan dengan proyek-proyek mutakhir yang sedang dikembangkan. Seorang insinyur senior mendemonstrasikan algoritma machine learning yang digunakan untuk menganalisis data besar dan membuat prediksi bisnis. "Teknologi bukan sekadar tentang kode, tetapi bagaimana kita memecahkan masalah kompleks," jelasnya.

Sesi coding workshop memberikan pengalaman praktikal bagi para siswa. Mereka dibagi ke dalam tim kecil dan diberikan tantangan untuk mengembangkan solusi sederhana menggunakan bahasa pemrograman terkini. Beberapa tim berhasil membuat prototipe aplikasi yang mengejutkan para mentor dengan kreativitasnya.

Pembicara tamu dari ekosistem startup teknologi berbagi cerita perjalanan mereka. Mereka menceritakan tantangan, kegagalan, dan keberhasilan dalam membangun perusahaan teknologi. Kisah-kisah inspiratif ini memberikan perspektif nyata tentang dunia industri teknologi yang dinamis.

Salah satu momen paling berkesan adalah sesi tanya jawab dengan para pemimpin divisi. Para siswa mengajukan pertanyaan mendalam tentang masa depan teknologi, etika dalam pengembangan produk digital, dan tantangan karier di bidang teknologi. Diskusi ini membuka wawasan mereka tentang kompleksitas dan peluang di dunia teknologi.

Program ini tidak hanya memberikan wawasan teknis, tetapi juga membangun soft skills yang kritis. Para siswa belajar tentang kerja tim, komunikasi profesional, dan pentingnya adaptabilitas dalam lingkungan teknologi yang terus berubah.

Kepala sekolah, Dr. Hendro Susanto, yang turut mendampingi, menekankan pentingnya program seperti ini. "Kunjungan industri adalah jembatan antara pendidikan dan dunia kerja. Kami ingin siswa kami tidak sekadar memiliki pengetahuan, tetapi siap menjadi pemimpin dan inovator di masa depan," ujarnya.

Beberapa siswa mendapatkan kesempatan magang dan program pengembangan talenta dari perusahaan. Ini adalah bukti nyata bahwa kunjungan industri dapat membuka peluang nyata bagi siswa berbakat.

Di akhir kunjungan, para siswa diminta untuk membuat laporan refleksi. Tulisan-tulisan mereka menunjukkan transformasi pemahaman tentang teknologi, karier, dan potensi mereka sendiri. Banyak di antara mereka mulai melihat masa depan dengan perspektif baru dan penuh semangat.

Kunjungan industri ini bukan sekadar kunjungan biasa, tetapi momen penting dalam perjalanan pendidikan para siswa. Ia membuka mata mereka tentang kemungkinan-kemungkinan di dunia teknologi, menginspirasi mimpi, dan membekali mereka dengan wawasan praktis untuk masa depan.`,
  },
  {
    id: '5',
    image: 'https://dummyimage.com/600x400/000/fff.png',
    title: 'Seminar Persiapan Kuliah',
    description:
      'Panduan lengkap memilih jurusan dan persiapan masuk perguruan tinggi.',
    date: '2024-01-05',
    content: `Seminar Persiapan Kuliah yang diselenggarakan oleh Tim Bimbingan Karier SMA Terpadu Nusantara menjadi momen penting bagi siswa kelas XII dalam mempersiapkan langkah strategis menuju pendidikan tinggi. Acara yang diikuti oleh lebih dari 250 siswa dan orangtua ini memberikan panduan komprehensif tentang berbagai aspek persiapan kuliah.

Narasumber utama, Dr. Maria Suryani, seorang pakar pendidikan tinggi dari Universitas Terkemuka Indonesia, membuka sesi dengan paparan mendalam tentang lanskap pendidikan tinggi saat ini. "Memilih jurusan bukan sekadar tentang peluang kerja, tetapi tentang menemukan passion dan potensi diri," tegasnya.

Seminar dibagi ke dalam beberapa sesi kunci yang mencakup berbagai aspek persiapan kuliah. Sesi pertama fokus pada analisis minat dan bakat, di mana para siswa diberikan tes psikometri dan konsultasi personal untuk memahami kecenderungan akademis mereka.

Perwakilan dari berbagai perguruan tinggi negeri dan swasta memberikan presentasi detail tentang program studi, persyaratan penerimaan, dan peluang beasiswa. Informasi tentang jalur masuk seperti SNMPTN, SBMPTN, dan jalur mandiri dibahas secara komprehensif, memberikan kejelasan bagi para siswa.

Workshop penyusunan esai motivasi menjadi salah satu sesi paling diminati. Para ahli menulis memberikan tips praktis tentang bagaimana membuat esai yang menarik dan mencerminkan kepribadian siswa. Mereka dilatih untuk mengkomunikasikan potensi diri secara efektif dalam dokumen aplikasi.

Sesi konsultasi personal dengan para konselor karier memberikan kesempatan bagi siswa untuk mendapatkan bimbingan individual. Setiap siswa mendapatkan waktu khusus untuk mendiskusikan pilihan karier, jurusan, dan strategi aplikasi perguruan tinggi.

Orangtua turut dilibatkan dalam sesi khusus yang membahas aspek finansial pendidikan tinggi. Informasi tentang berbagai skema beasiswa, kredit pendidikan, dan strategi pembiayaan kuliah menjadi perhatian utama.

Sesi panel dengan alumni yang sukses di berbagai bidang memberikan inspirasi nyata. Mereka berbagi pengalaman tentang perjalanan akademis, tantangan yang dihadapi, dan tips sukses dalam memilih dan menjalani pendidikan tinggi.

Bagian akhir seminar difokuskan pada persiapan mental dan soft skills yang dibutuhkan dalam transisi dari sekolah menengah ke perguruan tinggi. Pembicara berbagi strategi manajemen waktu, teknik belajar efektif, dan pentingnya jaringan sosial di lingkungan baru.

Kepala sekolah, Dr. Hendro Susanto, menekankan pentingnya seminar ini. "Kami tidak hanya ingin siswa kami diterima di perguruan tinggi, tetapi sukses dan memberikan dampak positif di masa depan," ungkapnya.

Para siswa mendapatkan panduan lengkap dalam bentuk buku referensi dan akses ke platform online yang berisi materi tambahan dan sumber daya persiapan kuliah.

Seminar ini bukan sekadar pemberian informasi, tetapi momen transformasi bagi para siswa. Mereka keluar dengan pemahaman yang lebih jelas tentang potensi diri, pilihan karier, dan langkah konkret menuju pendidikan tinggi yang sesuai dengan passion mereka.`,
  },
]

export const schoolVacancies: Vacancy[] = [
  {
    id: '1',
    position: 'Mathematics Teacher',
    department: 'Mathematics',
    requiredQualifications: ['Teaching Certification', 'Degree in Mathematics'],
    educationLevel: 'Bachelor',
    salaryRange: { min: 45000, max: 65000 },
    employmentType: 'Full-time',
    openDate: new Date('2024-02-01'),
    closingDate: new Date('2024-03-15'),
    location: 'Main Campus',
    imageUrl: 'https://dummyimage.com/600x400/000/fff.png',
  },
  {
    id: '2',
    position: 'Computer Science Lecturer',
    department: 'Computer Science',
    requiredQualifications: ['PhD in Computer Science', 'Research Experience'],
    educationLevel: 'PhD',
    salaryRange: { min: 65000, max: 85000 },
    employmentType: 'Full-time',
    openDate: new Date('2024-02-15'),
    closingDate: new Date('2024-04-01'),
    location: 'Technology Building',
    imageUrl: 'https://dummyimage.com/600x400/000/fff.png',
  },
  {
    id: '3',
    position: 'Art History Instructor',
    department: 'Humanities',
    requiredQualifications: ["Master's in Art History", 'Teaching Experience'],
    educationLevel: 'Master',
    salaryRange: { min: 40000, max: 55000 },
    employmentType: 'Part-time',
    openDate: new Date('2024-03-01'),
    closingDate: new Date('2024-04-15'),
    location: 'Arts Center',
    imageUrl: 'https://dummyimage.com/600x400/000/fff.png',
  },
  {
    id: '4',
    position: 'Biology Research Assistant',
    department: 'Science',
    requiredQualifications: ['Bachelor in Biology', 'Lab Research Skills'],
    educationLevel: 'Bachelor',
    salaryRange: { min: 35000, max: 45000 },
    employmentType: 'Contract',
    openDate: new Date('2024-02-20'),
    closingDate: new Date('2024-03-30'),
    location: 'Science Laboratory',
    imageUrl: 'https://dummyimage.com/600x400/000/fff.png',
  },
  {
    id: '5',
    position: 'English Language Coordinator',
    department: 'Languages',
    requiredQualifications: ["Master's in TESOL", 'ESL Teaching Certification'],
    educationLevel: 'Master',
    salaryRange: { min: 50000, max: 70000 },
    employmentType: 'Full-time',
    openDate: new Date('2024-03-10'),
    closingDate: new Date('2024-04-25'),
    location: 'Language Studies Building',
    imageUrl: 'https://dummyimage.com/600x400/000/fff.png',
  },
]
