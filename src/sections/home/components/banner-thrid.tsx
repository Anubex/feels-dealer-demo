export default function BannerThird() {
  return (
    <>
      <img
        className="hidden w-full md:block"
        src="/assets/banners/home-banner.png"
        alt="home-third-banner"
      />
      <img
        className="block w-full md:hidden"
        src="/assets/banners/home-banner-m.jpeg"
        alt="home-third-banner-mobile"
      />
    </>
  )
}
