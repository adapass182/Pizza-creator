import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

//Actions:
import { addTopping } from '../actions/topping_a'

class Toppings extends PureComponent {

    handleChange = (event) => {
        this.props.addTopping(event.target.value)
    }

    render() {

        return (
            <div>
                <h2>Toppings!</h2>
                <h4>Choose up to three toppings, only 50cents each:</h4>
                <div className="toppings">
                    <form>
                        <ul>
                        {this.props.toppings.map((topping) => {
                            return (<li key={topping.id}>
                                        <label>
                                            <input 
                                            type="checkbox"
                                            name="topping"
                                            value={topping.price}
                                            onChange={this.handleChange}
                                            />
                                                {topping.desc}
                                        </label>
                                    </li>)
                        })}
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toppings: state.menu[2]
    }
  }

export default connect(mapStateToProps, { addTopping })(Toppings)