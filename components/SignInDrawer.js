import { Icon } from "@iconify/react";

export default function SignInDrawer({ closeSignIn }) {
  return (
    <div
      className="fixed z-40 right-0 h-screen p-4 overflow-y-auto bg-white w-80 flex flex-col"
      tabIndex="-1"
      aria-labelledby="drawer-label"
    >
      <button
        className="rounded-md w-[30px] h-[30px] flex hover:bg-gray-100"
        onClick={() => closeSignIn()}
      >
        <Icon
          icon="ei:close"
          className="text-2xl hover:cursor-pointer m-auto"
        />
      </button>
      <p>Sign In Drawer</p>
    </div>
  );
}
