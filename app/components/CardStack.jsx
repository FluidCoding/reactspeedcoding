import React, { PropTypes } from 'react';

import Card from './Card.jsx';

import World from './World.jsx';
import Workflow from './Workflow.jsx';
import TodoApp from './TodoApp.jsx';
import IconSvg from './IconSvg.jsx';
import ICONS from '../fixtures/icons.js';

export default class CardStack extends React.Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    redirect: PropTypes.bool
  }

  static defaultProps = {
    messages: [
      'Responsive Design',
      'Customizable Theme',
      'Reusable Components'
    ],
    redirect: false
  }

  render() {
    const messages = this.props.messages;

    const renderMessages = messages.map(message =>
      <Card key={message} message><h3>{message}</h3></Card>
    );

    const gridClass = 'grid grid-gutters grid-full grid-flex-cells large-grid-fit u-textCenter';

    return (
      <div>
        {!this.props.redirect ? <h1>React Speed Coding</h1> : ''}
        <div className={gridClass}>
          <Card blank>
            <a className="image-link" href="https://leanpub.com/reactspeedcoding">
              <img src="/img/react-speed-t.jpg" alt="React Speed Book" />
            </a>
          </Card>
          <Card blank>
            <IconSvg
              color="secondary-text"
              icon={ICONS.COMPONENTS}
              size={70}
              text={`Growing library of 30+ reusable custom React components.
                Complete with Enzyme, Mocha, Chai Behavior-Driven Development, and ESLint.`}
            />
          </Card>
          <Card blank>
            <IconSvg
              size={70}
              icon={ICONS.ROCKET}
              color="warning-text"
              text={`Speed optimize every aspect of development workflow.
                Faster builds. Webpack payloads. Editor automation.
                ES6. Serverless architecture.`}
            />
          </Card>
        </div>
        <div className={gridClass}>
          <Card slim>
            <IconSvg
              size={70}
              icon={ICONS.DATABASE}
              color="default-text"
              text={`Multiple data strategies using fixtures,
                Redux store, real-time database, and AJAX REST APIs`}
            />
          </Card>
        </div>
        <div className={gridClass}>
          <Card>
            <IconSvg
              color="danger-text"
              icon={ICONS.ROAD}
              size={70}
              text="Roadmap app created using Redux and Enzyme"
            />
          </Card>
          <Card>
            <IconSvg
              color="primary-text"
              icon={ICONS.GITHUB}
              size={70}
              text={`Popular GitHub repository with complete and
                tested source code`}
            />
          </Card>
          <Card>
            <IconSvg
              color="secondary-text"
              icon={ICONS.LINE_CHART}
              size={70}
              text="Infographics, charts, and visualization components in progress"
            />
          </Card>
        </div>

        <div className={gridClass}>
          <Card blank>
            <IconSvg
              color="default-text"
              icon={ICONS.CSS}
              size={70}
              text="ReactSpeed UI is efficient. CSS 4.6KB Gzip, 21KB Minified."
            />
          </Card>
        </div>

        <div className={gridClass}>
          <Card>
            <p>Responsive forms</p>
            <div className="input">
              <span className="input-label">Name</span>
              <input className="input-field" placeholder="Placeholder for name" />
            </div>
            <div className="input">
              <input className="input-field" placeholder="Just a field" />
            </div>
          </Card>
          <Card>
            <p>Buttons</p>
            <button className="button default">Default</button>
            <button className="button primary">Primary</button>
            <button className="button secondary">Secondary</button>
            <button className="button danger">Danger</button>
            <button className="button success">Success</button>
            <button className="button warning">Warning</button>
            <button className="button golden">Golden</button>
          </Card>
        </div>

        <div className={gridClass}>
          <Card><Workflow /></Card>
          <Card><World /></Card>
          <Card><TodoApp /></Card>
        </div>

        <div className={gridClass}>
          {renderMessages}
        </div>
      </div>
    );
  }
}