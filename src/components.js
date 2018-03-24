import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import history from './history' 
import {addTrain, fetchTrain, fetchMuscleGroups, fetchExercises} from './actions'

class TrainingListPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTrain()
  }

  render() {
    return (
      <div>
        {this.props.training.length === 0  && <h2>You have no training</h2>}
        {this.props.training.length > 0 && <ul>{this.props.training.map((train, index) => <li key={index} >{train.name}</li>)}</ul>}
        <Link to="/train-select-muscle-groups/" ><button>Add Train</button></Link>
      </div>
    )
  }
}

const TrainingListPageMapDispatchToProps = dispatch => {
  return {
    fetchTrain: () => {
      dispatch(fetchTrain())
    }
  }
}

const TrainingListPageMapStateToProps = state => {
  return {
    training: state.training
  }
}

const TrainingListPageLinked = connect(TrainingListPageMapStateToProps, TrainingListPageMapDispatchToProps)(TrainingListPage)

//////
class TrainingNewMuscleGroups extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTrainingNewMuscleGroups()
  }

  render() {
    return (
      <div>
        {this.props.muscleGroup.length > 0 && <MuscleGroupForm handleSelectedMuscleGroups={this.props.fetchExercisesByMuscleGroup} muscleGroup={this.props.muscleGroup} />}
      </div>
    )
  }
}

const TrainingNewMuscleGroupsPageMapDispatchToProps = dispatch => {
  return {
    fetchTrainingNewMuscleGroups() {
      dispatch(fetchMuscleGroups())
    },
    fetchExercisesByMuscleGroup(selectedGroups) {
      dispatch(fetchExercises(selectedGroups))
      history.push('/train-select-exercise/')
    }
  }
}

const TrainingNewMuscleGroupsPageMapStateToProps = state => {
  return {
    muscleGroup: state.muscleGroup,
    exercise: state.exercise
  }
}

const TrainingNewMuscleGroupsLinked = connect(TrainingNewMuscleGroupsPageMapStateToProps, TrainingNewMuscleGroupsPageMapDispatchToProps)(TrainingNewMuscleGroups)

///
class MuscleGroupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selectedGroups: []}
  }

  toggleMuscleGroup({name}) {
    const currentMuscleGroup = this.state.selectedGroups.slice()
    if (this.state.selectedGroups.includes(name)) currentMuscleGroup.splice(currentMuscleGroup.indexOf(name), 1)
    else currentMuscleGroup.push(name)
    this.setState({ selectedGroups: currentMuscleGroup })
  }

  render() {
    return (
      <form>
        <ul>{this.props.muscleGroup.map((group, index) => <li onClick={this.toggleMuscleGroup.bind(this, group)} key={index} >{group.name}</li>)}</ul>
        <button onClick={(e)=> {
          e.preventDefault()
          this.props.handleSelectedMuscleGroups(this.state.selectedGroups);
        }} >Done</button>
      </form>
    )
  }
}

class TrainingNewSelectExercise extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  componentDidMount() {
    // this.props.fetchTrainingNewMuscleGroups()
  }

  render() {
    return (
      <div>
        <ul>{this.props.exercise.map((exercise, index) => <li key={index} >{exercise.name}</li>)}</ul>
      </div>
    )
  }
}

const TrainingNewExercisesPageMapDispatchToProps = dispatch => {
  return {
    fetchTrainingExercises() {
      // dispatch()
    },
    // selectMuscleGroupsForTrain(selectedGroups) {
    //   dispatch(selectMuscleGroups(selectedGroups))
    //   history.push('/train-select-exercise/')
    // }
  }
}

const TrainingNewExercisesPageMapStateToProps = state => {
  return {
    exercise: state.exercise
  }
}

const TrainingNewSelectExerciseLinked = connect(TrainingNewExercisesPageMapStateToProps, TrainingNewExercisesPageMapDispatchToProps)(TrainingNewSelectExercise)

export {TrainingListPageLinked, TrainingNewMuscleGroupsLinked, TrainingNewSelectExerciseLinked}