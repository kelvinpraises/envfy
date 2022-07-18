// import React from "react";
// import styled from "styled-components";

// interface ILinkBoundProp {
//   maxWidth: string;
//   height?: string;
//   children: React.ReactNode;
//   margin?: string;
//   href: string;
// }

// interface ISLinkBound {
//   maxWidth: string;
//   height?: string;
//   margin?: string;
// }

// const SLinkBound = styled.div<ISLinkBound>`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   border: ${({ theme }) => `2px solid ${theme.nav}`};
//   border-radius: 1rem;
//   align-items: center;
//   padding: 1rem;
//   max-width: ${({ maxWidth }) => maxWidth};

//   ${({ height }) => {
//     return [height && `height: ${height}`];
//   }};
//   ${({ margin }) => {
//     return [margin && `margin: ${margin}`];
//   }};

//   :hover {
//     border: ${({ theme }) => `2px solid ${theme.borderHover}`};
//     transition: all 250ms;
//   }
// `;

// const LinkBound: React.FC<ILinkBoundProp> = 
//   ({ children, maxWidth, height, margin, }) => {
//     return (
//       <a href={href} >
//         <SLinkBound maxWidth={maxWidth} height={height} margin={margin}>
//           {children}
//         </SLinkBound>
//       </a>
//     );
//   }
// );

// export default LinkBound;
