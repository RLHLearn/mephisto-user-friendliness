import React, { useState } from 'react';




const ExamplePrompts = () => {
  return (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
  <ol>
  <li>
  <strong>MINIMUM STANDARD:</strong>
  <p>Select all that apply to this text: Toxic, Severe Toxic, Obscene, Threat, Insult, Identity Hate.</p>
  </li>
  <li>
  <strong>Structured Response:</strong>
  <p>ChatGPT, analyze this text and structure your response by first summarizing its content, then list the key phrases that indicate its type of toxicity, and conclude with your assessment categorizing the specific types of toxicity present.</p>
  </li>
  <li>
  <strong>Chain of Thought:</strong>
  <p>Let's approach this step-by-step. Examine the text and discuss your reasoning for each type of toxicity identified, considering the language intensity, context, and any targeted groups.</p>
  </li>
  <li>
  <strong>Knowledge Generation:</strong>
  <p>First, outline the key characteristics of each toxicity type: Toxic, Severe Toxic, Obscene, Threat, Insult, Identity Hate. Then, apply this framework to the text below to determine which categories apply.</p>
  </li>
  <li>
  <strong>Persona-Based:</strong>
  <p>Imagine you are a social media moderator specializing in community safety. Analyze this text and determine the types of toxicity present, based on your expertise.</p>
  </li>
  <li>
  <strong>Probabilistic Assessment:</strong>
  <p>Assess the likelihood that this text falls into each category of toxicity. Assign a probability to each type and ensure your totals add up to 100%.</p>
  </li>
  <li>
  <strong>Multi-Expert Debate:</strong>
  <p>Imagine three experts: a psychologist, a linguist, and a legal expert. Each has a different perspective on the types of toxicity present in the text. Conduct a mock debate where each expert argues their position based on the text.</p>
  </li>
  <li>
  <strong>Collaborative Improvement:</strong>
  <p>After generating your initial analysis, I'd like you to help me refine the prompt for better accuracy in detecting toxicity. What changes would you suggest to improve the way we analyze and categorize toxic language?</p>
  </li>
  </ol>
  </div>
  );
  };




