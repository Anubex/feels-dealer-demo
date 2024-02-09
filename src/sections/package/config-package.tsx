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
    name: 'แรงไม่หยุด',
    price: 350,
    vat: 24.5,
    refCode: 'F16E01EL000S439',
    data: {
      volume: 'Unlimited',
      speed: '6 Mbps',
    },
    description:
      'ใช้งาน Internet ได้ไม่จำกัด ด้วยความเร็ว 6 Mbps มีอายุใช้งานได้ 30 วัน',
  },
]
