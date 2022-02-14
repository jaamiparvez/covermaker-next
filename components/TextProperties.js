import FontFamily from "./FontFamily";
import TextColor from "./TextColor";
import FontSize from "./FontSize";
import FontStyle from "./FontStyle";
import TextBackgroundColor from "./TextBackgroundColor";
import TextShadow from "./TextShadow";
import TextStroke from "./TextStroke";

const TextProperties = (props) => {
  return (
    <div>
      <div className="row g-0">
        <FontFamily />
      </div>
      <div className="row g-0 my-3">
        <TextColor />
      </div>
      <div className="row g-0 my-3">
        <TextBackgroundColor />
      </div>
      <div className="row g-0 my-3">
        <FontSize />
      </div>
      <div className="row g-0">
        <FontStyle />
      </div>
      <div className="row g-0 my-3">
        <TextStroke />
      </div>
      <div className="row g-0 my-3">
        <TextShadow />
      </div>
    </div>
  );
};

export default TextProperties;
