import { useLottie } from "lottie-react";

const DisplayLotties = ({ animationPath }) => {
  const options = {
    animationData: animationPath,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default DisplayLotties;