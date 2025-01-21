interface NewsItem {
  id: string
  image: string
  title: string
  description: string
  date: string
}

const newsData: NewsItem[] = [
  {
    id: '1',
    image: 'https://dummyimage.com/600x400/000/fff.png',
    title: 'Prestasi Gemilang Siswa dalam Olimpiade Sains',
    description:
      'Para siswa berhasil meraih medali emas dalam kompetisi sains tingkat nasional.',
    date: '2024-01-15',
  },
  {
    id: '2',
    image: 'https://dummyimage.com/600x400/000/fff.png',
    title: 'Workshop Teknologi untuk Guru',
    description: 'Program pengembangan kompetensi digital untuk para pengajar.',
    date: '2024-01-12',
  },
  {
    id: '3',
    image: 'https://dummyimage.com/600x400/000/fff.png',
    title: 'Perayaan Hari Pendidikan Nasional',
    description:
      'Rangkaian kegiatan memperingati hari pendidikan nasional dengan berbagai lomba.',
    date: '2024-01-10',
  },
  {
    id: '4',
    image: 'https://dummyimage.com/600x400/000/fff.png',
    title: 'Kunjungan Industri ke Perusahaan Teknologi',
    description:
      'Siswa mendapat pengalaman langsung di industri teknologi terkemuka.',
    date: '2024-01-08',
  },
  {
    id: '5',
    image: 'https://dummyimage.com/600x400/000/fff.png',
    title: 'Seminar Persiapan Kuliah',
    description:
      'Panduan lengkap memilih jurusan dan persiapan masuk perguruan tinggi.',
    date: '2024-01-05',
  },
]

export default newsData
