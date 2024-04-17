"use client";

import Lottie from "lottie-react";
import loader from "../loader.json";

const TelegramLoading = () => {
  return <Lottie animationData={loader} loop={true} />;
};

export default TelegramLoading;
