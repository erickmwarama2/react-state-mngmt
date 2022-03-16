import React, { Component } from "react";

export default class MyComponent extends Component {
    state = {
        first: false,
        second: true,
        heading: 'React Awesomesauce (Busy)',
        content: 'Loading...',
        first: 'loading.....',
        second: 'loading....',
        doneMessage: 'It is finished'
    };

    // setTimeout(() => {
    //     this.setState({
    //         content: "I am finished!!!",
    //         heading: "Are you done??"
    //     });
    // }, 10000);

    // setTimeout(() => {
    //     this.setState({
    //         content: "I am done loading!!!",
    //         heading: "Are you done?"
    //     });
    // }, 7000);

    render() {
        const {first, second, heading, content} = this.state;
        const { state } = this;
        return (
            <main>
                <section>
                    <h1>{heading}</h1>
                    <p>{content}</p>
                </section>
                <section>
                    <button disabled={first}>First</button>
                </section>
                <section>
                    <button disabled={second}>Second</button>
                </section>
                <section>
                    <ul>
                        {Object.keys(state)
                        .filter(key => key !== 'doneMessage')
                        .map(key => (
                            <li>
                                <strong>{key}: </strong>
                                {state[key]}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        );
    }
}