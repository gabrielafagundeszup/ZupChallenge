import React, {Component} from 'react';
import { CountdownWrapper, CountdownItem} from './styled'
import moment from 'moment'

class Countdown extends Component{
    state = {
		days: undefined,
		hours: undefined,
		minutes: undefined,
		seconds: undefined
    }
    componentDidMount() {
		this.interval = setInterval(() => {
			const { timeTillDate } = this.props;
			const then = moment(timeTillDate, "MM DD YYYY, h:mm a");
			const now = moment();
			const countdown = moment(then - now);
			const days = countdown.format('D');
			const hours = countdown.format('HH');
			const minutes = countdown.format('mm');
			const seconds = countdown.format('ss');

			this.setState({ days, hours, minutes, seconds });
		}, 1000);
    }

    componentWillUnmount() {
		if(this.interval) {
			clearInterval(this.interval);
		}
	}
    render(){
        const { hours, minutes, seconds } = this.state;

        if(!seconds) {
			return null;
        }
        
        return(
            
				<CountdownWrapper>
					{hours && (
						<CountdownItem>						
							{hours}
							<span>hours</span>
						</CountdownItem>
                    )}
                    :
					{minutes && (
						<CountdownItem>
							{minutes}
							<span>minutes</span>
						</CountdownItem>
                    )}
                    :
					{seconds && (
						<CountdownItem>
							{seconds} 
							<span>seconds</span>
						</CountdownItem>
					)}
				</CountdownWrapper>
			
        )
    }
}

export default Countdown