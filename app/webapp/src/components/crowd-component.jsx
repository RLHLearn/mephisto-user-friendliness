const ShortInstructions = () => (
  <short-instructions>
    <div>
    <p>
      Welcome to this crowdsourcing project, where your help is needed
      to answer a range of different kinds of questions.
    </p>
    <p>
      Answer each question as best you can. There are multiple choice questions, summarization and plain answer text quetsions
    </p>
    <p>You need answer a set of ~40 questions.</p>
    <p>
      If you don't know an answer, please do not use external Chat GPT-like solutions.
      Copying and pasting large amounts of text will invalidate your response.
    </p>
    </div>
  </short-instructions>
);

const FullInstructions = () => (
  <full-instructions header="Instructions">
    <div>
    <p>
      {" "}
      Welcome to this crowdsourcing project, where your help is needed
      to answer a range of different kinds of questions.
    </p>

    <p>
      Guidelines: Please take your time to carefully answer each question correctly.
      If you don't know a given answer you are welcome to use search engines, but do not use online generative AI solutions such as chat GPT.
      The use of thsese solutions will void your attempt and make you ineligible for the task.
    </p>

    <p>Instructions:</p>

    <p>Read and answer each question</p>
    <ol>
      <li>
        If you don't know a given answer you may use search engines to help you find the answer. Do not use AI assistants like chat GPT.
      </li>
      <li>
        There are multiple styles of questions, all of which come with additional questions about your experience answering.
        Please answer both the question and provide any other information requested.
      </li>
      <li>Repeat the process for each question.</li>

      <li>Submit your results for review.</li>
    </ol>
    </div>
  </full-instructions>
);




const CrowdComponent = ({ onSubmit, taskData }) => {
  const imageUrl = taskData.imageUrl;
  const question_text = taskData.question_text;
  const question_prompt = taskData.question_prompt;
  const question_tag = taskData.question_tag;
  const answer_format = taskData.answer_format;
  const answer = taskData.answer;
  const pre_prompt = taskData.pre_prompt;

  console.log(imageUrl);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const radio_true = document.querySelector(`crowd-radio-button[name="binary_1"]`).checked;
    const radio_false = document.querySelector(`crowd-radio-button[name="binary_2"]`).checked;
  
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
      "true": radio_true,
      "false": radio_false,
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
          <crowd-radio-group required>
          <crowd-radio-button name="english_1" value="1">1</crowd-radio-button>
          <crowd-radio-button name="english_2" value="2">2</crowd-radio-button>
          <crowd-radio-button name="english_3" value="3">3</crowd-radio-button>
          <crowd-radio-button name="english_4" value="4">4</crowd-radio-button>
          <crowd-radio-button name="english_5" value="5">5</crowd-radio-button>
        </crowd-radio-group>
        </div>

        <div>
          <h2>{"Rate your familiarity with/ use of AI agents like chat GPT"}</h2>
          <crowd-radio-group required>
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
 
        <crowd-radio-group required>
          <crowd-radio-button name="binary_1" value="1">1</crowd-radio-button>
          <crowd-radio-button name="binary_2" value="2">2</crowd-radio-button>
        </crowd-radio-group>
        </crowd-form>
    </>
  );
};


export default CrowdComponent;