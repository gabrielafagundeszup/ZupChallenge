
import React, {Component} from 'react'
import { CountdownWrapper, CountdownItem} from './styled'
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
	}
  componentWillMount() {
		this.getTimeUntil(this.props.deadline)
		
		// if(this.state.hours < 0){
		// 	this.props.setInvalidDate(true)
		// };
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }
  componentWillUnmount() {
		clearInterval(this.timerId)
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date())
    const seconds = Math.floor(time / 1000 % 60)
    const minutes = Math.floor(time / 1000 / 60 % 60)
    const hours = Math.floor(time / (1000 * 60 * 60) % 24)
    const days = Math.floor(time / (1000 * 60 * 60 * 24))

		this.setState({ days, hours, minutes, seconds })
		this.props.setInvalidDate(this.state.hours)
  }
  render() {
	const zerofill = num => ((num < 10 && num >= 0) ? `0${num}` : num);
    return (
      <CountdownWrapper>
				{this.state.days >0 ?  
				<CountdownItem>
            <div className="clock__amount">{zerofill(this.state.days)}</div>
            <span className="clock__unit">days</span>
        </CountdownItem> : null}
        <CountdownItem>
            <div className="clock__amount">{zerofill(this.state.hours)}</div>
            <span className="clock__unit">hours</span>
        </CountdownItem>
				:
        <CountdownItem>
            <div className="clock__amount">{zerofill(this.state.minutes)}</div>
            <span className="clock__unit">minutes</span>
        </CountdownItem>
				:
        <CountdownItem>
            <div className="clock__amount">{zerofill(this.state.seconds)}</div>
            <span className="clock__unit">seconds</span>
        </CountdownItem>
      </CountdownWrapper>
    )
  }
}

export default Clock

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       deadline: '2019-11-03 01:55',
//       error: undefined,
//       newDeadline: undefined,
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleChange(e) {
//     this.setState({ newDeadline: e.target.value.trim() })
//   }
//   handleSubmit(e) {
//     e.preventDefault()
//     if (isNaN(Date.parse(this.state.newDeadline))) {
//       this.setState({
//         error: "That doesn't seem to be a valid date",
//       })
//     } else if (Date.parse(this.state.newDeadline) < new Date()) {
//       this.setState({ error: 'This date is in the past' })
//     } else {
//       this.setState({
//         deadline: this.state.newDeadline,
//         newDeadline: undefined,
//         error: undefined,
//       })
//     }
    
//     this.inputRef.value = ''
//   }
//   formatDate() {
//     return new Date(Date.parse(this.state.deadline)).toDateString()
//   }
//   render() {
//     return(
//       <div className="app">
//         <h1 className="app__title">Countdown to {this.formatDate()}</h1>
//         <Clock deadline={this.state.deadline} />
//         <form className="form" onSubmit={this.handleSubmit}>
//           <input 
//             className="form__field"
//             type="text" 
//             placeholder="Set new deadline" 
//             onChange={this.handleChange}
//             ref={(node) => { this.inputRef = node }}
//            />
//           <button className="btn" type="submit">Set Date</button>
//         </form>
//         {
//           this.state.error &&
//             <div className="message message--error">{this.state.error}</div>
//         }
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'))
