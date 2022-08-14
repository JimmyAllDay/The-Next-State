export default function SignInButton({
  mainNav,
  showSignIn,
  toggleShowSignIn,
  closeCart,
}) {
  return (
    <div className={`${mainNav ? "flex" : "hidden"}`}>
      <p
        onMouseOver={() => {
          toggleShowSignIn();
          closeCart();
        }}
        className={`hover:cursor-pointer text-gray-500 hover:text-gray-800`}
      >
        Sign In
      </p>
    </div>
  );
}
