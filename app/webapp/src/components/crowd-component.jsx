import React, { useState } from 'react';



const ExamplePrompts = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <ol>
        <li>
          <strong>MINIMUM STANDARD:</strong>
          <p>"Categorise this text as Fake News, Satire or Real News:"</p>
        </li>
        <li>
          <strong>Structured Response:</strong>
          <p>"ChatGPT, as you analyze this text, structure your response by first summarizing the main message, then list the key phrases that indicate whether it's real, fake, or satire, and conclude with your final assessment as either 'real news', 'fake news', or 'satire'."</p>
        </li>
        <li>
          <strong>Chain of Thought:</strong>
          <p>"Let's approach this step-by-step. Examine the text and discuss your reasoning on whether it's real news, fake news, or satire, considering elements like source credibility, language used, and any logical fallacies present."</p>
        </li>
        <li>
          <strong>Knowledge Generation:</strong>
          <p>"First, outline the key characteristics of fake news, satire, and real news. Then, apply this framework to the text below to determine its category."</p>
        </li>
        <li>
          <strong>Persona-Based:</strong>
          <p>"Imagine you are a seasoned journalist specializing in media credibility. Analyze this article and determine whether it's presenting real news, satire, or fake news, based on your expertise."</p>
        </li>
        <li>
          <strong>Probabilistic Assessment:</strong>
          <p>"Assess the likelihood that this article is real news, fake news, or satire. Assign a probability to each category and ensure your totals add up to 100%."</p>
        </li>
        <li>
          <strong>Multi-Expert Debate:</strong>
          <p>"Imagine three experts: a journalist, a political analyst, and a comedian. Each has a different perspective on whether this article is real news, satire, or fake news. Conduct a mock debate where each expert argues their position based on the text."</p>
        </li>
        <li>
          <strong>Collaborative Improvement:</strong>
          <p>"After generating your initial analysis, I'd like you to help me refine the prompt for better accuracy. What changes would you suggest to improve the way we ask about the authenticity of news articles?"</p>
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
      one: document.querySelector(`crowd-input[name="Brainstormed_Prompt_1"]`).value,
      two: document.querySelector(`crowd-input[name="Brainstormed_Prompt_2"]`).value,
      three: document.querySelector(`crowd-input[name="Brainstormed_Prompt_3"]`).value,
    };
    
    const final_judgement = {
      fake: document.querySelector('crowd-radio-button[name="final_fake"]').checked,
      real: document.querySelector('crowd-radio-button[name="final_real"]').checked,
      satire: document.querySelector('crowd-radio-button[name="final_satire"]').checked,
    };
    
    const init_judgement = {
      fake: document.querySelector('crowd-radio-button[name="init_fake"]').checked,
      real: document.querySelector('crowd-radio-button[name="init_real"]').checked,
      satire: document.querySelector('crowd-radio-button[name="init_satire"]').checked,
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
          <p>Your task is to write creative and novel prompts to help Chat GPT to determine whether a given piece of text is Fake News.</p>
          <p>When you provide your prompt, please provide everything you input into Chat GPT, including your prompt, the example article and any changes you made</p>
          <p>We will provide you with an example article so you can better understand the task, but your prompts should work for the general case of Fake News categorisation.</p>
          <p>Note that the Chat GPT provided knows nothing of the task, so you will have to provide it with both your prompt and the example article when you interact</p>
          <p>To do this, simply use the textbox in the top right to fill in your prompt and copy paste the whole prompt & example text into GPT, please also provide this whole text as your answer for the prompt writing tasks</p>

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
  
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
          {"Step 1: Initial Interaction"}
        </h1> 

        <div>
        <h2>{"Interact with Chat GPT to categorise the following text as Fake news, Satire or Real news"}</h2>
          
        <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word'
          }}>
             <h2>Example Text:</h2>
              <h3>{question_text}</h3>
              <p>{article_text}</p>
          </div>


        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{"Record your prompt"}</h2>
        <crowd-input name="initial_prompt" label="initial_prompt" required></crowd-input>

        <h2>{"Record Chat GPT's Answer"}</h2>
        <crowd-radio-group  required>
        <crowd-radio-button name="init_real" value="real">Real News</crowd-radio-button>
        <crowd-radio-button name="init_fake" value="fake">Fake News</crowd-radio-button>
        <crowd-radio-button name="init_satire" value="satire">Satire</crowd-radio-button>
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
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{"Read through these example prompts, they will help give you ideas for creative ways you can prompt"}</h2>

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

     <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{"Experiment with Chat GPT to write creative and effective prompts"}</h2>

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
        <crowd-radio-group  required>
        <crowd-radio-button name="final_real" value="Real News">Real News</crowd-radio-button>
        <crowd-radio-button name="final_fake" value="Fake News">Fake News</crowd-radio-button>
        <crowd-radio-button name="final_satire" value="Satire">Satire</crowd-radio-button>
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