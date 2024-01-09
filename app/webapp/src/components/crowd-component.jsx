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
  
  
  

    const final_judgement_0 = {
      final_no_emotion_0: document.querySelector('crowd-radio-button[name="final_no_emotion_0"]').checked,
      final_anger_0: document.querySelector('crowd-radio-button[name="final_anger_0"]').checked,
      final_disgust_0: document.querySelector('crowd-radio-button[name="final_disgust_0"]').checked,
      final_fear_0: document.querySelector('crowd-radio-button[name="final_fear_0"]').checked,
      final_happiness_0: document.querySelector('crowd-radio-button[name="final_happiness_0"]').checked,
      final_sadness_0: document.querySelector('crowd-radio-button[name="final_sadness_0"]').checked,
      final_surprise_0: document.querySelector('crowd-radio-button[name="final_surprise_0"]').checked,
    };
    
    const final_judgement_1 = {
      final_no_emotion_1: document.querySelector('crowd-radio-button[name="final_no_emotion_1"]').checked,
      final_anger_1: document.querySelector('crowd-radio-button[name="final_anger_1"]').checked,
      final_disgust_1: document.querySelector('crowd-radio-button[name="final_disgust_1"]').checked,
      final_fear_1: document.querySelector('crowd-radio-button[name="final_fear_1"]').checked,
      final_happiness_1: document.querySelector('crowd-radio-button[name="final_happiness_1"]').checked,
      final_sadness_1: document.querySelector('crowd-radio-button[name="final_sadness_1"]').checked,
      final_surprise_1: document.querySelector('crowd-radio-button[name="final_surprise_1"]').checked,
    };
    
    const final_judgement_2 = {
      final_no_emotion_2: document.querySelector('crowd-radio-button[name="final_no_emotion_2"]').checked,
      final_anger_2: document.querySelector('crowd-radio-button[name="final_anger_2"]').checked,
      final_disgust_2: document.querySelector('crowd-radio-button[name="final_disgust_2"]').checked,
      final_fear_2: document.querySelector('crowd-radio-button[name="final_fear_2"]').checked,
      final_happiness_2: document.querySelector('crowd-radio-button[name="final_happiness_2"]').checked,
      final_sadness_2: document.querySelector('crowd-radio-button[name="final_sadness_2"]').checked,
      final_surprise_2: document.querySelector('crowd-radio-button[name="final_surprise_2"]').checked,
    };
    
    const final_judgement_3 = {
      final_no_emotion_3: document.querySelector('crowd-radio-button[name="final_no_emotion_3"]').checked,
      final_anger_3: document.querySelector('crowd-radio-button[name="final_anger_3"]').checked,
      final_disgust_3: document.querySelector('crowd-radio-button[name="final_disgust_3"]').checked,
      final_fear_3: document.querySelector('crowd-radio-button[name="final_fear_3"]').checked,
      final_happiness_3: document.querySelector('crowd-radio-button[name="final_happiness_3"]').checked,
      final_sadness_3: document.querySelector('crowd-radio-button[name="final_sadness_3"]').checked,
      final_surprise_3: document.querySelector('crowd-radio-button[name="final_surprise_3"]').checked,
    };
    
    const machine_judgement_0 = {
      machine_no_emotion_0: document.querySelector('crowd-radio-button[name="machine_no_emotion_0"]').checked,
      machine_anger_0: document.querySelector('crowd-radio-button[name="machine_anger_0"]').checked,
      machine_disgust_0: document.querySelector('crowd-radio-button[name="machine_disgust_0"]').checked,
      machine_fear_0: document.querySelector('crowd-radio-button[name="machine_fear_0"]').checked,
      machine_happiness_0: document.querySelector('crowd-radio-button[name="machine_happiness_0"]').checked,
      machine_sadness_0: document.querySelector('crowd-radio-button[name="machine_sadness_0"]').checked,
      machine_surprise_0: document.querySelector('crowd-radio-button[name="machine_surprise_0"]').checked,
    };
    
    const machine_judgement_1 = {
      machine_no_emotion_1: document.querySelector('crowd-radio-button[name="machine_no_emotion_1"]').checked,
      machine_anger_1: document.querySelector('crowd-radio-button[name="machine_anger_1"]').checked,
      machine_disgust_1: document.querySelector('crowd-radio-button[name="machine_disgust_1"]').checked,
      machine_fear_1: document.querySelector('crowd-radio-button[name="machine_fear_1"]').checked,
      machine_happiness_1: document.querySelector('crowd-radio-button[name="machine_happiness_1"]').checked,
      machine_sadness_1: document.querySelector('crowd-radio-button[name="machine_sadness_1"]').checked,
      machine_surprise_1: document.querySelector('crowd-radio-button[name="machine_surprise_1"]').checked,
    };
    
    const machine_judgement_2 = {
      machine_no_emotion_2: document.querySelector('crowd-radio-button[name="machine_no_emotion_2"]').checked,
      machine_anger_2: document.querySelector('crowd-radio-button[name="machine_anger_2"]').checked,
      machine_disgust_2: document.querySelector('crowd-radio-button[name="machine_disgust_2"]').checked,
      machine_fear_2: document.querySelector('crowd-radio-button[name="machine_fear_2"]').checked,
      machine_happiness_2: document.querySelector('crowd-radio-button[name="machine_happiness_2"]').checked,
      machine_sadness_2: document.querySelector('crowd-radio-button[name="machine_sadness_2"]').checked,
      machine_surprise_2: document.querySelector('crowd-radio-button[name="machine_surprise_2"]').checked,
    };
    
    const machine_judgement_3 = {
      machine_no_emotion_3: document.querySelector('crowd-radio-button[name="machine_no_emotion_3"]').checked,
      machine_anger_3: document.querySelector('crowd-radio-button[name="machine_anger_3"]').checked,
      machine_disgust_3: document.querySelector('crowd-radio-button[name="machine_disgust_3"]').checked,
      machine_fear_3: document.querySelector('crowd-radio-button[name="machine_fear_3"]').checked,
      machine_happiness_3: document.querySelector('crowd-radio-button[name="machine_happiness_3"]').checked,
      machine_sadness_3: document.querySelector('crowd-radio-button[name="machine_sadness_3"]').checked,
      machine_surprise_3: document.querySelector('crowd-radio-button[name="machine_surprise_3"]').checked,
    };

    const init_judgement_0 = {
      init_no_emotion_0: document.querySelector('crowd-radio-button[name="init_no_emotion_0"]').checked,
      init_anger_0: document.querySelector('crowd-radio-button[name="init_anger_0"]').checked,
      init_disgust_0: document.querySelector('crowd-radio-button[name="init_disgust_0"]').checked,
      init_fear_0: document.querySelector('crowd-radio-button[name="init_fear_0"]').checked,
      init_happiness_0: document.querySelector('crowd-radio-button[name="init_happiness_0"]').checked,
      init_sadness_0: document.querySelector('crowd-radio-button[name="init_sadness_0"]').checked,
      init_surprise_0: document.querySelector('crowd-radio-button[name="init_surprise_0"]').checked,
    };
    
    const init_judgement_1 = {
      init_no_emotion_1: document.querySelector('crowd-radio-button[name="init_no_emotion_1"]').checked,
      init_anger_1: document.querySelector('crowd-radio-button[name="init_anger_1"]').checked,
      init_disgust_1: document.querySelector('crowd-radio-button[name="init_disgust_1"]').checked,
      init_fear_1: document.querySelector('crowd-radio-button[name="init_fear_1"]').checked,
      init_happiness_1: document.querySelector('crowd-radio-button[name="init_happiness_1"]').checked,
      init_sadness_1: document.querySelector('crowd-radio-button[name="init_sadness_1"]').checked,
      init_surprise_1: document.querySelector('crowd-radio-button[name="init_surprise_1"]').checked,
    };
    
    const init_judgement_2 = {
      init_no_emotion_2: document.querySelector('crowd-radio-button[name="init_no_emotion_2"]').checked,
      init_anger_2: document.querySelector('crowd-radio-button[name="init_anger_2"]').checked,
      init_disgust_2: document.querySelector('crowd-radio-button[name="init_disgust_2"]').checked,
      init_fear_2: document.querySelector('crowd-radio-button[name="init_fear_2"]').checked,
      init_happiness_2: document.querySelector('crowd-radio-button[name="init_happiness_2"]').checked,
      init_sadness_2: document.querySelector('crowd-radio-button[name="init_sadness_2"]').checked,
      init_surprise_2: document.querySelector('crowd-radio-button[name="init_surprise_2"]').checked,
    };
    
    const init_judgement_3 = {
      init_no_emotion_3: document.querySelector('crowd-radio-button[name="init_no_emotion_3"]').checked,
      init_anger_3: document.querySelector('crowd-radio-button[name="init_anger_3"]').checked,
      init_disgust_3: document.querySelector('crowd-radio-button[name="init_disgust_3"]').checked,
      init_fear_3: document.querySelector('crowd-radio-button[name="init_fear_3"]').checked,
      init_happiness_3: document.querySelector('crowd-radio-button[name="init_happiness_3"]').checked,
      init_sadness_3: document.querySelector('crowd-radio-button[name="init_sadness_3"]').checked,
      init_surprise_3: document.querySelector('crowd-radio-button[name="init_surprise_3"]').checked,
    };

    const validation =  document.querySelector(`crowd-input[name="validation"]`).value;


    const submitData = {
      "vetting": vetting,
      "final_0": final_judgement_0,
      "final_1": final_judgement_1,
      "final_2": final_judgement_2,
      "final_3": final_judgement_3,
      "machine_0": machine_judgement_0,
      "machine_1": machine_judgement_1,
      "machine_2": machine_judgement_2,
      "machine_3": machine_judgement_3,
      "init_0": init_judgement_0,
      "init_1": init_judgement_1,
      "init_2": init_judgement_2,
      "init_3": init_judgement_3,
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
          {"Instructions"}
        </h1>
        <div style={{ fontSize: '20px', fontWeight: 'bold'  }}>
          <p>Welcome to this emotion detection task. In this task, you are required to collaborate with a Chat GPT assistant to help you determine the emotion in each line of a conversation.</p>
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
        <h2>{"Make your own judgements regarding the emotions in this dialogue"}</h2>
          
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
                        <crowd-radio-button name={`init_no_emotion_${index}`} value="no_emotion">No Emotion</crowd-radio-button>
                        <crowd-radio-button name={`init_anger_${index}`} value="anger">Anger</crowd-radio-button>
                        <crowd-radio-button name={`init_disgust_${index}`} value="disgust">Disgust</crowd-radio-button>
                        <crowd-radio-button name={`init_fear_${index}`} value="fear">Fear</crowd-radio-button>
                        <crowd-radio-button name={`init_happiness_${index}`} value="happiness">Happiness</crowd-radio-button>
                        <crowd-radio-button name={`init_sadness_${index}`} value="sadness">Sadness</crowd-radio-button>
                        <crowd-radio-button name={`init_surprise_${index}`} value="surprise">Surprise</crowd-radio-button>
                    </crowd-radio-group>
                    </div>
                ))
                : 
                <p>{question_text}</p>
            }
          </div>

        </div>

      

        <h1>
          {"Step 2: Machine Answer"}
        </h1> 

        <div>
        <h2>{"Collect Chat GPT's judgements regarding the emotions in the dialogue"}</h2>


        <div style={{ 
                border: '1px solid black', 
                padding: '10px', 
                margin: '10px', 
                backgroundColor: '#f0f0f0',
                maxWidth: '800px',
                wordWrap: 'break-word'
            }}>
              <h2>Paste this directly into the Chat GPT window</h2>
              <p>You are tasked with analysing the emotions experessed in each line of a dialogue.</p>
              <p>For each line in this dialogue, provide an emotion judgement, and a brief explaination.</p>
              <p>If there are any rows you are uncertain of, or you need any assistance ask questions </p>
              <h3>Categories Defined</h3>
              <h3>Emotion Categories Defined</h3>
              <ul>
                  <li><strong>NO EMOTION</strong></li>
                  <li><strong>ANGER</strong></li>
                  <li><strong>DISGUST</strong></li>
                  <li><strong>FEAR</strong></li>
                  <li><strong>HAPPINESS</strong></li>
                  <li><strong>SADNESS</strong></li>
                  <li><strong>SURPRISE</strong></li>
              </ul>
              <h3>Dialogue: </h3>
              <p>{Array.isArray(question_text) ? question_text.map((line, index) => <p key={index}>{line}</p>) : <p>{question_text}</p>}</p>
              <h3>Task Instructions</h3>
              <ol>
                  <li>Emotion Judgements for each line: <em>[Provide judgements here]</em></li>
                  <li>Validation for each judgement: <em>[Provide validation here]</em></li>
                  <li>Questions for Further Clarification: <em>[List questions here if applicable]</em></li>
              </ol>
          </div>
            
        </div>
        <div>
            {Array.isArray(question_text) ? 
                question_text.map((line, index) => (
                    <div key={index}>
                        <p>{line}</p>
                        <crowd-radio-group required>
                          <crowd-radio-button name={`machine_no_emotion_${index}`} value="no_emotion">No Emotion</crowd-radio-button>
                          <crowd-radio-button name={`machine_anger_${index}`} value="anger">Anger</crowd-radio-button>
                          <crowd-radio-button name={`machine_disgust_${index}`} value="disgust">Disgust</crowd-radio-button>
                          <crowd-radio-button name={`machine_fear_${index}`} value="fear">Fear</crowd-radio-button>
                          <crowd-radio-button name={`machine_happiness_${index}`} value="happiness">Happiness</crowd-radio-button>
                          <crowd-radio-button name={`machine_sadness_${index}`} value="sadness">Sadness</crowd-radio-button>
                          <crowd-radio-button name={`machine_surprise_${index}`} value="surprise">Surprise</crowd-radio-button>
                      </crowd-radio-group>
                    </div>
                ))
                : 
                <p>{question_text}</p>
            }
          </div>
        <h1>
          {"Step 3: Final Answer"}
        </h1> 

        <div>
            {Array.isArray(question_text) ? 
                question_text.map((line, index) => (
                    <div key={index}>
                        <p>{line}</p>
                        <crowd-radio-group required>
                          <crowd-radio-button name={`final_no_emotion_${index}`} value="no_emotion">No Emotion</crowd-radio-button>
                          <crowd-radio-button name={`final_anger_${index}`} value="anger">Anger</crowd-radio-button>
                          <crowd-radio-button name={`final_disgust_${index}`} value="disgust">Disgust</crowd-radio-button>
                          <crowd-radio-button name={`final_fear_${index}`} value="fear">Fear</crowd-radio-button>
                          <crowd-radio-button name={`final_happiness_${index}`} value="happiness">Happiness</crowd-radio-button>
                          <crowd-radio-button name={`final_sadness_${index}`} value="sadness">Sadness</crowd-radio-button>
                          <crowd-radio-button name={`final_surprise_${index}`} value="surprise">Surprise</crowd-radio-button>
                      </crowd-radio-group>
                    </div>
                ))
                : 
                <p>{question_text}</p>
            }
          <h2>{"If your final answer differs from either GPT or your initial answer, please tell us why you made your choice"}</h2>
        <crowd-input name="validation" label="validation" required></crowd-input>
        </div>
        </crowd-form>

      </>
  );
};


export default CrowdComponent;