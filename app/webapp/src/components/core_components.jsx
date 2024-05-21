/*
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from 'react';
import CrowdComponent from './crowd-component.jsx';
import {
    ChatGPT,
} from "./ChatGPT.jsx";

function OnboardingComponent({onSubmit}) {
  return (
      <div>
        <Directions>
          This component only renders if you have chosen to assign an onboarding
          qualification for your task. Click the button to move on to the main
          task.
        </Directions>
        <div
            style={{
              width: '100%',
              padding: '1.5rem 0',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
        >
          <button
              className="button is-success"
              style={{width: 'fit-content', marginBottom: '0.65rem'}}
              onClick={() => onSubmit({success: true})}
          >
            Move to Main Task
          </button>
          <button
              className="button is-danger"
              style={{width: 'fit-content'}}
              onClick={() => onSubmit({success: false})}
          >
            Get Blocked
          </button>
        </div>
      </div>
  );
}

function LoadingScreen() {
  return <Directions>Loading... hit refresh if taking too long</Directions>;
}

function Directions({children}) {
  return (
      <section className="hero is-light" data-cy="directions-container">
        <div className="hero-body">
          <div className="container">
            <p className="subtitle is-5">{children}</p>
          </div>
        </div>
      </section>
  );
}

function SimpleFrontend({ taskData, fullData, isOnboarding, onSubmit, onError, getAgentRegistration }) {
  const data = { success: true };

  return (
    <>
      <div style={{ display: 'flex', width: '80%', height: '100vh', marginLeft: '10%' }}>
        <div style={{ flex: '50%', height: '100%', backgroundColor: 'white', overflow: 'auto' }}>
          <CrowdComponent taskData={taskData} onSubmit={onSubmit} />
        </div>
        <div style={{ flex: '50%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{
              border: '1px solid black',
              padding: '10px',
              margin: '10px',
              backgroundColor: '#f0f0f0',
              wordWrap: 'break-word',
              maxHeight: '25vh', // Limits the height to 20% of the total height of the viewport
              overflow: 'auto'
          }}>
            <h1>Prompt Template</h1>
            <h2>Modify this template and copy-paste it into Chat GPT to help your experimentation</h2>
            <textarea
              name="prompt"
              style={{ width: '100%', height: '100px' }} // Adjust as needed
              placeholder="Use this space to work on your prompt, paste it into GPT below when you're ready"
              required
            />
            <p>[{taskData.question_text}]</p>
            <p>select all that apply: [toxic, severe toxic, obscene, threat, insult, identity hate]</p>
          </div>
          <div style={{ flex: '1', overflow: 'auto' }}> {/* This ensures ChatGPT uses the remaining space */}
            <ChatGPT fullData={fullData} getAgentRegistration={getAgentRegistration} />
          </div>
        </div>
      </div>
    </>
  );
}

export {LoadingScreen, SimpleFrontend as BaseFrontend, OnboardingComponent};
