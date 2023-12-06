


const CrowdComponent = ({ onSubmit, taskData }) => {
  const question_text = taskData.question_text;
  const question_prompt = taskData.question_prompt;
  const question_tag = taskData.question_tag;
  const answer_format = taskData.answer_format;
  const pre_prompt = taskData.pre_prompt;

  const onFormSubmit = (e) => {
    e.preventDefault();
    const inputValue = document.querySelector(`crowd-input[name="${question_tag}"]`).value;
  
    const englishLevels = {
      english_1: document.querySelector('crowd-radio-button[name="english_1"]').checked,
      english_2: document.querySelector('crowd-radio-button[name="english_2"]').checked,
      english_3: document.querySelector('crowd-radio-button[name="english_3"]').checked,
      english_4: document.querySelector('crowd-radio-button[name="english_4"]').checked,
      english_5: document.querySelector('crowd-radio-button[name="english_5"]').checked,
    };
  
    const gptFamiliarities = {
      GPT_1: document.querySelector('crowd-radio-button[name="GPT_1"]').checked,
      GPT_2: document.querySelector('crowd-radio-button[name="GPT_2"]').checked,
      GPT_3: document.querySelector('crowd-radio-button[name="GPT_3"]').checked,
      GPT_4: document.querySelector('crowd-radio-button[name="GPT_4"]').checked,
      GPT_5: document.querySelector('crowd-radio-button[name="GPT_5"]').checked,
    };

    const submitData = {
      "text input": inputValue,
      "english":englishLevels,
      "AI_familiarity":gptFamiliarities
    };
  
    onSubmit?.(submitData);
  };

  return (
    <>
        <crowd-form onSubmit={onFormSubmit}>
        <h1>
          {"Part 1: User Background"}
        </h1>
        <div>
        <h2>{"Rate your fluency with English from 1-5 with 1 being very basic and 5 native"}</h2>
          <crowd-radio-group  required>
          <crowd-radio-button name="english_1" value="1">1</crowd-radio-button>
          <crowd-radio-button name="english_2" value="2">2</crowd-radio-button>
          <crowd-radio-button name="english_3" value="3">3</crowd-radio-button>
          <crowd-radio-button name="english_4" value="4">4</crowd-radio-button>
          <crowd-radio-button name="english_5" value="5">5</crowd-radio-button>
        </crowd-radio-group>
        </div>

        <div>
          <h2>{"Rate your familiarity with/ use of AI agents like chat GPT"}</h2>
          <crowd-radio-group  required>
          <crowd-radio-button name="GPT_1" value="1">1 never </crowd-radio-button>
          <crowd-radio-button name="GPT_2" value="2">2 rarely</crowd-radio-button>
          <crowd-radio-button name="GPT_3" value="3">3 monthly</crowd-radio-button>
          <crowd-radio-button name="GPT_4" value="4">4 weekly</crowd-radio-button>
          <crowd-radio-button name="GPT_5" value="5">5 daily</crowd-radio-button>
        </crowd-radio-group>
        </div>
        <h1>
          {"Part 2: Working Task"}
        </h1>
        <h2>
          {pre_prompt}
        </h2>
        <div>
          {Array.isArray(question_text) ? question_text.map((line, index) => <p key={index}>{line}</p>) : <p>{question_text}</p>}
        </div>

        <div>
          {question_prompt}
        </div>
        <div>
            <crowd-input name={question_tag} label="Input answer here"  required></crowd-input>
        </div>
      </crowd-form>
    </>
  );
};


export default CrowdComponent;