import React, { useState } from 'react';




const ExamplePrompts = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <ol>
        <li>
          <strong>Be as clear and specific as possible:</strong>
          <p>
            Make sure that you ask the model to be as clear as possible in the way you ask Chat GPT to perform the task, more detail is better. Similarly, be as specific as possible regarding what has to be done, and any information you think is relevant to completing the task.
          </p>
        </li>
        <li>
          <strong>Allocate a role to the agent:</strong>
          <p>
            Invite the machine to act within some kind of role, describe its tendencies, the things it likes to focus on, the kind of person it is, descriptive, detailed, and specific language can help here. Defining multiple roles can also work well.
          </p>
        </li>
        <li>
          <strong>Instructions for how to complete the task:</strong>
          <p>
            Provide the LLM with guidelines for how you would like it to complete the task:
            <br />- Consider asking for summarization based on some theme which you think is important.
            <br />- Look for clues which you think are important.
            <br />- Think through how you would solve this kind of task.
            <br />- Provide those steps to the model.
          </p>
        </li>
        <li>
          <strong>Provide clear structure for the response:</strong>
          

          <p>
            Ask the machine to provide its answer in a very strict way:
            <br />- Include the things you want it to do.
            <br />- Specify the length of each piece of the response you want.
            <br />- Define the goal of the various steps you want it to complete.
            <br />- Example: Start by performing a summary.
            <br />- Example: Look for key terms.
            <br />- Example: Break down the article into parts.
            <br />- Example: Find key arguments.
            <br />- Example: Check for markers of emotional language.
            <br />- Example: Check for clues of truth or lies.
            <br />- Example: Perform a debate based on findings.
            <br />- Example: Perform an analysis of the outputs.
            <br />- Example: Provide your final answer as a single word [True or false].
            <br />- Example: For each line in the discussion provide a single word answer [True or false].

          </p>
        </li>
        <li>
          <strong>Do not be afraid of long prompts:</strong>
          <p>
            Professional prompts are long, they contain many components and precise detail of how the LLM should complete the task, be creative, detailed, and extensive in the way you write your prompt.
          </p>
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



    const final_discussion = {
      final_perception: document.querySelector(`crowd-input[name="user_perceptions"]`).value,
    };
    
    const submitData = {
      "final_0":final_judgement_0,
      "final_1":final_judgement_1,
      "final_2":final_judgement_2,
      "final_3":final_judgement_3,
      "final_prompt":final_discussion
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
          <p>Your task is to read the guidelines and write a creative prompt for the detection of toxic language given some example text. Please be as creative as possible and test your prompt with Chat GPT by providing both the prompt and the example text to Chat GPT, record Chat GPT's response    
          </p>

          <p>You may follow as many or as few of the guidelines as you like in writing your prommpt, and as long as you like, we only seek creativity and performance.</p>

          <p></p>Use the drafting space in the top right to work on your promt. This space has no functionality other than making it easy for you to write<p></p>

          </div>


        <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word'
          }}>

        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
          {"1. Guidelines"}
        </h1>
        <h2>{"Read these guidelines and the drafting space to write a creative prompt to get Chat GPT to detect fake news or satire in the example text. "}</h2>
       <p> </p>
        <h1 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
          {"Example Text:"}
        </h1> 

        <h1 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px', border: '1px solid black', padding: '10px' }}>
        {Array.isArray(question_text) ? question_text.map((line, index) => <p key={index}>{line}</p>) : <p>{question_text}</p>}
       
        </h1>
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
          {"3. Paste your final prompt here:"}
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
