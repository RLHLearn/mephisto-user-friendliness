import React, { useState } from 'react';




const Collapsible = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} style={{ marginBottom: '10px', cursor: 'pointer' }}>
                {isOpen ? 'Hide Details' : title}
            </button>
            {isOpen && (
                <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px 0' }}>
                    {children}
                </div>
            )}
        </div>
    );
};

const FullInstructions = () => (
  <full-instructions header="Instructions">
    <p>Welcome to this prompt engineering task.</p>
    <p>The way we talk Chat GPT "prompting" can have a large impact on how it performs. We are aiming to better understand how to instruct people in this process</p>

    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Your Goal:</h2>
    <p>Your goal is to use your creativity to write the best possible prompt which will allow Chat GPT to most reliably detect Fake News.</p>

    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Specifications:</h2>
    <p>Your prompt may be as long or as short as you like, and it can contain as many or as few instructions as you like</p>
    <p>Please feel free to perform as many tests and trials as you would like, and report your final prompt which you believe will work the best</p>

    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Process instructions:</h2>

    <ol>
        <li>First, interract with chat GPT to complete the task as you might normally, we will give you some a task and you need to ask for Chat GPT's answer</li>
        <li>Second, read some of the materials we have provided. You don't have to read all of it, but you do have to make an attempt to improve your prompt</li>
        <li>Third, using the materials we have given you try again, and attempt another interraction with Chat GPT, please try to think hard in this step</li>
        <li>Your goal is to write the best possible prompt, one which would allow Chat GPT to answer a wide range of similar questions effectively, how you achieve this is up to you</li>
        <li>Record your new prompt and your impressions of the interraction again</li>
    </ol>

  </full-instructions>
);


const ChainOfThoughtPrompting = () => (
  <how-to-prompt header="Chain of Thought">
    <p>
      "Chain of Thought" prompting helps solve complex problems by breaking them down into logical steps. This technique involves detailed, step-by-step reasoning that enhances clarity and depth in problem-solving.
    </p>
    <h4>Examples of Prompt Stems:</h4>
    <ul>
      <li>"To solve this, first let's consider what we know about the problem. Then we can explore how these factors interact."</li>
      <li>"Start by defining the main elements involved in this issue. Next, analyze how each element affects the other."</li>
      <li>"What are the rules or principles that apply to this scenario? Applying these, what conclusions can we draw step by step?"</li>
      <li>"First, outline the steps needed to approach this solution. What questions do we need to answer at each step?"</li>
    </ul>
  </how-to-prompt>
);

const TreeOfThoughtPrompting = () => (
  <how-to-prompt header="Tree of Thought">
    <p>
      "Tree of Thought" prompting is a method that maps out various potential pathways and outcomes from a single question or problem. It helps explore multiple scenarios and decision points, resembling a branching tree structure. This method is useful for comprehensive problem-solving and decision-making.
    </p>
    <h4>Examples of Prompt Stems:</h4>
    <ul>
      <li>Imagine three different experts are answering this question.</li>
      <li>All experts will write down one step of their thinking.</li>
      <li>Then, they share it with the group.</li>
      <li>Next, all experts will proceed to the next step.</li>
      <li>If any expert realizes they're wrong at any point, they leave the discussion.</li>
      <li>The question posed to the experts is...</li>
    </ul>
  </how-to-prompt>
);

const OutputStructurePrompting = () => (
  <how-to-prompt header="Defining Output Structure">
    <p>
      When prompting ChatGPT to answer multiple choice questions, it's essential to define that the response should include one of the provided precise answers. This approach ensures the output is directly aligned with the choices given, promoting clarity and accuracy.
    </p>
    <h4>Examples of Prompt Stems:</h4>
    <ul>
      <li>"Given the options ['fake news', 'satire', 'real news'], which category best describes the following statement? Ensure your final answer is one of the provided options."</li>
      <li>"Here are the options: A, B, C, D. Based on the information provided, which option is accurate? Answer with the letter of the correct choice."</li>
      <li>"Please analyze the choices given: A, B, C, D. Identify the correct answer and respond with only the corresponding letter."</li>
      <li>"Evaluate the following options: A, B, C, D. Select the correct answer and provide the letter only."</li>
    </ul>
  </how-to-prompt>
);


const RoleAllocationPrompting = () => (
  <how-to-prompt header="Role Allocation Prompting">
    <p>
      "Role Allocation Prompting" involves assigning a specific role or identity to the language model to shape its responses according to that role. This method is useful for simulating specific perspectives or expertise, guiding the model to respond in a way that aligns with the assigned role.
    </p>
    <p>
      The basic format for these prompts is simple yet effective: "You are [X], your job is to [Y]." This structure helps clarify the role and expected tasks or behavior, making interactions more targeted and relevant.
    </p>
  </how-to-prompt>
);


