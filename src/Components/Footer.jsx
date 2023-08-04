import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="text-white w-ful  h-[200px]  bg-[#161517] p-4 flex justify-between ">
      <img src={logo} alt="footer logo" className="w-[60px] h-[80px]" />
      <div className="">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png"
          alt="security partners"
          className="h-[50px]"
        />
        <h2 className="font-bold text-[25px] text-left">
          complete security. no asterisks.
        </h2>
      </div>
      <p className=" text-[25px] w-[650px]">
        CRED encrypts all data and transactions to ensure a completely secure
        experience for our members.
      </p>
    </footer>
  );
};

export default Footer;
