import styled from "styled-components";
import {
    color_grey_dark,
    color_grey_light,
    color_red_active,
    color_red_default,
    color_red_light, color_transparent,
    color_white
} from "../../../constants/colors";

const Button = styled.button`
  width: ${props => props.size === "Big"? "350px" : "145px"};
  padding: ${props => props.size === "Big"? "20px": "10px"};
  border-radius: 20px;
`

export const ButtonDefault = styled(Button)`
  
  background-color: ${props => props.inactive? color_grey_light : color_red_default}; 
  color: ${props => props.inactive? color_grey_dark : color_white};
  border: 0;
  
  &:hover{
    background-color: ${props => props.inactive? color_grey_light : color_red_light}
  };
  
  &:active{
    background-color: ${props => props.inactive? color_grey_light : color_red_active};
    color: ${props => props.inactive? color_grey_dark : color_white};
  };
`

export const ButtonOutlined = styled(Button)`
  background-color: ${props=> props.inactive? color_transparent : color_transparent};
  color: ${props=> props.inactive? color_grey_dark : color_red_default};
  border-width: 1px;
  border-color: ${props=> props.inactive? color_grey_dark : color_red_default};
  
  &:hover{
    color: ${props => props.inactive? color_grey_dark : color_red_light} ${color_red_light};
    border-color: ${props => props.inactive? color_grey_dark : color_red_light};
  };
  
  &:active{
    color: ${props => props.inactive? color_grey_dark : color_red_active};
    border-color: ${props => props.inactive? color_grey_dark : color_red_light};
  };
`