const KnowledgeGenerationPrompting = () => (
  <how-to-prompt header="Knowledge Generation for Fake News Detection">
    <p>
      Knowledge generation prompting involves asking ChatGPT to create or compile useful information that can aid in a specific task, such as detecting fake news. This approach is particularly valuable when you need to identify patterns, phrases, or characteristics typical of fake news.
    </p>
    <p>
      A typical prompt might ask the model to generate lists of common phrases found in fake news articles or to describe characteristics that distinguish fake news from legitimate reporting. By generating this knowledge, users can better prepare for the task of fake news detection by understanding common indicators and tactics used in misleading content.
    </p>
  </how-to-prompt>
);









const CrowdComponent = ({ onSubmit, taskData }) => {
  const imageUrl = taskData.imageUrl;
  const question_text = taskData.question_text;
  const subjects = taskData.subjects;
  const speaker = taskData.speaker;
  const context = taskData.context;
  const article_text = taskData.article_text;



  const onFormSubmit = (e) => {
    e.preventDefault();
    const vetting = {
      vetting_1: document.querySelector('crowd-radio-button[name="vetting_1"]').checked,
      vetting_2: document.querySelector('crowd-radio-button[name="vetting_2"]').checked,
      vetting_3: document.querySelector('crowd-radio-button[name="vetting_3"]').checked,
      vetting_4: document.querySelector('crowd-radio-button[name="vetting_4"]').checked,
      vetting_5: document.querySelector('crowd-radio-button[name="vetting_5"]').checked,
    };
  
    const machine_judgement = {
      fake: document.querySelector('crowd-radio-button[name="machine_fake"]').checked,
      real: document.querySelector('crowd-radio-button[name="machine_real"]').checked,
      satire: document.querySelector('crowd-radio-button[name="machine_satire"]').checked,
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
          {"Creative Prompt Writing Task"}
        </h1>


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

        <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              maxWidth: '800px',
              wordWrap: 'break-word'
          }}>    
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Introduction</h2>
          <p>Welcome to this creative prompt writing task.</p>
          <p>The way we ask Chat GPT to do something [a prompt] can have a large impact on how it performs. We are trying to find new and creative ways to prompt Chat GPT to get it to perform certain tasks.</p>
          <p>There are lots of experiments out there where researchers have tried to write better prompts, but there's no research where crowd-workers have been invited into this process</p>

          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Your Task:</h2>
          <p>Your task is to write creative and novel prompts to help Chat GPT to determine whether a given piece of text is Fake News.</p>
          <p>When you provide your propmt, please only provide the prompt itself, not the prompt and the example text</p>
          <p>We will provide you with a piece of example text so you can better understand the task, but your prompts should work for the general case of Fake News categorisation.</p>
          <p>Note that the Chat GPT provided knows nothing of the task, so you will have to provide it with both your prompt and the example text when you interract</p>

          <p>You will do this in the following steps:</p>
          <ol>
              <li>Interract with Chat GPT how you might normally. Record both your prompt and also Chat GPT's answer.</li>
              <li>Read some of the materials we have provided. You are not required to use these methods, they are provided as inspiration only</li>
              <li>Brainstorm and test at least three novel prompts, please be as creative as possible, try to come up with new ways of interracting with Chat GPT, creative ways to ask it to do the task etc. Try not to just reassemble the examples given</li>
              <li>Once you are done brainstorming, please record your best and final prompt. It may be as long or as short as you like, and my incorperate ideas from as many or as few of the inspiration texts as you like</li>
          </ol>
          </div>
        

  
        <h1>
          {"Step 1: Initial Interraction"}
        </h1> 

        <div>
        <h2>{"Collect Chat GPT's answer to this question interracting with it how you normally would, record your prompt for Chat GPT"}</h2>
          
        <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              maxWidth: '800px',
              wordWrap: 'break-word'
          }}>
             <h2>Example Text:</h2>
              <h3>{question_text}</h3>
              <p>{article_text}</p>
          </div>


        <h2>{"Record your prompt"}</h2>
        <crowd-input name="initial_prompt" label="initial_prompt" required></crowd-input>

        <h2>{"Record Chat GPT's Answer"}</h2>
        <crowd-radio-group  required>
        <crowd-radio-button name="init_real" value="real">Real News</crowd-radio-button>
        <crowd-radio-button name="init_fake" value="fake">Fake News</crowd-radio-button>
        <crowd-radio-button name="init_satire" value="satire">Satire</crowd-radio-button>
        </crowd-radio-group>

        </div>

        <h1>
          {"Step 2: Inspiration"}
        </h1>
        <h2>{"Please find below some materials to help you better write prompts"}</h2>

        <h1>{"General Tips"}</h1>          
          <li>It's wise to define precisely how Chat GPT's final response ought to be structured. You may wish to end your propmt with "ensure your response concludes with a single final answer [satire/ fake news/ real news]"</li>  
          <p>You will have to provide Chat GPT with the task text along with your prompt, so you may wish to first write your prompt and then copy the task text.</p>  
          <p>You are encouraged to go online and find any new ways of prompting you can</p>  


        <Collapsible title="The Structure of a Prompt">
          <p>One way to think of prompting is using the following components</p>  
          <li>Task: Present the task to be performed. In this case, the task is to determine whether a given piece of text is fake news, satire or real news</li>       
          <li>Context: You may choose to tell chat the context in which it is performing the task "As follows is a news article taken from a potentially dubious source"</li>       
          <li>Examplar: You could provide an example structure for how you want Chat GPT to respond such as "The article's main message is A the key words and phrases suggesting this news might be real, fake or satire are B, based on this, I conclude the article is C"</li>       
          <li>Persona: You may wish to allocate Chat GPT a persona such as fake news expert, Political pundit, Satire author, scholar or something else. These personas encourage the bot to think in a particular way</li>       
          <li>Format: Tell chat the format of your output. In this case you may specify "your response must contain a final judgement stating the article is fake news, satire or real news"</li>       
        </Collapsible>

        <Collapsible title="Example prompt 1: Default">
          <p>The most basic approach to this task might be to simply ask Chat GPT to do the task</p>  
          <p>"Hey Chat, please determine if this text is Fake News" might be a good example</p>       
        </Collapsible>

        <Collapsible title="Example prompt 2: Chain of Thought">
          <p>A popular prompting methodology is called Chain of Thought prompting</p>  
          <p>Asking Chat GPT to think through the problem step by step has been shown effective in enhancing performance</p>  
          <p>"Hey Chat, think step-by-step through the process of determining whether this news snippet is fake news. Consider the following key indicators [add factors which are good indicators of fake news]"</p>
        </Collapsible>

        <Collapsible title="Example prompt 3: Knowledge generation prompting">
          <p>Asking Chat GPT to first "generate knowlege" and then solve the problem has been shown to enhance performance</p>  
          <p>"Hey Chat, lets solve this problem in two phases, first I want you to write out important things to look for in a piece of text which might tell us whether it is fake news. Following this, then consider these in the context of this news article: </p>
        </Collapsible>

        <Collapsible title="Other ideas">
          <p>You are encouraged to experiment with all kinds of ways to get Chat GPT to perform better</p>  
          <li>give a probability weighting to each of the three possibilities fake news, satire and real news. ensure your probabilities add up to 100%</li>
          <li>Conduct a debate between multiple experts attempting to determine...</li>
          <li>Generate criteria...</li>
        </Collapsible>

        <Collapsible title="Collaboration">
          <p>Once you have completed your prompt, you may wish to collaborate with Chat GPT to make your prompt better.</p>  
          <p>Feel free to ask chat GPT for creative ways to make your prompt better</p>  
        </Collapsible>


        <h1>
          {"Step 3: Brainstorming"}
        </h1> 

        <div>
        <h2>{"Experiment with Chat GPT, and whatever ideas you have, brainstorm at least 3 varied prompts,"}</h2>
          
        <div style={{ 
              border: '1px solid black', 
              padding: '10px', 
              margin: '10px', 
              backgroundColor: '#f0f0f0',
              maxWidth: '800px',
              wordWrap: 'break-word'
          }}>
              <h2>Example Text:</h2>
              <h3>{question_text}</h3>
              <p>{article_text}</p>
          </div>


        <h2>{"Brainstormed Prompt 1"}</h2>
        <crowd-input name="initial_prompt" label="Determine if this article is (A) real news, (B) fake news or (C) satire. Ensure your repsonse concludes with a single letter A,B or C. [Paste the article here]" required></crowd-input>

        <h2>{"Brainstormed Prompt 2"}</h2>
        <crowd-input name="initial_prompt" label="initial_prompt" required></crowd-input>

        <h2>{"Brainstormed Prompt 3"}</h2>
        <crowd-input name="initial_prompt" label="initial_prompt" required></crowd-input>
        </div>

        <h1>
          {"Step 2: Secondary Interraction"}
        </h1> 

        <div>
        <h2>{"Consider some of the materials we provide and rewrite your prompt so it's as good as possible"}</h2>
        
        <h2>{"Record your prompt"}</h2>
        <crowd-input name="secondary_prompt" label="secondary_prompt" required></crowd-input>

        <h2>{"Record Chat GPT's Answer"}</h2>
        <crowd-radio-group  required>
        <crowd-radio-button name="init_real" value="real">Real News</crowd-radio-button>
        <crowd-radio-button name="init_fake" value="fake">Fake News</crowd-radio-button>
        <crowd-radio-button name="init_satire" value="satire">Satire</crowd-radio-button>
        </crowd-radio-group>
        </div>
        </crowd-form>

      </>
  );
};


export default CrowdComponent;