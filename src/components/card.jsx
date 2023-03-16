import {
  Cart,
  HeadCart,
  HeadCartContainer,
  HeadCartBf,
  Information,
  Avatar,
  AvatarWrap,
  TextCard,
  ButtonFollow,
  ButtonUnFollow,
} from "./card.styled";
import img from "../img/Logo.png";
import avatar from "../img/Hansel.png";
import { useState, useEffect } from "react";

export const Card = () => {
  const [followers, setFollowers] = useState(
    () => JSON.parse(localStorage.getItem("followers")) ?? [100500]
  );
  const [isClick, setIsClick] = useState(
    () => JSON.parse(localStorage.getItem("isClick")) ?? false
  );
  useEffect(() => {
    window.localStorage.setItem("followers", JSON.stringify(followers));
  }, [followers]);
  useEffect(() => {
    window.localStorage.setItem("isClick", JSON.stringify(isClick));
  }, [isClick]);

  const onClickPlus = () => {
    setFollowers(followers + 1);
    setIsClick(!isClick);
  };
  const onClickMinus = () => {
    setFollowers(followers - 1);
    setIsClick(!isClick);
  };
  const transform = (num) => {
    let array = [...num.toString()];
    array.splice(-3, 0, ",");
    let res = array.join("");
    return res;
  };

  return (
    <Cart>
      <HeadCart>
        <HeadCartContainer>
          <HeadCartBf>
            <img src={img} alt="logo" width={76} height={22} />
          </HeadCartBf>
        </HeadCartContainer>
      </HeadCart>
      <Information>
        <AvatarWrap>
          <Avatar width={62} height={62} src={avatar} alt="avatar" />
        </AvatarWrap>

        <TextCard>777 tweets</TextCard>
        <TextCard>{transform(followers)} followers</TextCard>
        {isClick ? (
          <ButtonUnFollow onClick={onClickMinus}>following</ButtonUnFollow>
        ) : (
          <ButtonFollow onClick={onClickPlus}>follow</ButtonFollow>
        )}
      </Information>
    </Cart>
  );
};
