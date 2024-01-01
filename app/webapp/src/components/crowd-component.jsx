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
    const vetting = {
      vetting_1: document.querySelector('crowd-radio-button[name="vetting_1"]').checked,
      vetting_1: document.querySelector('crowd-radio-button[name="vetting_2"]').checked,
      vetting_1: document.querySelector('crowd-radio-button[name="vetting_3"]').checked,
      vetting_1: document.querySelector('crowd-radio-button[name="vetting_4"]').checked,
      vetting_1: document.querySelector('crowd-radio-button[name="vetting_5"]').checked,
    };
  
    const init_judgement = {
      init_true: document.querySelector('crowd-radio-button[name="init_true"]').checked,
      init_mostly_true: document.querySelector('crowd-radio-button[name="init_mostly_true"]').checked,
      init_half_true: document.querySelector('crowd-radio-button[name="init_half_true"]').checked,
      init_mostly_false: document.querySelector('crowd-radio-button[name="init_mostly_false"]').checked,
      init_false: document.querySelector('crowd-radio-button[name="init_false"]').checked,
      init_pants_on_fire: document.querySelector('crowd-radio-button[name="init_pants_on_fire"]').checked,
    };

    const machine_judgement = {
      machine_true: document.querySelector('crowd-radio-button[name="machine_true"]').checked,
      machine_mostly_true: document.querySelector('crowd-radio-button[name="machine_mostly_true"]').checked,
      machine_half_true: document.querySelector('crowd-radio-button[name="machine_half_true"]').checked,
      machine_mostly_false: document.querySelector('crowd-radio-button[name="machine_mostly_false"]').checked,
      machine_false: document.querySelector('crowd-radio-button[name="machine_false"]').checked,
      machine_pants_on_fire: document.querySelector('crowd-radio-button[name="machine_pants_on_fire"]').checked,

    };
  
  
    const final_judgement = {
      final_true: document.querySelector('crowd-radio-button[name="final_true"]').checked,
      final_mostly_true: document.querySelector('crowd-radio-button[name="final_mostly_true"]').checked,
      final_half_true: document.querySelector('crowd-radio-button[name="final_half_true"]').checked,
      final_mostly_false: document.querySelector('crowd-radio-button[name="final_mostly_false"]').checked,
      final_false: document.querySelector('crowd-radio-button[name="final_false"]').checked,
      final_pants_on_fire: document.querySelector('crowd-radio-button[name="final_pants_on_fire"]').checked,

    };
  
    const submitData = {
      "vetting": vetting,
      "initial": init_judgement,
      "machine":machine_judgement,
      "final":final_judgement
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
          {"Answer the following question correctly, an incorrect answer will lead to disqualification and will mean you cannot submit the task and receive the reward"}
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
          {"Instructions"}
        </h1>
        <div>
          <p>Welcome to this fake news detection task. In this task, you are required to collaborate with a Chat GPT assistant to help you determine whether a given piece of text is fake news.</p>
          <ol>
              <li>First, read the text and make your own judgement without interacting with the chat GPT agent.</li>
              <li>Second, take the pre-prepared "Interaction text" and paste it into the chat GPT agent. Record the agent's response.</li>
              <li>With your own impression and that of the agent recorded, collaborate with chat GPT to resolve any uncertainties or clarify anything you think needs clarification.</li>
              <li>Arrive at a "final judgement" by considering your own answer, that of chat GPT, and chat GPT's reasoning.</li>
              <li>If your final answer differs from either your original answer or that of chat GPT or both, provide validation for why you changed your answer.</li>
          </ol>
          <p>You will be given a piece of text which you can copy and paste into the chat GPT agent to help you collaborate effectively.</p>
      </div>




        <h1>
          {"Step 1: Personal Judgement "}
        </h1> 

        <div>
        <h2>{"Make your own judgement as to whether the following is fake news"}</h2>
          
        <div>
          {Array.isArray(question_text) ? question_text.map((line, index) => <p key={index}>{line}</p>) : <p>{question_text}</p>}
        </div>
        <crowd-radio-group required>
            <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="init_true" value="TRUE">
                TRUE – The statement is accurate and there’s nothing significant missing.
            </crowd-radio-button>
            <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="init_mostly_true" value="MOSTLY TRUE">
                MOSTLY TRUE – The statement is accurate but needs clarification or additional information.
            </crowd-radio-button>
            <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="init_half_true" value="HALF TRUE">
                HALF TRUE – The statement is partially accurate but leaves out important details or takes things out of context.
            </crowd-radio-button>
            <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="init_mostly_false" value="MOSTLY FALSE">
                MOSTLY FALSE – The statement contains an element of truth but ignores critical facts that would give a different impression.
            </crowd-radio-button>
            <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="init_false" value="FALSE">
                FALSE – The statement is not accurate.
            </crowd-radio-button>
            <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="init_pants_on_fire" value="PANTS ON FIRE">
                PANTS ON FIRE – The statement is not accurate and makes a ridiculous claim.
            </crowd-radio-button>
        </crowd-radio-group>
        </div>

      

        <h1>
          {"Step 2: Machine Answer"}
        </h1> 

        <div>
        <h2>{"Collect Chat GPT's judgement as to whether the snippet is fake news"}</h2>


        <div style={{ 
                border: '1px solid black', 
                padding: '10px', 
                margin: '10px', 
                backgroundColor: '#f0f0f0',
                maxWidth: '800px',
                wordWrap: 'break-word'
            }}>
              <h2>Paste this directly into the Chat GPT window</h2>
              <p>You are tasked with providing logical reasoning to classify a news article's accuracy. Categories range from 'pants-on-fire' to 'true'. Your reasoning should be a comprehensive paragraph of 70-150 words.</p>
              <p>Write a step-by-step logical summary justifying the conclusion based on the statement only. Ignore irrelevant background information. Provide a thorough analysis and, in borderline cases, seek the user’s perspective for final determination. Conclude with a summary analysis before the final classification.</p>
              <h3>Categories Defined</h3>
              <ul>
                  <li><strong>TRUE:</strong> The statement is accurate and complete.</li>
                  <li><strong>MOSTLY TRUE:</strong> The statement is accurate but requires clarification or additional information.</li>
                  <li><strong>HALF TRUE:</strong> The statement is partially accurate but omits important details or context.</li>
                  <li><strong>MOSTLY FALSE:</strong> The statement contains some truth but ignores critical facts, changing the impression.</li>
                  <li><strong>FALSE:</strong> The statement is not accurate.</li>
                  <li><strong>PANTS ON FIRE:</strong> The statement is not accurate and makes a ridiculous claim.</li>
              </ul>
              <h3>Statement: </h3>
              <p>{Array.isArray(question_text) ? question_text.map((line, index) => <p key={index}>{line}</p>) : <p>{question_text}</p>}</p>
              <h3>Task Instructions</h3>
              <ol>
                  <li>Summary of Analysis: <em>[Provide logical summary here]</em></li>
                  <li>Conclusion: <em>[pants-on-fire, false, mostly false, half-true, mostly-true, true]</em></li>
                  <li>Questions for Further Clarification: <em>[List questions here if applicable]</em></li>
              </ol>
          </div>
            
          

          <crowd-radio-group required>
              <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="machine_true" value="TRUE">
                  TRUE – The statement is accurate and there’s nothing significant missing.
              </crowd-radio-button>
              <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="machine_mostly_true" value="MOSTLY TRUE">
                  MOSTLY TRUE – The statement is accurate but needs clarification or additional information.
              </crowd-radio-button>
              <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="machine_half_true" value="HALF TRUE">
                  HALF TRUE – The statement is partially accurate but leaves out important details or takes things out of context.
              </crowd-radio-button>
              <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="machine_mostly_false" value="MOSTLY FALSE">
                  MOSTLY FALSE – The statement contains an element of truth but ignores critical facts that would give a different impression.
              </crowd-radio-button>
              <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="machine_false" value="FALSE">
                  FALSE – The statement is not accurate.
              </crowd-radio-button>
              <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="machine_pants_on_fire" value="PANTS ON FIRE">
                  PANTS ON FIRE – The statement is not accurate and makes a ridiculous claim.
              </crowd-radio-button>
          </crowd-radio-group>
        </div>

        <h1>
          {"Step 3: Final Answer"}
        </h1> 

        <div>
        <h2>{"Based on your initial judegement and that of chat GPT, produce your final answer"}</h2>

        <crowd-radio-group required>
          <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="final_true" value="TRUE">
              TRUE – The statement is accurate and there’s nothing significant missing.
          </crowd-radio-button>
          <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="final_mostly_true" value="MOSTLY TRUE">
              MOSTLY TRUE – The statement is accurate but needs clarification or additional information.
          </crowd-radio-button>
          <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="final_half_true" value="HALF TRUE">
              HALF TRUE – The statement is partially accurate but leaves out important details or takes things out of context.
          </crowd-radio-button>
          <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="final_mostly_false" value="MOSTLY FALSE">
              MOSTLY FALSE – The statement contains an element of truth but ignores critical facts that would give a different impression.
          </crowd-radio-button>
          <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="final_false" value="FALSE">
              FALSE – The statement is not accurate.
          </crowd-radio-button>
          <crowd-radio-button style={{ display: 'block', marginBottom: '10px' }} name="final_pants_on_fire" value="PANTS ON FIRE">
              PANTS ON FIRE – The statement is not accurate and makes a ridiculous claim.
          </crowd-radio-button>
      </crowd-radio-group>
        <h2>{"If your final answer differs from either GPT or your initial answer, please tell us why you made your choice"}</h2>
        <crowd-input name="validation" label="validation" required></crowd-input>

        </div>

        </crowd-form>

      </>
  );
};


export default CrowdComponent;