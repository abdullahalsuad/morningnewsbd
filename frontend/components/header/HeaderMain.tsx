import Image from "next/image";
import Link from "next/link";

export default function HeaderMain() {
  return (
    <div className="mx-auto max-w-full xl:max-w-[1200px] 2xl:max-w-[1400px] py-4  flex items-center gap-3 ">
      {/* Logo */}
      <Link href="/" className="flex items-center px-4 ">
        <Image
          src="https://morningnewsbd.com/assets/images/logo/17371368861726831078logo.png"
          alt="সংবাদ ৭১ বিডি"
          width={500}
          height={300}
          priority
        />
      </Link>

      {/* Banner / Ad / CTA area */}
      <div className="hidden md:block px-4 lg:px-0">
        <Image
          src="https://4.bp.blogspot.com/-0vjyWEgMv-I/V1qVpS7vbRI/AAAAAAAAB70/occVjbuxm14nKSpIOmEWh31q-FhJaXSPwCLcB/s1600/16715760738488333078.gif"
          alt="সংবাদ ৭১ বিডি"
          width={1000}
          height={50}
          priority
        />
      </div>
    </div>
  );
}
