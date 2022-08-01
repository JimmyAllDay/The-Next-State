import { Icon } from "@iconify/react";

export default function FooterServices() {
  return (
    <div className="flex space-x-6 justify-center py-2">
      <div className="text-6xl my-auto h-full w-[150px]">
        <Icon icon="ph:truck-thin" className="mx-auto h-[100px]" />
        <p className="text-lg mt-0 text-center">
          Free shipping for Orders over $100*
        </p>
      </div>
      <div className="text-7xl w-[150px] ">
        <Icon icon="arcticons:parcel-tracker" className="mx-auto h-[100px]" />
        <p className="text-lg text-center">Free returns for 40 days*</p>
      </div>
    </div>
  );
}
