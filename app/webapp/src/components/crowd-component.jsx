import React, { useState } from 'react';



const ExamplePrompts = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <ol>
        <li>
          <strong>MINIMUM STANDARD:</strong>
          <p>"Categorize this line of dialogue with one of the following emotions: no emotion, anger, disgust, fear, happiness, sadness, or surprise."</p>
        </li>
        <li>
          <strong>Structured Response:</strong>
          <p>"As you analyze this line of dialogue, summarize the context, list key phrases that indicate the presence of one of these emotions: no emotion, anger, disgust, fear, happiness, sadness, or surprise, and conclude with your final assessment of the emotion present."</p>
        </li>
        <li>
          <strong>Chain of Thought:</strong>
          <p>"Let's approach this step-by-step. Examine the line of dialogue and discuss your reasoning for identifying the emotion from the following options: no emotion, anger, disgust, fear, happiness, sadness, or surprise, considering elements like word choice and context."</p>
        </li>
        <li>
          <strong>Knowledge Generation:</strong>
          <p>"First, outline the key characteristics of emotions such as no emotion, anger, disgust, fear, happiness, sadness, and surprise. Then, apply this framework to the dialogue to determine the emotion expressed."</p>
        </li>
        <li>
          <strong>Persona-Based:</strong>
          <p>"Imagine you are a psychologist specializing in emotional analysis. Analyze this line of dialogue and determine whether it expresses no emotion, anger, disgust, fear, happiness, sadness, or surprise, based on your expertise."</p>
        </li>
        <li>
          <strong>Probabilistic Assessment:</strong>
          <p>"Assess the likelihood that this line of dialogue expresses one of the following emotions: no emotion, anger, disgust, fear, happiness, sadness, or surprise. Assign a probability to each category and ensure your totals add up to 100%."</p>
        </li>
        <li>
          <strong>Multi-Expert Debate:</strong>
          <p>"Imagine three experts: a psychologist, a linguist, and an actor. Each has a different perspective on which emotion—no emotion, anger, disgust, fear, happiness, sadness, or surprise—is conveyed in the line of dialogue. Conduct a mock debate where each expert argues their position based on the text."</p>
        </li>
        <li>
          <strong>Collaborative Improvement:</strong>
          <p>"After generating your initial analysis, I'd like you to help me refine the prompt for better accuracy. What changes would you suggest to improve the way we ask about and analyze emotions in dialogue, focusing on the emotions no emotion, anger, disgust, fear, happiness, sadness, and surprise?"</p>
        </li>
      </ol>
    </div>
  );
};




