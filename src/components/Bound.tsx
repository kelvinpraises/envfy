import React from "react";
import styled from "styled-components";

interface IBoundProp {
  maxWidth: string;
  height?: string;
  children: React.ReactNode;
  margin?: string;
  className?: any;
}

interface ISBound {
  maxWidth: string;
  height?: string;
  margin?: string;
}

const SBound = styled.div<ISBound>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: ${({ theme }) => `2px solid ${theme.nav}`};
  border-radius: 1rem;
  align-items: center;
  padding: 1rem;
  max-width: ${({ maxWidth }) => maxWidth};
  position: relative;

  ${({ height }) => {
    return [height && `height: ${height}`];
  }};
  ${({ margin }) => {
    return [margin && `margin: ${margin}`];
  }};


`;

const Bound: React.FC<IBoundProp> = ({
  className,
  children,
  maxWidth,
  height,
  margin,
}) => {
  return (
    <SBound
      className={className}
      maxWidth={maxWidth}
      height={height}
      margin={margin}
    >
      {children}
    </SBound>
  );
};

export default Bound;
