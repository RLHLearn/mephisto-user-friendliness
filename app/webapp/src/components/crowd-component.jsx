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
  const subjects = taskData.subjects;
  const speaker = taskData.speaker;
  const context = taskData.context;



  const onFormSubmit = (e) => {
    e.preventDefault();
    const vetting = {
      vetting_1: document.querySelector('crowd-radio-button[name="vetting_1"]').checked,
      vetting_2: document.querySelector('crowd-radio-button[name="vetting_2"]').checked,
      vetting_3: document.querySelector('crowd-radio-button[name="vetting_3"]').checked,
      vetting_4: document.querySelector('crowd-radio-button[name="vetting_4"]').checked,
      vetting_5: document.querySelector('crowd-radio-button[name="vetting_5"]').checked,
    };
  
    const init_judgement = {
      init_toxic: document.querySelector('crowd-radio-button[name="init_toxic"]').checked,
      init_severe_toxic: document.querySelector('crowd-radio-button[name="init_severe_toxic"]').checked,
      init_obscene: document.querySelector('crowd-radio-button[name="init_obscene"]').checked,
      init_threat: document.querySelector('crowd-radio-button[name="init_threat"]').checked,
      init_insult: document.querySelector('crowd-radio-button[name="init_insult"]').checked,
      init_identity_hate: document.querySelector('crowd-radio-button[name="init_identity_hate"]').checked,
    };
    
    const machine_judgement = {
      machine_toxic: document.querySelector('crowd-radio-button[name="machine_toxic"]').checked,
      machine_severe_toxic: document.querySelector('crowd-radio-button[name="machine_severe_toxic"]').checked,
      machine_obscene: document.querySelector('crowd-radio-button[name="machine_obscene"]').checked,
      machine_threat: document.querySelector('crowd-radio-button[name="machine_threat"]').checked,
      machine_insult: document.querySelector('crowd-radio-button[name="machine_insult"]').checked,
      machine_identity_hate: document.querySelector('crowd-radio-button[name="machine_identity_hate"]').checked,
    };
    
    const final_judgement = {
      final_toxic: document.querySelector('crowd-radio-button[name="final_toxic"]').checked,
      final_severe_toxic: document.querySelector('crowd-radio-button[name="final_severe_toxic"]').checked,
      final_obscene: document.querySelector('crowd-radio-button[name="final_obscene"]').checked,
      final_threat: document.querySelector('crowd-radio-button[name="final_threat"]').checked,
      final_insult: document.querySelector('crowd-radio-button[name="final_insult"]').checked,
      final_identity_hate: document.querySelector('crowd-radio-button[name="final_identity_hate"]').checked,
    };
  
    const validation =  document.querySelector(`crowd-input[name="validation"]`).value;

    const submitData = {
      "vetting": vetting,
      "initial": init_judgement,
      "machine":machine_judgement,
      "final":final_judgement,
      "validation":validation
    };
  
    onSubmit?.(submitData);
  };
  return (
    <>
        <crowd-form onSubmit={onFormSubmit}>
        <h1>
          {"User Vetting"}
        </h1>
        <h2>
          {"Answer the following question correctly, an incorrect answer will lead to disqualification"}
        </h2>
        <div>
        <h2>{"What is the moon made of?"}</h2>
          <crowd-radio-group required>
          <crowd-radio-button name="vetting_1" value="Cheese">Cheese</crowd-radio-button>
          <crowd-radio-button name="vetting_2" value="Gas">Gas</crowd-radio-button>
          <crowd-radio-button name="vetting_3" value="Plasma">Plasma</crowd-radio-button>
          <crowd-radio-button name="vetting_4" value="Rock">Rock</crowd-radio-button>
          <crowd-radio-button name="vetting_5" value="Marshmallow">Marshmallow</crowd-radio-button>
        </crowd-radio-group>
        </div>


        <h1>
          {"Wikipedia Moderator Forum Language Task: Instructions"}
        </h1>
        <div style={{ fontSize: '20px', fontWeight: 'bold'  }}>
          <p>Welcome to this text classification task. In this task, you are required to collaborate with a Chat GPT assistant to help you determine the characteristics of a given piece of text.</p>
          <p>Note: The text in this task is taken from Wikipedia moderator forum interractions</p>
          <ol>
              <li>First, read the text and make your own judgement without interacting with the chat GPT agent.</li>
              <li>Second, take the pre-prepared "Interaction text" and paste it into the chat GPT window. Record chat GPT's response.</li>
              <li>With your own impression and that of Chat GPT recorded, collaborate with Chat GPT to resolve any uncertainties or clarify anything you think needs clarification.</li>
              <li>Arrive at a "final judgement" by considering your own answer, that of chat GPT, and Chat GPT's reasoning.</li>
              <li>If your final answer differs from either your original answer or that of Chat GPT or both, provide validation for why you changed your answer.</li>
          </ol>
          <p>You will be given a piece of text which you can copy and paste into the chat GPT agent to help you collaborate effectively.</p>
      </div>

        <h1>
          {"Step 1: Personal Judgement (select all that apply)"}
        </h1> 

        <div>
        <h2>{"Make your own judgement as regarding the characteristics of the following text (Select all that apply)"}</h2>
          
        <div style={{ 
                border: '1px solid black', 
                padding: '10px', 
                margin: '10px', 
                backgroundColor: '#f0f0f0',
                maxWidth: '800px',
                wordWrap: 'break-word'
            }}>
              <p>{question_text}</p>
          </div>
          <div><crowd-radio-button name="init_toxic" value="toxic">Toxic</crowd-radio-button></div>
          <div><crowd-radio-button name="init_severe_toxic" value="severe_toxic">Severe Toxic</crowd-radio-button></div>
          <div><crowd-radio-button name="init_obscene" value="obscene">Obscene</crowd-radio-button></div>
          <div><crowd-radio-button name="init_threat" value="threat">Threat</crowd-radio-button></div>
          <div><crowd-radio-button name="init_insult" value="insult">Insult</crowd-radio-button></div>
          <div><crowd-radio-button name="init_identity_hate" value="identity_hate">Identity Hate</crowd-radio-button></div>


          </div>

      

        <h1>
          {"Step 2: Machine Answer (select all that apply)"}
        </h1> 

        <div>
        <h2>{"Collect Chat GPT's judgement regarding the characteristics of this text (select all that apply)"}</h2>


        <div style={{ 
                border: '1px solid black', 
                padding: '10px', 
                margin: '10px', 
                backgroundColor: '#f0f0f0',
                maxWidth: '800px',
                wordWrap: 'break-word'
            }}>
              <h2>Paste this directly into the Chat GPT window</h2>
              <p>You are tasked with providing logical reasoning to determine the various toxicity, offensiveness and obscene characteristics of a piece of text.</p>
              <p>The text samples are taken from the Wikipedia moderator forums</p>
              <p>For each attribute provide a step by step analysis to determine if it applies to the text.</p>
              <p>In borderline cases, seek the user’s perspective for final determination. Conclude with a summary analysis and final labels.</p>
              <p>Be sure to collaborate with the user, and if you need something looked up or clarified, ask for assistance </p>
              <h3>Attributes: provide yes/no for each</h3>
              <ul>
                  <li><strong>Toxic</strong></li>
                  <li><strong>Severly Toxic</strong></li>
                  <li><strong>Obscene</strong></li>
                  <li><strong>Threat</strong></li>
                  <li><strong>Insult</strong></li>
                  <li><strong>Identity Hate</strong></li>

              </ul>
              <h3>Statement: </h3>
              <p>{question_text}</p>
              <h3>Task Instructions</h3>
              <ol>
                  <li>Summary of Analysis: <em>[Provide logical analysis for each attribute here]</em></li>
                  <li>Conclusion: <em>[provide yes/no for each attribute: Toxic, Severly Toxic, Obscene, Threat, Insult, Identity Hate]</em></li>
                  <li>Questions for Further Clarification: <em>[List questions here if applicable]</em></li>
              </ol>
          </div>
            
          
          <div><crowd-radio-button name="machine_toxic" value="toxic">Toxic</crowd-radio-button></div>
          <div><crowd-radio-button name="machine_severe_toxic" value="severe_toxic">Severe Toxic</crowd-radio-button></div>
          <div><crowd-radio-button name="machine_obscene" value="obscene">Obscene</crowd-radio-button></div>
          <div><crowd-radio-button name="machine_threat" value="threat">Threat</crowd-radio-button></div>
          <div><crowd-radio-button name="machine_insult" value="insult">Insult</crowd-radio-button></div>
          <div><crowd-radio-button name="machine_identity_hate" value="identity_hate">Identity Hate</crowd-radio-button></div>

        </div>

        <h1>
          {"Step 3: Final Answer (select all that apply)"}
        </h1> 

        <div>
        <h2>{"Based on your own judgement and anything you may have learned from the LLM agent produce your final answer (select all that apply)"}</h2>

        <div><crowd-radio-button name="final_toxic" value="toxic">Toxic</crowd-radio-button></div>
        <div><crowd-radio-button name="final_severe_toxic" value="severe_toxic">Severe Toxic</crowd-radio-button></div>
        <div><crowd-radio-button name="final_obscene" value="obscene">Obscene</crowd-radio-button></div>
        <div><crowd-radio-button name="final_threat" value="threat">Threat</crowd-radio-button></div>
        <div><crowd-radio-button name="final_insult" value="insult">Insult</crowd-radio-button></div>
        <div><crowd-radio-button name="final_identity_hate" value="identity_hate">Identity Hate</crowd-radio-button></div>


        <h2>{"If your final answer differs from either GPT or your initial answer, please tell us why you made your choice"}</h2>
        <crowd-input name="validation" label="validation" required></crowd-input>
        </div>
        </crowd-form>

      </>
  );
};


export default CrowdComponent;