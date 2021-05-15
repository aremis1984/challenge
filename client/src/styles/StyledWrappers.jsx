import styled from 'styled-components'

const StyledWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 350px;
`;
StyledWrapper.displayName = 'StyledWrapper'

const OrdersWrapper = styled.div`
    margin: 0 auto;
    max-width: 500px;
    padding: 40px 0;
`;
OrdersWrapper.displayName = 'OrdersWrapper'

const StyledCard = styled.div`
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0px 10px 25px 5px grey;
    margin: 40px auto;
    max-width: 500px;
    display: grid;
`;
StyledCard.displayName = 'StyledCard'

const StyledButton = styled.button`
    width: 100%;
    text-transform: uppercase;
    margin-top: 20px;
`;
StyledButton.displayName = 'StyledButton'



export { StyledWrapper, OrdersWrapper, StyledCard, StyledButton }