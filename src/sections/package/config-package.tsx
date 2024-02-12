export interface PackageT {
  id: number
  name: string
  price: number
  vat: number
  refCode: string
  data?: {
    volume: string
    speed: string
  }
  voice?: {
    volume: string
  }
  description: string
  remark?: string
}

export const packages: PackageT[] = [
  {
    id: 1,
    name: 'สุดประหยัด',
    price: 100,
    vat: 7,
    refCode: 'F16E01EL000S437',
    data: {
      volume: 'Unlimited',
      speed: '6 Mbps',
    },
    description:
      'ใช้งาน Internet ได้ไม่จำกัด ด้วยความเร็ว 6 Mbps มีอายุใช้งานได้ 7 วัน',
  },
  {
    id: 2,
    name: 'เหมาถูกใจ',
    price: 250,
    vat: 17.5,
    refCode: 'F16E01EL000S438',
    data: {
      volume: 'Unlimited',
      speed: '4 Mbps',
    },
    description:
      'ใช้งาน Internet ได้ไม่จำกัด ด้วยความเร็ว 4 Mbps มีอายุใช้งานได้ 30 วัน',
  },
  {
    id: 3,
    name: 'แรงไม่หยุด',
    price: 250,
    vat: 17.5,
    refCode: 'F16E01EL000S439',
    data: {
      volume: '50 GB',
      speed: '6 Mbps',
    },
    description:
      'ใช้งาน Internet ได้สูงสุด 50 GB ด้วยความเร็ว 6 Mbps เมื่อใช้งานครบลดความเร็วเหลือ 384 Kbps มีอายุใช้งานได้ 30 วัน',
  },
]