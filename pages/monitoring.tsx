import Loading from "../public/stackd-loading.gif";
import Image from "next/image";
const Monitoring = () => {
  return (
    <div className="h-screen relative flex justify-center items-center">
      <Image src={Loading} alt="loading" className="h-40 w-40 object-cover" />
      <iframe
        src="https://www.zruipower.online/#/login"
        className="h-full w-full absolute top-0 left-0"
      />
    </div>
  );
};

export default Monitoring;
