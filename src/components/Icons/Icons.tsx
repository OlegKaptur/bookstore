import React from "react";

import HeartIcon from "./svg/heart.svg";
import SearchIcon from "./svg/search.svg";
import ShoppingIcon from "./svg/shopping.svg";
import UserIcon from "./svg/user.svg";
import LogoIcon from "./svg/logo.svg";
import FacebookIcon from "./svg/facebook.svg";
import TwitterIcon from "./svg/twitter.svg";
import HeartRedIcon from "./svg/heart_red.svg";
import HeartWhiteIcon from "./svg/heart_white.svg";
import StarIcon from "./svg/star.svg";
import StarBlackIcon from "./svg/starblack.svg";
import BurgerIcon from "./svg/burger.svg";
import CancelIcon from "./svg/cancel.svg";

interface IconsProps {
  className?: string;
  name:
    | "heart"
    | "search"
    | "shopping"
    | "user"
    | "logo"
    | "facebook"
    | "twitter"
    | "heart_red"
    | "heart_white"
    | "star"
    | "burger"
    | "cancel"
    | "starblack";
}

const icons: Record<IconsProps["name"], string> = {
  heart: HeartIcon,
  search: SearchIcon,
  shopping: ShoppingIcon,
  user: UserIcon,
  logo: LogoIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  heart_white: HeartWhiteIcon,
  heart_red: HeartRedIcon,
  star: StarIcon,
  starblack: StarBlackIcon,
  burger: BurgerIcon,
  cancel: CancelIcon,
};

const Icons: React.FC<IconsProps> = ({ name, className }) => {
  return <img className={className} src={icons[name]} alt={name} />;
};

export default Icons;
