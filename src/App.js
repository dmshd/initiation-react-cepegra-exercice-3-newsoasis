import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Selecteur from './components/Selecteur';
import ArticlesList from './components/ArticlesList';
import Settings from './components/Settings';
import About from './components/About';
import './App.css';
// import logo from './logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {titre: 'Super titre putaclic', content: 'super contenu à rallonge', date: '02/04/2019', author: 'Olivier' },
        {titre: 'Super titre putaclic', content: 'super contenu à rallonge', date: '02/04/2019', author: 'Olivier' },
        {titre: 'Super titre putaclic', content: 'super contenu à rallonge', date: '02/04/2019', author: 'Olivier' },
        {titre: 'Super titre putaclic', content: 'super contenu à rallonge', date: '02/04/2019', author: 'Olivier' },
        {titre: 'Super titre putaclic', content: 'super contenu à rallonge', date: '02/04/2019', author: 'Olivier' },
        {titre: 'Super titre putaclic', content: 'super contenu à rallonge', date: '02/04/2019', author: 'Olivier' },
        {titre: 'Super titre putaclic', content: 'super contenu à rallonge', date: '02/04/2019', author: 'Olivier' },
      ]
    }
  }

  render = () => (
    <div className="App">
      <Router>
        <header>
          <Link to='/'><h1>News Oasis</h1></Link>
          <Selecteur />
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/settings'><li>Settings</li></Link>
            <Link to='/about'><li>About</li></Link>
          </ul> 

        </header>
      
        <main>
          <Switch>
            <Route exact path='/' render={() => (
              <ArticlesList articles={this.state.articles} />
            )}/>
            <Route exact path='/settings' render={() => <Settings />}/>
            <Route exact path='/about' render={() => <About />}/>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
