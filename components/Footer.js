import Header from "@/components/Header";

const Footer = () => (
  <footer className="w-full bg-black mx-auto flex flex-col p-6">
    <Header fontColor={"text-gray-100"} bgColor={"bg-black"} />
    <p className="mx-auto">
      <a className="text-gray-200 font-secondary">All Day &copy;</a>
    </p>
  </footer>
);

export default Footer;
