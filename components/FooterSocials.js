import { Icon } from "@iconify/react";

export default function FooterSocials() {
  return (
    <div className="text-gray-200 flex flex-row-reverse justify-center">
      <Icon
        icon="akar-icons:instagram-fill"
        className="text-3xl hover:text-gray-500 "
      />
      <Icon
        icon="ion:logo-tiktok"
        className="text-3xl mx-6 hover:text-gray-500 "
      />
      <Icon
        icon="brandico:facebook"
        className="text-3xl hover:text-gray-500 "
      />
    </div>
  );
}
