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
          {"Instructions"}
        </h1>
        <div style={{ fontSize: '20px', fontWeight: 'bold'  }}>
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
          
        <div style={{ 
                border: '1px solid black', 
                padding: '10px', 
                margin: '10px', 
                backgroundColor: '#f0f0f0',
                maxWidth: '800px',
                wordWrap: 'break-word'
            }}>


              
              {Array.isArray(question_text) ? question_text.map((line, index) => <p key={index}>{line}</p>) : <p>{question_text}</p>}
          </div>


          <div>
            {Array.isArray(question_text) ? 
                question_text.map((line, index) => (
                    <div key={index}>
                        <p>{line}</p>
                        <crowd-radio-group required>
                            <crowd-radio-button name={`no_emotion_${index}`} value="no_emotion">No Emotion</crowd-radio-button>
                            <crowd-radio-button name={`anger_${index}`} value="anger">Anger</crowd-radio-button>
                            <crowd-radio-button name={`disgust_${index}`} value="disgust">Disgust</crowd-radio-button>
                            <crowd-radio-button name={`fear_${index}`} value="fear">Fear</crowd-radio-button>
                            <crowd-radio-button name={`happiness_${index}`} value="happiness">Happiness</crowd-radio-button>
                            <crowd-radio-button name={`sadness_${index}`} value="sadness">Sadness</crowd-radio-button>
                            <crowd-radio-button name={`surprise_${index}`} value="surprise">Surprise</crowd-radio-button>
                        </crowd-radio-group>
                    </div>
                ))
                : 
                <p>{question_text}</p>
            }
</div>
        <crowd-radio-group  required>
          <crowd-radio-button name="Mostly_True" value="Mostly_True">Msostly True </crowd-radio-button>
          <crowd-radio-button name="Mostly_False" value="Mostly_False">Mostly False</crowd-radio-button>
          <crowd-radio-button name="Mixed_True_and_False" value="Mixed_True_and_False">Mixed True and False</crowd-radio-button>
          <crowd-radio-button name="No_Factual" value="No_Factual">No Factual Information</crowd-radio-button>
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
              <p>You are tasked with providing logical reasoning to classify a news article's accuracy. Categories range from 'mostly false' to 'mostly true'. Your reasoning should be a comprehensive paragraph of 70-150 words.</p>
              <p>Write a step-by-step logical summary justifying the conclusion based on the statement only. Provide a thorough analysis and, in borderline cases, seek the user’s perspective for final determination. Conclude with a summary analysis before the final classification.</p>
              <p>Be sure to collaborate with your partner, and if you need something looked up or clarified, ask for assistance </p>
              <h3>Categories Defined</h3>
              <ul>
                  <li><strong>MOSTLY TRUE:</strong></li>
                  <li><strong>MOSTLY FALSE:</strong></li>
                  <li><strong>MIXED:</strong></li>
                  <li><strong>NO FACTUAL STATEMENT</strong></li>

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
            
          
          <crowd-radio-group  required>
          <crowd-radio-button name="Mostly_True" value="Mostly_True">Mostly True </crowd-radio-button>
          <crowd-radio-button name="Mostly_False" value="Mostly_False">Mostly False</crowd-radio-button>
          <crowd-radio-button name="Mixed_True_and_False" value="Mixed_True_and_False">Mixed True and False</crowd-radio-button>
          <crowd-radio-button name="No_Factual" value="No_Factual">No Factual Information</crowd-radio-button>
        </crowd-radio-group>
        </div>

        <h1>
          {"Step 3: Final Answer"}
        </h1> 

        <div>
        <h2>{"Based on your own judgement and anything you may have learned from the LLM agent produce your final answer"}</h2>

        <crowd-radio-group  required>
          <crowd-radio-button name="Mostly_True" value="Mostly_True">Mostly True </crowd-radio-button>
          <crowd-radio-button name="Mostly_False" value="Mostly_False">Mostly False</crowd-radio-button>
          <crowd-radio-button name="Mixed_True_and_False" value="Mixed_True_and_False">Mixed True and False</crowd-radio-button>
          <crowd-radio-button name="No_Factual" value="No_Factual">No Factual Information</crowd-radio-button>
          <crowd-radio-button name="Uncertain" value="5">Uncertain</crowd-radio-button>
        </crowd-radio-group>
        <h2>{"If your final answer differs from either GPT or your initial answer, please tell us why you made your choice"}</h2>
        <crowd-input name="validation" label="validation" required></crowd-input>
        </div>
        </crowd-form>

      </>
  );
};


export default CrowdComponent;