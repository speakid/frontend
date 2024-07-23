import styled from "styled-components";
import "../../fonts/FontFaces.css"
import {color_red_default} from "../../constants/colors";

// DEFAULT ONEST FONT STYLE
const OnestDefault = styled.div`
  font-family: 'Onest'
`

// NORMAL ONEST FONT STYLE
export const OnestNormal = styled(OnestDefault)`
  font-weight: normal;
`

// BOLD ONEST FONT STYLE
export const OnestBold = styled(OnestDefault)`
  font-weight: bold;
`

// SEMI-BOLD ONEST FONT STYLE
export const OnestSemiBold = styled(OnestDefault)`
  font-weight: 600;
`


// NORMAL ONEST FONT SIZES
export const OnestNormalDefault = styled(OnestNormal)`
  font-size: 16px;
`;

export const OnestNormalSmall = styled(OnestNormal)`
  font-size: 14px;
`

export const OnestNormalMed = styled(OnestNormal)`
  font-size: 18px;
`

export const OnestNormalBig = styled(OnestNormal)`
  font-size: 32px;
`

// BOLD ONEST FONT SIZES
export const OnestBoldDefault = styled(OnestBold)`
  font-size: 16px;
`;

export const OnestBoldSmall = styled(OnestBold)`
  font-size: 14px;
`

export const OnestBoldMed = styled(OnestBold)`
  font-size: 20px;
`

export const OnestBoldBig = styled(OnestBold)`
  font-size: 32px;
`

// SEMI-BOLD ONEST FONT SIZES
export const OnestSemiBoldDefault = styled(OnestSemiBold)`
  font-size: 16px;
`;

export const OnestSemiBoldSmall = styled(OnestSemiBold)`
  font-size: 14px;
`

export const OnestSemiBoldMed = styled(OnestSemiBold)`
  font-size: 20px;
`

export const OnestSemiBoldBig = styled(OnestSemiBold)`
  font-size: 32px;
`

export const Link = styled.a`
  color: ${color_red_default};
  text-underline: ${color_red_default};
  text-underline-offset: 2px;
`

export const LinkClear = styled.a`
  text-underline: transparent;
`