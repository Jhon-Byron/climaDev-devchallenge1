import styled from "styled-components"


const StyledImage = styled.div`
  background-image: url('/background.png');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  width: 100%;
  min-height: 100vh;

`

function BackgroundImageContainer({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

BackgroundImageContainer.defaultProps = {
  image: '/background.png'
}

export default BackgroundImageContainer