const CrowdComponent = ({ onSubmit, taskData }) => {
  const imageUrl = taskData.imageUrl;
  const question_text = taskData.question_text;
  const subjects = taskData.subjects;
  const speaker = taskData.speaker;
  const context = taskData.context;
  const article_text = taskData.article_text;



  const onFormSubmit = (e) => {
    e.preventDefault();

  
    const brainstorming = {
      init_prompt: document.querySelector(`crowd-input[name="initial_prompt"]`).value,
      one: document.querySelector(`crowd-input[name="Brainstormed_Prompt_1"]`).value,
      two: document.querySelector(`crowd-input[name="Brainstormed_Prompt_2"]`).value,
      three: document.querySelector(`crowd-input[name="Brainstormed_Prompt_3"]`).value,
      final_prompt: document.querySelector(`crowd-input[name="initial_prompt"]`).value,
    };
    
    const init_judgement = {
      init_toxic: document.querySelector('crowd-radio-button[name="init_toxic"]').checked,
      init_severe_toxic: document.querySelector('crowd-radio-button[name="init_severe_toxic"]').checked,
      init_obscene: document.querySelector('crowd-radio-button[name="init_obscene"]').checked,
      init_threat: document.querySelector('crowd-radio-button[name="init_threat"]').checked,
      init_insult: document.querySelector('crowd-radio-button[name="init_insult"]').checked,
      init_identity_hate: document.querySelector('crowd-radio-button[name="init_identity_hate"]').checked,
    };
    
    
    const final_judgement = {
      final_severe_toxic: document.querySelector('crowd-radio-button[name="final_severe_toxic"]').checked,
      final_obscene: document.querySelector('crowd-radio-button[name="final_obscene"]').checked,
      final_threat: document.querySelector('crowd-radio-button[name="final_threat"]').checked,
      final_insult: document.querySelector('crowd-radio-button[name="final_insult"]').checked,
      final_identity_hate: document.querySelector('crowd-radio-button[name="final_identity_hate"]').checked,
    };
    
    const submitData = {
      "initial": init_judgement,
      "brainstorming":brainstorming,
      "final":final_judgement,
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
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Introduction</h1>
          <p>Welcome to this creative prompt writing task.</p>
          <p>The way we ask Chat GPT to do something [a prompt] can have a large impact on how it performs. We are trying to find new and creative ways to prompt Chat GPT.</p>
          <p>There are lots of experiments out there where researchers have tried to write better prompts, but there's no research where crowd-workers have been invited into this process</p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Your Task:</h2>
          <p>Your task is to write creative and novel prompts to help Chat GPT to characterise the toxic traits of an online forum post.</p>
          <p>When you provide your prompt, please provide everything you input into Chat GPT, including your prompt, the example post and any changes you made</p>
          <p>We will provide you with an example post so you can better understand the task, but your prompts should work for the general case of toxic trait detection.</p>
          <p>Note that the Chat GPT provided knows nothing of the task, so you will have to provide it with both your prompt and the example post when you interact</p>
          <p>To do this, simply use the textbox in the top right to fill in your prompt and copy paste the whole prompt & example text into GPT, please also provide this whole text as your answer for the prompt writing tasks</p>

          <p>You will do this in the following steps:</p>
          <ol>
              <li>1. Interact with Chat GPT how you might normally. Record both your prompt and also Chat GPT's answer.</li>
              <li>2. Read some of the materials we have provided. You are not required to use these methods, they are provided as inspiration only</li>
              <li>3. Brainstorm and test at least three novel prompts, please be as creative as possible, try to come up with new ways of interacting with Chat GPT, creative ways to ask it to do the task etc. Try not to just reassemble the examples given</li>
              <li>4. Once you are done brainstorming, please record your best and final prompt. It may be as long as you like, and may incorperate ideas from as many of the inspiration texts as you like</li>
          </ol>
          </div>



          <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word'
          }}>   
  
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
          {"Step 1: Initial Interaction"}
        </h1> 

        <div>
        <h2>{"Interact with Chat GPT to detect all the toxic characteristics of the text (select all that apply from [toxic, severe toxic, obscene, threat, insult, identity hate])"}</h2>
          
        <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word'
          }}>
             <h2>Problem Text:</h2>
              <p>{question_text}</p>
          </div>


        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{"Record your prompt"}</h2>
        <crowd-input name="initial_prompt" label="initial_prompt" required></crowd-input>

        <h2>{"Record Chat GPT's Answer (select all that apply)"}</h2>
        <crowd-radio-group  required>
        <div><crowd-radio-button name="init_toxic" value="toxic">Toxic</crowd-radio-button></div>
          <div><crowd-radio-button name="init_severe_toxic" value="severe_toxic">Severe Toxic</crowd-radio-button></div>
          <div><crowd-radio-button name="init_obscene" value="obscene">Obscene</crowd-radio-button></div>
          <div><crowd-radio-button name="init_threat" value="threat">Threat</crowd-radio-button></div>
          <div><crowd-radio-button name="init_insult" value="insult">Insult</crowd-radio-button></div>
          <div><crowd-radio-button name="init_identity_hate" value="identity_hate">Identity Hate</crowd-radio-button></div>
        </crowd-radio-group>

        </div>
        </div>


        <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word'
          }}>

        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
          {"Step 2: Inspiration"}
        </h1>
        <h2>{"Read through these example prompts, they will help give you ideas for creative ways you can prompt"}</h2>

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

        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
          {"Step 3: Brainstorming"}
        </h1> 

     <h2>{"Experiment with Chat GPT to write creative and effective prompts"}</h2>
     <h3>{"You will have to be clear with how you want Chat GPT to respond something like 'review the text for each of the following toxicity markers and determine yes/no whether it is present' is a good start"}</h3>

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
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
          {"Step 4: Bring it together and write the best prompt you can"}
        </h1> 

        <crowd-input name="Final_prompt" label="Final_Prompt" required></crowd-input>

        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{"Record Chat GPT's Answer (select all that apply)"}</h2>
        <crowd-radio-group  required>
          <div><crowd-radio-button name="final_toxic" value="toxic">Toxic</crowd-radio-button></div>
          <div><crowd-radio-button name="final_severe_toxic" value="severe_toxic">Severe Toxic</crowd-radio-button></div>
          <div><crowd-radio-button name="final_obscene" value="obscene">Obscene</crowd-radio-button></div>
          <div><crowd-radio-button name="final_threat" value="threat">Threat</crowd-radio-button></div>
          <div><crowd-radio-button name="final_insult" value="insult">Insult</crowd-radio-button></div>
          <div><crowd-radio-button name="final_identity_hate" value="identity_hate">Identity Hate</crowd-radio-button></div>
        </crowd-radio-group>
        </div>

        <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word'
          }}>   
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{"Final Step: Discuss your experiecne"}</h2>
        <p>Please finish off the task by discussing your expereince, that of interracting with GPT to complete the task, the quirks of prompting GPT and any other notes you might have.</p>

        <crowd-input name="user_perceptions" label="user_perceptions" required></crowd-input>

        </div>

        </crowd-form>
        </div>
      </>
  );
};


export default CrowdComponent;