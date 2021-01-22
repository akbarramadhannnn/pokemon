import styled from 'styled-components';

const ProgressBar = styled.div`
  position: relative;
  width: 552px;
  background: #e5e5e5;
  margin-bottom: 13px;
  border-radius: 6px;
`;

export const Bar = styled.div`
  width: ${(props) => `${props.value}%`};
  border-radius: 6px;
  background: #11C4DD;
  display: flex;
  justify-content: center;
`;

export default ProgressBar;
