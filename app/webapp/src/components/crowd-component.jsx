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
    const keypoints =
      document.querySelector("crowd-keypoint").value.keypoints ||
      document.querySelector("crowd-keypoint")._submittableValue.keypoints;
    const submitData = Object.fromEntries(keypoints.map((item, index) => [`item${index + 1}`, item]));
    onSubmit?.(submitData);
  };

  let renderedContent;

  if (answer_format === "plain_text") {
    renderedContent = (
      <>
        <h3>
        <h1>{pre_prompt}{question_prompt}</h1>
        </h3>
        <crowd-form onSubmit>
          <div className="indent-form">
            <div>
            <div>
            {Array.isArray(question_text) ? question_text.map((line, index) => <p key={index}>{line}</p>) : <p>{question_text}</p>}
            </div>
              <crowd-input name={question_tag} label="Input answer here" type="text"></crowd-input>
              </div>
          </div>
        </crowd-form>
      </>
    );
  } else if (answer_format === "multiple_choice") {
    renderedContent = (
      <>
        <h3>
          {question_tag}
        </h3>
        <crowd-form>
          <div>
            <h1>{pre_prompt}{question_prompt}</h1>
          </div>
          <div>
            {Array.isArray(question_text) ? question_text.map((line, index) => <p key={index}>{line}</p>) : <p>{question_text}</p>}
          </div>
          <div>
            <crowd-radio-group>
              <crowd-radio-button name="A" value="A">A</crowd-radio-button>
              <crowd-radio-button name="B" value="B">B</crowd-radio-button>
              <crowd-radio-button name="C" value="C">C</crowd-radio-button>
              <crowd-radio-button name="D" value="D">D</crowd-radio-button>
            </crowd-radio-group>
          </div>
        </crowd-form>
      </>
    );
  } else if (answer_format === "binary") {
    renderedContent = (
      <>
        <h3>
          {question_tag}
        </h3>
        <crowd-form>
        <div>
        <h1>{pre_prompt}{question_prompt}</h1>
        </div>
        <div>
          {Array.isArray(question_text) ? question_text.map((line, index) => <p key={index}>{line}</p>) : <p>{question_text}</p>}
        </div>
        <div>
        <crowd-radio-group>
        <crowd-radio-button name="1" value="1">1</crowd-radio-button>
        <crowd-radio-button name="2" value="2">2</crowd-radio-button>
        </crowd-radio-group>
        </div>
        </crowd-form>
      </>
    );
    };
  return (
    <>
      <div className="wrapper">
        <div className="left-spacer"></div>
        <div className="top-spacer"></div>
        <div className="main-content">
          {renderedContent}
        </div>

      </div>

    </>
  );
};


export default CrowdComponent;