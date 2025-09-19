import Image from "next/image";
import Link from "next/link";

export default function HeaderMain() {
  return (
    <div className="w-full bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://morningnewsbd.com/assets/images/logo/17371368861726831078logo.png"
            alt="সংবাদ ৭১ বিডি"
            width={400}
            height={400}
            priority
          />
        </Link>

        {/* Banner / Ad / CTA area */}
        <div className="hidden md:block">
          <Image
            src="https://4.bp.blogspot.com/-0vjyWEgMv-I/V1qVpS7vbRI/AAAAAAAAB70/occVjbuxm14nKSpIOmEWh31q-FhJaXSPwCLcB/s1600/16715760738488333078.gif"
            alt="সংবাদ ৭১ বিডি"
            width={800}
            height={48}
            priority
          />
          {/* <div className="h-16 w-full rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-300 p-2">
            <Image
              src="https://4.bp.blogspot.com/-0vjyWEgMv-I/V1qVpS7vbRI/AAAAAAAAB70/occVjbuxm14nKSpIOmEWh31q-FhJaXSPwCLcB/s1600/16715760738488333078.gif"
              alt="সংবাদ ৭১ বিডি"
              width={1000}
              height={50}
              priority
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
