import React from 'react'
import ReactDOM from 'react-dom/client'

import Speaker from './Speaker';
import Speakersecond from './Speaker2';

// import LeadershipTeam from './Leadership';


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Speaker />
      <Speakersecond />

  </React.StrictMode>,
)
