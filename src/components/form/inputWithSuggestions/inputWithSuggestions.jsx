import styled from "styled-components";

import Input from "../input/input";

const SuggestionsContainer = styled.div`
  margin-top: 10px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const Suggestions = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e4e4e4;
  }
`;

export default function InputWithSuggestions({ suggestions, ...props }) {
  return (
    <>
      <Input {...props} />
      <SuggestionsContainer>
        {
          suggestions.map((suggestion, pos) => 
          <Suggestions 
           key={`suggestion-${pos}`} 
           onClick={suggestion.onClick}>
            {suggestion.text}
          </Suggestions>
        )}
      </SuggestionsContainer>
    </>
  );
}

InputWithSuggestions.defaultProps = {
  suggestions: [
    { text: "sugestão", onclick: () => {} },
    { text: "sugestão", onclick: () => {} },
  ],
};
