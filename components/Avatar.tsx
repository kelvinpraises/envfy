import React from "react";
import styled from "styled-components";

interface IAvatarProps {
  className?: any;
  imgUrl?: string;
  id?: string;
  height: string;
  width: string;
}

interface ISImgProps {
  className?: any;
  height: string;
  width: string;
}

const SImg = styled.img<ISImgProps>`
  border-radius: 50%;
  min-height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

const Avatar: React.FC<IAvatarProps> = ({
  className,
  imgUrl,
  id,
  height,
  width,
}) => {
  if (!imgUrl) {
    return <div></div>;
  }

  return (
    <SImg className={className} src={imgUrl} height={height} width={width} />
  );
};

export default Avatar;
