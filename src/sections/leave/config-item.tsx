export interface LeaveItemT {
  id: string
  title: string
  subTitle: string
  icon: string
}

export const items: LeaveItemT[] = [
  {
    id: 'leave-1',
    icon: '/assets/e-service/leave/Frame.svg',
    title: 'ปรึกษาแพทย์แบบสด',
    subTitle: 'โทรปรึกษาเบื้องต้น',
  },
  {
    id: 'leave-2',
    icon: '/assets/e-service/leave/Frame-2.svg',
    title: 'สั่งยา',
    subTitle: 'สั่งยากับร้านขายยาใกล้คุณ',
  },
  {
    id: 'leave-3',
    icon: '/assets/e-service/leave/gridicons_chat.svg',
    title: 'แชทปรึกษาออนไลน์',
    subTitle: 'ปรึกษาออนไลน์ผ่านแชท',
  },
  {
    id: 'leave-4',
    icon: '/assets/e-service/leave/Frame-3.svg',
    title: 'นัดหมายกับโรงพยาบาล',
    subTitle: 'ทำนัดล่วงหน้าก่อนทำการรักษา',
  },
  {
    id: 'leave-5',
    icon: '/assets/e-service/leave/Frame-4.svg',
    title: 'ตรวจสอบสิทธิ์',
    subTitle: 'ตรวจสอบสิทธิ์ประกันสังคม,บัตรทอง',
  },
  {
    id: 'leave-6',
    icon: '/assets/e-service/leave/Frame-5.svg',
    title: 'รถพยาบาลฉุกเฉิน',
    subTitle: 'เรียกรถพยาบาล',
  },
  {
    id: 'leave-7',
    icon: '/assets/e-service/leave/Frame-6.svg',
    title: 'บริจาคให้องค์กร',
    subTitle: 'เพื่อการกุศล',
  },
]