const CrowdComponent = ({ onSubmit, taskData }) => {
  const question_text = taskData.question_text;
  const subjects = taskData.subjects;
  const speaker = taskData.speaker;
  const context = taskData.context;
  const article_text = taskData.article_text;



  const onFormSubmit = (e) => {
    e.preventDefault();

  
    const brainstorming = {
      one: document.querySelector(`crowd-input[name="Brainstormed_Prompt_1"]`).value,
      two: document.querySelector(`crowd-input[name="Brainstormed_Prompt_2"]`).value,
      three: document.querySelector(`crowd-input[name="Brainstormed_Prompt_3"]`).value,
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

    const submitData = {
      "brainstorming": brainstorming,
      "final_0": final_judgement_0,
      "final_1": final_judgement_1,
      "final_2": final_judgement_2,
      "final_3": final_judgement_3,
      "init_0": init_judgement_0,
      "init_1": init_judgement_1,
      "init_2": init_judgement_2,
      "init_3": init_judgement_3
    };
    onSubmit?.(submitData);
  };
  return (
    <>
    <div style={{
      padding: '10px', 
      border: '1px solid #ccc', 
      margin: '10px 0',
      overflow: 'auto' // Add scrolling
    }}>
        <crowd-form onSubmit={onFormSubmit}>


        <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word'
          }}>    
          <h1>Introduction</h1>
          <p>Welcome to this creative prompt writing task.</p>
          <p>The way we ask Chat GPT to do something [a prompt] can have a large impact on how it performs. We are trying to find new and creative ways to prompt Chat GPT.</p>
          <p>There are lots of experiments out there where researchers have tried to write better prompts, but there's no research where crowd-workers have been invited into this process</p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Your Task:</h2>
          <p>Your task is to write creative and novel prompts to help Chat GPT to detect the emotion in each line of a dialogue.</p>
          <p>When you provide your prompt, please provide everything you input into Chat GPT, including your prompt, the example dialogue and any changes you made</p>
          <p>We will provide you with an example discussion so you can better understand the task, but your prompts should work for the general case of emotion detection.</p>
          <p>Note that the Chat GPT provided knows nothing of the task, so you will have to provide it with both your prompt and the example dialogue when you interact</p>
          <p>To do this, simply use the textbox in the top right of this page to fill in your prompt and copy paste the whole prompt & example dialogue into GPT, please also provide this whole text as your answer for the prompt writing tasks</p>

          <p>You will do this in the following steps:</p>
          <ol>
              <li>Interact with Chat GPT how you might normally. Record both your prompt and also Chat GPT's answer.</li>
              <li>Read some of the materials we have provided. You are not required to use these methods, they are provided as inspiration only</li>
              <li>Brainstorm and test at least three novel prompts, please be as creative as possible, try to come up with new ways of interacting with Chat GPT, creative ways to ask it to do the task etc. Try not to just reassemble the examples given</li>
              <li>Once you are done brainstorming, please record your best and final prompt. It may be as long as you like, and may incorperate ideas from as many of the inspiration texts as you like</li>
          </ol>
          </div>



          <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word'
          }}>   
  
        <h1>
          {"Step 1: Initial Interaction"}
        </h1> 

        <div>
        <h2>{"Interact with Chat GPT to categorise each line in this dialogue according to the main emotion present in that line [no emotion, anger, disgust, fear, happiness, sadness, surprise]"}</h2>
          
        <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word'
          }}>
             <h2>Example Text:</h2>
             {Array.isArray(question_text) ? question_text.map((line, index) => <p key={index}>{line}</p>) : <p>{question_text}</p>}

          </div>


        <h2>{"Record your prompt"}</h2>
        <crowd-input name="initial_prompt" label="initial_prompt" required></crowd-input>
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
        </div>


        <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word'
          }}>

        <h1>
          {"Step 2: Inspiration"}
        </h1>
        <h2>{"Read through these example prompts, they will help give you ideas for creative ways you can prompt"}</h2>
        <h3>{"Note, you will have to be very clear with Chat GPT to get it to return the output properly. Something like 'work through line by line and choose the most prominent emotion' is a good start"}</h3>
      <div>
      <ExamplePrompts />
      </div>
      </div>


      <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word'
          }}>   

        <h1>
          {"Step 3: Brainstorming"}
        </h1> 

     <h2>{"Experiment with Chat GPT to write creative and effective prompts"}</h2>

        <h3>{"Brainstormed and Tested Prompt 1"}</h3>
        <crowd-input name="Brainstormed_Prompt_1" label="Brainstormed_Prompt_1" required></crowd-input>

        <h3>{"Brainstormed and Tested Prompt 2"}</h3>
        <crowd-input name="Brainstormed_Prompt_2" label="Brainstormed_Prompt_2" required></crowd-input>

        <h3>{"Brainstormed and Tested Prompt 3"}</h3>
        <crowd-input name="Brainstormed_Prompt_3" label="Brainstormed_Prompt_3" required></crowd-input>
    
        </div>

        <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word'
          }}>   
        <h1>
          {"Step 4: Bring it together and write the best prompt you can"}
        </h1> 

        <crowd-input name="Final_prompt" label="Final_Prompt" required></crowd-input>
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
          </div>
          </div>



          <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word'
          }}>   
        <h2>{"Final Step: Discuss your experiecne"}</h2>
        <p>Please finish off the task by discussing your expereince, that of interracting with GPT to complete the task, the quirks of prompting GPT and any other notes you might have.</p>

        <crowd-input name="user_perceptions" label="user_perceptions" required></crowd-input>

        </div>

        </crowd-form>
        </div>
      </>
  );
};


export default CrowdComponent;