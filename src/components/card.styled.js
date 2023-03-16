import styled from 'styled-components';
import "@fontsource/montserrat";
import bg from'../img/b.png';
export const Cart= styled.div`    
    width: 380px;
   
`;

export const HeadCart = styled.div`    
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    border-top-left-radius:20px;
    border-top-right-radius:20px;  
    height: 222px;     
`;

export const HeadCartContainer = styled.div`   
   background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
   box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;  
   padding: 28px 36px 0px;
   height: 182px;
`;
export const HeadCartBf = styled.div`
   background-image: url(${bg});
   background-position: bottom;
   background-repeat: no-repeat; 
   height: 170px;
`;
export const Information= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
    padding-top:62px;
    padding-bottom: 36px;
`;
export const AvatarWrap = styled.div`
   position: absolute;
   left:170px;
   top:190px;
   display:flex;
   justify-content: center;
   align-items: center;
   background: #EBD8FF;
   width:80px;
   height:80px;
   box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
   border-radius: 50%;
    
`;
export const Avatar = styled.img`
   background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
   border-radius: 50%;
    
`;
export const TextCard = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 0.83;
    text-transform: uppercase;
    color: #EBD8FF;
   margin-bottom:16px;
`;

export const ButtonFollow = styled.button`
   margin-top:10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 1.22;
    color: #373737;
     
    padding: 14px 0;
    width: 196px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border-color: transparent;
`;

export const ButtonUnFollow = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 1.22;
    background: #5CD3A8;
    padding: 14px 0;
    width: 196px;
    margin-top:10px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border-color: transparent;
`;