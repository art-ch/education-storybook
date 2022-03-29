import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

type InputPosition = 'beforeIcon' | 'afterIcon';

interface InputProps {
  inputPosition: InputPosition;
}

const Input = ({ inputPosition }: InputProps) => {
  return (
    <InputWrapper>
      <input type="text" className={inputPosition} />
      <button>
        <MdClose className="icon" />
      </button>
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  display: flex;
  .afterIcon {
    order: 1;
  }
  .beforeIcon {
    order: 0;
  }
  input,
  button {
    border: 1px solid black;
    background: white;
  }
  input {
    padding: 10px;
  }
  button {
    width: 40px;
    .icon {
      font-size: 25px;
    }
    :hover {
      cursor: pointer;
    }
  }
`;
