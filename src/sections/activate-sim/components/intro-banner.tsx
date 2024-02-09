export default function IntroBanner() {
  return (
    <>
      <div className="relative">
        <img
          className="hidden w-full md:block"
          src="/assets/banners/register-banner.png"
          alt="activate-sim-banner"
        />
        <img
          className="block w-full md:hidden"
          src="/assets/banners/register-banner-m.png"
          alt="activate-sim-banner-mobile"
        />
        <div className="absolute right-[50%] top-[50%] hidden -translate-x-[50%] -translate-y-[50%] md:right-[150px] md:block lg:right-[350px]">
          <h1 className="font-blod text-center text-[52px] text-white">
            เปิดเบอร์ใช้งาน
          </h1>
          <p className="text-center text-[16px] text-white">
            สะดวกแค่ผ่านปลายนิ้ว
          </p>
        </div>
        <div className="absolute bottom-[25px] left-[50%] block -translate-x-[50%] md:hidden">
          <h1 className="font-blod text-center text-[32px] text-white">
            เปิดเบอร์ใช้งาน
          </h1>
          <p className="text-center text-[16px] text-white">
            สะดวกแค่ผ่านปลายนิ้ว
          </p>
        </div>
      </div>
    </>
  )
}
