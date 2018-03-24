import React, {Component} from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import thunk from 'redux-thunk'
import {Router, Route, Switch} from 'react-router-dom'

import history from './history'
import rootReducer from './reducers'
import {TrainingListPageLinked, TrainingNewMuscleGroupsLinked, TrainingNewSelectExerciseLinked} from './components'

const store = createStore(rootReducer, applyMiddleware(thunk))

const Routing = () =>  (
  <Switch>
	<Route exact path='/train-select-muscle-groups/' component={TrainingNewMuscleGroupsLinked} />
	<Route exact path='/train-select-exercise/' component={TrainingNewSelectExerciseLinked} />
    <Route exact path='/' component={TrainingListPageLinked} />
  </Switch>
)

const App = () => (
  <Router history={history}>
    <Routing/>
  </Router>
)

render(
  <Provider store={store} >
    <App/>
  </Provider>, 
  document.getElementById('root')
)

